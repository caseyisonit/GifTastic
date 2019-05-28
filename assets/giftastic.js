// BUTTONS AT THE TOP
$(document).ready(function () {
    var buttonArea = $("#buttonArea");
    var topics = ["ADORE DELANO", "BIANCA DEL RIO", "BENDELACREME"];

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

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            for (i = 0; i < response.data.length; i++) {

                var card = $("<div class='card'>")
                var cardImg = $("<img class='card-img-top'>")
                var cardBody = $("<div class='card-body'>")
                var imgURL = response.data[i].images.fixed_height_still.url;
                var rating = response.data[i].rating;

                cardImg.attr("src", imgURL)
                    .attr("data-still", response.data[i].images.fixed_height_still.url)
                    .attr("data-animate", response.data[i].images.fixed_height.url)
                    .attr("data-state", "still")
                    .addClass("gif");
                card.html(cardImg);
                cardBody.text("Rating: " + rating);
                card.append(cardBody);
                $("#giphy-window").prepend(card);

            }
        })
    });

    // START STOP GIFS
    // click function
    // if else if to display
    $("#giphy-window").on("click", ".gif", function () {
        var state = $(this).attr("data-state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });

});