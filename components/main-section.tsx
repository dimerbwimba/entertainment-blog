type Props = {
    children : React.ReactNode
}


export const MainSectionWraper = ({children}:Props) =>{
    return (
        <div className="jl_home_bw" style={{ transform:"none"}}>
            {children}
        </div>
    )
}