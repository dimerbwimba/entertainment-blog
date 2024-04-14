import { create } from "zustand";
 
type ShareModelState = {
    isOpen:boolean;
    open:()=> void;
    close:()=> void;
}

export const useShareModelState = create<ShareModelState>((set)=>({
    isOpen:false,
    open:()=> set({ isOpen:true}),
    close:()=> set({ isOpen:false})

}))