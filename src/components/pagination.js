import { useState } from "react";


function Pagination() {

    const [pageNumber ,setPageNumber] = useState(1);

    return (
        <>
            <nav aria-label="Page navigation example mt-4">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item ms-auto"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </>
    )
}


export default Pagination;