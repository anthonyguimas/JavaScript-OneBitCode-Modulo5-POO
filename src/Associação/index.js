const Address = require("./Address");
const Person = require("./Person");

const address = new Address(
  "Rua Augusta",
  77,
  "Bairro dos Jardins",
  "São Paulo",
  "São Paulo"
);

const junior = new Person("Junior Lima", address);

console.log(junior);
console.log(junior.address.fullAdress());
