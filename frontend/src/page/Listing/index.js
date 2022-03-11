import './style.css';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../utils/requests';
import axios from 'axios';
import Pagination from '../../components/Pagination';
import MovieCard from '../../components/MovieCard';

function Listing() {
    const [pageNumber, setPageNumber] = useState(0)

    const [page, setPage] = useState({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElement: 0,
        empty: true
    })

    useEffect(() =>{
        axios.get(`${BASE_URL}/movies?page=${pageNumber}`)
        .then(response => {
            setPage({
                content: response.data.content,
                last: response.data.last,
                totalPages: response.data.totalPages,
                totalElements: response.data.totalElements,
                size: response.data.size,
                number: response.data.number,
                first: response.data.first,
                numberOfElement: response.data.numberOfElement,
                empty: response.data.empty,
            })
        })
    }, [pageNumber])

    const handlePageChange = (newPageNumber) => {
        setPageNumber(newPageNumber)
    }

    return(
        <>
            <Pagination 
                last={page.last}
                totalPages={page.totalPages}
                totalElements={page.totalElements}
                size={page.size}
                number={page.number}
                first={page.first}
                numberOfElement={page.numberOfElement}
                empty={page.empty} 
                onChange={handlePageChange} />

            <div className='container'>
                <div className='row'>
                    {
                        page.content.map(item => (
                            <div key={item.id} className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
                                <MovieCard id={item.id} title={item.title} score={item.score} count={item.count} image={item.image} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Listing