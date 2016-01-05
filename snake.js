$( document ).ready(function(){
  console.log('document ready!');
  const grid_side_length = 40;
  var direction;
  var snake;
  intialize_grid(grid_side_length);
  initialize_snake();
  render_snake();
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

var change_direction = function(dir){
  direction = dir;
  console.log("new direction is "+ direction);
};

// represent snake as array of arrays
// row, col
// have a render function that paints all blocks in the snake array as snake color
// when advancing
  // use direction and 'head' to add a new square to the array
  // remove the tail of the snake (last element of the snake array) [unless the snake eats that turn]


$(document).keydown(function(e) {
  switch(e.which) {
        case 37: // left
        console.log("pressed left");
        change_direction("l");
        break;

        case 38: // up
        console.log("pressed up");
        change_direction("u");
        break;

        case 39: // right
        console.log("pressed right");
        change_direction("r");
        break;

        case 40: // down
        console.log("pressed down");
        change_direction("d");
        break;

        default: return; // exit this handler for other keys
      }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });

var initialize_snake = function(){
  // create a 1 unit snake and initialize the direction of travel
  var x = Math.floor(Math.random()*20)+10;
  var y = Math.floor(Math.random()*20)+10;
  //console.log("initializing snake in col "+ x+ " row"+y);
  //console.log("query = "+'#row'+x+' #col'+y);
  snake = [];
  snake.push([x, y]);
  console.log(snake);
  //$('#row'+x+' #col'+y).addClass("snake");
};

var render_snake = function(){
  for (var i in snake){
    console.log(snake[i]);
    $('#row'+snake[i][0]+' #col'+snake[i][1]).addClass("snake");
  };
};

var increase_snake_length = function(){
  // add 1 to a snake length variable
};

var move_snake = function(){
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