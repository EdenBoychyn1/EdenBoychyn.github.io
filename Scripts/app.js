//  IIFE -- Immediatley Invoked Function Expression 
// AKA -- Anonymous Self-Executing Function

(function()
{
    function DisplayHomePage()
    {
        console.log("Homes Page");
        let AboutUsButton = document.getElementById("AboutUsButton");
        // Everything in JavaScript is an object
        console.log(AboutUsButton);
        AboutUsButton.addEventListener("click", function()
        {
            location.href = "about.html";
        });

        // Step 1 - Get a refernence to an entry point(s) (insertion/deleteion) 
        let MainContent = document.getElementsByTagName("main")[0];
        let DocumentBody = document.body;
        // Step 2 - Create a HTML Elemenet in Memory 
        let MainParagraph = document.createElement("p");
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3"> This is the article Paragraph</p>`;

        // Step 3 - Configure new Element
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        let FirstString = "This is";
        //MainParagraph.textContent = "This is the Main Paragraph";
        let SecondString = `${FirstString} the Main Paragraph`;
        MainParagraph.textContent = SecondString;
        Article.setAttribute("class", "container");

        // Step 4 - Perrform insertion / deletion

        // Example mof Insert After (append)
        MainContent.appendChild(MainParagraph);
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);
        
        
        // example of insert before
        //MainContent.before(MainParagraph);

        // Example of deletion
        //document.getElementById("AboutUsButton").remove();
        //AboutUsButton.remove();

        // ES6 AND HTML5 => Template Strings => "Super Strings" 
    }

    function DisplayProductsPage()
    {
        console.log("Products Page");
    }

    function DisplayServicesPage()
    {
        console.log("Services Page");
    }

    function DisplayAboutPage()
    {
        console.log("About Page");
    }

    function DisplayContactUsPage()
    {
        console.log("Contact Page");
    }

    // 3 types of anonymous functions
    // 1. Named function option
    function Start()
    {
        console.log("App Started!"); 

        switch(document.title)
        {
            case "Home": 
                DisplayHomePage();
                break;
            case "Our Products": 
                DisplayProductsPage();
                break;
            case "Our Services": 
                DisplayServicesPage();
                break;
            case "About Us": 
                DisplayAboutPage();
                break;
            case "Contact Us": 
                DisplayContactUsPage();
                break;
        }
    } 

    // 2. Variable Pointed to an Anonymous function
    // Start variable points to anonymoius function in memory
    /* let Start = function()
    {
        console.log("App Started!");
    } */
    // 3. Anonymous function pointing to an event handler

    window.addEventListener("load", Start); //<-- Registers an event listener to an event which would be the load event, and then calls/executes the Start function upon the Load event
})(); // <-- this automatically injects the code whern called on the specified html file. Anything inside the function gets automatically injected as well