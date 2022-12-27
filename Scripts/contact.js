(function (core) {
    class Contact 
    {
    // public properties (getters and setters)
    get FullName()
    {
        return this.m_fullName;
    }

    set FullName(fullName)
    {
        this.m_fullName = fullName;
    }

    get ContactNumber()
    {
        return this.m_contactNumber;
    }

    set ContactNumber(contactNumber)
    {
        this.m_contactNumber = contactNumber;
    }

    get EmailAddress()
    {
        return this.m_emailAddress;
    }

    set EmailAddress(emailAddress)
    {
        this.m_emailAddress = emailAddress;
    }

    // Constructor 
    constructor(fullName = "", contactNumber = "", emailAddress = "")
    {
        this.FullName = fullName;
        this.ContactNumber = contactNumber
        this.EmailAddress = emailAddress;
    }

    // Public utility methods 

    
    serialize()
    {
        if(this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "")
        {
            return `${this.FullName}, ${this.ContactNumber}, ${this.EmailAddress}`;
        }
        console.error("One or more properties of the Contact Object are missing or invalid");
        return null;
    }

    deserialize(data) //Asuume that data is in a comma seperated format (string arrray of properties)
    {
        // breaks the string into substrings sperated by comma
        let propertyArray = data.split(",");
        this.FullName = propertyArray[0];
        this.ContactNumber = propertyArray[1];
        this.EmailAddress = propertyArray[2];
    }

    // Public overrides
    toString()
    {
        return `Full Name: ${this.FullName}\n Contact Number: ${this.ContactNumber}\n Email Address: ${this.EmailAddress}`; 
    }

    }

    core.Contact = Contact;
})(core || (core = {}));
