function videoFilter(videoArray) {
// console.log(videoArray)
videoArray.filter((video) => {return video.site ===  'YouTube' & video.type === 'Trailer'})
}

export default videoFilter;