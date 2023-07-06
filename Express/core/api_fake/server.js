const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

const createUser = () => {
    const newFakeUser = {
        _id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),
              
    };
    return newFakeUser;
};

const createCompany = () => {
    const newFakeuCompany = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
          street: faker.location.street(),
          city: faker.location.city(),
          state: faker.location.state(),
          zipCode: faker.location.zipCode(),
          country: faker.location.county() }
        
        
    };
    return newFakeuCompany;
};


app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});



app.get("/api/users/new",(req,res)=>{
    const newFakeUser = createUser();
    res.json({User : newFakeUser});
})

app.get("/api/companies/new",(req,res)=>{
    const newFakeCompany = createCompany();
    res.json({Company:newFakeCompany});
})

app.get("/api/user/company",(req,res)=>{
    const newFakeUser = createUser();
    const newFakeCompany = createCompany();
    res.json([{User : newFakeUser}, {Company:newFakeCompany}]);
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );