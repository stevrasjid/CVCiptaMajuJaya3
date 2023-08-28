import React from "react";

export default function Pagination(props) {
  const { pageNumber, totalCount } = props;

  const handlePageChange = (e, index) => {
    if (index < 1 || index > totalCount) {
      return;
    }

    props.onClick(e, index);
  };

  const renderPageNumber = () => {
    // prev 1 2 3 4 5 ... next bold di 1
    // prev 1 2 3 4 5 ... next bold di 2
    // prev 1 2 3 4 5 ... next bold di 3
    // prev ... 3 4 5 6 ... next bold di 4
    // prev ... 4 5 6 7 ... next bold di 5
    // prev ... 9 10 11 12 ... next bold di 10
    // prev ... 10 11 12 13 next bold di 11
    // prev ... 10 11 12 13 next bold di 12
    // prev ... 10 11 12 13 next bold di 13
    // maunya begini
    const pageNumbers = [];
    var firstNumberLoop = 1;
    var lengthPageNumbers;

    if (pageNumber - 4 >= 0) {
      pageNumbers.push(<li className="page-item">...</li>);
      firstNumberLoop = pageNumber - 1;
    }

    if (firstNumberLoop + 4 < totalCount) {
      lengthPageNumbers = firstNumberLoop + 4;
    } else {
      lengthPageNumbers = totalCount;
    }
    for (let i = firstNumberLoop; i <= lengthPageNumbers; i++) {
      pageNumbers.push(
        <li
          className="page-item"
          key={i}
          onClick={(e) => handlePageChange(e, i)}
        >
          <a
            className={`page-link ${i == pageNumber ? "active" : ""}`}
            href="#"
          >
            {i}
          </a>
        </li>
      );
    }
    if (firstNumberLoop + 4 < totalCount) {
      pageNumbers.push(<li className="page-item">...</li>);
    }

    return pageNumbers;
  };

  if (totalCount > 0) {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li
            className={`page-item ${pageNumber == 1 ? "disabled" : ""}`}
            onClick={(e) => handlePageChange(e, pageNumber - 1)}
          >
            <a className="page-link" href="#" tabindex="-1">
              Previous
            </a>
          </li>
          {renderPageNumber()}
          <li
            className={`page-item ${
              pageNumber == totalCount ? "disabled" : ""
            }`}
          >
            <a
              className="page-link"
              onClick={(e) => handlePageChange(e, pageNumber + 1)}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  } else {
    <div></div>;
  }
}
