import { Box, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';

const MovieCard = ({ movie }) => {
    const { title, poster_path } = movie;
    const posterUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

    return (
        <Link href={`/movie/${movie.id}`}>
            <Box borderWidth="1px" borderRadius="md" overflow="hidden" boxShadow="md">
                <Image src={posterUrl} alt={title} fallbackSrc="/images/default-poster.jpg" boxSize="200px" />
                <Box p="2">
                    <Text fontSize="sm" fontWeight="bold" mb="1">
                        {title}
                    </Text>
                </Box>
            </Box>
        </Link>
    );
};

export default MovieCard;
