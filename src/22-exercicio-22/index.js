const App = require("./App");

App.createUser("anthony@email.com", "Anthony Guimarães");
App.createUser("lucas@email.com", "Lucas Lima");
App.createUser("viviane@email.com", "Viviane Conde");

App.deposit("anthony@email.com", 6000);

App.transfer("anthony@email.com", "lucas@email.com", 600);

App.changeLoanFee(10);
App.takeLoan("viviane@email.com", 2000, 24);

console.log(App.findUser("anthony@email.com"));
console.log(App.findUser("anthony@email.com").account);
console.log(App.findUser("lucas@email.com"));
console.log(App.findUser("lucas@email.com").account);
console.log(App.findUser("viviane@email.com"));
console.log(App.findUser("viviane@email.com").account);
console.log(App.findUser("viviane@email.com").account.loans[0].installments);
