function SearchDisplay({ results }) {
   console.log(results)
   const { overview, title, poster_path, release_date } = results

   return (
      <section>
         <h2>search Result</h2>
         {results && results.map((result) => {
            const { title } = result;
            <article key={result.id}>{title}</article>
         })}
      </section>
   )
}

export default SearchDisplay;