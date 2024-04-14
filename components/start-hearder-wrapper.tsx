type Props={
    children:React.ReactNode
}

export const StartHearderWrapper = ({children}:Props)=>{
    return (
        <header className="header-wraper jl_header_magazine_style two_header_top_style header_layout_style3_custom jl_cusdate_head">
            {children}
        </header>
    )
}