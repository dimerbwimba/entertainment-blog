import { SmallWidthOverlayCard } from "../cards/small-with-overlay-card"

export const GridColThree = () => {
    return (
        <div className="jl_home_section jl_home_grid_overlay">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 jl_mid_main_3col">
                        <div className="jl_3col_wrapin">

                            <div className="jelly_homepage_builder jl_nonav_margin homepage_builder_3grid_post jl_cus_grid_overlay jl_fontsize22 jl_cus_grid3">
                                <div className="homepage_builder_title">
                                    <h2>
                                        things you need to know
                                    </h2>
                                </div>
                                <div className="jl_wrapper_row jl-post-block-248931">
                                    <div className="row">
                                        {/* {
                                            [1,2,3,4,5,6].map(()=>(
                                                <SmallWidthOverlayCard/>
                                            ))
                                        } */}
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