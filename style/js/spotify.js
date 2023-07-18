window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById('embed-iframe');
    const options = {
      width: '100%',
      height: '80',
      uri: 'spotify:playlist:7u4lebNVWo58VOe14Gi90S'
    };
    const callback = (EmbedController) => {
    //   document.querySelectorAll('.episode').forEach(
    //     episode => {
    //       episode.addEventListener('click', () => {
    //         EmbedController.loadUri(episode.dataset.spotifyId)
    //       });
    //     })
    };
    IFrameAPI.createController(element, options, callback);
  };