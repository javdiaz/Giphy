     // variable for the Public API key and the string array of preselected cartoon gifs
     var apiKey = "dc6zaTOxFJmzC";
     var topics = ["popeye", "felix the cat", "gumby", "batman", "justice league", "flintstones", "aquaman", "gi-joe", "venture brothers", "yogi Bear"];
     // var pauseGif =
     // var playGif =


     // cartoonShow function performs the ajax call and creates a varable called toons for any characters entered in the form field
     function cartoonShow() {
         var toons = $(this).attr("data-name");
         var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + toons + "&limit=6&rating=g&api_key=" + apiKey;
         // The ajax call for getting downloading the gifs from Giphy site
         $.ajax({
             url: queryURL,
             method: "GET"
         }).done(function(response) {
            $(".toon").click(function(){
            $(".toon img").stop();
             });
             console.log(response);
             console.log(response.data[0].url);

             // creating variables for the gif objects downloaded
             var toonContent = response.data[0].url;
             var toonContent = response.data[1].url;
             var toonContent = response.data[2].url;
             var toonContent = response.data[3].url;
             var toonContent = response.data[4].url;
             var toonContent = response.data[5].url;

             console.log(toonContent);
             $('#cartoonDisplay').append(toonContent);
             $('#cartoonDisplay').html('<img src="' + response.data[0].images.downsized_medium.url + '" alt="">');
             $('#cartoonDisplay1').html('<img src="' + response.data[1].images.downsized_medium.url + '" alt="">');
             $('#cartoonDisplay2').html('<img src="' + response.data[2].images.downsized_medium.url + '" alt="">');
             $('#cartoonDisplay3').html('<img src="' + response.data[3].images.downsized_medium.url + '" alt="">');
             $('#cartoonDisplay4').html('<img src="' + response.data[4].images.downsized_medium.url + '" alt="">');
             $('#cartoonDisplay5').html('<img src="' + response.data[5].images.downsized_medium.url + '" alt="">');


         });

     }
     // Function for making the buttons that will display on the top of the HTML, will be reused.
     function makeButtons() {

         // .empty function to clear the buttons and avoid repeated buttons
         $("#buttons-view").empty();
         // Looping through the array variable called topics (popeye, gumby, felix)
         for (var i = 0; i < topics.length; i++) {
             // Then dynamicaly generating buttons for each movie in the array
             // variable button assigned to the jquery button tag
             var button = $("<button>");
             // addclass will add  the .class to the buttons created
             button.addClass("cartoon");
             // Adding a data-attribute
             button.attr("data-name", topics[i]);
             // Providing the initial button text from var topics (popeye, gumby, felix)
             button.text(topics[i]);
             // appending the content from the var topics (popeye, gumby, felix) creates 3 buttons with the same name
             $("#buttons-view").append(button);
         }
     }
     //on click function for the submit button 
     $("#addCartoon").on("click", function(event) {
         //prevent the text in the field from being submitted to a server. default action
         event.preventDefault();
         // this variable called toons grabs the information from the form field and applies .trim to remove uneeded spaces.
         var toons = $("#cartoonInput").val().trim();
         // Adding a cartoon character name thru the push function from the textbox to our topics 
         topics.push(toons);
         //calls the function to make another buton in the HTML buttons view div.
         makeButtons();
     });
     // Adding a click event listener to all elements with a class of .cartoon 
     $(document).on("click", ".cartoon", cartoonShow);
     // Calling the renderButtons function to display the intial buttons from the topics variable
     makeButtons();
     //click function to stop animation of gifs
      $(".toon").click(function(){
              console.log("clicked")
             $(".cartoonDisplay").stop();
             });