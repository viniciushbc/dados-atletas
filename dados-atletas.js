var atletas = [];

class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }
    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }
    calculaMediaValida() {
        let notasComputadas = this.notas.slice();
        notasComputadas = notasComputadas.sort(function (a, b) { return a - b; }).slice(1, 4);
        let soma = 0;
        notasComputadas.forEach(function (nota) {
            soma = soma + nota;
        });
        return soma / notasComputadas.length;
    }
    obtemNomeAtleta() {
        return this.nome;
    }
    obtemIdadeAtleta() {
        return this.idade;
    }
    obtemPesoAtleta() {
        return this.peso;
    }
    obtemNotasAtleta() {
        return this.notas;
    }
    obtemCategoria() {
        return this.calculaCategoria();
    }
    obtemAltura() {
        return this.altura;
    }
    obtemIMC() {
        return this.calculaIMC();
    }
    obtemMediaValida() {
        return this.calculaMediaValida();
    }
    toString() {
        console.log("Nome: " + this.obtemNomeAtleta() +
            "\nIdade: " + this.obtemIdadeAtleta() +
            "\nPeso: " + this.obtemPesoAtleta() +
            "\nAltura: " + this.obtemAltura() +
            "\nNotas: " + this.obtemNotasAtleta().join(",") +
            "\nCategoria: " + this.obtemCategoria() +
            "\nIMC: " + this.obtemIMC() +
            "\nMédia válida: " + this.obtemMediaValida());
    }
}

function myFunction() {
    const atleta = new Atleta(document.getElementById("nome").value,
    document.getElementById("idade").value, document.getElementById("peso").value, document.getElementById("altura").value,
    [document.getElementById("nota1").value, 
    document.getElementById("nota2").value,
    document.getElementById("nota3").value,
    document.getElementById("nota4").value,
    document.getElementById("nota5").value]);
atletas.push(atleta);
atletas.toString();
  }
