import React from "react";

const TrendingMovies = ({ trendingMovies }) => {
    return (
        <section className="trending">
            <h2>Highest Voted Movies</h2>

            <ul>
                {trendingMovies.map((movie, index) => (
                    <li key={movie.id}>
                        <p>{index + 1}</p>
                        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "/no-movie.png"} alt={movie.title} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default TrendingMovies;
