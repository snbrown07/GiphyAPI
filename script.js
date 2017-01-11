$(document).ready(function() {
    $("#giphy").submit(function(event) {
        event.preventDefault();
        var query = $("#query").val();
        console.log(query);
        console.log("this happens first");
        $.ajax({
            // This is the URL of the API
            url: "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC"
        }).done(function(response) { // the .done function happens after the API response is returned
            console.log('this happens at the end');
            
            //this happens after the response comes back from giphy
            console.log(response);
            
            //loop
            //    var image =  ...
            //    image.src = response.data[i].images....
            //    results.append(image)

            // this is the jQuery way to create
            // a new image element
            var image = $('<img>');
            var image2 = $('<img>');
            console.log(image);
            console.log(image2);
            // when we create a new element,
            // jQuery returns an array. So we
            // need to look for the first item
            // in the image array

            image[0].src = response.data[0].images.fixed_width_downsampled.url;
            image2[0].src = response.data[1].images.fixed_width_downsampled.url;
            $("#results").append(image);
            $("#results").append(image2);
        });
        
        console.log("this happens next");
        
    });
});
