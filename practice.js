
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

    // If someone clicks the button, the text below will have 
    $('[name=cl]').bind('click', function() {

        console.log("Api stuff");
        
        let a = { userID : 1,  title : "test", body : "epsom"}
        $.ajax(
            {
                url : "https://jsonplaceholder.typicode.com/posts/",
                type : "POST",
                data : a,
                dataType: "JSON",
                success : function(result)
                {
                    // Print out the result
                    console.log("Before")
                    console.log(result);
                }
            }
        )

        $.ajax(
            {
                url : "https://jsonplaceholder.typicode.com/posts/",
                type : "GET",
                dataType: "JSON",
                success : function(result)
                {
                    // Print out the result
                    console.log(result);
                }
            }
        )
    })
    
});
