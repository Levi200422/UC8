var listaDePecas = ["amortecedor", "motor" , "Filtro do Ar", "Radiador" , "Parabrisas", "Faróis", "Maçanetas" , "Pe" , "Parachoque", "Freio", "Volante"] // Vetor ou Array

let peso = 150
if (peso < 100){
    console.log ("a peça deve pesar no mínimo 100g")}
 else {
    console.log ("a peça tem o peso requerido")}

// peso superior à 100g
if (listaDePecas.length < 10 ){
   console.log("É possível cadastrar mais peças na lista")
} else {
   console.log("Máximo de peças adicionadas à lista atingido")
}
// a capacidade máxima da caixa foi atingida 

let nomePeca = "porta"
if(nomePeca.length > 3){
   console.log("Nome de peça válido")
} else if (nomePeca.length == 0) {
   console.log("Nome da peça não pode ser vazio")
} else {
   console.log("Nome da peça precisa ter mais de 3 caracteres, digite um  nome adequado")
}
// Número de caracteres válido 
