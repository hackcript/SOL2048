// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "http://d1e3ezyatlol8u.cloudfront.net/img/212/doge-derp-212.gif",
        "http://d1e3ezyatlol8u.cloudfront.net/img/212/doge-fat-212.gif",
        "http://d1e3ezyatlol8u.cloudfront.net/img/212/doge-gradient-212.gif",
        "http://d1e3ezyatlol8u.cloudfront.net/img/114/doge-wink-114.gif",
    ];
    for(var i = 0; i < imageList.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }