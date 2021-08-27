import React from 'react';
import "../styles/Pagination.css";

const Pagination = ({postsPerPage, totalPosts, paginate}) => {

    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div id={'navigation'}>
            <ul id={'paginator'}>
                {pageNumbers.map(number => (
                    <li key={number} id={'page-item'}>
                        <a onClick={() => paginate(number)} className={'page-link'} id={'page-link'}>
                            {number}
                        </a>
                    </li>
                    )
                )}
            </ul>
        </div>
    );
}

export default Pagination;