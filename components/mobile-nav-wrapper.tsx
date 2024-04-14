"use client"

import { useSidebarModelState } from "@/store/use-sidebar-model"

type Props ={
    children:React.ReactNode
}


export const MobileNavWrapper = ({children}:Props) =>{
    const { isOpen } = useSidebarModelState()
    return (
        //TODO: add jl_mobile_nav_open class to the mobile nav
        <div id="content_nav" className={`jl_mobile_nav_wrapper ${isOpen && `jl_mobile_nav_open` } `}>
            {children}
        </div>
    )
}