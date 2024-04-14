import { MainSectionWraper } from "@/components/main-section";
import { Pagination } from "@/components/pagination";
import { getAllArticlesTags, getArticles, getFiveNewArticlesWithDifferentCategory, getMostViewdArticlesWithinFiveMonth } from "@/db/queries";
import { WithId, Document } from 'mongodb';
import { IArticle } from "@/types/articles";
import { processTags } from "@/utils/tags";
import { GridColTwo } from "@/components/grid/grid-col-two";
import { GridFirstHome } from "@/components/grid/grid-first-home";
import mapDocumentToArticle from '@/utils/mapDocumentToArticle'; // Adjust the path as necessary

const Home = async () => {
  const listLatestPostsData = getArticles()
  const listOfFiveCategoryArticles = getFiveNewArticlesWithDifferentCategory()
  const allTags = getAllArticlesTags()
  const mostViewdArticlesWithinFiveMonthData = getMostViewdArticlesWithinFiveMonth()
  const [
    tags,
    listLatestPosts,
    listOfFiveArticles,
    listOfMostViewdArticles
  ] = await Promise.all(
    [
      allTags,
      listLatestPostsData,
      listOfFiveCategoryArticles,
      mostViewdArticlesWithinFiveMonthData
    ]
  )
  const allCleanTags = processTags(tags.alltags)

  // Map WithId<Document>[] to IArticle[]
  const mappedLatestPosts: IArticle[] = listLatestPosts.articles.map((doc: WithId<Document>) => mapDocumentToArticle(doc));
  const mappedMostViewedArticles: IArticle[] = listOfMostViewdArticles.articles.map((doc: WithId<Document>) => mapDocumentToArticle(doc));

  // Map uniqueCategoryArticles to IArticle[]
  const mappedUniqueCategoryArticles: IArticle[] = listOfFiveArticles.uniqueCategoryArticles.map((doc: any) => mapDocumentToArticle(doc));
  return (
    <MainSectionWraper>
      <GridFirstHome articles={mappedUniqueCategoryArticles} />
      <GridColTwo mostViewdArticles={mappedMostViewedArticles} allCleanTags={allCleanTags.slice(0, 20)} articles={mappedLatestPosts.slice(7)} />
      {/* <Pagination root_url="/category/${params.name}/page/" total_page={10} page={1} /> */}
    </MainSectionWraper>
  );
}

export default Home
