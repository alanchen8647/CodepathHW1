import React from "react";

function MovieCard({ movie }) {
    let StarRating = ""

    for (let i = 0; i < movie.rating; i++){
        StarRating += "⭐"

    }
    return (
        <div className="card">
            <img src={movie.poster} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
                <p>Director: {movie.director}</p>
                <p>Rating: {StarRating}</p>
                <button className="buyButton">Buy Ticket</button>
        </div>
    )
}

export default MovieCard;