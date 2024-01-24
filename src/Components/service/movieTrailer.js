function videoFilter({videoArray}) {
console.log(videoArray)
return videoArray.filter((video) => video.type === 'Trailer')
}

export default videoFilter