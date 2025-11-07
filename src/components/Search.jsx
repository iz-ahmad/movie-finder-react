import React from "react";

const Search = ({ searchTerm, setSearchTerm, debouncedSearchTerm }) => {
    return (
        <>
            <div className="search">
                <div>
                    <img className="ml-2" src="search.svg" alt="search" />

                    <input
                        className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent focus:rounded-md py-3 pr-4 pl-12"
                        type="text"
                        placeholder="Search through thousands of movies"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            
            { debouncedSearchTerm && (
                <p className="text-sm text-gray-400 mt-3 text-center">Showing results for "{debouncedSearchTerm || "N/A"}"</p>
            )}
        </>
    );
};

export default Search;
