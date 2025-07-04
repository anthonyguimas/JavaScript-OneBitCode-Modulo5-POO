class Account {
  #password;
  #balance = 0;

  constructor(user) {
    this.email = user.email;
    this.#password = user.password;
  }

  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance;
    } else {
      return null;
    }
  }

  #authenticate(email, password) {
    return this.email === email && this.password === password;
  }
}

const user = {
  email: "kapela@email.com",
  password: "kapela123",
};

const myAccount = new Account(user);

console.log(myAccount);
console.log(myAccount.getBalance("kapela@email.com", "kapela123"));
