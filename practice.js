
// Want to do stuff once the DOM has loaded.
$(document).ready(function(){ 
    // Want to do stuff once all of the images ( assets have loaded )
    $(window).on("load", function() {
        console.log("all assets have loaded");
    })


    // Finding out where the this refers too has a lot to do with where it is called from.
    // E.g. we share a function by implicit binding, without this name is undefined

    function myName()
    {
        console.log(this.name, "is my name");
    }

    let personA = {
        name : "mark",
        myName : myName
    }

    
    let personB = {
        name : "semark",
        myName : myName
    }

    personA.myName();
    personB.myName();

    if(typeof(personA) == typeof(null))
    {
        console.log("They're both objects in javascript thus this returns true");
        // we need to check for null instead as it will override otherwise
    }
    // A tibit on what is NaN in JS
    let a = 4;
    let b = "not a number";

    console.log("Is NaN will say that this is a number " +isNaN(b) + 
    " however Number.isNaN is correct " + Number.isNaN(b));

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
