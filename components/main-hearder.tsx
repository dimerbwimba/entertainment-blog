import { MainMenu } from "./ui-main-nav/main-menu"
import { MainNavLogo } from "./ui-main-nav/main-nav-logo"
import { MainSearchHearderMenu } from "./ui-main-nav/main-search-header-menu"

export const MainHearder = () =>{
    return (
        <div id="menu_wrapper" className="menu_wrapper jl_menu_sticky jl_stick jl_sticky">
               <div className="container">
                  <div className="row">
                     <div className="main_menu col-md-12">
                       <MainNavLogo/>
                        {/* <!-- main menu --> */}
                        <MainMenu/>
                        {/* <!-- end main menu --> */}
                        <MainSearchHearderMenu/>
                     </div>
                  </div>
               </div>
            </div>
    )
}