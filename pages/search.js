// SearchForm.js
import { Box, Input, Button } from '@chakra-ui/react';

const SearchForm = ({ onMovieSelect }) => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const searchQuery = formData.get('searchQuery');
        onMovieSelect(searchQuery);
    };

    return (
        <Box as="form" mb="4" onSubmit={handleSubmit}>
            <Input name="searchQuery" placeholder="Search for movies" />
            <Button type="submit" colorScheme="blue" ml="2">
                Search
            </Button>
        </Box>
    );
};

export default SearchForm;
