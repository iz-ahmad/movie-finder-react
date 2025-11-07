import React from "react";

const MovieCard = ({ movie: { title, overview, vote_average, vote_count, poster_path, release_date, original_language } }) => {
    return (
        <div className="movie-card">
            <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : "/no-movie.png"} alt={title} />

            <div className="mt-4">
                <h3>{title}</h3>
                <p className="text-sm text-gray-400 line-clamp-3 text-ellipsis text-justify mt-2 mb-4">{overview || ""}</p>

                <div className="content">
                    <div className="rating">
                        <img src="star.svg" alt="Star Icon" />
                        <p>{vote_average ? vote_average.toFixed(1) : "N/A"} {vote_count && (<span className="text-sm text-gray-400">({vote_count})</span>)}</p>
                    </div>

                    <span>•</span>
                    <p className="lang">{original_language}</p>

                    <span>•</span>
                    <p className="year">{release_date ? release_date.split("-")[0] : "N/A"}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
