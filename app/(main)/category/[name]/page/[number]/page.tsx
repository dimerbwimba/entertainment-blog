import { MainSectionWraper } from "@/components/main-section";
import { Pagination } from "@/components/pagination";
import { getPaginatedArticlesByCategory } from "@/db/queries";
import { WithId, Document } from 'mongodb';
import { IArticle } from "@/types/articles";
import mapDocumentToArticle from '@/utils/mapDocumentToArticle'; // Adjust the path as necessary
import { GridColTwo } from "@/components/grid/grid-col-two";
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: { name: string , number:number }
    searchParams: { [key: string]: string | string[] | undefined }
  }

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
 
    return {
       title: {
          default: `Page ${params.number} | Category | ${params.name} `,
          template: "%s"
        },
        alternates:{
          canonical:`${process.env.NEXT_PUBLIC_BASE_URL}/category/${params.name}/page/${params.number}`
        },
        description:   `Page ${params.number}| Stay up-to-date with the latest ${params.name} news at your fingertips.Your one-stop destination for everything ${params.name}!`,
        twitter: {
          card: "summary_large_image",
          images:[
            {
                url:"https://i.ibb.co/nR9PN2s/TALK-PALACE.png"
            }
        ]
        },
        openGraph:{
            url:`${process.env.NEXT_PUBLIC_BASE_URL}/category/${params.name}/page/${params.number}`,
            images:[
              {
                  url:"https://i.ibb.co/nR9PN2s/TALK-PALACE.png"
              }
          ]
          
        }
    }
  }


const CategoryPageNumber = async ({params}:{params:{name:string,number:string}}) => {
    let page = parseInt(params.number, 10)
    page = !page || page < 1 ? 1 : page
    const articlesPerPage = 20
    const articlesData = getPaginatedArticlesByCategory(params.name, articlesPerPage, page)

    const [articles] = await Promise.all([
        articlesData
    ])

    // Map WithId<Document>[] to IArticle[]
    const mappedArticles: IArticle[] = articles.articles.map((doc: WithId<Document>) => mapDocumentToArticle(doc));

    const totalPage = Math.ceil(articles.countArticles / articlesPerPage)
    
    return ( 
        <MainSectionWraper>
            <GridColTwo articles={mappedArticles} />
            <Pagination total_page={totalPage} root_url={`/category/${params.name}/page/`} page={page}/>
        </MainSectionWraper>
       
     );
}
 
export default CategoryPageNumber;
