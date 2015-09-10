define(['Playlist', 'Song'], function(Playlist, Song) {
  var PlaylistView = function() {
    // console.log("test")
    this.playlist = new Playlist();
    this.updatePlaylistDom();
    this.listenAddSong();

  };

  PlaylistView.prototype.listenAddSong = function(){
    var that = this;
    $('#addSongForm').on('submit', function(event){
      var song = new Song($('#song').val());
      that.playlist.addSong(song);
      that.updatePlaylistDom();
      $('#song').val('');

      return false;
    });
  };

  PlaylistView.prototype.updatePlaylistDom = function(){
    var playlist = this.playlist;
    var that = this;
    var playlistDom = playlist.playlist.map(function(song, index){
      var removeButton = document.createElement("button");
      removeButton.appendChild(document.createTextNode("remove"));
      $(removeButton).click(function(){
        playlist.removeSong(index);
        that.updatePlaylistDom();
      });
      $(removeButton).addClass("btn");

      var li = document.createElement('li');
      li.appendChild(document.createTextNode("Title: " + song.title));
      li.appendChild(removeButton);
      return li;
    });

    $('#currentPlaylist').html(playlistDom);

  };

  return PlaylistView;
});
