function videoFilter(videoArray){

   videoArray.filter((trailer)=>{
    if(trailer.site === 'YouTube' && trailer.type === 'Trailer')
    return trailer
   })
}

export default videoFilter;