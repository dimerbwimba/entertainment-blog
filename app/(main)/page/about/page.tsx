import { MainSectionWraper } from "@/components/main-section";

const AboutPage = () => {
    return (
        <MainSectionWraper>
            <div className=" flex justify-center items-center">
                <div className="">
                    <div className="  prose prose-xl">

                        <h1>About {process.env.SITE_NAME}</h1>
                        <p>{process.env.SITE_NAME} had a humble start back in 2021 and in the years since has grown into one of the largest and most-respected entertainment news sources in the world - having served over 1+ billion readers in 2022. We don&apos;t just report news, we analyze and editorialize it with unique insight that engages everyone from casual entertainment lovers to hardcore movie buffs. With television, film, comics, and video game news, reviews, podcasts, and a YouTube channel with over 10 thousands subscribers, {process.env.SITE_NAME} is the ultimate geek entertainment destination.</p>
                        <p>{process.env.SITE_NAME} has gone global:</p>
                        <ul>
                            <li>Covering red tv shows news , all around the world</li>
                            <li>Attending Film Festivals worldwide</li>
                            <li>Premieres across the globe</li>
                        </ul>
                        <p>{process.env.SITE_NAME} editors report from the pop culture events our readers (new and returning) love most. Passionate cinephiles, TV addicts, gamers, and comic book readers, the {process.env.SITE_NAME} team comes from diverse backgrounds in film studies, creative writing, video production, and business management brought together by a passion for all things entertainment and a goal of providing the best, as well as most engaging, content possible for visitors to our site.</p>
                        <h2>A Story from Our Reader</h2>
                        <p>Sarah, a longtime reader of {process.env.SITE_NAME}, recalls how she first discovered the website. I was searching for information about my favorite TV show and stumbled upon an insightful article on {process.env.SITE_NAME}. Since then, I&apos;ve been hooked. The website not only provides news and updates but also offers in-depth analysis and thought-provoking editorials that keep me coming back for more.</p>
                        <p>{process.env.SITE_NAME} strives to create a community where readers like Sarah can find the latest entertainment news and engage with content that resonates with their interests.</p>
                    </div>
                </div>
            </div>
        </MainSectionWraper>
    );
}

export default AboutPage;