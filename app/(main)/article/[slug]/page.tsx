import { SingeArticleView } from "@/components/article/single-article-view";
import { MainSectionWraper } from "@/components/main-section";
import { getSingleArticle } from "@/db/queries";

const ArticlePage = async ({ params }: { params: { slug: string } }) => {

    const singleArticle = getSingleArticle(params.slug)
    const [article] = await Promise.all(
        [
            singleArticle
        ]
    )
    return (
        <div>
            <MainSectionWraper>
                <SingeArticleView prevArticle={article.previousArticle[0]} nextArticle={article.nextArticle[0]}  article={article.result} />
            </MainSectionWraper>
        </div>
    );
}

export default ArticlePage;