$( document ).ready(function(){
  console.log('document ready!');
  const grid_side_length = 50;


var intialize_grid = function(side_length){
  console.log("intializing grid!");
  for (var i = 0; i < side_length; i++){
    var current_row = 'row' + i;
    $('#game_window').append('<div class="game_row" id="'+ current_row + '"></div>');
    for (var j = 0; j < side_length; j++){
      $("#" + current_row).append("<div class='box'></div>");
    };
  };
};

  intialize_grid(grid_side_length);
});