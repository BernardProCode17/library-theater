const api = {
  apiURL: "https://api.themoviedb.org/3",
  apiKey: "0aa563555938527c74fc37fad25578db",
  apiImage: "https://image.tmdb.org/t/p/w500/",
  apiListing: {
    "Popular":"/movie/popular?api_key=0aa563555938527c74fc37fad25578db",
    "Top Rated":"/movie/top_rated?api_key=0aa563555938527c74fc37fad25578db",
    "Now Playing":"/movie/now_playing?api_key=0aa563555938527c74fc37fad25578db",
    "Upcoming":"/movie/upcoming?api_key=0aa563555938527c74fc37fad25578db",
  },
  getMovie: async function (id) {
    const response = await fetch(`/api/movies/${id}?0aa563555938527c74fc37fad25578db`);
    return await response.json();
  }
}
export default api;
