import { GridColTwo } from "@/components/grid/grid-col-two";
import { GridFirstHome } from "@/components/grid/grid-first-home";
import { MainSectionWraper } from "@/components/main-section";
import { Pagination } from "@/components/pagination";
import { getAllArticlesTags, getArticles, getFiveNewArticlesWithDifferentCategory, getMostViewdArticlesWithinFiveMonth } from "@/db/queries";
import { IArticle } from "@/types/articles";
import { processTags } from "@/utils/tags";

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
  
  return (
    <MainSectionWraper>
      <GridFirstHome articles={listOfFiveArticles.uniqueCategoryArticles} />
      <GridColTwo mostViewdArticles = {listOfMostViewdArticles.articles} allCleanTags={allCleanTags.slice(0,20)} articles={listLatestPosts.articles.slice(7)} />
      {/* <Pagination root_url="/category/${params.name}/page/" total_page={10} page={1} /> */}
    </MainSectionWraper>
  );
}

export default Home