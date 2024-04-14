export function getCategoryH(category:string){

    switch (category) {
        case category = "tv":
            return "Stay up-to-date with the latest TV news and features from explorewisetips.com"
        case category = "celebrity":
            return "Stay up to date with the latest celebrity news and features on explorewisetips.com."
        case category="lifestyle":
            return "Access the latest lifestyle news and features on explorewisetips.com for the most up-to-date information and insights on health, parenting, style, food, home, and travel. "
        case category = "movie-review":
            return "Explore a comprehensive collection of movie reviews and ratings from the esteemed film critics and industry experts at Explore Wise Tips. With over 15 years of experience, they provide valuable insights and guidance to help movie lovers make informed decisions about which films to watch. Trust their expertise to enhance your movie-watching experience."
        default:
            break;
    }


    return 
}