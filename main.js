$(function() {
    console.log( "ready!" );
  // setInterval
  $("#start").click( function(){
    var score = 0;
    var startTime = 30;
    var timerrunning = setInterval( function(){ timer() } , 1000);
    var makingDucks = setInterval( function(){ createDuck() } , 1000);
  // Timer Countdown
  function timer() {
    startTime = startTime - 1;
    $("#timer").html(startTime);
    if (startTime === 0) {
      clearInterval(timerrunning);
    }
    if (startTime === 0) {
      alert('Your Score is ' + score)
    }
  }
  //appends new duck
  function createDuck() {
    var $newduck = $('<div class="ducks"><img id="duck" src="duck.png" height="80px" width="80px" style="position:absolute"></div>');
    $('.middle').append($newduck);
    //score for the game
    $newduck.on('click', function(){
    console.log("clicked");
    score = score + 1;
    $("#points").html(score);
    });
    //duck animating right
    $newduck.animate({
       marginLeft: '100%',
    }, 8000);
  }
  })
});
