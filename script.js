$(document).ready(function() {
    $("#giphy").submit(function(event) {
        event.preventDefault();
        var query = $("#query").val();
        $.ajax({
            // This is the URL of the API
            url: "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC"
        }).done(function(response) { // the .done function happens after the API response is returned
            
            //this happens after the response comes back from giphy
            
            //loop
            //    var image =  ...
            //    image.src = response.data[i].images....
            //    results.append(image)
       
            // this is the jQuery way to create
            // a new image element
            // when we create a new element,
            // jQuery returns an array. So we
            // need to look for the first item
            // in the image array
            
            for (var i= 0; i < response.data.length; i++){
                 var image = $('<img>');
                 image[0].src = response.data[i].images.fixed_width_downsampled.url;
                 $("#results").append(image);
            }
        });
    });
    
    $("#clear").click(function(event){
    $("#results").empty();
      
    });
    
});
