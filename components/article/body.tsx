import { IArticle } from "@/types/articles"
import { InstagramEmbed } from "./instagram-embed"

type Props = {
    article: IArticle
}

export const TheBody = ({ article }: Props) => {
    return (
        <div className="post_content">
            <p className=" text-black font-bold">
                {article.description}
            </p>
            <div className=" border-t"></div>
            <div dangerouslySetInnerHTML={{ __html: article.sanitizedHTML }} />
            {article.video1 && <InstagramEmbed url={`https://www.instagram.com/p/${article.video1}/`} />}
            <div dangerouslySetInnerHTML={{ __html: article.sanitizedHTML1 }} />
            {article.video &&
                <iframe width="420" height="315"
                    src={"https://www.youtube.com/embed/" + article.video}>
                </iframe>}
            <div dangerouslySetInnerHTML={{ __html: article.sanitizedHTML2 }} />
            {article.image1 && <img width="780" height="450" src={article.image1} className="attachment-disto_large_feature_image 
                                size-disto_large_feature_image wp-post-image" alt="" />}
            <div dangerouslySetInnerHTML={{ __html: article.sanitizedHTML3 }} />
            {article.image2 && <img width="780" height="450" src={article.image2} className="attachment-disto_large_feature_image 
                                size-disto_large_feature_image wp-post-image" alt="" />}
            <div dangerouslySetInnerHTML={{ __html: article.sanitizedHTML4 }} />
        </div>
    )
}