import React from 'react'
import { Card, CardImg, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
export default function FavouriteComponent(props) {

    function CardComp({ movie, handleFav }) {


        return (

            <Card className="menu_items">
                <Link to={`/Home/${movie.Title}`} >
                    <CardImg className="item-image" width="254" height="254" src={movie.Poster} alt={movie.Title} />
                </Link>
                <div className="items-details">
                    <Button onClick={(e) => handleFav(e, movie, true)} className="fav-button" outline color="primary" ><i className="fa fa-times" aria-hidden="true"></i></Button>
                    <div className="item_name">{movie.Title} ({movie.Type})
              </div>
                    <div className="item_description">{movie.Year}</div>


                </div>




            </Card>
        );
    }
    var movies;
    if (props.Favorites.length === 0) {
        movies = (
            <div className="col-12 loader-container">
                <h3>You have no favorites!</h3>
            </div>);
    }
    else {

        movies = props.Favorites.map(item => {


            return (
                <div key={item.imdbID} className="col-12 col-md-4 col-lg-4 col-xl-3 menu_col">
                    <CardComp movie={item} handleFav={props.handleFav} />
                </div>);
        })
    }



    return (
        <div className="container-fluid menu_container">
            <div className="row">
                <div className="col-12 menu_head_col">
                    <h3>Your Favorites</h3>
                    <hr className="hr_" />
                </div>
            </div>
            <div className="row">
                {movies}
            </div>
        </div>
    )
}
