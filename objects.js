let playlist = {
  MichaelJackson: 'triller',
  
}

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign({}, playlist, {MichaelJackson:['triller', 'My Bloody Valentine']})
  return playlist
}

