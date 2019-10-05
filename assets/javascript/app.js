
//PAGE LOAD DOCUMENT READY FUNCTION
$(document).ready(function(){

//BBALL PLAYERS TO PUT IN THE BUTTON
//change topic to players

var topic = ["Michael Jordan", "Kobe Bryant", "Lebron James", "Stephen Curry", "Charles Barkley", "Shaquille O'Neil", "Kevin Garnett"];
GIFArea = " "

//showing the data

function renderButtons() {
$("#players-view").empty();
//FOR LOOP THROUGH THE TOPIC

for (var i=0; i < topic.length; i++) {
//CREATE A BUTTON FIND THAT BUTTON CREATOR IN JQUERY

var a = $('<button>');
a.addClass('player');

//ADD DATA
a.attr('data-name', topic[i]);
a.text(topic[i]);
//ADD PLAYERNAME  TO TO THE BUTTON 
$('#players-view').append(a);
}
s= $("#player-input").focus();
}
renderButtons();

$("#add-player").on('click', function(){

event.preventDefault();

var player = $("#player-input").val().trim();

topic.push(player);

renderButtons();

});

$(document).on('click', 'button', function(){
$('#GIFArea').empty();
var b = $(this).attr('data-name');
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + b + "&api_key=rcs55HdKGVXLGrr9vdqbU178i4Ry3OEu&limit=10";
console.log(queryURL);

//AJAX CALL
$.ajax({
url: queryURL,
method: 'GET'
})

.done(function(response){
console.log(response);

var results = response.data;

for (var i = 0; i < results.length; i++){
    var gifDiv = $('<div class="item">');
    //MAKE THE RATINGS 
    var rating = results[i].rating;
    var r = $('<p>').text("Rating: " + rating);
    var gifImage = $('<img>');

    //ARRANGE YOUR GIFS 
    gifImage.attr('src', results[i].images.fixed_height_still.url)
    .attr('data-still', results[i].images.fixed_height_still.url)
    .attr('data-animate', results[i].images.fixed_height.url)
    .attr('data-state', "still")
    .addClass("showImage");
//displaying the rating & image
gifDiv.append(r)
  .append(gifImage);	                    

//prepending data not necessary since cleared             	  
$('#GIFArea').prepend(gifDiv);
    }

});
});

//IMAGES LOAD AS STILL WHEN CLICK IT ANIMATES MAKE AN IF ELSE STATEMENT AND MAKE ALERT
$(document).on('click', '.showImage',  function() {
var state = $(this).data('state');
if (state == "still") {
console.log("image is still");
$(this).attr('src', $(this).data('animate'))
.data('state', 'animate');
} else {
console.log("imagine was animated");
$(this).attr('src', $(this).data('still'))
.data('state', 'still');               
}

});
});

//CHECK FOR ERRORS. CLOSE ALL THE TAGS YOU OPENED 
//TAG CHECK
//INSERT YOUR CONSOLE LOGS SO THE CONSOLE KNOWS
//TRY TO COMPLETE BONUS IF TIME PERMITS