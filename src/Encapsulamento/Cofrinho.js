class Cofrinho {
  #saldo = 0;

  constructor(nome) {
    this.nome = nome;
  }

  adicionar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    } else {
      console.log("Valor inválido para adicionar.");
    }
  }

  retirar(valor) {
    if (valor > 0 && valor <= this.#saldo) {
      this.#saldo -= valor;
    } else {
      console.log("Valor inválido para retirar.");
    }
  }

  verSaldo() {
    return `Esse é o seu saldo atual: ${this.#saldo}`;
  }
}

const meuCofrinho = new Cofrinho("Anthony");

meuCofrinho.adicionar(100);
meuCofrinho.retirar(80);

console.log(meuCofrinho.verSaldo());
