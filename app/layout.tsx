import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./boostrap.css";
import "./responsive.css";
import "./main.css"
import { StartHearderWrapper } from "@/components/start-hearder-wrapper";
import { SmallHearder } from "@/components/small-hearder";
import { MainHearder } from "@/components/main-hearder";
import { MobileNavWrapper } from "@/components/mobile-nav-wrapper";
import { MobileNav } from "@/components/mobile-nav";
import { Footer } from "@/components/footer";
import { SearchForm } from "@/components/search-form";
import { MobileMenuOverlay } from "@/components/mobile-menu-overlay";
import { BottomNav } from "@/components/bottom-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Eplore Wise Tips",
    template: "%s"
  },
  alternates: {
    canonical: `https://www.${process.env.SITE_NAME}.com`
  },
  description: "Discover a world of engaging conversations at Explore Wise Tips. Join a diverse community discussing topics ranging from entertainment to Lifestyle. Your voice matters at TalkPalace!",
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "https://i.ibb.co/nR9PN2s/TALK-PALACE.png"
      }
    ]
  },
  openGraph: {
    images: [
      {
        url: "https://i.ibb.co/nR9PN2s/TALK-PALACE.png"
      }
    ],
    url: `https://www.${process.env.SITE_NAME}.com`

  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="msvalidate.01" content="F6D1B0B61E3D18A5F18DED0BEE9157F9" />
      <body className="mobile_nav_class jl-has-sidebar">
        <div className="options_layout_wrapper jl_radius jl_none_box_styles jl_border_radiuss">
          <StartHearderWrapper>
            <SmallHearder />
            <div className="jl_blank_nav"></div>
            <MainHearder />
          </StartHearderWrapper>
          <MobileNavWrapper>
            <MobileNav />
          </MobileNavWrapper>
          <SearchForm />
          <MobileMenuOverlay />
          {children}
          <BottomNav />
          <Footer />
        </div>
      </body>
    </html>
  );
}
