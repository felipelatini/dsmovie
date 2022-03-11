import './style.css';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../utils/requests';
import axios from 'axios';
import { Link } from 'react-router-dom';

function FormCard({movieId}) {
    const [movie, setMovie] = useState({
        id: 0,
        title: "",
        score: 0,
        count: 0,
        image: ""
    })

    useEffect(() =>{
        axios.get(`${BASE_URL}/movies/${movieId}`)
        .then(response => {
            setMovie({
                id: response.data.id,
                title: response.data.title,
                score: response.data.score,
                count: response.data.count,
                image: response.data.image
            })
        })
    },[movieId])

    return(
        <div className="dsmovie-form-container">
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <form className="dsmovie-form">
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="dsmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                    </div>
                </form >

                <Link to="/">
                    <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
                </Link>
            </div >
        </div >
    )
}

export default FormCard