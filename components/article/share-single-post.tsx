"use client"

import { useShareModelState } from "@/store/use-share-model"

export const SinglePostShare = () => {
    const { isOpen, close } =  useShareModelState()
    return (
        <div className={`single_post_share_wrapper ${isOpen && `share_single_active` } ` }>
            {/* TODO:share_single_active */}
            <div onClick={close} className="single_post_share_icons social_popup_close">
                <i className="fa fa-close"></i>
            </div>
            <ul className="single_post_share_icon_post">
                <li className="single_post_share_facebook">
                    <a href="#" target="_blank">
                        <i className="fa fa-facebook"></i>
                    </a>
                </li>
                <li className="single_post_share_twitter">
                    <a href="#" target="_blank">
                        <i className="fa fa-twitter"></i>
                    </a>
                </li>
                <li className="single_post_share_pinterest">
                    <a href="#" target="_blank">
                        <i className="fa fa-pinterest"></i>
                    </a>
                </li>
                <li className="single_post_share_linkedin">
                    <a href="#" target="_blank">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </li>
                <li className="single_post_share_ftumblr">
                    <a href="#" target="_blank">
                        <i className="fa fa-tumblr"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}