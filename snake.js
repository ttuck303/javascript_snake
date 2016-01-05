$( document ).ready(function(){
  console.log('document ready!');
  const grid_side_length = 40;
  intialize_grid(grid_side_length);
  initialize_snake();
});

var intialize_grid = function(side_length){
  console.log("intializing grid!");
  for (var i = 0; i < side_length; i++){
    var current_row = 'row' + i;
    $('#game_window').append('<div class="game_row" id="'+ current_row + '"></div>');
    for (var j = 0; j < side_length; j++){
      var current_col = 'col'+j;
      $("#" + current_row).append("<div class='box' id='" + current_col+"'></div>");
    };
  };
};

var initialize_snake = function(){
  // create a 1 unit snake and initialize the direction of travel
  var x = Math.floor(Math.random()*20)+10;
  var y = Math.floor(Math.random()*20)+10;
  //console.log("initializing snake in col "+ x+ " row"+y);
  //console.log("query = "+'#row'+x+' #col'+y);
  $('#row'+x+' #col'+y).addClass("snake");
};

var increase_snake_length = function(){
  // add 1 to a snake length variable
};

var advance_snake = function(){
  // get the current direction of travel
  // get the box in that direction relative to the head of the snake
  // change css of that box
  // remove css of the end box
};

var insert_random_food = function(){
  // find the squares that are not occupied by food or snake
  // randomly pick up
  // convert it to food
};

var game_loop = function(){
  // check end game conditions, if none:
  // move the snake 1 space in the current direction
  // 

};

var eat_food = function(){
  // if a snake eats a food
    // delete the current food
    // +1 to the snake length
    // insert random food elsewhere 
};