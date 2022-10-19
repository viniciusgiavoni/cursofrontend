## switch
switch (cor) {
    case "azul" :
        meuCarro = "azul";
        break;
    case "vermelho" :
        meuCarro = "vermelho";
        break;
    default :
        console.log("Não é nenhuma cor escolhida");
}

## media
let nota1 = 10;
let nota2 = 8;
let nota3 = 9;
let nota4 = 7;
let media = (nota1 + nota2 + nota3 + nota4) / 4;
if(media >= 8 ) {
    console.log("Aluno aprovado")
} else {
    console.log("Aluno em reuperação")
}

## Laços de Repetição
1° condição de entrada
2° condição de saída
Estrutura:
for ([expressaoInicial]; [condicao]; [incremento])

...
//fazer revisão do carro aos 10 km

ex de estrutura:
for([expressaoInicial]; [condicao]; [incremento]){
    [codigoExecutado](condicao)
}

var km;
var revisao = 10;
for(km = 0; km < revisao; km++ ){
    console.log("apenas " + km + "kms então pode rodar");
}

## cálculo de média de alunos
var alunos = [
    [6, 7, 8, 6],
    [8, 5, 6, 8],
    [10, 6, 8, 7]
]

var nota = 0;
for (var i = 0; i < alunos.length; i++){

    nota = 0
    aluno = alunos[i]
    console.log("Aluno: " + aluno);

    for( c = 0; c < aluno.length; c++){
        nota += aluno[c];
    }

    media = nota / 4;
    if(media >= 7) {
        resultado = "aprovado";
    } else {
        resultado = "reprovado";
    }

    console.log("Media: " + media + " - " + resultado);

}