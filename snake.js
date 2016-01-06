$( document ).ready(function(){
  console.log('document ready!');
  grid_side_length = 40; // global variable TO DO pass grid size without making this a global variable
  var direction;
  var snake;
  var game_over;
  food_present = false;
  intialize_grid(grid_side_length);
  initialize_snake();
  initialize_direction();
  render_snake();
  var turn_timer = window.setInterval(game_loop, 500);
});

var intialize_grid = function(side_length){
  game_over = false;
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

var initialize_direction = function(){
  switch(Math.floor(Math.random()*4)){
    case 0:
    direction = 'u';
    break;

    case 1:
    direction = 'r';
    break;

    case 2:
    direction = 'd';
    break;

    case 3:
    direction = 'l';
    break;
  };
  console.log("initial direction = "+direction);
}

var change_direction = function(dir){
  direction = dir;
  console.log("new direction is "+ direction);
};


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

var get_adjacent_box = function(current_box, direction){
  var current_row = current_box[0];
  var current_col = current_box[1];
  var adjacent;
  switch(direction){
    case 'u':
    adjacent = [current_row-1, current_col];
    break;

    case 'r':
    adjacent = [current_row, current_col+1];
    break;

    case 'd':
    adjacent = [current_row+1, current_col];
    break;

    case 'l':
    adjacent = [current_row, current_col-1];
    break;
  };
  return adjacent;
};

var move_snake = function(){
  var head = snake[0];
  var adjacent_box = get_adjacent_box(head, direction);
  console.log("adjacent box to enter is "+ adjacent_box);
  // change css of that box
  snake.unshift(adjacent_box);
  var tail = snake.pop();
  find_space_from_arr(tail).removeClass('snake');

  // remove css of the end box
};

var insert_random_food = function(){
  // find the squares that are not occupied by snake (only 1 food item at a time currently so don't need to check for that)
  var empty_space = get_unoccupied_space(grid_side_length);
  console.log("found empty space at " + empty_space);
  // make it food
  find_space_from_arr(empty_space).addClass('food');
  food_present = true; // flip flag to make food present
};

var find_space_from_arr = function(arr){
  return $('#row'+arr[0]+' #col'+arr[1]);
}

var get_unoccupied_space = function(board_side_length){
  var x = Math.floor(Math.random()*board_side_length);
  var y = Math.floor(Math.random()*board_side_length);
  if (find_space_from_arr([x, y]).hasClass('snake')) {
    return get_unoccupied_space(board_side_length);
  } else {
    return [x, y];
  };
};

var game_loop = function(){
  console.log('game loop active. direction = '+direction);
  if(game_over){
    window.clearInterval(turn_timer);
  } else{
    if (!food_present){
      insert_random_food(); 
    }
    
    move_snake();
    render_snake();
  }
  // check end game conditions, if none:
  // move the snake 1 space in the current direction
    // use direction and 'head' to add a new square to the array
    // remove the tail of the snake (last element of the snake array) [unless the snake eats that turn]

  

};

var eat_food = function(){
  // if a snake eats a food
    // delete the current food
    // +1 to the snake length
    // insert random food elsewhere 
  };