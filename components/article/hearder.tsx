import { IArticle } from "@/types/articles"
import { dateFormater } from "@/utils/date"

type Props = {
    article:IArticle
}

export const Hearder = ({article}:Props) =>{
    return (
        <div className="jl_single_style1">
                        <div className="single_post_entry_content single_bellow_left_align">
                            <span className="meta-category-small single_meta_category">
                                <a className="post-category-color-text" 
                                style={{ background: "#d1783c" }} 
                                href={"/category/"+article.category}>
                                    {article.category}
                                </a>
                            </span>
                            <h1 className="single_post_title_main">
                                {article.title}
                            </h1>
                            <span className="single-post-meta-wrapper">
                                <span className="post-author">
                                    <span>
                                        <a href="#" title="Posts by Anna Nikova" rel="author">{article.author}</a>
                                    </span>
                                </span>
                                <span className="post-date updated">
                                    <i className="fa fa-clock-o"></i> {dateFormater(article.createdAt)}
                                </span>

                                <span className="view_options">
                                    <i className="fa fa-eye"></i>
                                    {article.views}
                                </span>
                            </span>
                        </div>
                       
                        <div className="single_content_header jl_single_feature_above mt-5">
                            <div className="image-post-thumb jlsingle-title-above">
                                <img width="1000" height="667" src={article.image} className="attachment-disto_justify_feature size-disto_justify_feature wp-post-image" alt="" />
                            </div>
                        </div>
                    </div>
    )
}