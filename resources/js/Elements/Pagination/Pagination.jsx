import React from "react";

export default function Pagination(props) {
    const { pageNumber, totalCount, onClick } = props;

    const handlePageChange = (index) => {
        if (index < 1 || index > totalCount) {
            return;
        }

        onClick(index);
    };

    const renderPageNumber = () => {
        // prev 1 2 3 4 5 ... next bold di 1
        // prev 1 2 3 4 5 ... next bold di 2
        // prev 1 2 3 4 5 ... next bold di 3
        // prev ... 3 4 5 6 ... next bold di 4
        // prev ... 4 5 6 7 ... next bold di 5
        // prev ... 10 11 12 13 next bold di 11
        // prev ... 10 11 12 13 next bold di 12
        // prev ... 10 11 12 13 next bold di 13
        // maunya begini
        const pageNumbers = [];
        for (let i = 1; i < totalCount; i++) {
            pageNumbers.push(
                <span
                    key={i}
                    className={i === currentPage ? "active" : ""}
                    onClick={() => handlePageChange(i)}
                ></span>
            );
        }
    };

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li
                    className={`page-item ${pageNumber == 1 ? "disabled" : ""}`}
                    onChange={onChange(pageNumber - 1)}
                >
                    <a className="page-link" href="#" tabindex="-1">
                        Previous
                    </a>
                </li>
                {renderPageNumber}
                <li
                    className={`page-item ${
                        pageNumber == totalCount ? "disabled" : ""
                    }`}
                >
                    <a
                        className="page-link"
                        onChange={onChange(pageNumber + 1)}
                    >
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    );
}
