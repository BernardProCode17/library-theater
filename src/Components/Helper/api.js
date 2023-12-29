const api = {
apiURL: 'https://api.themoviedb.org/3',
apiKey: '0aa563555938527c74fc37fad25578db',
apiListing: {
   Popular: '/movie/popular?api_key=0aa563555938527c74fc37fad25578db',
   TopRated: '/movie/top_rated?api_key=0aa563555938527c74fc37fad25578db',
   NowPlaying: '/movie/now_playing?api_key=0aa563555938527c74fc37fad25578db',
   Upcoming: '/movie/upcoming?api_key=0aa563555938527c74fc37fad25578db',
   },
apiImage: 'https://image.tmdb.org/t/p/w500/'
}
export default api;