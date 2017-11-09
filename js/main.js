$(function() {
  var score = 0;
  var startTime = 30;
  var timerrunning;
  var makingDucks;
  var makingUglyDucks;
  // The function for the Timer
  function timer() {
    startTime = startTime - 1;
    $("#timer").html(startTime);
    if (startTime === 0) {
      clearInterval(timerrunning);
    }
    if (startTime === 0) {
      $('#gameover').css("display", "block");
      $('#scores').html(score);
      $('.box').hide();
      $("#reload").click( function(){
        location.reload();
      })
    }
  }

  //The Function for creating the Ducks
  function createDuck() {
    var $newduck = $('<div class="ducks"><img id="duck" src="./images/duck.png" height="80px" width="80px" style="position:absolute"></div>');
    $('.middle').append($newduck);
    //Score for shooting the ducks
    $newduck.on('click', function(){
      score = score + 1;
      $("#points").html(score);
    });
    //duck animating right
    $newduck.animate({
       marginRight: '120%'
    }, 8000);
  }

  // The Function for Creating the Ugly Ducks
  function createUglyDuck() {
    var $newduck = $('<div class="duckss"><img id="duck" src="./images/uglyduck.png" height="80px" width="80px" style="position:absolute"</div>');
    $('.middle').append($newduck);
    //Score for Shooting the Ugly Ducks
    $newduck.on('click', function(){
      score = score - 2;
      $("#points").html(score);
    });
    $newduck.animate({
      marginLeft: '120%'
    }, 6000);
  }

  //The function SetStartListeners to set the start click button
  function setStartListeners() {
    // setIntervals
    $("#start").click( function(){
      timerrunning = setInterval(timer, 1000);
      makingDucks = setInterval(createDuck , 1000);
      makingUglyDucks = setInterval(createUglyDuck, 1000);
      //start button fading out
      $(this).fadeOut(2000);
    })
  }

  setStartListeners();

});
