"use strict";

class Contact{

    constructor(fullName, contactNumber, emailAddress) {

        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
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

    toString(){
        return `Full Name: ${this.FullName}\n Contact Number: ${this.ContactNumber}\n Email Address: ${this.EmailAddress}`
    }
}