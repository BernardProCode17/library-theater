function videoFilter(videoArray) {

return videoArray.filter((video) => video.type === 'Trailer')
}

export default videoFilter