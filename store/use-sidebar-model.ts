import { create } from "zustand";
 
type SidebarModelState = {
    isOpen:boolean;
    open:()=> void;
    close:()=> void;
}

export const useSidebarModelState = create<SidebarModelState>((set)=>({
    isOpen:false,
    open:()=> set({ isOpen:true}),
    close:()=> set({ isOpen:false})

}))