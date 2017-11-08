$(function() {
    console.log( "ready!" );



  // setInterval
  $("#start").click( function(){
    var score = 0;
    var startTime = 30;
    var timerrunning = setInterval( function(){ timer() } , 1000);
    var makingDucks = setInterval( function(){ createDuck() } , 1000);
    var makingUglyDucks = setInterval( function(){ createUglyDuck() } , 1000);
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
       marginRight: '120%',
    }, 8000);
  }
  function createUglyDuck() {
  var $newduck = $('<div class="duckss"><img id="duck" src="uglyduck.png" height="80px" width="80px" style="position:absolute" style ="marginLeft:180%"> </div>');
  $('.middle').append($newduck);
  //create duck off screen with negative margin
  $newduck.on('click', function(){
    console.log("clicked");
    score = score - 2;
    $("#points").html(score);
  });


  $newduck.animate({
     marginLeft: '120%',
  }, 6000);
}


  })

});
