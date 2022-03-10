import './style.css'
import { ReactComponent as StarAll } from '../../assets/img/star_all.svg'
import { ReactComponent as StarHalf } from '../../assets/img/star_half.svg'
import { ReactComponent as StarEmpty } from '../../assets/img/star_empty.svg'

function MovieStars(){
    return(
        <div className="dsmovie-stars-container">
            <StarAll />
            <StarAll />
            <StarAll />
            <StarHalf />
            <StarEmpty />
        </div>
    )
}

export default MovieStars