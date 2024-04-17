import { GridColTwo } from "@/components/grid/grid-col-two";
import { MainSectionWraper } from "@/components/main-section";
import { Pagination } from "@/components/pagination";
import { StartCategorySection } from "@/components/start-category-section";
import { getAllTagsBaseOnCategory, getArticlesByCategory } from "@/db/queries";
import { processTags } from "@/utils/tags";
import { WithId, Document } from 'mongodb';
import { IArticle } from '@/types/articles'; // Assuming IArticle is defined in types.ts or a similar file
import mapDocumentToArticle from '@/utils/mapDocumentToArticle'; // Adjust the path as necessary
import type { Metadata, ResolvingMetadata } from 'next'


type Props = {
   params: { name: string }
   searchParams: { [key: string]: string | string[] | undefined }
 }

export async function generateMetadata(
   { params, searchParams }: Props,
   parent: ResolvingMetadata
 ): Promise<Metadata> {
   // read route params

   return {
      title: {
         default: `Category | ${params.name}  `,
         template: "%s"
       },
       alternates:{
         canonical:`https://www.${process.env.SITE_NAME}.com`
       },
       description: "Stay up-to-date with the latest reality TV news at your fingertips. Dive into in-depth reports, recaps, reviews, and episode summaries of the biggest reality television shows. Your one-stop destination for everything reality TV!",
       twitter: {
         card: "summary_large_image"
       },
       openGraph:{
         url:`https://www.${process.env.SITE_NAME}/category/${params.name}.com`
         
       }
   }
 }

const CategoryPage = async ({params}:{params:{name:string}}) => {
   const totalArticlePerPage = 20

   const articlesDataSet = getArticlesByCategory(params.name,totalArticlePerPage)
   const articleTagsData = getAllTagsBaseOnCategory(params.name)
   
   const [
      articlesData,
      allTags
   ] =  await Promise.all([
      articlesDataSet,
      articleTagsData
   ])

   const totalPage = Math.ceil(articlesData.articlesCount/totalArticlePerPage)
   const allCleanTags = processTags(allTags.allTags)

   // Map WithId<Document>[] to IArticle[]
   const mappedArticles: IArticle[] = articlesData.articles.map((doc: WithId<Document>) => mapDocumentToArticle(doc));

   return ( 
        <>
           <StartCategorySection categoryName={params.name}/>
           <MainSectionWraper>
               <GridColTwo categoryName={params.name} allCleanTags={allCleanTags.slice(0,20)}  articles={mappedArticles} />
               <Pagination root_url={`/category/${params.name}/page/`} total_page={totalPage} page={0} />
           </MainSectionWraper>
        </>
     );
}
 
export default CategoryPage;
