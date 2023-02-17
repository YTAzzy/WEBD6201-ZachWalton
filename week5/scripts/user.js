"use strict";

(function (core) {

    class User {
        constructor(displayName = "", emailAddress = "", username = "", password = "") {

        this.displayName = displayName;
        this.emailAddress = emailAddress;
        this.username = username;
        this.password = password;
    }

    set
    displayName(displayName)
    {
        this.m_displayname = displayName;
    }

    get
    displayName()
    {
        return this.m_displayname;
    }

    set
    emailAddress(emailAddress)
    {
        this.m_emailaddress = emailAddress;
    }

    get
    emailAddress()
    {
        return this.m_emailaddress;
    }

    set
    username(username)
    {
        this.m_username = username;
    }

    get
    username()
    {
        return this.m_username;
    }

    set
    password(password)
    {
        this.m_password = password;
    }

    get
    password()
    {
        return this.m_password;
    }

    toString()
    {
        return `display Name: ${this.displayName}\n Email Address: ${this.EmailAddress}\n Username: ${this.username}`
    }

    toJSON(){
        return {
            "DisplayName" : this.DisplayName,
            "EmailAddress" : this.EmailAddress,
            "Username" : this.Username,
            "Password" : this.Password;
        }
    }

    fromJSON(data){
        this.DisplayName = data.DisplayName;
        this.EmailAddress = data.EmailAddress;
        this.Username = data.Username;
        this.Password = data.Password;
    }

    serialize(){
        if (this.DisplayName !== "" && this.EmailAddress !== "" && this.username !== "" && this.password !== "") {
            return(${this.DisplayName), ${this.EmailAddress, ${this.Username}, ${this.Password});
        }
        console.error("One of more of the contact attributes is empty or missing");
        return null;
    }

    deserialize(data) {
        let propertyArray = data.split(",");
        this.displayName = propertyArray[0];
        this.emailAddress = propertyArray[1];
        this.username = propertyArray[2];
        this.password = propertyArray[3];
    }

}
    core.User = User;

})(core || core={})




