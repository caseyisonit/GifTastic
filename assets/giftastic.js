// BUTTONS AT THE TOP
$(document).ready(function () {
    var buttonArea = $("#buttonArea");
    var topics = ["DOGS", "CATS", "FROGS"];

    function renderBtn() {
        buttonArea.empty();
        for (var i = 0; i < topics.length; i++) {
            var btn = $("<button>");
            btn.addClass("topics btn btn-primary btn-lg").text(topics[i]);
            btn.attr("data-name", topics[i]);
            btn.attr("style", "margin: 10px");
            buttonArea.append(btn);
        }
    }

    renderBtn();

    // FORM

    $("#add-topic").on("click", (function (event) {
        event.preventDefault();
        console.log("Hello World");
        var userInput = $("#userInput").val().trim().toUpperCase();
        topics.push(userInput);
        renderBtn();
    }));

    // APPENDING GIFS

    $("#buttonArea").on('click', '.topics', function (event) {
        var query = $(this).data("name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=DJZCSsxnXzdnyZsX1TJJM4xMq0Of9PYi&limit=10";
        
        console.log("this is this: " + 3)

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            for(i = 0; i < response.data.length; i++){
            var giphyDiv = $("<div class='giphy'>");
            var giphyImg = $("<img>");
            var imgURL = response.data[i].images.original.url;
            var rating = response.data[i].rating;
            var pOne = $("<p>").text("Rating: " + rating);
            giphyImg.attr("src", imgURL);
            giphyDiv.append(giphyImg);
            giphyDiv.append(pOne);
            $("#giphy-window").prepend(giphyDiv);
        }
        })
    });

    // START STOP GIFS
    // click function
    // if else if to display

    // api.giphy.com / v1 / gifs / search ? PERAMETERSGOESHERE & api_key=INSERTAPIKEYHERE & limit=10

});