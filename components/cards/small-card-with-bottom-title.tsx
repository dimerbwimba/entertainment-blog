import { IArticle } from "@/types/articles"
import { dateFormater } from "@/utils/date"
import Image from "next/image"
import Link from "next/link"
type Props = {
    article: IArticle
}
export const SmallCardWithBottomTitle = ({ article }: Props) => {
    return (
        <div className="box jl_grid_layout1 blog_grid_post_style post-2970 post type-post status-publish format-gallery has-post-thumbnail hentry category-business tag-inspiration tag-morning tag-racing post_format-post-format-gallery aos-init aos-animate" data-aos="fade-up">
            <div className="post_grid_content_wrapper">
                <div className="image-post-thumb">
                    <div className=" relative h-[23rem] ">
                        <Image fill alt={article.title} src={article.image || ""} className=" rounded-xl object-cover" />
                        <div className="background_over_image">
                        </div>
                    </div>
                    <span className="meta-category-small">
                        <Link className="post-category-color-text" style={{ background: "#0015ff" }} href={"/category/" + article.category}>
                            {article.category}
                        </Link>
                    </span>

                </div>
                <div className="post-entry-content">
                    <div className="post-entry-content-wrapper">
                        <div className="large_post_content">
                            <h4 className="image-post-title">
                                <Link href={`/article/${article.slug}`} className=" line-clamp-2">
                                    {article.title}
                                </Link>
                            </h4>
                            <span className="jl_post_meta" style={{ padding: "0px 0px 20px 0px" }}>
                                <span className="jl_author_img_w">
                                    <a href="#" title="Posts by Anna Nikova" rel="author">{article.author}</a>
                                </span>
                                <span className="post-date">
                                    <i className="fa fa-clock-o"></i>{dateFormater(article.createdAt)}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}