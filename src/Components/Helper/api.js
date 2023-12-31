const api = {
  apiURL: "https://api.themoviedb.org/3",
  apiKey: "0aa563555938527c74fc37fad25578db",
  apiImage: "https://image.tmdb.org/t/p/w500/",
  apiVideo: "/movie/{movie_id}/videos",
  apiSearchURL: "/search/movie",
  apiListing: {
    "Popular": "/movie/popular?api_key=0aa563555938527c74fc37fad25578db",
    "Now Playing": "/movie/now_playing?api_key=0aa563555938527c74fc37fad25578db",
    "Upcoming": "/movie/upcoming?api_key=0aa563555938527c74fc37fad25578db",
    "Top Rated": "/movie/top_rated?api_key=0aa563555938527c74fc37fad25578db",
  },
  getMovie: async function (id) {
    const response = await fetch(`${this.apiURL}/movie/${id}?api_key=${this.apiKey}`);
    return await response.json();
  },

  apiHeaderVideo: async function () {
    const response = await fetch(`${this.apiURL}${this.apiListing['Popular']}`);
    return await response.json();
  },

  apiTrailer: async function (movie_id) {
    const response = await fetch(`${this.apiURL}${this.apiVideo}?${this.apiKey}`)
    return await response.json();
  },

  apiSearch: async function (searchterm) {
    const response = await fetch(`${this.apiURL}${this.apiSearchURL}?api_key=${this.apiKey}&query=${searchterm}`);
    const data = await response.json();
    return data;
  }
}
export default api;
