"use client"

import { useSidebarModelState } from "@/store/use-sidebar-model"
import Link from "next/link"

export const MobileNav = () => {
    const {close} = useSidebarModelState()
    return (
        <div id="nav" className="jl_mobile_nav_inner">
            <div onClick={close} className="menu_mobile_icons mobile_close_icons closed_menu"><span className="jl_close_wapper"><span className="jl_close_1"></span><span className="jl_close_2"></span></span>
            </div>
            <ul id="mobile_menu_slide" className="menu_moble_slide">
                <li className="menu-item"><a href={`/`}>Home<span className="border-menu"></span></a>
                </li>
                <li className="menu-item"><a href={`/category/tv`}>Reality Tv<span className="border-menu"></span></a>
                </li>
                <li className="menu-item"><a href={`/category/celebrity`}>Celebrity<span className="border-menu"></span></a>
                </li>
                <li className="menu-item"><a href={`/category/lifestyle`}>Lifestyle<span className="border-menu"></span></a>
                </li>
                <li className="menu-item"><a href={`/category/movie-review`}>movie-review<span className="border-menu"></span></a>
                </li>
                <li className="menu-item"><a href={`/category/short`}>short<span className="border-menu"></span></a>
                </li>
            </ul>
            <span className="jl_none_space"></span>
            <div id="disto_about_us_widget-2" className="widget jellywp_about_us_widget">
                <div className="widget_jl_wrapper about_widget_content">
                    <div className="jellywp_about_us_widget_wrapper">
                        <div className="social_icons_widget">
                            <ul className="social-icons-list-widget icons_about_widget_display">
                                <li><a href="#" className="facebook" target="_blank"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li><a href="#" className="google_plus" target="_blank"><i className="fa fa-google-plus"></i></a>
                                </li>
                                <li><a href="#" className="behance" target="_blank"><i className="fa fa-behance"></i></a>
                                </li>
                                <li><a href="#" className="vimeo" target="_blank"><i className="fa fa-vimeo-square"></i></a>
                                </li>
                                <li><a href="#" className="youtube" target="_blank"><i className="fa fa-youtube"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div> <span className="jl_none_space"></span>
                </div>
            </div>
        </div>
    )
}