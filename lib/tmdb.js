export async function getNowPlayingMovies() {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=6bc6fbd6e3fc767255f3ac7afb469fe8&language=en-US&page=1`
    );
    const data = await response.json();
    return data.results;
}

export async function getMovieDetails(movieId) {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=6bc6fbd6e3fc767255f3ac7afb469fe8&language=en-US`
    );
    const data = await response.json();
    return data;
}

export async function searchMovies(query) {
    const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=6bc6fbd6e3fc767255f3ac7afb469fe8&language=en-US&query=${query}&page=1`
    );
    const data = await response.json();
    return data.results;
}

export async function getPopularMovies() {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=6bc6fbd6e3fc767255f3ac7afb469fe8&language=en-US&page=1`
    );
    const data = await response.json();
    return data.results;
}

export async function getTopRatedMovies() {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=6bc6fbd6e3fc767255f3ac7afb469fe8&language=en-US&page=1`
    );
    const data = await response.json();
    return data.results;
}
