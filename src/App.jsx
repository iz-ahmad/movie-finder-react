import React, { useState, useEffect } from "react";
import HeroBanner from "./components/HeroBanner.jsx";
import TrendingMovies from "./components/TrendingMovies.jsx";
import AllMovies from "./components/AllMovies.jsx";
import Footer from "./components/Footer.jsx";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
    },
};

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [movieList, setMovieList] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);

    const fetchMovies = async (query = "") => {
        setIsLoading(true);
        setErrorMessage("");

        try {
            const endpoint = query ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}` : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

            const response = await fetch(endpoint, API_OPTIONS);
            if (!response.ok) {
                throw new Error("Failed to fetch movies. Please try again.");
            }

            const data = await response.json();
            if (data.Response === "False") {
                setErrorMessage("No movies found. Please try again.");
                return;
            } else if (!data.results || data.results.length === 0) {
                setErrorMessage("No movies found. Please try a different search term.");
                return;
            }

            setMovieList(data.results || []);
        } catch (error) {
            console.error("Error fetching movies:", error);
            setErrorMessage("Failed to fetch movies. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const loadTrendingMovies = async () => {
        try {
            const movies = movieList
                .filter((movie) => movie.vote_count !== undefined)
                .sort((a, b) => b.vote_count - a.vote_count)
                .slice(0, 5);

            setTrendingMovies(movies);
        } catch (error) {
            console.error(`Error fetching trending movies: ${error}`);
        }
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [searchTerm]);

    useEffect(() => {
        fetchMovies(debouncedSearchTerm);
    }, [debouncedSearchTerm]);

    useEffect(() => {
        loadTrendingMovies();
    }, [movieList]);

    return (
        <>
            <main>
                <div className="pattern"></div>

                <div className="wrapper">
                    <HeroBanner searchTerm={searchTerm} setSearchTerm={setSearchTerm} debouncedSearchTerm={debouncedSearchTerm} />

                    {trendingMovies.length > 0 && (
                        <TrendingMovies trendingMovies={trendingMovies} />
                    )}

                    <AllMovies movieList={movieList} isLoading={isLoading} errorMessage={errorMessage} debouncedSearchTerm={debouncedSearchTerm} />
                </div>
            </main>

            <Footer />
        </>
    );
};

export default App;
