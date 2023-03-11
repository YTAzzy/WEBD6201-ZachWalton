namespace core
{
    export class User
    {
        // private instance members (data)
        private m_displayName: string;
        private m_emailAddress: string;
        private m_username: string;
        private m_password: string;

        // getters and setters
        public get DisplayName(): string
        {
            return this.m_displayName;
        }
        
        public set DisplayName(name: string)
        {
            this.m_displayName = name;
        }

        public get EmailAddress(): string
        {
            return this.m_emailAddress;
        }

        public set EmailAddress(email_address: string)
        {
            this.m_emailAddress = email_address;
        }

        public get Username(): string
        {
            return this.m_username;
        }

        public set Username(username: string)
        {
            this.m_username = username;
        }

        public get Password(): string
        {
            return this.m_password;
        }

        public set Password(password: string)
        {
            this.m_password = password;
        }

        // constructor
        constructor(displayName: string = "", emailAddress: string = "", username: string = "", password: string = "")
        {
            this.m_displayName = displayName;
            this.m_emailAddress = emailAddress;
            this.m_username = username;
            this.m_password = password;
        }

        // method overrides

        /**
         * This method overrides the built-in toString method and returns a comma-separated string containing the object's property values
         * @override
         * @returns {string}
         */
        toString(): string
        {
            return `Display Name    : ${this.DisplayName} \nEmail Address : ${this.EmailAddress} \nUsername : ${this.Username}`;
        }

        // utility methods

        // TODO: need to fix the Return type
        public toJSON()
        {
            return {
                "DisplayName": this.m_displayName,
                "EmailAddress": this.m_emailAddress,
                "Username": this.m_username
            }
        }

        // TODO: need to fix the parameter data type
        fromJSON(data: User)
        {
            this.m_displayName = data.DisplayName;
            this.m_emailAddress = data.EmailAddress;
            this.m_username = data.Username;
            this.m_password = data.Password;
        }

        /**
         * This method converts the object's properties into a comma-separated string
         *
         * @returns {(string | null)}
         */
        public serialize(): string | null
        {
            if(this.DisplayName !== "" && this.EmailAddress !== "" && this.Username !== "")
            {
                return `${this.DisplayName},${this.EmailAddress},${this.Username}`;
            }
            else
            {
                console.error("One or more properties of the User is empty");
                return null;
            }
        }

        /**
         * This method separates the data string parameter into the object's properties
         *
         * @param {string} data
         * @returns {void}
         */
        deserialize(data: string) : void
        {
            let propertyArray: string[] = data.split(",");
            this.DisplayName = propertyArray[0];
            this.EmailAddress = propertyArray[1];
            this.Username = propertyArray[2];
            this.Password = propertyArray[3];
        }
    }
}