import { dateFormater } from "@/utils/date"

export const SmallWidthOverlayCard = () => {
    return (
        <div className="col-md-4 blog_grid_post_style jl_row_1">
            <div className="jl_grid_box_wrapper">
                <span className="image_grid_header_absolute" style={{ backgroundImage: " url('/img/sawyer-bengtson-1331688-unsplash-780x450.jpg')" }}>
                </span>
                <a href="#" className="link_grid_header_absolute" title="Sitting right here waiting for you come to me">
                </a>
                <span className="meta-category-small">
                    <a className="post-category-color-text" style={{ background: "#d800f9" }} href="#">Techno</a>
                </span>
                <div className="post-entry-content">
                    <h3 className="image-post-title">
                        <a href="#">
                            Sitting right here waiting for you come to me
                        </a>
                    </h3>
                    <span className="jl_post_meta">
                        <span className="jl_author_img_w">
                            <img src="img/favicon.jpg" width="30" height="30" alt="Anna Nikova" className="avatar avatar-30 wp-user-avatar wp-user-avatar-30 alignnone photo" />
                            <a href="#" title="Posts by Anna Nikova" rel="author">Anna Nikova</a>
                        </span>
                        <span className="post-date">
                            <i className="fa fa-clock-o">
                            </i>
                           {" {dateFormater(article.createdAt)}"}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}