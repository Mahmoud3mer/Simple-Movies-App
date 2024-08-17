import { useEffect, useState } from "react";
import Card from "../../components/card";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


function MovieDetails(){

    const [movie,setMovie] = useState({});
    const params = useParams()
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=29cf44b93ca83bf48d9356395476f7ad`)
        .then((res) => {
            // console.log(res.data);
            setMovie(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    },[]);

    return(
        <>
            <div className="container">
                <h1 className="text-warning text-center my-4 bg-secondary py-4">{movie.title}</h1>
                <Card 
                    title={movie.title}
                    image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    discription={movie.overview}
                    widthCard={"col-12"}
                    vote={movie.vote_count}
                />
            </div>
        </>
    )
}


export default MovieDetails;