/*Author: Zach Walton
* Student ID: 100826058
* Date Completed: 01-30-2023
* */
"use strict";

(function(){
    function DisplayHomePage(){
        console.log("Display Home Page Called!");
        let AboutUsButton = document.getElementById("AboutUsBtn");
        AboutUsButton.addEventListener("click", function(){
            location.href = "about.html";
        });

        let MainContent = document.getElementById("main")[0];
        let MainParagraph = document.createElement("p");

        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class","mt-3");
        MainParagraph.textContent = "This is the main paragraph!";

        MainContent.appendChild(MainParagraph);

        let FirstString = "This is";
        let SecondString = `${FirstString} the main paragraph (using Template String)`
        MainParagraph.textContent=SecondString;

        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is my private article</p>`
        Article.setAttribute("class","container");
        Article.innerHTML = ArticleParagraph;
        document.body.appendChild(Article);
    }

    function DisplayProductsPage(){
        console.log("Display Products Page Called!");

    }

    function DisplayServicesPage(){
        console.log("Display Services Page Called!");

    }


    function DisplayAboutUsPage(){
        console.log("Display About Us Page Called!");

    }

    function DisplayContactPage(){
        console.log("Display Contact Page Called!");

        let sendButton = document.getElementById("sendButton");

        sendButton.addEventListener("click", function (event)){
            let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value, notes.value)
            console.log(contact.toString());
            setTimeout(function(){
                DisplayHomePage();
            }, 3000);
        }
    }

    function Start(){
        console.log("Application Started!");
        switch(document.title)
        {
        case "Homepage":
            DisplayHomePage();
            break;
        case "Our Products":
            DisplayProductsPage();
            break;
        case "About Me":
            DisplayAboutUsPage();
            break;
        case "Services":
            DisplayServicesPage();
            break;
        case "Contact Us":
            DisplayContactPage();
            break;
        }
    }
    window.addEventListener("load",Start)
})();
