"use client"

import { useShareModelState } from "@/store/use-share-model";

export const ShareButton = () => {
    const {open} =  useShareModelState()
    return ( 
        
        <div onClick={open} className="single_post_share_icons">
            Share
        <i className="fa fa-share-alt"></i>
    </div>
     );
}
