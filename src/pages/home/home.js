

// function Home(){
//     return(
//         <>
//             <h1>Home</h1>
//         </>
//     )
// }

import React from "react";
import { connect } from "react-redux";
import { AddToFavorites } from "../../Redux/Actions/AddToFavoritesAction";

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    getData = () =>{
        console.log(this.props.myFavoriteMovie)
        // this.props.AddToFavorites()
    }
    render() {
        return(
            <>
                <button className="btn btn-primary" onClick={this.getData}>get</button>
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        myFavoriteMovie: state.myFavorites.favoriteMovies
    }
}

// export default Home;
export default connect(mapStateToProps ,{AddToFavorites}) (Home);