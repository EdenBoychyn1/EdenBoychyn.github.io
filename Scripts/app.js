//  IIFE -- Immediatley Invoked Function Expression 
// AKA -- Anonymous Self-Executing Function

(function()
{
    function DisplayHomePage()
    {
        console.log("Homes Page");
        let AboutUsButton = document.getElementById("AboutUsButton");
        // Everything in JavaScript is an object
/*         console.log(AboutUsButton);
        AboutUsButton.addEventListener("click", () =>
        {
            location.href = "about.html";
        }); */

        // 1) Fattest Memory Footprint
        // jQuery way  -  get all elements with an idf of AboutusButton and for each element add a "click" event
        $("#AboutUsButton").on("click", () => {
            location.href = "about.html";
        });

        
        // 2) Second Fattest Way - because it returns a collection of elements
        // JavaScript way - get all elements with an id of AboutUsButton for each element, loop....
        /* document.querySelectorAll("#AboutUsButton").forEach(element => {
            // For each element add a "click" event
            element.addEventListener("click", () => {
            location.href = "about.html";
            });
        }); */


        // 3) Preety lean because it is only retruning 1 element
        // JavaScript way - get an element that matches an id of AboutUsButton and add a "click"
        /* document.querySelector("#AboutusButton").addEventListener("click", () => 
        {
            location.href = "about.html";
        }); */

        // 4) Leanest
        /* document.getElementById("AboutUsButton").addEventListener("click", () => {
            location.href = "about.html";
        }); */

        // Step 1 - Get a refernence to an entry point(s) (insertion/deleteion) 
        //let MainContent = document.getElementsByTagName("main")[0];
        //let DocumentBody = document.body;

        // Step 2 - Create a HTML Elemenet in Memory 
        //let MainParagraph = document.createElement("p");
        //let Article = document.createElement("article");
        //let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3"> This is the article Paragraph</p>`;

        // Step 3 - Configure new Element
        //MainParagraph.setAttribute("id", "MainParagraph");
        //MainParagraph.setAttribute("class", "mt-3");
        //let FirstString = "This is";
        //MainParagraph.textContent = "This is the Main Paragraph";
        //let SecondString = `${FirstString} the Main Paragraph`;
        //MainParagraph.textContent = SecondString;
        //Article.setAttribute("class", "container");

        // Step 4 - Perform insertion / deletion

        // Example of Insert After (append)
        //MainContent.appendChild(MainParagraph);
        
        //Article.innerHTML = ArticleParagraph;
        $("main").append(`<p id="MainParagraph" class="mt-3">This is the Main paragraph</p>`);
        $("body").append(`<article class="container"><p id="ArticleParagraph">This is the Article Paragraph</p>
        </article>`);
        
        
        // example of insert before
        //MainContent.before(MainParagraph);

        // Example of deletion
        //document.getElementById("AboutUsButton").remove();
        //AboutUsButton.remove();

        // ES6 AND HTML5 => Template Strings => "Super Strings" 

        // Test our new core.Contact Class
        //let eden = new core.Contact("Eden Boychyn", "6472108749", "Eden_Boychyn@hotmail.com");
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

    /**
     * Adds a contact object to the localStorage 
     *
     * @param {string} fullName
     * @param {string} contactNumber
     * @param {string} emailAddress
     */
    function AddContact(fullName, contactNumber, emailAddress)
    {
        let contact = new core.Contact(fullName, contactNumber, emailAddress);
        if(contact.serialize())
        {
            let key = contact.FullName.substring(0, 1) + Date.now();

            localStorage.setItem(key, contact.serialize());
        }
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
                AddContact(fullName.value, contactNumber.value, emailAddress.value);
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
                
                 let contact = new core.Contact(); // create a new empty contact object 
                 contact.deserialize(contactData);

                 // Inject a repeatable row into the Contact List
                 // += is equal to data plus the table
                 data += `<tr>
                 <th scope="row" class="text-center">${index}</th>
                 <td>${contact.FullName}</td>
                 <td>${contact.ContactNumber}</td>
                 <td>${contact.EmailAddress}</td>
                 <td class="text-center"><button value="${key}" class="btn btn-primary btn-sm edit"><i class="fas fa-edit fa-sm"></i> Edit</button></td>
                 <td class="text-center"><button value="${key}" class="btn btn-danger btn-sm delete"><i class="fas fa-trash-alt fa-sm"></i> Delete</button></td>
                 </tr>
                 `;

                 

                 index++;

            }

            // Writes it to the contactList element table
            contactList.innerHTML = data;

            $("#addButton").on("click", () => 
            {
                location.href = "edit.html#add";
            });

            $("button.delete").on("click", function() 
            {
                if(confirm("Are you sure?"))
                {
                    localStorage.removeItem($(this).val());
                }
                
                // refresh after deleting
                location.href = "contact-list.html";
            });

            $("button.edit").on("click", function() 
            {
                location.href = "edit.html#" + $(this).val();
            });
        }
    }

    function DisplayEditPage() 
    {
        console.log("Edit Page");
        let page = location.hash.substring(1);

        switch(page)
        {
            case "add":
                {
                    $("main>h1").text("Add Contact");

                    $("#editButton").html(`<i class="fas fa-plus-circle fa-lg"></i> Add`);

                    // Gather the info

                    $("#editButton").on("click", (event) => {
                        event.preventDefault();
                        //Add Contact
                        AddContact(fullName.value, contactNumber.value, emailAddress.value);
                        // refresh the contact page 
                        location.href = "contact-list.html";
                    });
                     
                    $("#cancelButton").on("click", () => {
                        location.href = "contact-list.html";
                    });
                }
                break;
            default: 
                {
                    // Get the contact info from local storage 
                    let contact = new core.Contact(); 
                    let contactData = localStorage.getItem(page);
                    
                    console.log(contactData);
                    contact.deserialize(localStorage.getItem(page));

                    // Display the contact info in the edit form 
                    $("#fullName").val(contact.FullName);
                    $("#contactNumber").val(contact.ContactNumber);
                    $("#emailAddress").val(contact.EmailAddress);

                    // When the editButton is pressed - update the contact

                    $("#editButton").on("click", (event) => {
                        event.preventDefault(); 

                        // get any changes from the form 
                        contact.FullName = $("#fullName").val();
                        contact.ContactNumber = $("#contactNumber").val();
                        contact.EmailAddress = $("#emailAddress").val();

                        // replace the item in localStorage 
                        localStorage.setItem(page, contact.serialize());

                        // return to the contact-lsit
                        location.href = "contact-list.html";
                    });

                    $("#cancelButton").on("click", () => {
                        location.href = "contact-list.html";
                    });

                }
                break;
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
            case "Edit": 
                DisplayEditPage();
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