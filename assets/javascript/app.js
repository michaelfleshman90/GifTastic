
var topics = ["Dog", "Cat", "Snake", "Bear", "Lion", "Tiger", "Badger", "Kitten", "Puppy", "Whale"];
var buttonCount = 0;
function getGiphy(event) {
    if ($(event.target).attr("id") === "newButton"){
        if (topics.indexOf($(".userText").val()) === -1){
            addSearch($(".userText").val());
        }
        
    }
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=5IU0zCwMSeOM8JSwR0BJLoOkHEKXzh8L&limit=10&lang=en";
        $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });
}

function addSearch(text) {
    buttonCount++;
    topics.push(text);
    var button = $("<button>");
    button.attr("id","button" + i);
    button.addClass("buttons");
    button.text(topics[i]);
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
    button.attr("id","newButton");
    button.text("Start Searching");
    button.addClass("button");
    var userSubmit = $("<input>");
    userSubmit.attr("type","text");
    userSubmit.addClass("usertext");
    $(".userInput").append(user,$("<br>"),userSubmit,$("<br>"),button);
    $(document.body).on("click",".button", getGiphy);


    

};