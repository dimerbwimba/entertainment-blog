import { getSingleRealatedArticles } from "@/db/queries"
import { IArticle } from "@/types/articles"
import { dateFormater } from "@/utils/date"


type Props = {
    tag: string
}

export const RelatedPosts = async ({ tag }: Props) => {


    const relatedArticlesData = getSingleRealatedArticles(tag)

    const [data] = await Promise.all(
        [
            relatedArticlesData
        ]
    )

    return (
        <div className="related-posts">
            <h4>
                Related Articles
            </h4>

            <div className="single_related_post">


                {data.relatedArticles.map((article, index: number) => (
                    <div key={index} className="jl_related_feature_items">
                        <div className="jl_related_feature_items_in">
                            <div className="image-post-thumb">
                                <a href="#" className="link_image featured-thumbnail" title="The great time for enjoy city view on mountain">
                                    <img width="780" height="450" src={article.image} className="attachment-disto_large_feature_image 
                                size-disto_large_feature_image wp-post-image" alt="" />
                                    <div className="background_over_image"></div>
                                </a>
                            </div>
                            <span className="meta-category-small">
                                <a className="post-category-color-text" style={{ background: "#d1783c" }} href="#">
                                    {article.category}
                                </a>
                            </span>
                            {/* <span className="jl_post_type_icon">
                                <i className="la la-camera"></i>
                            </span> */}
                            <div className="post-entry-content">
                                <h3 className="jl-post-title">
                                    <a href={"/article/" + article.slug}>
                                        {article.title}
                                    </a>
                                </h3>
                                <span className="jl_post_meta"><span className="jl_author_img_w">
                                    <a href="#" title="Posts by Anna Nikova" rel="author">{article.author}</a>
                                </span>
                                    <span className="post-date">
                                        <i className="fa fa-clock-o"></i>{dateFormater(article.createdAt)}
                                    </span>
                                </span>
                            </div>

                        </div>
                    </div>
                ))}
                <div className="clear_2col_related"></div>

                <div className="clear_3col_related"></div>

                <div className="clear_2col_related"></div>
            </div>
        </div>
    )
}