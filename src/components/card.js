import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './card.css';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToFavorites } from "../Redux/Actions/AddToFavoritesAction";
import { RemoveFromFavorite } from "../Redux/Actions/RemovFromFavorite";

function Card(props) {
    const [movie, setMovie] = useState({}); // current from props from movies File
    // Redux update data
    const dispatch = useDispatch()

    const favoritesMovies = useSelector((state) => state.myFavorites.favoriteMovies);

    const isFavorite = favoritesMovies.find((movie) => movie.id === props.currentMovie.id)? true : false;

    const toggleMovie = (isFavorite) =>{
        if (isFavorite) {
            dispatch(AddToFavorites(props.currentMovie))
        }else{
            dispatch(RemoveFromFavorite(props.currentMovie))
        }
        // console.log(props.currentMovie)
        console.log(isFavorite)
    }

    return (
        <>
            <div className={props.widthCard}>
                <div className="card m-3 position-relative" >
                    <img src={props.image} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h6 className="card-title text-warning">{props.title}</h6>
                            {props.discription && <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>}
                            <h6>Vote: <span className="text-warning">{props.vote}</span></h6>
                            {props.rate && <span className="bg-warning p-2 border rounded-circle position-absolute top-0 start-0">{props.rate.toFixed(1)}</span>}
                            {props.url && <Link to={props.url} className="btn btn-dark mx-auto d-block">Movie Details</Link> }

                            <FontAwesomeIcon icon={faStar} 
                                className={`fs-4 mt-3 myFavIcon ${isFavorite === true? "text-warning": "text-light"}`}
                                onClick={() => toggleMovie(!isFavorite)}
                                />
                        </div>
                </div>
            </div>
        </>
    )
}


export default Card;