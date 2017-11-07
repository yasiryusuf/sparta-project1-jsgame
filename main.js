$( document ).ready(function() {
    console.log( "ready!" );


// setInterval
$("#start").click( function(){
  var startTime = 30;
  var timerrunning = setInterval( function(){ timer() } , 1000);

  // Timer Countdown
  function timer() {
    startTime = startTime - 1;
    $("#timer").html(startTime);
    if (startTime === 0) {
      //
      clearInterval(timerrunning);
    }
  }

  var score = 0;
    $("#duck").click( function(){
    //console.log("clicked");
    score = score + 1;
    $("#points").html(score);
  })


  $("#duck").animate({
   marginLeft: '250px',
  });


  //
  // var marginLeftVariable = 0;
  // $("#duck").animate({
  //      marginLeft: marginLeftVariable
  //  }, 2000);
  //
  //
  // for (var i = 1; i <= pageLimit; i++){
  //     $('#test').append('TESTING');
  // }


})

//ducks movement

// A function to create multiple ducks.
// A for loop that creates the HTML duck element
// A random number that determines the direction
// a function that indefinitely increases the left or right margin of the duck in animate()




// game over




});
