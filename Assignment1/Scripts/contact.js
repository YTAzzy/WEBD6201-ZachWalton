"use strict";

class Contact{

    constructor(fullName, contactNumber, emailAddress, notes) {

        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
        this.Notes = notes;
    }

    set FullName(fullName){
        this.m_fullname = fullName;
    }

    get FullName(){
        return this.m_fullname;
    }

    set ContactNumber(contactNumber){
        this.m_contactnumber = contactNumber;
    }

    get ContactNumber(){
        return this.m_contactnumber;
    }
    set EmailAddress(emailAddress){
        this.m_emailaddress = emailAddress;
    }

    get EmailAddress(){
        return this.m_emailaddress;
    }


    set Notes(notes){
        this.m_notes = notes;
    }

    get Notes(){
        return this.m_notes;
    }

    toString(){
        return `Full Name: ${this.FullName}\nContact Number: ${this.ContactNumber}\nEmail Address: ${this.EmailAddress}\nNotes: ${this.Notes}`
    }

    serialize(){
        if(this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "" && this.Notes !== ""){
            return`${this.FullName}, ${this.ContactNumber}, ${this.EmailAddress}, ${this.Notes}`;
        }
        console.error("One or more of the contact attributes is empty or missing!");
        return null;
    }

    deserialize(data){
        data.split(",");

    }
}