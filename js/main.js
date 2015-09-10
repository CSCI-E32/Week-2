requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'vendors/jquery.min',
        bootstrap: 'vendors/bootstrap.min'
    },
    shim: {
      bootstrap: {
        deps: ['jquery']
      }
    }
});

requirejs(['jquery', 'bootstrap', 'PlaylistView'], function($, bootstrap, PlaylistView) {
  $(function(){

    var playlistView = new PlaylistView();

  });
});
