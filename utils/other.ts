export function getCategoryH(category: string | undefined) {

    switch (category) {
        case category = "tv":
            return "The latest and breaking reality TV news, in-depth reports, recaps, reviews, episode summaries, and info on the biggest reality television shows."
        case category = "celebrity":
            return "Stay up to date with the latest celebrity news and features on explorewisetips.com."
        case category = "lifestyle":
            return "Access the latest lifestyle news and features on explorewisetips.com for the most up-to-date information and insights on health, parenting, style, food, home, and travel. "
        case category = "movie-review":
            return "Explore a comprehensive collection of movie reviews and ratings from the esteemed film critics and industry experts at Explore Wise Tips. With over 15 years of experience, they provide valuable insights and guidance to help movie lovers make informed decisions about which films to watch. Trust their expertise to enhance your movie-watching experience."
        case category = "short":
            return "Explore a world of imagination with our captivating short stories collection. From thrilling adventures to poignant tales, discover the essence of storytelling in bite-sized narratives that leave a lasting impact."
        case category = "travel":
            return "Explore our exciting travel destinations! Discover amazing adventures, stunning landscapes, and unforgettable experiences. Start planning your next journey today!"
        default:
            break;
    }


    return
}

export function getTagDescription(tag: string) {
    switch (tag) {
        case tag = 'stories':
            return {
                isAPerson: false,
                isATvShow: false,
                "isDescription": true,
                description: "Explore captivating stories on a variety of topics, from entertainment to education, curated for your reading pleasure. Dive into a world of imagination and knowledge with our Stories tag."
            }

        case tag = 'relationship':
            return {
                isAPerson: false,
                isATvShow: false,
                "isDescription": true,
                description: "Explore insightful content on relationships, including love, friendship, family dynamics, and personal growth. Our Relationship tag offers valuable tips and articles to help you build and maintain meaningful connections in your life."
            }

        case tag = 'net-worth':
            return {
                isAPerson: false,
                isATvShow: false,
                "isDescription": true,

                description: "Explore the net worth of top celebrities in entertainment, sports, business, and more with our Net Worth tag. Stay updated on the earnings and wealth of your favorite stars and influencers, and delve into their financial insights."
            }
        case tag = 'celebrity':
            return {
                isAPerson: false,
                isATvShow: false,
                "isDescription": true,
                description: "Stay up-to-date with the latest news and insights into your favorite celebrities. Explore their lives, relationships, net worth, and career milestones without missing a beat."
            }

        case tag = 'weight-loss':
            return {
                isAPerson: false,
                isATvShow: false,
                "isDescription": true,

                description: "Explore the inspiring weight loss journeys of celebrities, from their struggles to success stories. Learn about their transformational paths, including diet, exercise, and motivation, as they share valuable insights and tips for achieving your own health goals."
            }

        case tag = 'drew-sangster':
            return {
                isAPerson: true,
                isATvShow: false,
                "isDescription": false,
                description: "Dive into the captivating world of Drew Sangster, a renowned social media influencer known for her glamorous lifestyle and relationship with rapper Romeo Miller. Explore her fashion and beauty tips, along with her advocacy for mental health awareness, making her a beacon of positivity and self-love.",
                image: "https://i.ibb.co/3YpNnqH/jo-compressed.jpg",
                name: "Drew Sangster",
                date_of_birth: "6 March 1991",
                birth_place: "United States of America",
                small_bio: "Drew Sangster is a social media influencer known for her glamorous lifestyle and relationship with the famous American rapper, Romeo Miller. With a keen eye for fashion and beauty, Drew often shares her favorite looks and beauty tips with her followers. Her charming personality and relatable content have earned her a loyal following on platforms like Instagram and TikTok. In addition to her influencer status, Drew is also a passionate advocate for mental health awareness, using her platform to spread positivity and self-love.",
                followers_count: 500000,
                platforms: "Instagram , TikTok",
                engagement_rate: "8%",
                top_brands_collaborated_with: "FashionNova, Sephora , Revolve",
                interests: "Fashion, Beauty, Travel",
                relationship_status: "Dating Romeo Miller",
                current_location: "Los Angeles, California",
                education: "Bachelor's degree in Fashion Design",
                favorite_quote: "Be yourself; everyone else is already taken.",
                charity_work: "Drew is actively involved in several charities that focus on mental health awareness and women empowerment.",
                achievements: "Featured in Vogue magazine's Influencer Spotlight, Guest speaker at BeautyCon LA",
                languages_spoken: "English , Spanish",
                hobbies: "Reading , Yoga , Cooking",
                favorite_books: "The Alchemist by Paulo Coelho , Becoming by Michelle Obama",
                favorite_movies: "The Devil Wears Prada , La La Land",
                pet_peeves: "People who chew loudly , Being late",
                dream_destination: "Santorini, Greece",
                favorite_food: "Sushi",
                bucket_list: "Skydiving , Traveling to all 7 continents",
                quirks: "Always wears mismatched socks , Collects vintage sunglasses",
                fears: "Fear of heights , Fear of snakes",
                fashion_style: "Eclectic mix of vintage and modern pieces",
                life_motto: "Live each day as if it's your last."
            }
        case tag = 'Jennifer%20Lopez':
            return {
                "isAPerson": true,
                "isATvShow": false,
                "isDescription": false,

                "image": "https://people.com/thmb/jUhrCL9DPT44QglBmqyqXXJnhS4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2):format(webp)/jennifer-lopez-1-3515996e5fee4258b7cd05df72bfbe38.jpg",
                "name": "Jennifer Lopez",
                "description": "Dive into the captivating world of Jennifer Lopez, known as J.Lo, a multi-talented artist celebrated for her achievements in music, film, and fashion. Explore her chart-topping hits, blockbuster movies, and successful fashion lines, establishing her as a global icon. Discover her philanthropic efforts and the inspiring story behind her rise to fame.",
                "date_of_birth": "24 July 1969",
                "birth_place": "New York City, New York, United States",
                "small_bio": "Jennifer Lopez, also known as J.Lo, is a multi-talented artist, renowned for her achievements in music, film, and fashion. With numerous chart-topping hits, blockbuster movies, and successful fashion lines, J.Lo has established herself as a global icon. Her captivating performances and undeniable talent have garnered her a massive following worldwide.",
                "followers_count": 150000000,
                "platforms": "Instagram, TikTok, Twitter, Facebook",
                "engagement_rate": "10%",
                "top_brands_collaborated_with": "Versace, Gucci, L'Oréal",
                "interests": "Music, Acting, Fashion",
                "relationship_status": "In a relationship",
                "current_location": "Los Angeles, California",
                "education": "N/A",
                "favorite_quote": "You have to stand up and say, 'There's nothing wrong with me or my shape or who I am; you're the one with the problem!'",
                "charity_work": "Jennifer Lopez is actively involved in several charitable organizations, focusing on children's health, education, and women's rights.",
                "achievements": "Golden Globe nomination for Best Actress, Billboard Icon Award, CFDA Fashion Icon Award",
                "languages_spoken": "English, Spanish",
                "hobbies": "Dancing, Working out, Spending time with family",
                "favorite_books": "The Four Agreements by Don Miguel Ruiz, The Power of Now by Eckhart Tolle",
                "favorite_movies": "Selena, Maid in Manhattan, Hustlers",
                "pet_peeves": "Lack of punctuality, Negativity",
                "dream_destination": "Bora Bora",
                "favorite_food": "Puerto Rican cuisine",
                "bucket_list": "Skydiving, Traveling to all 7 continents, Learning a new language",
                "quirks": "Has a collection of hats, Enjoys singing in the car",
                "fears": "Fear of failure, Fear of not being a good parent",
                "fashion_style": "Chic and glamorous, with a mix of high-end designer pieces and streetwear",
                "life_motto": "I am endlessly fascinated that playing football is considered a training ground for leadership, but raising children isn't.",
                "children": "Jennifer Lopez has two children, twins named Emme Maribel Muñiz and Maximilian David Muñiz, born in 2008.",
                "parents": "Jennifer Lopez's parents are Guadalupe Rodríguez and David Lopez.",
                "siblings": "Jennifer Lopez has two sisters, Leslie and Lynda.",
                "height": "5 feet 5 inches (165 cm)",
                "weight": "56 kg (124 lbs)",
                "body_measurements": "34-26-38 inches (86-66-96 cm)",
                "dress_size": "6 (US)",
                "shoe_size": "8.5 (US)",
                "hair_color": "Brown",
                "eye_color": "Light brown",
                "zodiac_sign": "Leo",
                "favorite_color": "Blue",
                "net_worth": "$400 million",
                "residence": "Jennifer Lopez owns several properties, including a mansion in Bel Air, Los Angeles, and a penthouse in Manhattan, New York City.",
                "cars": "Jennifer Lopez owns a variety of luxury cars, including a Bentley Continental GTC, Rolls Royce Ghost, and Aston Martin DB7.",
                "social_media_handles": "instagram : @jlo,twitter : @JLo,facebook : JenniferLopez,tiktok : @jlo"
            }
        case tag = "plastic-surgery":
            return {
                isAPerson: false,
                isATvShow: false,
                "isDescription": true,
                description: "Explore the world of celebrity plastic surgery, from subtle enhancements to dramatic transformations. Learn about common procedures, reasons behind them, and their impact. Discover the latest trends and innovations, and gain insights into body positivity and self-acceptance."
            }
        case tag = "bio":
            return {
                isAPerson: false,
                isATvShow: false,
                "isDescription": true,
                description: "Delve into the lives of your favorite celebrities with insightful and engaging biographies. Discover the stories behind their rise to fame, personal struggles, and triumphs. From early life to career milestones, explore the fascinating journeys of these iconic figures."
            }

        case tag = "Ben-Affleck":
            return {
                "isAPerson": true,
                "isATvShow": false,
                "isDescription": false,
                "image": "https://m.media-amazon.com/images/M/MV5BMzczNzNiMDAtMmUzZS00MTkwLWIwOTYtNmYyNjg3MTVkNThhXkEyXkFqcGdeQXVyMjA4MjI5MTA@._V1_FMjpg_UY5041_.jpg",
                "name": "Ben Affleck",
                "description": "Dive into the dynamic career of Ben Affleck, a versatile actor, director, and producer known for his roles in films like 'Good Will Hunting' and 'Argo.' Explore his award-winning performances, philanthropic endeavors, and personal journey in the entertainment industry, showcasing his talent and dedication to his craft.",
                "date_of_birth": "August 15, 1972",
                "birth_place": "Berkeley, California, United States",
                "small_bio": "Ben Affleck is a versatile actor, director, and producer, known for his roles in films like 'Good Will Hunting,' 'Argo,' and 'Gone Girl.' His career has spanned decades, earning him critical acclaim and numerous awards, including two Academy Awards. Apart from his acting career, Ben Affleck is also involved in various philanthropic efforts.",
                "followers_count": 5000000,
                "platforms": "Twitter, Instagram, Facebook",
                "engagement_rate": "5%",
                "top_brands_collaborated_with": "N/A",
                "interests": "Acting, Directing, Writing",
                "relationship_status": "Dating",
                "current_location": "Los Angeles, California",
                "education": "University of Vermont, Occidental College",
                "favorite_quote": "I think marriage is notoriously difficult and I think that's why people don't get it right, but I don't think that means you shouldn't try.",
                "charity_work": "Ben Affleck is actively involved in various charitable organizations, focusing on causes like poverty alleviation, healthcare, and education.",
                "achievements": "Two Academy Awards, Golden Globe Award, BAFTA Award",
                "languages_spoken": "English, Spanish",
                "hobbies": "Playing poker, Reading, Spending time with family",
                "favorite_books": "The Great Gatsby by F. Scott Fitzgerald, To Kill a Mockingbird by Harper Lee",
                "favorite_movies": "The Godfather, Goodfellas, The Shawshank Redemption",
                "pet_peeves": "People who are late, Disrespectful behavior",
                "dream_destination": "Italy",
                "favorite_food": "Pizza",
                "bucket_list": "Traveling to Japan, Learning a new language",
                "quirks": "Enjoys wearing Boston sports team apparel, Collects antique books",
                "fears": "Fear of failure, Fear of not being a good father",
                "fashion_style": "Casual and laid-back, often seen in jeans and t-shirts",
                "life_motto": "Life's too short to be serious."
            }
        case tag = 'andrew-tate':
            return {
                "isAPerson": true,
                "isATvShow": false,
                "isDescription": false,
                "image": "https://i.ibb.co/wBKzt1G/Which-Bugatti-Does-Tate-Have.webp",
                "name": "Andrew Tate",
                "description": "Dive into the world of Andrew Tate, a former professional kickboxer, entrepreneur, and social media personality. Explore his outspoken views, business ventures, and appearances on reality TV, revealing a multifaceted individual unafraid to challenge norms and share his unique perspective.",
                "date_of_birth": "December 1, 1986",
                "birth_place": "Chicago, Illinois, United States",
                "small_bio": "Andrew Tate is a former professional kickboxer, entrepreneur, and social media personality. Known for his appearances on the reality TV show 'Big Brother' and his controversial views on various topics, Andrew has amassed a following for his outspoken and unapologetic demeanor. He is also known for his business ventures and motivational speaking engagements.",
                "followers_count": 300000,
                "platforms": "Twitter, Instagram, YouTube",
                "engagement_rate": "6%",
                "top_brands_collaborated_with": "N/A",
                "interests": "Kickboxing, Business, Motivation",
                "relationship_status": "Single",
                "current_location": "London, United Kingdom",
                "education": "University of Chicago",
                "favorite_quote": "You don't get what you wish for, you get what you work for.",
                "charity_work": "Andrew Tate is known for his support of various charities, particularly those focused on mental health and education.",
                "achievements": "Multiple kickboxing world championships",
                "languages_spoken": "English",
                "hobbies": "Fitness training, Traveling, Public speaking",
                "favorite_books": "The Art of War by Sun Tzu, Think and Grow Rich by Napoleon Hill",
                "favorite_movies": "Gladiator, The Godfather, The Shawshank Redemption",
                "pet_peeves": "Laziness, Excuses",
                "dream_destination": "Tokyo, Japan",
                "favorite_food": "Steak",
                "bucket_list": "Skydiving, Visiting every continent",
                "quirks": "Has a strict daily routine, Believes in the power of positive thinking",
                "fears": "Fear of mediocrity, Fear of not achieving his goals",
                "fashion_style": "Sharp and tailored, often seen in suits and formal attire",
                "life_motto": "Success is not for the lazy."
            }
        case tag = "90-day-fiance-the-other-way":
            return {
                "isAPerson": false,
                "isATvShow": true,
                "isDescription": false,
                "image": "https://tlc.sndimg.com/content/dam/images/tlc/tlcme/fullset/2023/june/LEAD_90-day-the-other-way-season-5.jpg.rend.hgtvcom.966.644.suffix/1686324816172.jpeg",
                "name": "90 Day Fiance The Other Way",
                "description": "Dive into the world of '90 Day Fiancé: The Other Way,' a unique twist on the original series. Couples, who have never met in person, have 90 days to get married but with a twist—the Americans in the relationship now head overseas, experiencing their own culture shock. From India to Mexico, Ethiopia to Russia, the show explores the challenges and triumphs of these 90-day relationships, with outcomes ranging from happily ever after to a one-way ticket back home alone.",
                " RELEASE_DATE": "June 3, 2019",
                "SEASONS": "4",
                "NETWORK": "TLC",
                "RANCHISE(S)": "90 Day Fiancé",
                "WRITERS": "Matt Sharp",
                "DIRECTORS": "Matt Sharp"
            }
        case tag = "90-Day-Fiance":
            return {
                "isAPerson": false,
                "isATvShow": true,
                "isDescription": false,
                "image": "https://tlc.sndimg.com/content/dam/images/tlc/tlcme/fullset/2023/june/LEAD_90-day-the-other-way-season-5.jpg.rend.hgtvcom.966.644.suffix/1686324816172.jpeg",
                "name": "90 Day Fiance The Other Way",
                "description": "90 Day Fiance is a reality TV series that follows the trials and tribulations of Non-U.S. citizens who travel from abroad each season to meet their potential spouses utilizing a K-1 visa. This three-month visa gives the pair 90 days to determine whether or not their romantic and life goals are aligned before they're forced to return home unmarried. Drama and tension unfold as the couples navigate cultural differences, family expectations, and the pressures of impending marriage.",
                "NETWORK": "TLC",
                "WRITERS": "Matt Sharp",
                "DIRECTORS": "Matt Sharp"
            }
        default:
            break;
    }
}