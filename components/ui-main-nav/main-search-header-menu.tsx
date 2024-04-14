"use client"

import { useSearchModelState } from "@/store/use-search-model"
import { useSidebarModelState } from "@/store/use-sidebar-model"

export const MainSearchHearderMenu = () => {
    const {open} = useSidebarModelState()
    const {openSearch} = useSearchModelState()
    return (
        <div className="search_header_menu">
            <div onClick={open} className="menu_mobile_icons">
                <i className="fa fa-bars"></i>
            </div>
            <div onClick={openSearch} className="search_header_wrapper search_form_menu_personal_click">
                <i className="fa fa-search"></i>
            </div>
        </div>
    )
}