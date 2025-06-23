class Wallet {
  #amount;
  #username;

  constructor() {
    this.#amount = 100.99 * 100; //10099;
  }

  get amount() {
    return this.#amount / 100;
  }

  set userName(newUserName) {
    if (typeof newUserName == "string") {
      this.#username = newUserName;
    } else {
      console.log("username must be of type string");
    }
  }

  get userName() {
    return this.#username;
  }
}

const myWallet = new Wallet();

console.log(myWallet.amount);

myWallet.userName = "Anthony";

console.log(myWallet.userName);
