
var topics = ["Dog", "Cat", "Snake", "Bear", "Lion", "Tiger", "Badger", "Kitten", "Puppy", "Whale"];
var buttonCount = 0;
function getGiphy(event) {
    var text = $(event.target).text();
    if ($(event.target).attr("id") === "newbutton"){
        
        if (topics.indexOf($(".usertext").val()) === -1){
            addSearch($(".usertext").val());
            text = $(".usertext").val();
        }
        
    }
    $("#gifDiv").empty();
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=5IU0zCwMSeOM8JSwR0BJLoOkHEKXzh8L&limit=10&lang=en&q=" + text;
        $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(response) {
        console.log(queryURL);
        console.log(response); 
      
      var results = response.data;

      for (var i = 0; i < results.length; i++) {

        var imageDiv = $("<div>");
        var p = $("<p>").text("Rating: " + results[i].rating);
        var gif = $("<img>");
        gif.attr("still", results[i].images.original_still.url);
        gif.attr("gif", results[i].images.fixed_height.url);
        gif.attr("state", "still");
        gif.attr("src", results[i].images.original_still.url);
        imageDiv.append(p);
        imageDiv.append(gif);
        
        gif.on("click", gifState);
        function gifState(event) {
            if ($(event.target).attr("state") === "still") {
                $(event.target).attr("src", $(event.target).attr("gif"));
                $(event.target).attr("state", "gif");
            }
            else {
                $(event.target).attr("src", $(event.target).attr("still"));
                $(event.target).attr("state", "still");
            }
        };
        $("#gifDiv").prepend(imageDiv);
      }
    });
}

function addSearch(text) {
    buttonCount++;
    topics.push(text);
    var button = $("<button>");
    button.attr("id","button" + buttonCount);
    button.addClass("buttons");
    button.text(text);
    $("#buttonSection").append(button);
}
function load(){
    for (i=0; i<topics.length; i++) {
        buttonCount++;
        var button = $("<button>");
        button.attr("id","button" + i);
        button.addClass("buttons");
        button.text(topics[i]);
        $("#buttonSection").append(button);
    }
    var user = $("<label>");
    user.addClass("");
    user.text("Enter keyword to creat a new button!  ");
    var button = $("<button>");
    button.attr("type", "button");
    button.attr("id","newbutton");
    button.text("Start Searching");
    button.addClass("buttons");
    var userSubmit = $("<input>");
    userSubmit.attr("type","text");
    userSubmit.addClass("usertext");
    $(".userInput").append(user,$("<br>"),userSubmit,$("<br>"),button);
    $(document.body).on("click",".buttons", getGiphy);
};