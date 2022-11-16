export default function Pagination(){

    return(
        <nav aria-label="Page tracker">
            <ul className="pagination border-0">
                <li className="page-item">
                <a className="page-link border-0 bg-none" href="/" aria-label="Previous">
                    <i className="bi-caret-left-fill text-black"></i>
                </a>
                </li>
                <li className="page-item active"><a className="page-link border-0 text-dark" href="/">1</a></li>
                <li className="page-item"><a className="page-link border-0 text-dark" href="/">2</a></li>
                <li className="page-item"><a className="page-link border-0 text-dark" href="/">3</a></li>
                <li className="page-item">
                <a className="page-link border-0" href="/" aria-label="Next">
                    <i className="bi-caret-right-fill text-black"></i>
                </a>
                </li>
            </ul>
        </nav>
    )
}