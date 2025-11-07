import React, { useState } from "react";
import Search from "./components/Search.jsx";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <main>
            <div className="pattern"></div>

            <div className="wrapper">
                <header>
                    <img src="./hero.png" alt="Hero Banner" />
                    <h1>
                        Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle!
                    </h1>

                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </header>
                <h1 className="text-3xl font-bold underline text-center">Movie Finder</h1>
            </div>
        </main>
    );
};

export default App;
