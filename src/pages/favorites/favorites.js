import { useSelector } from "react-redux";
import Card from "../../components/card";


function Favorites(){
    // get data from redux
    const myFavoriteMovies = useSelector((state) => state.myFavorites.favoriteMovies);
    console.log("favorites",myFavoriteMovies)

    return(
        <>
        <div className="container d-flex flex-wrap">
            {
                myFavoriteMovies.length === 0? <h1 className="bg-light p-5 text-center text-warning">There is no favorite movies</h1> : myFavoriteMovies.map((movie,index) => {
                    return(
                            <Card 
                                key={index}
                                title={movie.title}
                                image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                rate={movie.vote_average}
                                widthCard={"col-lg-3 col-md-4 col-sm-6 col-xs-12"}
                                vote={movie.vote_count}
                                url={`/moviedetails/${movie.id}`}
                                currentMovie={movie}
                            />
                    )
                })
                
            }
            </div>
        </>
    )
}


export default Favorites;
