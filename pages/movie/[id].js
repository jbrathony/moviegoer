// movie/[id].js
import { Box, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import MovieDetail from '../../components/MovieDetail';
import { getMovieDetails } from '../../lib/tmdb';

export default function MovieDetailPage() {
    const router = useRouter();
    const { id } = router.query;
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            if (id) {
                const data = await getMovieDetails(id);
                setMovie(data);
            }
        };

        fetchMovieDetails();
    }, [id]);

    return (
        <Box p="4">
            <Heading as="h1" size="lg" mb="4">
                Movie Details
            </Heading>
            {movie ? <MovieDetail movie={movie} /> : <p>Loading...</p>}
        </Box>
    );
}
