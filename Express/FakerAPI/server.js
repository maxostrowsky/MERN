const express = require("express");
const app = express();
const port = 8000;
// import faker from '@faker-js/faker';
const faker = require('@faker-js/faker');

///// faker people generators \\\
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const phone = faker.phone.phoneNumber();
const email = faker.internet.email();
const password = faker.internet.password();

///// faker company generators \\\
const companyName = faker.company.companyName(); 
const street = faker.address.streetAddress(true);
const city = faker.address.city();
const state = faker.address.stateAbbr();
const zipCode = faker.address.zipCode();
const country = faker.address.country();

const id = faker.datatype.uuid();

///// create User class \\\
class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phone;
        this.email = email;
        this.password = password;
    }
}
console.log(new User());

///// create Company class \\\
class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.companyName = companyName;
        this.address = {
            street: street,
            city: city,
            state: state,
            zipCode: zipCode,
            country: country
        }
    }
}
console.log(new Company());

///// MIDDLEWARE \\\
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

console.log(" hello server! ")

///  routing goes here  \\

app.get("/api/users/new", (req, res) => {
    res.json(new User());
})

app.get("/api/companies/new", (req, res) => {
    res.json(new Company());})

app.get("/api/user/company", (req, res) => {
    res.json({
        user: new User(),
        company: new Company()
    });
})

app.listen( port, () => console.log(`*** server started on port:${port} and is listening for REQuests to RESpond to *** `));