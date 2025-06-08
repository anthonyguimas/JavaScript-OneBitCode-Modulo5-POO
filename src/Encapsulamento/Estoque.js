class Estoque {
  #preco;
  #quantidade;

  constructor(nome, preco) {
    this.nome = nome;
    this.#preco = preco > 0 ? preco : 0;
    this.#quantidade = 0;
  }

  adicionarEstoque(qtd) {
    if (qtd > 0) {
      this.#quantidade += qtd;
    } else {
      console.log("Não foi possível adicionar essa quantidade.");
    }
  }

  removerEstoque(qtd) {
    if (qtd > 0 && qtd <= this.#quantidade) {
      this.#quantidade -= qtd;
    } else {
      console.log("Quantidade inválida para remover.");
    }
  }

  verEstoque() {
    const total = this.#preco * this.#quantidade;
    return `Estoque de ${this.nome}: ${
      this.#quantidade
    } unidades - Total em R$: ${total}`;
  }
}

const produto = new Estoque("Teclado logitech", 300);

produto.adicionarEstoque(10);
produto.removerEstoque(1);

console.log(produto.verEstoque());
