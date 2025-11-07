import React from "react";

const Footer = () => {
    return (
        <footer className="mt-10 py-4 block justify-center items-center">
            <p className="text-center text-sm text-gray-600">
                &copy; {new Date().getFullYear()}{" "}
                <a href="#/" className="text-indigo-600">
                    Movie Finder
                </a>
                <span className="text-gray-600"> | </span> All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
