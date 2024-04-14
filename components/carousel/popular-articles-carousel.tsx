"use client"
import { IArticle } from "@/types/articles";
import { dateFormater } from "@/utils/date";
import { useRef } from "react";
import Slider from "react-slick";

type Props={
    articles:IArticle[]
}

export const PopuparArticlesCarousel = ({articles=[]}:Props) => {
    let sliderRef = useRef<Slider>(null);

    const next = () => {
        sliderRef.current?.slickNext();
      };
      const previous = () => {
        sliderRef.current?.slickPrev();
      };
      const settings = {
        dots: true,
        infinite: true,
        
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div id="disto_recent_large_slider_widgets-5" className="widget jl_widget_slider">
            
            <div className="slider_widget_post jelly_loading_pro slick-initialized slick-slider">
                <div onClick={previous} className="jelly_pro_post_arrow_left slick-arrow" style={{ display: "block" }}>
                    <i className="la la-angle-left"></i>
                </div>

                <div className="slick-list draggable" style={{ height: "380px;" }}>
                    <Slider
                            ref={sliderRef}
                            {...settings}
                        >
                       {articles.map((article,index)=>( <div key={index} className="recent_post_large_widget slick-slide slick-cloned" style={{ width: "325px" }}>
                            <span className="image_grid_header_absolute object-cover" style={{ backgroundImage: `url(${article.image})` }}></span>
                            <a href="#" className="link_grid_header_absolute" title="Makeup it really important things to do" ></a>
                            <span className="meta-category-small">
                                <a className="post-category-color-text" style={{ background: "#6b34ba" }} href={`/category/${article.category}`} >{article.category}</a>
                            </span>
                            <div className="wrap_box_style_main image-post-title">
                                <h3 className="image-post-title">
                                    <a href={`/article/${article.slug}`} > Makeup it really important things to do</a>
                                </h3>
                                <span className="jl_post_meta">
                                    <span className="jl_author_img_w">
                                        <a href="#" title="Posts by Anna Nikova" rel="author" >{article.author}</a>
                                    </span>
                                    <span className="post-date">
                                        <i className="fa fa-clock-o"></i>{dateFormater(article.createdAt)}</span>
                                </span>
                            </div>
                        </div>))}
                       
                    </Slider>
                </div>
                <div onClick={next} className="jelly_pro_post_arrow_right slick-arrow" style={{ display: "block" }}>
                    <i className="la la-angle-right"></i>
                </div>
            </div>
            <span className="jl_none_space"></span>
        </div>
    )
}
