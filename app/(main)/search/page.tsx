import { MainSectionWraper } from "@/components/main-section";
import { SearchArticleForm } from "@/components/search-article-form";
import { getSearchedArticles } from "@/db/queries";
import { IArticle } from "@/types/articles";
import { dateFormater } from "@/utils/date";
import Link from "next/link";

const SearchPage = async ({ searchParams }: {
    searchParams?: {
        s?: string,
    }
}) => {
    const query = searchParams?.s || "";

    const articlesSearchedData = getSearchedArticles(query)

    const [articles] = await Promise.all(
        [
            articlesSearchedData
        ]
    )

    if (!articles.length) {
        return (
            <MainSectionWraper>
                <div className=" flex justify-center items-center">
                    <div className="col-md-8" id="content">
                        <SearchArticleForm query={query} />
                        <div className="h-screen">
                            <p className=" text-center text-3xl">
                            Sorry, no content matched your criteria.
                            </p>
                        </div>
                    </div>
                </div>
            </MainSectionWraper>
        )
    }
    return (
        <MainSectionWraper>

            <div className=" flex justify-center items-center">
                <div className="col-md-8" id="content">
                    <SearchArticleForm query={query} />
                    <div className="post_list_medium_widget jl_nonav_margin page_builder_listpost jelly_homepage_builder jl-post-block-725291">
                        {articles.map((article: IArticle, index: number) =>
                            <div key={index} className="blog_list_post_style">
                                <div className="image-post-thumb featured-thumbnail home_page_builder_thumbnial">
                                    <div className="jl_img_container">
                                        <span className="image_grid_header_absolute" style={{ backgroundImage: `url('${article.image}')` }}>

                                        </span>
                                        <Link href={`/article/${article.slug}`} className="link_grid_header_absolute"></Link>
                                    </div>
                                </div>
                                <div className="post-entry-content">
                                    <span className="meta-category-small">
                                        <a className="post-category-color-text" style={{ background: "#ed1c1c" }} href="#">
                                            {article.category}
                                        </a>
                                    </span>
                                    <span className="post-meta meta-main-img auto_image_with_date">
                                        <span className="post-date">
                                            <i className="fa fa-clock-o"></i>{dateFormater(article.createdAt)}</span>
                                        <span className="meta-comment">
                                            <a href="#"><i className="fa fa-eye"></i>{article.views}</a>
                                        </span>
                                    </span>
                                    <h3 className="image-post-title">
                                        <Link href={`/article/${article.slug}`}>
                                            {article.title}
                                        </Link>
                                    </h3>
                                    <div className="large_post_content">
                                        <p>
                                            {article.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </MainSectionWraper>
    );
}

export default SearchPage;