import { useContext, useEffect, useState } from "react";
import Card from "../../components/card";
import axios from "axios";
import Pagination from "../../components/pagination";
import Title from "../../components/title";
import { useDispatch, useSelector } from "react-redux";
import { LoaderAction } from "../../Redux/Actions/LoaderAction";
import Loader from "../../components/Loader/loader";
import { getMovies } from "../../Redux/Actions/getMoviesAction";
import { ChangeLang } from "../../Context/changeLang";

function Movies(){
    // const [movies ,setMovies] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [resultSrarch, setResultSrarch] = useState([]);
    const [pageNumber ,setPageNumber] = useState(1);
    // lang from context
    const {lang ,setLang} = useContext(ChangeLang);
    // https://api.themoviedb.org/3/movie/popular?api_key=29cf44b93ca83bf48d9356395476f7ad

    // REDUX Loader
    const loader = useSelector((state) => state.myLoader.isLoading);
    const dispatch = useDispatch();
    const list = useSelector((state) => state.myMovies.movies)

// https://api.themoviedb.org/3/tv/popular?api_key=592d5558fe91383c9979c4a7c357bfee&language=${lang}&page=${pageNumber}
// https://api.themoviedb.org/3/movie/${params.id}?api_key=29cf44b93ca83bf48d9356395476f7ad

    useEffect(() => {
        dispatch(LoaderAction(true))
        const url = searchName === ''? 
        `https://api.themoviedb.org/3/tv/popular?api_key=29cf44b93ca83bf48d9356395476f7ad&language=${lang}&page=${pageNumber}`:
        `https://api.themoviedb.org/3/search/movie?api_key=29cf44b93ca83bf48d9356395476f7ad&query=${searchName}`;

        dispatch(getMovies(url))
        
    },[searchName ,pageNumber,lang , dispatch])

    useEffect(() => {
        if (list.length > 0) {
            setResultSrarch(list);
            dispatch(LoaderAction(false));
        }
    }, [list, dispatch]);


    const changeData = (event) => {
        setSearchName(event.target.value)
    }

    const toPrevious = () => {
        setPageNumber(pageNumber - 1)
    }

    const toNext = () => {
        setPageNumber(pageNumber + 1)
    }

    return(
        <>
            <div className="container my-5">
                <Title title={"Movies"} textColor={"text-warning"} textPosition={"text-center"}/>
                <input 
                    type="text" 
                    className="form-control mb-4" 
                    placeholder="search to movie" 
                    onChange={(ev) => changeData(ev)}
                />
                <div className="d-flex flex-wrap">
                    {loader == true? <Loader /> : resultSrarch.map((movie,index) => {
                        return(
                            <Card 
                                key={index}
                                title={movie.name}
                                image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                rate={movie.vote_average}
                                widthCard={"col-lg-3 col-md-4 col-sm-6 col-xs-12"}
                                vote={movie.vote_count}
                                url={`/moviedetails/${movie.id}`}
                                currentMovie={movie} 
                            />
                        )
                    })}
                    {}
                </div>

                    {/* Pagination */}
                    <nav aria-label="Page navigation example mt-4">
                        <ul className="pagination">
                            <li className="page-item">
                                <button className="btn btn-dark"  disabled={pageNumber < 1} onClick={() => toPrevious()}>Previous</button>
                            </li>
                            <li className="page-item ms-auto">
                                <button className="btn btn-dark" onClick={() => toNext()}>Next</button>
                            </li>
                        </ul>
                    </nav>
            </div>
            
        </>
    )
}


export default Movies;