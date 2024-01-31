function Pages({ totalPages, currentpage, onPageChange }) {
   const pages = [...Array(totalPages).keys()].map(i => 1 + 1);
   console.log()
   return (
      <div>
         {pages.map(page =>
            <button key={page}>{page}</button>
         )}
      </div>

   )
}

export default Pages;