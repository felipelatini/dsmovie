import { Link } from 'react-router-dom';
import MovieScore from '../MovieScore';

function MovieCard({id, title, score, count, image}) {
    return (
        <div>
            <img className="dsmovie-movie-card-image" src={image} alt={title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{title}</h3>
                <MovieScore score={score} count={count} />

                <Link to={`/form/${id}`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>
            </div>
        </div>
    )
}

export default MovieCard