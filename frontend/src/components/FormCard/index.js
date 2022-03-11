import './style.css';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../utils/requests';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/validated';

function FormCard({movieId}) {
    const navigate = useNavigate()

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

    const handleSubmit = (event) => {
        event.preventDefault();

        const email = event.target.email.value
        const score = event.target.score.value

        if (!validateEmail(email))
        {
            alert("Email inválido")
            return;
        }

        const config = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                email: email,
                movieId: parseInt(movieId),
                score: parseInt(score)
            }
        }

        axios(config)
        .then(response => {
            navigate("/")
        })
    }

    return(
        <div className="dsmovie-form-container">
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <form className="dsmovie-form" onSubmit={handleSubmit}>
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