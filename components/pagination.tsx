import Link from "next/link"

type Props = {
    page: number
    root_url: string
    total_page: number
}


export const Pagination = ({ page, root_url, total_page }: Props) => {
    const prevPage = page - 1 > 0 ? page - 1 : 1
    const nextPage = page + 1;
    const pageNumbers = [];
    const offsetNumber = 3;
    for (let i = page - offsetNumber; i <= page + offsetNumber; i++) {
        if (i >= 1 && i <= total_page) {
            pageNumbers.push(i)
        }
    }
    return (
        <div className=" flex justify-center border-t">
            <nav className="jellywp_pagination  ">
                <ul className="page-numbers">
                    {page !== 1 && Number.isNaN(page) &&
                        <li>
                            <Link className="next page-numbers" href={`${root_url + prevPage}`}>
                                <i className="fa fa-long-arrow-left">
                                </i>
                            </Link>
                        </li>}
                    {pageNumbers.map((pn,index) => ( <li>
                        <Link key={index}  href={`${root_url + pn}`}>
                            <span aria-current="page" className={`page-numbers ${ pn === page && "border bg-gray-500 border-black"} current`}>
                                {pn}
                            </span>
                        </Link>
                    </li>))}
                    
                    {page !== total_page &&
                        <li>
                            <Link className="next page-numbers" href={`${root_url + nextPage}`}>
                                <i className="fa fa-long-arrow-right">
                                </i>
                            </Link>
                        </li>}
                </ul>
            </nav>
        </div>
    )
}