import React from "react";

export default function Pagination(props) {
  const { pageNumber, totalCount, onChange } = props;

  for(var i = 1;i <= totalCount;++){
    
  }
  
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
        {totalCount.map((data, index) => (
          <li className="page-item">
            <a className="page-link" onChange={onChange(index)}>
              {index}
            </a>
          </li>
        ))}

        <li
          className={`page-item ${pageNumber == totalCount ? "disabled" : ""}`}
        >
          <a className="page-link" onChange={onChange(pageNumber + 1)}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
