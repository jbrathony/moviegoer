import { Box, Image, Text } from '@chakra-ui/react';

const MovieDetail = ({ movie }) => {
    const { title, overview, poster_path } = movie;
    const posterUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

    return (
        <Box display="flex" alignItems="center" p="4">
            <Image src={posterUrl} alt={title} fallbackSrc="/images/default-poster.jpg" />
            <Box ml="4">
                <Text fontSize="xl" fontWeight="bold" mb="2">
                    {title}
                </Text>
                <Text>{overview}</Text>
            </Box>
        </Box>
    );
};

export default MovieDetail;
