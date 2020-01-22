
// Want to do stuff once the DOM has loaded.
$(document).ready(function(){ 




    // Want to do stuff once all of the images ( assets have loaded )
    $(window).on("load", function() {
        console.log("all assets have loaded");
    })

    console.log("yay!");
});
