$( document ).ready(function() {
    console.log( "ready!" );

$("#start").click( function(){
  console.log("clicked");
} )

// start timer
// setInterval

//score
// Empty variable set to 0,
// and every time you click the duck
// the score variable gets increased by 1
var score = 0;
$("#duck").click( function(){
  //console.log("clicked");
  score = score + 1;
  $("#points").html(score);
} )


//ducks movement





// game over




});
