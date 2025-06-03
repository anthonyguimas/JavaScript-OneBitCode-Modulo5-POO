class Book {
  constructor(title) {
    this.title = title;
    this.published = false;
  }

  publish() {
    this.published = true;
  }
}

const duna = new Book("Duna");
const elonMusk = new Book("Elon Musk");

duna.publish();

console.log(duna);
console.log(elonMusk);
console.log(duna instanceof Book);
