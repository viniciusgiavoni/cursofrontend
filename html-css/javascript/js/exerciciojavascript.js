// Exercício 1

a = 10 + 15; // Resultado 25 (number)
b = "10" + 2; // Resultado 102 (number)
c = "10" * 2; // Resultado 20 (number)
d = "10" / 3; // Resultado 3.333... (number)
e = "10" % 3; // Resultado 1 (number)
f = 10 + true; // Resultado 11 (number)
g = 10 == "10"; // Resultado true (boolean)
h = 10 === "10"; // Resultado false (boolean)
i = 10 < 11; // Resultado true (boolean)
j = 10 > 12; // Resultado false (boolean)
k = 10 <= 10.1; // Resultado true (boolean)
l = 10 > 9.99; // Resultado true (boolean)
m = 10 != "dez"; // Resultado true (boolean)
n = "dez" + true; // Resultado deztrue (string)
o = 10 + false; // Resultado 10 (number)
p = 10 * false; // Resultado 0 (number)
q = true + true; // Resultado 2 (number)
r = 10; r ++; // Resultao 11 (number)
s = 10; s --; // Resultado 9 (number)
t = 1 & 1; // Resultado 1 (number)
u = 1 & 0; // Resultado 0 (number)
v = 0 / 1; // Resultado 0 (number)
w = 5 + 5 == 10; // Resultado true (boolean)
x = "10" + "10" == 10; // Resultado false (boolean)
y = "5" * 2 > 9; // Resultado true (boolean)
z = (10 + 10) * 2; // Resultado 40 (number)
az = 10 + 10 * 2; // Resultado 30 (number)

// Exercício 2

let branco = "preto";
let preto = "cinza";
let cinza = "branco";
let carro = "preto";

// Questão "a"
branco == "branco";
// Resposta false pois branco é igual a preto (boolean)

// Questão "b"
branco == cinza;
// Resposta false pois branco é igual a preto (boolean)

// Questão "c"
carro === branco;
// Resposta true, pois carro é preto, diferente de branco"

// Questão "d"
let cavalo = carro == "preto" ? "cinza" : "marrom";
// Resposta cinza, porque o carro é preto, então atribui cinza pois se carro for preo então cavalo é cinza.

// Questão "e"
let valor = 30000;
let prestacao = 750;
let entrada = 3000;

function quantidadeParcelas(i1, i2, i3) {
    let parcelas = (valor - entrada) / prestacao
    console.log(parcelas)
}
quantidadeParcelas(valor, entrada, prestacao)

// Opção capturando dados de formulário

function quantidadeParcelas() {
    let valor = document.getElementById('valorCarro').value;
    let entrada = document.getElementById('valorEntrada').value;
    let parcela = document.getElementById('valorParcela').value;
    console.log("Valor do carro: " +valorCarro);
    console.log("Valor da entrada: " +valorEntrada);
    console.log("Valor da parcela: " +valorParcela);

    let resultado = (valor - entrada) / parcela
    console.log("Resultado: " +resultado);

    document.getElementById('parcelas').innerHTML = "Resultado: " +resultado;

}

// Resultado é 36, quantidade de parcelas necessárias para pagar o valor do carro

// Questão "f"
qt = (branco + preto + cinza);
qt.length
// Resultado 16
