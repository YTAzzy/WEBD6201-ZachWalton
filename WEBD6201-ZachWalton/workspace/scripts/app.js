"use strict";

//IIFE - Immediately Invoked Function Expression
(function (){

    function Start()
    {
        console.log("App Started!")
    }

    function DisplayHomePage(){
         let AboutUsButton = document.getElementById("AboutUsBtn");
         AboutUsButton.addEventListener("click", function()
        {
         location.href = "about.html"
        });
    }

    window.addEventListener( "load", Start)

})();