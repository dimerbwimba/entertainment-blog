import { SingeArticleView } from "@/components/article/single-article-view";
import { MainSectionWraper } from "@/components/main-section";
import { getSingleArticle } from "@/db/queries";
import { Metadata } from "next";


interface SingleBlogPageProps {
    params: { slug: string, }
}


export const revalidate = 3600 

export async function generateMetadata({ params }: SingleBlogPageProps): Promise<Metadata> {
    
    const articleData =  getSingleArticle(params.slug)

    const [article] = await Promise.all(
        [
            articleData
        ]
    )
    
    return {
        authors:[
            {
                name:article.result?.author
            }
        ],
        alternates:{
            canonical:`${process.env.NEXT_PUBLIC_BASE_URL}/${params.slug}`
        },
        title: article.result?.title,
        description: article.result?.title,
        twitter:{
            card:"summary_large_image",
            creator:"@dimer191996",
            site:"@dimer191996",
            description:article.result?.description,
            images:[
                {
                    url:article.result?.image
                }
            ]
        },
        openGraph: {
            type:"article",
            url:`${process.env.NEXT_PUBLIC_BASE_URL}`,
            authors:[article.result?.author],
            modifiedTime:article.result?.updatedAt,
            publishedTime: article.result?.createdAt , 
            images: [
                {
                    url: article.result?.image
                }
            ]
        }
    }
}


const ArticlePage = async ({ params }:SingleBlogPageProps) => {

    const singleArticle = getSingleArticle(params.slug)
    const [article] = await Promise.all(
        [
            singleArticle
        ]
    )
    return (
        <div>
            <MainSectionWraper>
                <SingeArticleView prevArticle={article.previousArticle[0]} nextArticle={article.nextArticle[0]}  article={article.result} />
            </MainSectionWraper>
        </div>
    );
}

export default ArticlePage;