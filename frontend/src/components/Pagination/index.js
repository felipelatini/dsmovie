import './style.css'
import { ReactComponent as Arrow } from '../../assets/img/arrow.svg'

function Pagination({last, totalPages, totalElements, size, number, first, numberOfElement, empty, 
    onChange}) {

    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" disabled={first} onClick={() => { onChange(number - 1) }} >
                    <Arrow />
                </button>
                <p>{`${number + 1} de ${totalPages}`}</p>
                <button className="dsmovie-pagination-button" disabled={last} onClick={() => { onChange(number + 1) }} >
                    <Arrow className="dsmovie-flip-horizontal" />
                </button>
            </div>
        </div>
    )
}

export default Pagination;