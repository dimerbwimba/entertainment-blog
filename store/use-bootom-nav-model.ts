import { create } from "zustand";
 
type BottomNavState = {
    isOpen:boolean;
    open:()=> void;
    close:()=> void;
}

export const useBottomNavState = create<BottomNavState>((set)=>({
    isOpen:true,
    open:()=> set({ isOpen:true}),
    close:()=> set({ isOpen:false})

}))