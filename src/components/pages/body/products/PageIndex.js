import React, { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PageIndex.css';
import { getProductsByQuery } from '../../../../api/products';
import { getProductsByCategory } from '../../../../api/products';


export const PageIndex = ({searchObject, pageType, setPageType, setProducts, category}) => {
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (pageType === 'category') {
            getProductsByCategory(category, page)
            .then((response) => {
                setProducts(response[1])
            })
            .catch((error) => {
                console.error(error)
            })
        } else if(pageType === 'search') {
            if (searchObject.string) {
                getProductsByQuery(searchObject.string, page)
                .then((response) => {
                    setProducts(response[1])
                })
                .catch((error) => {
                    console.error(error)
                })
            } else {
                alert('Must enter search term(s)');
            }
        }
    }, [page])

    const firstHandler = () => {
        if (page > 1) {
            setPage(1);
        }
    }

    const prevHandler = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    const nextHandler = () => {
        if (page < searchObject.pageCount) {
            setPage(page + 1);
        }
    }

    const lastHandler = () => {
        if (page < searchObject.pageCount) {
            setPage(searchObject.pageCount);
        }
    }

    return (
        <div id='pagination'>
            <a href='#' onClick={firstHandler}>❮❮</a>
            <a href='#' onClick={prevHandler}>❮</a>
            <a href='#'>{page}</a>
            <a href='#' onClick={nextHandler}>❯</a>
            <a href='#' onClick={lastHandler}>❯❯</a>
        </div>


        // <div id='pagination'>
        //     <Pagination >
        //         <Pagination.First onClick={firstHandler} />
        //         <Pagination.Prev onClick={prevHandler}/>
        //         <Pagination.Item active>{page}</Pagination.Item>
        //         <Pagination.Next onClick={nextHandler}/>
        //         <Pagination.Last onClick={lastHandler}/>
        //     </Pagination>
        // </div>
    )
}
