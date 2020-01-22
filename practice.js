
// Want to do stuff once the DOM has loaded.
$(document).ready(function(){ 
    // Want to do stuff once all of the images ( assets have loaded )
    $(window).on("load", function() {
        console.log("all assets have loaded");
    })

    console.log("yay!");


    $('button').bind( 'click',
    function()
    {
        console.log("I was clicked :(");
        console.log("Convetional this refers to current DOM element (button)"
         + this + " Jquery this is object based " + $(this)  );
    }
    )

    // So I can bind any events ( both custom created and default) https://www.w3schools.com/jsref/dom_obj_event.asp
    $('#clickMe').bind('mouseenter',
    function( )
    {
        console.log("Don't look @ me");
    }
    )
});
