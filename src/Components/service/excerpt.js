// function to shorten the overview text
function excerpt(overview, maxWords) {
   if (overview && overview.length > maxWords) {
      return overview.substring(0, maxWords) + '...'
   } else {
      return overview;
   }
}

export default excerpt