import React, { useEffect, useState } from "react";
import "./movieList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/card";

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const { type } = useParams();

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        getData();
    }, [type]);

    const getData = () => {
        fetch(
            `https://api.themoviedb.org/3/movie/${
                type ? type : "now_playing"
            }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        )
            .then((res) => res.json())
            .then((data) => setMovieList(data.results));
    };

    return (
        <div className="movie__list">
            <div className="search__bar">
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
                <select
                    value={selectedCategory}
                    onChange={(event) => setSelectedCategory(event.target.value)}
                >
                    <option value="">All</option>
                    <option value="28">Action</option>
                    <option value="18">Drama</option>
                    <option value="14">Fantasy</option>
                    <option value="27">Horror</option>
                    <option value="35">Comedy</option>
                </select>
            </div>
            <h2 className="list__title">
                {(type ? type : "NOW PLAYING").toUpperCase()}
            </h2>
            <div className="list__cards">
                {movieList
                    .filter((movie) =>
                        (movie.original_title.toLowerCase().includes(searchTerm.toLowerCase())) &&
                        (selectedCategory === "" || movie.genre_ids.includes(parseInt(selectedCategory)))
                    )
                    .map((movie) => (
                        <Cards key={movie.id} movie={movie} />
                    ))}
            </div>
        </div>
    );
};

export default MovieList;
