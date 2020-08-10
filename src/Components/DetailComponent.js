import React, { useEffect } from 'react'



export default function DetailComponent({ isLoading, movie, fetchDetails, title }) {

    useEffect(() => {

        console.log(isLoading);
        if (movie.Title !== title) {
            console.log("calling fetch details")
            fetchDetails(title);
        }
        else {
            return;
        }


    }, []);
    return (
        <div className="container detail-container">
            <div className="row">
                <div className="col-12 menu_head_col">
                    <h3 className="header-deatail">{movie.Title} <span>({movie.Year}) </span><span className="rat"><i class="fa fa-star gol-icon" aria-hidden="true"></i>{movie.imdbRating}<span className="outof">/10</span></span> </h3>

                </div>
                <div className="col-sm-4 det-img-con"><img className="det-image" src={movie.Poster} alt={movie.Title} ></img></div>
                <div className="col-sm-8">
                    <div className="box-1">
                        <div className="detail-item">Directed By:<span className="fl-r"> {movie.Director} </span></div>
                        <div className="detail-item">Release Date:<span className="fl-r"> {movie.Released} </span></div>
                        <div className="detail-item">Production:<span className="fl-r"> {movie.Production} </span></div>
                        <div className="detail-item">Country:<span className="fl-r"> {movie.Country} </span></div>
                        <div className="detail-item">Box Office:<span className="fl-r"> {movie.BoxOffice} </span></div>
                    </div>
                    <div className="plot-con">
                        <div className="plot">Plot:</div>
                        <div className="plot-details">{movie.Plot}</div>

                    </div>
                    <div className="box3">
                        <div className="det">Writers: </div>
                        <div className="det-sm"> {movie.Writer}</div>
                        <div className="det">Actors:</div>
                        <div className="det-sm"> {movie.Actors}</div>
                    </div>

                </div>


            </div>
        </div>
    )
}
