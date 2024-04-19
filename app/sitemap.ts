import { MetadataRoute } from "next";
import moment from "moment"
import { getSitemapData } from "@/db/queries";
export default async function sitemap():Promise<MetadataRoute.Sitemap>{
    try {
        const response =  getSitemapData()

        const [ documents ] = await Promise.all([
            response
        ])
    
        const blogEntries:MetadataRoute.Sitemap = documents.map((article)=>({
            url:`${process.env.NEXT_PUBLIC_BASE_URL}/article/${article.slug}`,
            lastModified:  moment(article.updatedAt).format("YYYY-MM-DD"),
            changeFrequency:"daily",
            priority:1,
        }))
    
        return [
            {
                priority:1,
                changeFrequency:"daily",
                lastModified: moment(Date.now()).format("YYYY-MM-DD"),
                url:`${process.env.NEXT_PUBLIC_BASE_URL}`
            },
            {
                priority:1,
                changeFrequency:"daily",
                lastModified:  moment(Date.now()).format("YYYY-MM-DD"),
                url:`${process.env.NEXT_PUBLIC_BASE_URL}/contact`
            },
            {
                priority:1,
                changeFrequency:"daily",
                lastModified:  moment(Date.now()).format("YYYY-MM-DD"),
                url:`${process.env.NEXT_PUBLIC_BASE_URL}/faqs`
            },

            {
                priority:1,
                changeFrequency:"daily",
                lastModified:  moment(Date.now()).format("YYYY-MM-DD"),
                url:`${process.env.NEXT_PUBLIC_BASE_URL}/privacy-policy`
            },
            {
                priority:1,
                lastModified:  moment(Date.now()).format("YYYY-MM-DD"),
                url:`${process.env.NEXT_PUBLIC_BASE_URL}/disclaimer`
            },
            {
                priority:1,
                changeFrequency:"daily",
                lastModified:  moment(Date.now()).format("YYYY-MM-DD"),
                url:`${process.env.NEXT_PUBLIC_BASE_URL}/affiliate-disclosure`
            },
            {
                priority:1,
                changeFrequency:"daily",
                lastModified:  moment(Date.now()).format("YYYY-MM-DD"),
                url:`${process.env.NEXT_PUBLIC_BASE_URL}/about-us`
            },
            
            ...blogEntries
        ]
        
    } catch (error) {
        return [
            
        ]
    }
}