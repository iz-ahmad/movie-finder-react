import React from "react";
import Search from "./Search.jsx";

const HeroBanner = ({ searchTerm, setSearchTerm, debouncedSearchTerm }) => {
    return (
        <header className="mb-3">
            <img src="./hero.png" alt="Hero Banner" />
            <h1>
                Discover <span className="text-gradient">Movies</span> - to Get Obsessed with!
            </h1>

            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} debouncedSearchTerm={debouncedSearchTerm} />
        </header>
    );
};

export default HeroBanner;
