import { MainSectionWraper } from "@/components/main-section";
import { Pagination } from "@/components/pagination";
import { StartCategorySection } from "@/components/start-category-section";
import { getArticlesByTags } from "@/db/queries";
import { IArticle } from "@/types/articles";
import { dateFormater } from "@/utils/date";

const TagPage = async ({ params }: { params: { name: string } }) => {
    const totalArticlePerPage = 10
    const allArticlesBaseOfTag = getArticlesByTags(params.name, totalArticlePerPage,1)

    const [
        listOfArticles
    ] = await Promise.all(
        [
            allArticlesBaseOfTag
        ]
    )
    const totalPage = Math.ceil(listOfArticles.articlesCount / totalArticlePerPage)

    return (
        <div>
            <StartCategorySection categoryName={params.name} />
            <MainSectionWraper>
                <div className="">
                    <div className=" w-full ">
                        <div className=" flex justify-center">
                            <div className=" w-1/2">
                                {listOfArticles.result.map((article, index: number) => (
                                    <div key={index} className="jl_large_builder jelly_homepage_builder">
                                        <div className="box jl_grid_layout1 blog_large_post_style">
                                            <div className="jl_front_l_w">
                                                <span className="image_grid_header_absolute" style={{ backgroundImage: `url(${article.image})` }}></span>
                                                <a href="#" className="link_grid_header_absolute" title="Round white dining table on brown hardwood"></a> <span className="meta-category-small">
                                                    <a className="post-category-color-text" style={{ background: "#36c942" }} href="#">Sports</a>
                                                </span>
                                            </div>
                                            <div className="jl_post_title_top jl_large_format">
                                                <h3 className="image-post-title">
                                                    <a href={`/article/${article.slug}`}>
                                                        {article.title}
                                                    </a>
                                                </h3>
                                                <span className="single-post-meta-wrapper">
                                                    <span className="post-author">
                                                        <span>
                                                            <a href="#" title="Posts by Anna Nikova" rel="author">{article.author}</a>
                                                        </span>
                                                    </span>
                                                    <span className="post-date updated">
                                                        <i className="fa fa-clock-o"></i>{dateFormater(article.createdAt)}</span>
                                                    <span className="meta-comment"><a href="#">
                                                        <i className="fa fa-eye"></i>{article.views}</a>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="post-entry-content">
                                                <div className="post-entry-content-wrapper">
                                                    <div className="large_post_content">
                                                        <p className=" text-slate-600">
                                                            {article.description}
                                                        </p>
                                                        {/* <span className="py-4"></span> */}
                                                        {/* <div className=" prose prose-xl" dangerouslySetInnerHTML={{__html:article.sanitizedHTML}}>
                                                           
                                                        </div> */}
                                                        <div className="jl_large_sw"> <a href={`/article/${article.slug}`} className="jl_large_more">Read More</a>
                                                            <ul className="jl_footer_social">
                                                                <li><a href="#" target="_blank" className="facebook"><i className="fa fa-facebook"></i></a>
                                                                </li>
                                                                <li><a href="#" target="_blank" className="twitter"><i className="fa fa-twitter"></i></a>
                                                                </li>
                                                                <li><a href="#" target="_blank" className="pinterest"><i className="fa fa-pinterest"></i></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Pagination total_page={totalPage} page={0} root_url={`/tag/${params.name}/page/`} />
            </MainSectionWraper>
        </div>
    );
}

export default TagPage;