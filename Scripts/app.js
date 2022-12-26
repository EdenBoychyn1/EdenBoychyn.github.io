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

        // Test our new Contact Class
        //let eden = new Contact("Eden Boychyn", "6472108749", "Eden_Boychyn@hotmail.com");
        //console.log(eden.toString());
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

        let sendButton = document.getElementById("sendButton");
        let subscribeCheckBox = document.getElementById("subscribeCheckBox");

        sendButton.addEventListener("click", function(event)
        {
            //event.preventDefault(); //prevents the default behaviour of any event
            // Submit attempts to submit the form

            // checked is a state that determines the state of the checkbox
            if(subscribeCheckBox.checked)
            {
                //console.log("Checkbox checked!");
                let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
                if(contact.serialize())
                {
                    let key = contact.FullName.substring(0, 1) + Date.now();

                    localStorage.setItem(key, contact.serialize());
                }
            }
        });
    }

    function DisplayContactListPage()
    {
        console.log("Contact-List Page");

        if(localStorage.length > 0)
        {
            let contactList = document.getElementById("contactList");

            let data = ""; // data cotnainer -> add deserialize data from the localstorage 

            let keys = Object.keys(localStorage); // returns a string array of keys 

            let index = 1; // Counts how many keys 

            // For every key in the keys array (collection), loop
            for (const key of keys) 
            {
                let contactData = localStorage.getItem(key); // get local storage data value related to the key
                
                 let contact = new Contact(); // create a new empty contact object 
                 contact.deserialize(contactData);

                 // Inject a repeatable row into the Contact List
                 // += is equal to data plus the table
                 data += `<tr>
                 <th scope="row" class="text-center">${index}</th>
                 <td>${contact.FullName}</td>
                 <td>${contact.ContactNumber}</td>
                 <td>${contact.EmailAddress}</td>
                 <td></td>
                 <td></td>
                 </tr>
                 `;

                 index++;

            }

            // Writes it to the contactList element table
            contactList.innerHTML = data;

        }
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
            case "Contact-List": 
                DisplayContactListPage();
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