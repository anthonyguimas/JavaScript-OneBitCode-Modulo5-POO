const Author = require("./Author");

const sergio = new Author("Sergio Lima");
const post = sergio.writePost(
  "Título do post",
  "Flamengo campeão do mumdial de clubes"
);

post.addComment("Anthony Guimarães", "O flamengo jogou muito");
post.addComment("Birinha", "Esse time deu sorte, se fosse o meu fortaleza...");

console.log(sergio);
console.log(post);
