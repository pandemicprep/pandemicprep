import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PageIndex.css';

export const PageIndex = ({searchObject}) => {
    const [page, setPage] = useState(1);

    const firstHanlder = () => {
        
    }

    const nextHandler = (event) => {
        console.log(searchObject, 'searchObj in pagination')

        if (page < searchObject.pageCount) {
            setPage(page + 1);
        }
    }

    const backHandler = () => {

    }

    const lastHandler = () => {

    }

    return (
        <Pagination id='pagination'>
            <Pagination.First onClick={() => {
                if (page > 1) {
                    setPage(1);
                }
            }} />
            <Pagination.Prev onClick={() => {
                if (page > 1) {
                    setPage(page - 1);
                }
            }}/>
            <Pagination.Item active>{page}</Pagination.Item>
            <Pagination.Next onClick={nextHandler}/>
            <Pagination.Last onClick={() => {
                if (page < searchObject.pageCount) {
                    setPage(searchObject.pageCount);
                }
            }}/>
        </Pagination>
    )
}
