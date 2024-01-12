


function SearchDisplay({searchresults}){

   console.log(searchresults)

   return(
      <section>
         <h2>search Result</h2>
         {searchresults.map((result) => (
          <div key={result.id}>{result}</div>
         ))}
      </section>
   )
}

export default SearchDisplay;