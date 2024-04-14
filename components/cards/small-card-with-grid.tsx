import { IArticle } from "@/types/articles"
import { dateFormater } from "@/utils/date"
import Link from "next/link"

type Props = {
    article:IArticle
}

export const SmallCardWithGrid = ({article}:Props) => {
    return (
        <div className="jl_grid5_item jl_grid5small jl_grid2">
            <div className="jl_grid5_itemin">
                <span className="image_grid_header_absolute" style={{ backgroundImage: `url(${article.image})` }}>

                </span>
                <a href="#" className="link_grid_header_absolute"></a>
                <span className="meta-category-small">
                    <a className="post-category-color-text" style={{ background: "#7fbc1e" }} href="#">{article.category}</a>
                </span>
                {/* <span className="jl_post_type_icon">
                    <i className="la la-camera"></i>
                </span> */}
                <div className="wrap_box_style_main image-post-title">
                    <h3 className="image-post-title">
                        <Link href={`/article/${article.slug}`}>
                            {article.title}   
                        </Link>
                    </h3>
                    <span className="jl_post_meta"><span className="jl_author_img_w">
                        <a href="#" title="Posts by Anna Nikova" rel="author"> {article.author} </a>
                    </span>
                        <span className="post-date">
                            <i className="fa fa-clock-o"></i>{dateFormater(article.createdAt)}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}