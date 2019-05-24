// BUTTONS AT THE TOP
$(document).ready(function () {
    var buttonArea = $("#buttonArea");
    var topics = ["dogs", "cats", "frogs"];

    function renderBtn() {
        buttonArea.empty();
        for (var i = 0; i < topics.length; i++) {
            var btn =  $("<button>");
            btn.addClass("topics btn btn-primary btn-lg").text(topics[i]);
            buttonArea.append(btn);
        }
    }

    // FORM

    $("#add-topic").on("click", (function (event) {
        event.preventDefault();
        console.log("Hello World");
        var userInput = $("#userInput").val().trim();
        topics.push(userInput);
        renderBtn();
    }));

    // APPENDING GIFS

    // $(document).on('click', '.topics', function(event) {
    //     var query = $(this).val();
    //     $.ajax({
    //         url: "queryURL", "api.giphy.com/v1/gifs/search?PERAMETERSGOESHERE&api_key=INSERTAPIKEYHERE&limit=10"
    //         method: "GET"
    //     }).then(function (response) {
    //         console.log(response);

    //     })
    // });

    // START STOP GIFS
    // click function
    // if else if to display

    // api.giphy.com / v1 / gifs / search ? PERAMETERSGOESHERE & api_key=INSERTAPIKEYHERE & limit=10

});