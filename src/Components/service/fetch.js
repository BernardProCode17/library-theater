// Fetchs the actors and character information



// import { useEffect} from "react";
// import api from './api'

// function Fetch(setData){
  

//    useEffect(() => {
//       fetch(api.apiURL + api.apiListing.Popular)
//         .then((response) => response.json())
//         .then((data) => {
//          if (data && data.results && data.results.length > 0) {
//             //const genreIds = data.results[7].id
//             const movieId = data.results[7].id; 

//             fetch(`${api.apiURL}/genre/movie/list?api_key=${api.apiKey}&language=en-CA`)
//                .then((response) => response.json())
//                .then((genreData) => {
//                   const genreIds = genreData.genres.map((genre) => genre.name);
//                   if (data.results && data.results[7]) {
//                      data.results[7].genreIds = genreIds;
//                   }
//                });

//             fetch(`${api.apiURL}/movie/${movieId}/credits?api_key=${api.apiKey}`)
//                .then((response) => response.json())
//                .then((creditData) => {
//                   if (data.results && data.results[7]) {
//                      data.results[7].credit = creditData;
//                      setData(data.results[7]);
//                   }
//                });
            
//          }
//         })
//         .catch((error) => console.log("Error:", error));
//     }, [setData]);

// }

// export default Fetch;