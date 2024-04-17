import { IArticle } from "@/types/articles"
import Image from "next/image"
import { SmallCardWithBottomTitle } from "../cards/small-card-with-bottom-title"
import Link from "next/link"
import { PopuparArticlesCarousel } from "../carousel/popular-articles-carousel"
import { getCategoryH } from "@/utils/other"

type Props = {
    articles: IArticle[];
    allCleanTags?: { name: string; color: string; }[];
    mostViewdArticles?: IArticle[];
    categoryName?:string;
}

export const GridColTwo = ({categoryName, mostViewdArticles, articles, allCleanTags = [] }: Props) => {
    return (
        <div className="container">

            <div className=" lg:px-32">
                <div className=" md:grid grid-cols-12 gap-x-6">
                    <div className=" col-span-7 px-6">



                        <div className="homepage_builder_title mb-10">
                            <h2>
                                Latest articles
                            </h2>
                            <span className="jl_hsubt text-gray-400 ">
                               {getCategoryH(categoryName)}
                            </span>
                        </div>
                        <div className="jl_grid_bellow_mian md:container">
                            <div id="content_masonry" className="  md:grid grid-cols-2 gap-4">
                                {articles.slice(1).map((article) => (
                                    <SmallCardWithBottomTitle key={article.slug} article={article} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className=" col-span-5 mt-20 px-6">
                        <div className="widget-title my-5">
                            <h2 className="pb-5 border-b">Popular tags</h2>
                        </div>
                        <div className=" pt-5 disto_category_image_widget_register-5">
                            <ul className="flex flex-wrap  align-center gap-2 leading-8">
                                {
                                    allCleanTags.map((tag, index) => (
                                        <li className="" key={index}>
                                            <a style={{ color: "white", fontSize: "700", background: tag.color }} href={"/tag/" + tag.name} className={` font-bold py-1 px-2 rounded-lg`}>
                                                {tag.name}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="widget-title my-5">
                            <h2 className="pb-5 border-b">Most viewed articles</h2>
                        </div>
                        <span className=" space-y-3"></span>
                        <PopuparArticlesCarousel articles={mostViewdArticles} />
                    </div>

                </div>
            </div>
        </div>
    )
}