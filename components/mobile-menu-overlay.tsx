"use client"

import { useSidebarModelState } from "@/store/use-sidebar-model"

export const MobileMenuOverlay = () =>{
    const {isOpen, close} = useSidebarModelState()
    return (
        
        <div onClick={close} className={`mobile_menu_overlay ${isOpen && `mobile_menu_active`}`}></div>
    )
}