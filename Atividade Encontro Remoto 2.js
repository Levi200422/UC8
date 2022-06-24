// encontro remoto 2
// atividade realizada pelo aluno Levi Ambé
//considere a quantidade de alunos presentes na sala, percorra do zero até o número total e retornar os seguintes resultados;
// se o número for par, escreva 'par' e o número corrrespondente
// se o número for ímpar, escreva 'ímpar' e o número correspondente
// se o número for zero, escreva 'zero'

let numeroDeAlunos = 10 

for (let contador = 0; contador <= numeroDeAlunos; contador++){
    //console.log (contador)

    if (contador == 0){
        console.log ("o número atual é zero");
    } else if (contador % 2 == 0 ){
        console.log("o número " + contador + " é PAR")
    } else {
    console.log(`o número ${contador} é IMPAR`)
    }

}
