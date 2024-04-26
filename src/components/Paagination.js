import React from 'react'
import { Pagination } from 'react-bootstrap'
import ReactPaginate from 'react-paginate';

const Paagination = ({getPage,pageCounts}) => {
    const handlePageClick = (data) => {
        getPage(data.selected + 1)
    }

    return (
        <ReactPaginate
        breakLabel="..."
        nextLabel="التالي"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCounts} // سوف يعطي خطأ لعدم وجود عدد صفحات كالتي في ال Api
        previousLabel=" السابق"
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        previousLinkClassName={'page-link'} 
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'} />
    )
}

export default Paagination
