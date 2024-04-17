import { getCategoryH, getTagDescription } from "@/utils/other";

type Props = {
    categoryName:string;
}

export const StartCategorySection = ({categoryName}:Props) => {
    return (
        <div className="main_title_wrapper category_title_section jl_cat_img_bg">
            <div className="category_image_bg_image" style={{ backgroundImage: "url('/img/christopher-burns-617704-unsplash-1920x982.jpg')" }}>

            </div>
            <div className="category_image_bg_ov">

            </div>
            <div className="jl_cat_title_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 main_title_col">
                            <div className="jl_cat_mid_title">
                                <h1 className="categories-title title">{categoryName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}