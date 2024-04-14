import { IArticle } from "@/types/articles"
import { SmallCardWithGrid } from "../cards/small-card-with-grid"
import Link from "next/link"
import { dateFormater } from "@/utils/date"

type Props = {
    articles: IArticle[]
}

export const GridFirstHome = ({ articles }: Props) => {
    return (
        <div className=" container">
            <div className="row jl_front_b_cont">
                <div className="col-md-12 jl_mid_main_3col">
                    <div className="jl_3col_wrapin">
                        <div id="pl-3476" className="panel-layout">
                            <div id="pg-3476-0" className="panel-grid panel-no-style">
                                <div id="pgc-3476-0-0" className="panel-grid-cell">
                                    <span className="jl_none_space"></span>
                                    <div id="panel-3476-0-0-0" className="so-panel widget widget_disto_recent_grid5_widgets jl_widget_recent_grid5 panel-first-child panel-last-child" data-index="0">
                                        <div className="jl_grid5_builder jelly_homepage_builder">
                                            <div className="jl_grid5_wrapper">
                                                <div className="jl_grid5_container">
                                                    <div className="jl_grid5_item jl_grid5main jl_grid1">
                                                        <div className="jl_grid5_itemin">
                                                            <span className="image_grid_header_absolute" style={{ backgroundImage: `url(${articles[0].image})` }}></span>
                                                            <a href="#" className="link_grid_header_absolute" title="Creative photography ideas from smart devices"></a>
                                                            <span className="meta-category-small">
                                                                <a className="post-category-color-text" style={{ background: "#7fbc1e" }} href="#">{articles[0].category}</a></span>
                                                            <div className="wrap_box_style_main image-post-title">
                                                                <h1 className="image-post-title">
                                                                    <Link href={`/article/${articles[0].slug}`}>
                                                                        {articles[0].title}
                                                                    </Link>
                                                                </h1>
                                                                <span className="jl_post_meta"><span className="jl_author_img_w">
                                                                    <a href="#" title="Posts by Anna Nikova" rel="author">{articles[0].author}</a>
                                                                </span>
                                                                    <span className="post-date">
                                                                        <i className="fa fa-clock-o"></i>{dateFormater(articles[0].createdAt)}
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {articles.slice(1, 5).map((article) => (
                                                        <SmallCardWithGrid article={article} key={article.slug} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <span className="jl_none_space">
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}