const Post = require("./Post");

class Author {
  constructor(authorName) {
    this.authorName = authorName;
    this.posts = [];
  }

  writePost(title, body) {
    const post = new Post(title, body, this);

    if (!post) {
      throw new Error("O post não foi inserido");
    }

    this.posts.push(post);

    return post;
  }
}

module.exports = Author;
