import './style.css'
import { ReactComponent as StarAll } from '../../assets/img/star_all.svg'
import { ReactComponent as StarHalf } from '../../assets/img/star_half.svg'
import { ReactComponent as StarEmpty } from '../../assets/img/star_empty.svg'

function getFills(score) {
  const fills = [0, 0, 0, 0, 0];  
  const integerPart = Math.floor(score);
  
  for (let i = 0; i < integerPart; i++) {
    fills[i] = 1;
  }
  
  const diff = score - integerPart;
  if (diff > 0) {
    fills[integerPart] = 0.5;
  }
  
  return fills;
}

function MovieStars({score}){
    const fills = getFills(score)

    return(
        <div className="dsmovie-stars-container">
            { (fills[0] === 0) ? <StarEmpty /> : (fills[0] === 1) ? <StarAll /> : <StarHalf /> }
            { (fills[1] === 0) ? <StarEmpty /> : (fills[1] === 1) ? <StarAll /> : <StarHalf /> }
            { (fills[2] === 0) ? <StarEmpty /> : (fills[2] === 1) ? <StarAll /> : <StarHalf /> }
            { (fills[3] === 0) ? <StarEmpty /> : (fills[3] === 1) ? <StarAll /> : <StarHalf /> }
            { (fills[4] === 0) ? <StarEmpty /> : (fills[4] === 1) ? <StarAll /> : <StarHalf /> }
        </div>
    )
}

export default MovieStars