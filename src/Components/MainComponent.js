import React from 'react'
import SearchBarComponent from "./SearchBarComponent";
import { Card, CardImg, Button } from 'reactstrap';
import { Loading } from './LoaderComponent';
import { Link } from 'react-router-dom';


function CardComp({ movie, handleFav, favId }) {


    const isFav = (favId.indexOf(movie.imdbID) >= 0);
    return (

        <Card className="menu_items">
            <Link to={`https://github.com/Zaidi10/Movie-Search-App-React/Home/${movie.Title}`} >
                <CardImg className="item-image" width="254" height="254" src={movie.Poster} alt={movie.Title} />
            </Link>
            <div className="items-details">
                <Button onClick={(e) => handleFav(e, movie, isFav)} className="fav-button" outline color="primary" >
                    {isFav ?
                        <span className="fa fa-heart"></span>
                        :
                        <span className="fa fa-heart-o"></span>
                    }
                </Button>
                <div className="item_name">{movie.Title} ({movie.Type})
          </div>
                <div className="item_description">{movie.Year}</div>


            </div>




        </Card>
    );
}









export default function MainComponent({ data, handleClick, handleFav, favId, isLoading, errMess }) {


    console.log("err mess is" + errMess)
    var movies = "";
    if (isLoading) {
        movies = (<Loading />);
    }
    else if (errMess) {
        console.log("indie err message render")
        movies = (
            <div className="col-12 loader-container">
                <h3>{errMess}</h3>
            </div>);
    }
    else if (data.Search) {
        movies = data.Search.map(item => {

            return (
                <div key={item.imdbID} className="col-12 col-md-4 col-lg-4 col-xl-3 menu_col">
                    <CardComp handleFav={handleFav} favId={favId} movie={item} />
                </div>);
        })
    }
    return (




        <div>
            <SearchBarComponent handleSerch={handleClick} />


            <div className="container-fluid menu_container">
                <div className="row">
                    <div className="col-12 menu_head_col">
                        <h3>Results</h3>
                        <hr className="hr_" />
                    </div>
                </div>

                <div className="row">
                    {movies}
                </div>

            </div>
        </div>
    )
}
