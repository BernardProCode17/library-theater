function excerpt(overview, maxWords) {
   if (overview.length > maxWords) {
      return overview.substring(0, maxWords) + '...'
   } else {
      return overview;
   }
}

export default excerpt