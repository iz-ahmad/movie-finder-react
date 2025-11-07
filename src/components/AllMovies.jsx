import React from "react";
import Spinner from "./Spinner.jsx";
import MovieCard from "./MovieCard.jsx";

const AllMovies = ({ movieList, isLoading, errorMessage, debouncedSearchTerm }) => {
    return (
        <section className="all-movies">
            <h2>All Movies</h2>

            {isLoading ? (
                <Spinner />
            ) : errorMessage ? (
                <p className="text-red-500">{errorMessage}</p>
            ) : (
                <>
                    <p className="text-gray-400">
                        {movieList.length || "No"} Movie{movieList.length && movieList.length === 1 ? "" : "s"}
                        {debouncedSearchTerm ? " Found" : " Loaded"}
                    </p>

                    <ul>
                        {movieList.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </ul>
                </>
            )}
        </section>
    );
};

export default AllMovies;
