
import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import {ChangeLang} from "../Context/changeLang";


function Navbar() {

    // to get number favorite movies
    const favoriteMoviesNumber = useSelector((state) => state.myFavorites.favoriteMovies.length)

    const { lang, setlang} = useContext(ChangeLang);


    const changLanguage = (ev) => {
        setlang (ev.target.value);
        console.log(lang)
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary px-4 position-sticky top-0 z-1">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li>
                            <NavLink className="nav-link active" activeStyle ={{ color: 'gold' }} to="/movies">Movies</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link active" activeStyle ={{ color: 'gold' }} to="/favorites">Favorites<span>{`(${favoriteMoviesNumber})`}</span></NavLink>
                        </li>
                    </ul>
                    
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li>
                            <select className="form-select" aria-label="Default select example" value={lang} onChange={(event) => changLanguage(event)}>
                                <option value="en">English</option>
                                <option value="ar">Arabic</option>
                            </select>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" activeStyle ={{ color: 'gold' }} aria-current="page" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" activeStyle ={{ color: 'gold' }} to="/signup">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" activeStyle ={{ color: 'gold' }} to="/todolist">ToDoList</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;