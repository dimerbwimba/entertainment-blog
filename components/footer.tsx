import { getAllTheCategoriesAndNumberOfArticles, getThreeRecentArticles } from "@/db/queries"
import { IArticle } from "@/types/articles"
import { dateFormater } from "@/utils/date"

export const Footer = async () => {
    const allArticleCategoryAndTheNumberOfArticles = getAllTheCategoriesAndNumberOfArticles()
    const listThreeRecentArticlesData = getThreeRecentArticles()
    const [
        allCategoryAndArticlesNumber,
        allThreeRecentArticles
    ] = await Promise.all(
        [
            allArticleCategoryAndTheNumberOfArticles,
            listThreeRecentArticlesData

        ]
    )
    return (
        <footer id="footer-container" className=" enable_footer_columns_dark">
            <div className="footer-columns">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"> <span className="jl_none_space"></span>
                            <div id="disto_about_us_widget-3" className="widget jellywp_about_us_widget">
                                <div className="widget_jl_wrapper about_widget_content"> <span className="jl_none_space"></span>
                                    <div className="widget-title">
                                        <h2>About us</h2>
                                    </div>
                                    <div className="jellywp_about_us_widget_wrapper">
                                        <p>
                                        {process.env.SITE_NAME} had a humble start back in 2021 and in the years since has grown into one of the largest and most-respected entertainment news sources in the world - having served over 1+ billion readers in 2022. We don&apos;t just report news, we analyze and editorialize it with unique insight that engages everyone from casual entertainment lovers to hardcore movie buffs. 
                                        </p>
                                        <div className="social_icons_widget">
                                            <ul className="social-icons-list-widget icons_about_widget_display">
                                                <li><a href="#" className="facebook" target="_blank"><i className="fa fa-facebook"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div> <span className="jl_none_space"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4"> <span className="jl_none_space"></span>
                            <div id="disto_recent_post_widget-3" className="widget post_list_widget">
                                <div className="widget_jl_wrapper"> <span className="jl_none_space"></span>
                                    <div className="widget-title">
                                        <h2>Recent Posts</h2>
                                    </div>
                                    <div>
                                        <ul className="feature-post-list recent-post-widget">
                                            {allThreeRecentArticles.result.map((article, index:number) => (
                                                <li key={index}>
                                                    <a href="#" className="jl_small_format feature-image-link image_post featured-thumbnail" title="Round white dining table on brown hardwood">
                                                        <img width="120" height="120" src={article.image} className="attachment-disto_small_feature size-disto_small_feature wp-post-image" alt="" />
                                                        <div className="background_over_image"></div>
                                                    </a>
                                                    <div className="item-details"> 
                                                    <span className="meta-category-small">
                                                        <a className="post-category-color-text" style={{ background: "#36c942" }} href="#">{article.category}</a></span>
                                                        <h3 className="feature-post-title">
                                                            <a href={"/article/"+article.slug} className=" line-clamp-2">
                                                                {article.title}
                                                            </a>
                                                        </h3>
                                                        <span className="post-meta meta-main-img auto_image_with_date">
                                                            <span className="post-date">
                                                                <i className="fa fa-clock-o"></i>
                                                                {dateFormater(article.createdAt)}
                                                                </span>
                                                        </span>
                                                    </div>
                                                </li>
                                            ))}

                                        </ul>
                                    </div> <span className="jl_none_space"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div id="categories-4" className="widget widget_categories">
                                <div className="widget-title">
                                    <h2>Categories</h2>
                                </div>
                                <ul>
                                    {allCategoryAndArticlesNumber.result.map((article, index: number) => (
                                        <li key={index} className={` hover:bg-gray-400 cat-item-${index + 1}`}>
                                            <a href={"/category/"+article.category} className=" uppercase" title="Sample category description goes here">
                                                {article.category}</a>
                                            <span>
                                                {article.numberOfArticles}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="sentinel"></div>
            <div className="footer-bottom enable_footer_copyright_dark">
                <div className="container">
                    <div className="row bottom_footer_menu_text">
                        <div className="col-md-6 footer-left-copyright">© Copyright 2023 BwCode. All Rights Reserved Powered by Dimer</div>
                        <div className="col-md-6 footer-menu-bottom">
                            <ul id="menu-footer-menu" className="menu-footer">
                                <li className="menu-item menu-item-13"><a href="/page/about">About us</a>
                                </li>
                                <li className="menu-item menu-item-11"><a href="/page/terms-of-use">Terms of Use</a>
                                </li>
                                <li className="menu-item menu-item-12"><a href="/page/privacy-policy">Privacy policy</a>
                                </li>
                                <li className="menu-item menu-item-13"><a href="/page/dmca-take-down-policy">Copyright</a>
                                </li>
                                <li className="menu-item menu-item-13"><a href="/page/ethics-policy">Ethics policy</a>
                                </li>
                                <li className="menu-item menu-item-13"><a href="/contact">Contact us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}