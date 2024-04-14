import { IArticle } from "@/types/articles"
import { extractTags } from "@/utils/tags"
import { RelatedPosts } from "./related-posts"
import { PrevNextArticles } from "./PrevNextArticles"
import { SinglePostShare } from "./share-single-post"
import Author from "./author"
import { TheBody } from "./body"
import { ShareButton } from "./share-button"
import { Hearder } from "./hearder"

type Props = {
    article: any
    nextArticle:any
    prevArticle:any
}

export const SingeArticleView = ({ article , nextArticle, prevArticle }: Props) => {
    return (
        <article className=" flex justify-center items-center">
            <div className=" w-[90%] lg:w-[45%] md:w-[66%]">
                <div className="single_section_content box blog_large_post_style">
                    <Hearder article={article}/>
                    <TheBody article={article}/>
                    <div className="clearfix"></div>
                    <div className="single_tag_share">
                        <div className="tag-cat">
                            <ul className="single_post_tag_layout">

                                {extractTags(article.tags).slice(0,2).map((article, index) => (
                                    <li key={index}>
                                        <a href={`/tag/${article}`} rel="tag">{article}</a>
                                    </li>
                                ))}

                            </ul>
                        </div>
                        <ShareButton/>
                    </div>
                    <SinglePostShare/>
                    <PrevNextArticles 
                        nSlug={nextArticle?.slug }
                        pSlug={prevArticle?.slug}
                        nTitle={nextArticle?.title }
                        pTitle={prevArticle?.title}
                    />
                    <Author author={article.author||""} />
                    <RelatedPosts tag={ extractTags(article.tags)[0] } />
                </div>

            </div>
        </article>
    )
}