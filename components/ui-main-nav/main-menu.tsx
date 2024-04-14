import Link from "next/link"
// import { useRouter } from "next/router"

export const MainMenu = () => {
    // const router = useRouter()
    // const isActive = (href: string) => router.pathname === href
    return (
        <div className="menu-primary-container navigation_wrapper">
            <ul id="mainmenu" className="jl_main_menu">
                <li className="menu-item"> <Link href="/"><i className=" fa fa-home"></i>Home</Link>
                </li>

                <li className="menu-item">
                    <Link href={`/category/tv`}>
                        <i className=" fa fa-tv"></i> Tv
                        <span className="border-menu">
                        </span>
                    </Link>
                </li>
                <li className="menu-item">
                    <Link href={`/category/celebrity`}>
                        <i className=" fa fa-newspaper-o"></i>Celebrity
                        <span className="border-menu"></span>
                    </Link>
                </li>
                <li className="menu-item">
                    <Link href={`/category/lifestyle`}>
                        <i className=" fa fa-heart-o"></i>Lifestyle
                        <span className="border-menu"></span>
                    </Link>
                </li>
                <li className="menu-item">
                    <Link href={`/category/movie-review`}>
                        <i className=" fa fa-star-o"></i>movies
                        <span className="border-menu"></span>
                    </Link>
                </li>
                <li className="menu-item">
                    <Link href={`/category/short`}>
                        <i className=" fa fa-book"></i>short
                        <span className="border-menu"></span>
                        </Link>
                </li>
                {/* <li className="menupost menu-item"> <a href="business.html">More<span className="jl_menu_lb jl_lb_red">Hot</span><span className="border-menu"></span></a>
                    <ul className="sub-menu menu_post_feature">
                        <li> <span className="jl_none_space"></span>
                            <div id="disto_recent_large_widgets-2" className="widget main_post_style"> <span className="jl_none_space"></span>
                                <div className="jl_recent_large">
                                    <div className="recent_post_large_widget">
                                        <div className="image_post feature-item featured-thumbnail">
                                            <a href="#" className="feature-link" title="People are enjoy the job that they love">
                                                <img width="400" height="280" src="/img/irina-iriser-654436-unsplash-400x280.jpg" className="attachment-disto_slider_grid_small size-disto_slider_grid_small wp-post-image" alt="" />
                                                <div className="background_over_image"></div>
                                            </a> <span className="meta-category-small"><a className="post-category-color-text" style={{ background: "#0015ff" }} href="#">Business</a></span>
                                        </div>
                                        <div className="wrap_box_style_main image-post-title">
                                            <div className="title_content_wrapper">
                                                <h3 className="image-post-title"><a href="#">
                                                    People are enjoy the job that they love</a>
                                                </h3>
                                                <span className="jl_post_meta"><span className="jl_author_img_w"> <img src="img/favicon.jpg" width="30" height="30" alt="Anna Nikova" className="avatar avatar-30 wp-user-avatar wp-user-avatar-30 alignnone photo" /><a href="#" title="Posts by Anna Nikova" rel="author">Anna Nikova</a></span><span className="post-date"><i className="fa fa-clock-o"></i>Dec 24, 2016</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div> <span className="jl_none_space"></span>
                            </div>
                        </li>
                    </ul>
                </li> */}
            </ul>
        </div>
    )
}