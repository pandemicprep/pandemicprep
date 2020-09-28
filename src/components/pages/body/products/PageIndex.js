import React, { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PageIndex.css';
import { getProductsByQuery } from '../../../../api/products';


export const PageIndex = ({searchObject, pageType, setPageType, setProducts}) => {
    const [page, setPage] = useState(1);

    // useEffect(() => {
    //     console.log(pageType)
    //     if (pageType === 'category') {

    //     } else if(pageType === 'search') {
    //         if (searchObject.string) {
    //             getProductsByQuery(searchObject.string, page)
    //             .then((response) => {
    //                 setProducts(response)
    //             })
    //             .catch((error) => {
    //                 console.error(error)
    //             })
    //         } else {
    //             alert('Must enter search term(s)');
    //         }
    //     }
    // }, [page])

    const firstHandler = () => {
        if (page > 1) {
            setPage(1);
        }
        console.log(pageType)
        // if (pageType === 'category') {

        // } else if(pageType === 'search') {
        //     if (searchObject.string) {
        //         getProductsByQuery(searchObject.string, page)
        //         .then((response) => {
        //             setProducts(response)
        //         })
        //         .catch((error) => {
        //             console.error(error)
        //         })
        //     } else {
        //         alert('Must enter search term(s)');
        //     }
        // }
    }

    const prevHandler = () => {
        if (page > 1) {
            setPage(page - 1);
        }
        console.log(page, 'page check')

        // if (pageType === 'category') {

        // } else if(pageType === 'search') {
        //     if (searchObject.string) {
        //         getProductsByQuery(searchObject.string, page)
        //         .then((response) => {
        //             setProducts(response)
        //         })
        //         .catch((error) => {
        //             console.error(error)
        //         })
        //     } else {
        //         alert('Must enter search term(s)');
        //     }
        // }
    }

    const nextHandler = (event) => {
        console.log(searchObject, 'searchObj in pagination')

        if (page < searchObject.pageCount) {
            setPage(page + 1);
        }
        console.log(page, 'page check')

    //     if (pageType === 'category') {

    //     } else if(pageType === 'search') {
    //         if (searchObject.string) {
    //             getProductsByQuery(searchObject.string, page)
    //             .then((response) => {
    //                 console.log('getting to set products')
    //                 setProducts(response)
    //             })
    //             .catch((error) => {
    //                 console.error(error)
    //             })
    //         } else {
    //             alert('Must enter search term(s)');
    //         }
    //     }
    }

    const lastHandler = () => {
        if (page < searchObject.pageCount) {
            setPage(searchObject.pageCount);
        }
        console.log(page, 'page check')

        // if (pageType === 'category') {

        // } else if(pageType === 'search') {
        //     if (searchObject.string) {
        //         getProductsByQuery(searchObject.string, page)
        //         .then((response) => {
        //             setProducts(response)
        //         })
        //         .catch((error) => {
        //             console.error(error)
        //         })
        //     } else {
        //         alert('Must enter search term(s)');
        //     }
        // }
    }

    return (
        <Pagination id='pagination'>
            <Pagination.First onClick={firstHandler} />
            <Pagination.Prev onClick={prevHandler}/>
            <Pagination.Item active>{page}</Pagination.Item>
            <Pagination.Next onClick={nextHandler}/>
            <Pagination.Last onClick={lastHandler}/>
        </Pagination>
    )
}
