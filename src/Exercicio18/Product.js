class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }

  addToStock(quantity) {
    this.inStock += quantity;
  }

  calculateDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const tshirtBlack = new Product(
  "Camiseta Preta",
  "Camiseta preta slim fit, Tamanho M",
  100
);

tshirtBlack.addToStock(5);

const tshirtBlackDiscount = tshirtBlack.calculateDiscount(10);

console.log(tshirtBlack);
console.log(tshirtBlackDiscount);
