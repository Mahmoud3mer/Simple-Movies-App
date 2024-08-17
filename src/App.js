import './App.css';
import LogIn from './pages/login/login';
import SignUp from './pages/register/signup';
import ToDoListForm from './ToDoList/todoform';
import Navbar from './components/navbar';
import { BrowserRouter, Route , Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Movies from './pages/movies/movies';
import Favorites from './pages/favorites/favorites';
import Home from './pages/home/home';
import NotFound from './pages/NotFoundPage/notFound';
import MovieDetails from './pages/movieDetails/movie-details';
import { useState } from 'react';
import {ChangeLang} from './Context/changeLang';


function App() {
  const [lang, setlang] = useState('ar');
  return (
    <>
      
      <BrowserRouter>
      <ChangeLang.Provider value={{ lang, setlang}}>
        <Navbar />
          <Switch>
            <Route path = "/" component={Home} exact/>
            <Route path = "/login" component={LogIn} exact/>
            <Route path = "/signup" component={SignUp} exact/>
            <Route path = "/movies" component={Movies} exact/>
            <Route path = "/favorites" component={Favorites} exact/>
            <Route path = "/todolist" component={ToDoListForm} exact/>
            
            <Route path = "/moviedetails/:id" component={MovieDetails} exact/>

            <Route path = "*" component={NotFound} exact/>
          </Switch>
        </ChangeLang.Provider>
      </BrowserRouter>
      {/* <LogIn /> */}
      {/* <SignUp /> */}
      {/* <ToDoListForm/> */}
    </>
  );
}

// 29cf44b93ca83bf48d9356395476f7ad

export default App;
