
import { cache } from "react"
import clientPromise from "./mongo"



export const getSearchedArticles = cache(async (s: string) => {
    const client = await clientPromise;
    const db = client.db("blog");
    try {
        
        const articles = await db.collection("articles").aggregate([
          {
            $search: {
              index: "search_articles",
              text: {
                query: s, // Use 'query' key with the search string
                path: "title", // Specify the field in the documents to search
                // caseSensitive: false, // Set case sensitivity to false
                // diacriticSensitive:false
              },
            },
          },
          {
            $project: {
              image: 1,
              slug: 1,
              title: 1,
              category: 1,
              description: 1,
              author:1,
              createdAt:1,
              views:1,
              score: { $meta: "searchScore" },
            },
          },
          {
            $sort: {
              score: { $meta: "textScore" }, // Sort by relevance score
            },
          },
          {
            $limit: 12, // Limit the results to 10
          },
        ]).toArray();
        return articles;
    } catch (error) {
        return []
    }
    
    
  });
  

export const getSingleRealatedArticles = cache(async(tagToCheck:string)=>{
    const client = await clientPromise;
    const db = client.db("blog");
    const relatedArticles = await db.collection("articles")
    .find({
        tags: { $regex: new RegExp(`\\b${tagToCheck}\\b`, "i") }
    })
    .sort({createdAt:-1})
    .limit(10)
    .project({ category:1, slug: 1, title: 1 , image:1, author:1, createdAt:1 })
    .toArray();

    return {
        relatedArticles
    }


})


export const getSingleArticle = cache(async (slug: string) => {
    const client = await clientPromise;
    const db = client.db("blog");
    const result = await db.collection("articles").findOne({ slug: slug })

    const nextArticle = await db.collection("articles")
        .find({ createdAt: { $gt: result?.createdAt } })
        .sort({ createdAt: 1 })
        .project({ slug: 1, title: 1 })
        .limit(1)
        .toArray();

    const previousArticle = await db.collection("articles")
        .find({ createdAt: { $lt: result?.createdAt } })
        .sort({ createdAt: -1 })
        .project({ slug: 1, title: 1 })
        .limit(1)
        .toArray();
    return {
        result,
        nextArticle,
        previousArticle
    }
})

export const getArticlesByTags = cache(async (tagName: string, perPage: number, page: number) => {

  
    const client = await clientPromise;
    const db = client.db("blog");
    const result = await db.collection("articles").find({
        tags: { $regex: tagName, $options: "i" }
    }).sort({ createdAt: -1 })
        .skip(perPage * (page - 1))
        .limit(perPage)
        .toArray()

    const articlesCount = await db.collection("articles").find({
        tags: { $regex: tagName, $options: "i" }
    }).count()
    return {
        articlesCount,
        result
    }
})


export const getThreeRecentArticles = cache(async () => {
    const client = await clientPromise;
    const db = client.db("blog");
    const result = await db.collection("articles").find().sort({ createdAt: -1 }).limit(3).toArray()

    return {
        result
    }

})


export const getAllTheCategoriesAndNumberOfArticles = cache(async () => {
    const client = await clientPromise;
    const db = client.db("blog");
    const result = await db.collection("articles").aggregate([
        {
            $group: {
                _id: "$category",
                numberOfArticles: { $sum: 1 }
            }
        },
        {
            $group: {
                _id: null,
                categories: {
                    $addToSet: {
                        category: "$_id",
                        numberOfArticles: "$numberOfArticles"
                    }
                }
            }
        },
        {
            $unwind: "$categories"
        },
        {
            $replaceRoot: {
                newRoot: "$categories"
            }
        }
    ]).toArray();

    return { result }
})

export const getMostViewdArticlesWithinFiveMonth = cache(async () => {
    const client = await clientPromise;
    const db = client.db("blog");

    const fiveMonthsAgo = new Date();
    fiveMonthsAgo.setMonth(fiveMonthsAgo.getMonth() - 4);
    const articles = await db.collection("articles").find({
        createdAt: { $lte: fiveMonthsAgo },
        views: { $gt: 100 }
    }).sort({ createdAt: -1 }).limit(5).toArray();
    return {
        articles
    }
})

export const getAllTagsBaseOnCategory = cache(async (category: string) => {
    const client = await clientPromise;
    const db = client.db("blog");
    const allTags = await db.collection("articles").distinct("tags", { category: category });
    return {
        allTags
    }
})
export const getAllArticlesTags = cache(async () => {
    const client = await clientPromise;
    const db = client.db("blog");
    const alltags = await db.collection("articles").distinct('tags');

    return {
        alltags
    }
})

export const getFiveNewArticlesWithDifferentCategory = cache(async () => {
    const client = await clientPromise;
    const db = client.db("blog");
    const uniqueCategoryArticles = await db.collection("articles").aggregate([
        { $sort: { createdAt: -1 } }, // Sort by createdAt in descending order
        {
            $group: {
                _id: "$category", // Group by category
                article: { $first: "$$ROOT" } // Get the first document in each group
            }
        },
        { $replaceRoot: { newRoot: "$article" } }, // Replace the root with the grouped document
        { $limit: 5 } // Limit the result to 5 documents
    ]).toArray()

    return {
        uniqueCategoryArticles
    }
})
export const getArticles = cache(async () => {
    const client = await clientPromise;
    const db = client.db("blog");
    const articles = await db.collection("articles").find({}).sort({ createdAt: -1 }).limit(32).toArray()
    return {
        articles
    }
})

export const getArticlesByCategory = cache(async (category: string, perPage: number) => {
    const client = await clientPromise;
    const db = client.db("blog");
    const articles = await db.collection("articles")
        .find({ category: category })
        .sort({ createdAt: -1 })
        .limit(perPage)
        .toArray()

    const articlesCount = await db.collection("articles")
        .find({ category: category })
        .count()

    return {
        articlesCount,
        articles
    }
})

export const getPaginatedArticlesByCategory = cache(async (category: string, perPage: number, page: number) => {
    const client = await clientPromise;
    const db = client.db("blog");



    const articles = await db.collection("articles")
        .find({ category: category })
        .sort({ createdAt: -1 })
        .skip(perPage * (page - 1))
        .limit(perPage)
        .toArray()

    const countArticles = await db.collection("articles")
        .find({ category: category })
        .count();


    return {
        countArticles,
        articles
    }
})