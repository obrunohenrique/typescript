"use strict";
class Conta {
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
}
class ContaPF extends Conta {
    constructor(titular, cpf) {
        super(titular);
        this.cpf = cpf;
    }
}
class ContaPJ extends Conta {
    constructor(titular, cnpj) {
        super(titular);
        this.cnpj = cnpj;
    }
}
const conta1 = new ContaPF("Bruno", 456163878533);
const conta2 = new ContaPJ("Goiáis", 1254584862400515);
console.log(conta2.titular);
console.log(conta2.numero);
//# sourceMappingURL=aula20.js.map