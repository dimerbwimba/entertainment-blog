import { create } from "zustand";
 
type SearchModelState = {
    isOpen:boolean;
    openSearch:()=> void;
    close:()=> void;
}

export const useSearchModelState = create<SearchModelState>((set)=>({
    isOpen:false,
    openSearch:()=> set({ isOpen:true}),
    close:()=> set({ isOpen:false})

}))