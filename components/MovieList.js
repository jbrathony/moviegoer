import { SimpleGrid } from '@chakra-ui/react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
    return (
        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing="4">
            {movies?.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </SimpleGrid>
    );
};

export default MovieList;
