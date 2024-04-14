import Link from "next/link";

type Props = {
    nSlug: string;
    pSlug: string;
    nTitle: string;
    pTitle: string;
}

export const PrevNextArticles = ({ nSlug, nTitle, pSlug, pTitle }: Props) => {
    return (
        <>
            <div className="postnav_left">
                <div className="single_post_arrow_content">
                    <Link href={`/article/${pSlug}`} id="prepost">
                        {pTitle}
                        <span className="jl_post_nav_left">
                            Previous post</span>
                    </Link>
                </div>
            </div>
            <div className="postnav_right">
                <div className="single_post_arrow_content">
                    <Link href={`/article/${nSlug}`} id="nextpost">
                        {nTitle}
                        <span className="jl_post_nav_left">
                            Next post
                        </span>
                    </Link>
                </div>
            </div>
        </>
    )
}