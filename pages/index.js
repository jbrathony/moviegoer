import { Box, Heading, Select } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import SearchForm from '../components/SearchForm';
import { searchMovies, getMovieDetails, getNowPlayingMovies, getPopularMovies, getTopRatedMovies } from '../lib/tmdb';
import MovieDetail from '../components/MovieDetail';

export default function Home() {
    const [searchResults, setSearchResults] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movies, setMovies] = useState([]);
    const [filter, setFilter] = useState('now_playing');


    useEffect(() => {
        const fetchNowPlayingMovies = async () => {
            const data = await getNowPlayingMovies();
            setMovies(data);
            setSearchResults(data);
        };

        fetchNowPlayingMovies();
    }, []);

    useEffect(() => {
        const fetchMovies = async () => {
            let data;
            if (filter === 'now_playing') {
                data = await getNowPlayingMovies();
            } else if (filter === 'popular') {
                data = await getPopularMovies();
            } else if (filter === 'top_rated') {
                data = await getTopRatedMovies();
            }
            console.log(filter, data);
            setMovies(data);
        };

        fetchMovies();
    }, [filter]);

    const handleSearch = async (query) => {
        if (query) {
            const data = await searchMovies(query);
            setSearchResults(data);
        } else {
            setSearchResults(movies);
        }
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const fetchMovieDetails = async (movieId) => {
        const data = await getMovieDetails(movieId);
        setSelectedMovie(data);
    };

    return (
        <Box p="4">
            <Heading as="h1" size="lg" mb="4">
                Search Movies
            </Heading>
            <SearchForm onMovieSelect={fetchMovieDetails} onSubmit={handleSearch} />
            <Select value={filter} onChange={handleFilterChange} mb="4" maxW="200px">
                <option value="now_playing">Now Playing</option>
                <option value="popular">Popular</option>
                <option value="top_rated">Top Rated</option>
            </Select>
            {selectedMovie ? (
                <MovieDetail movie={selectedMovie} />
            ) : (
                <MovieList movies={searchResults} />
            )}
        </Box>
    );
}
