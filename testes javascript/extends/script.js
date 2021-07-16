class seila{
    constructor(nome){
        this.nome = nome
    }
    getNome(){
        alert("Olá " +this.nome)
    }
}
class seila2 extends seila{
    saudades(){
        alert("Seja bem vindo "+this.nome)
    }
}
let opa2 = new seila2(prompt("Escreve ae"));
opa2.getNome()
opa2.saudades()