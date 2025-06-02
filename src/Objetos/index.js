const book = {
  title: "Duna",
  year: "1969",
  pages: 680,
  published: true,
  inStock: 534,
  tags: ["Adventure", "Mysticism", "Ecology", "Policy"],
  author: {
    name: "Frank Herbert",
  },
  addOnStock(quantity) {
    this.inStock += quantity;
  },
  save: function () {
    // salva os dados no banco de dados
  },
};

console.log(
  `O nome do livro é ${book.title}. Ele foi lançado em ${book.year}, possui ${book.pages} páginas, e há ${book.inStock} unidades em estoque. O gênero do livro é ${book.tags} e o autor se chama ${book.author.name}.`
);

book.addOnStock(31);

console.log(book.inStock);

function Book(title, pages, tags, author) {
  this.title = title;
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.published = false;
  this.inStock = 0;
  this.addOnStock = function addOnStock(quantity) {
    this.inStock += quantity;
  };
  this.save = function () {
    // salva os dados no banco de dados
  };
}

const author = { name: "Marco Aurélio" };
const tags = ["Filosofia", "Estoicismo"];

const Books = new Book("Meditações", 218, tags, author);

console.log(Books);
