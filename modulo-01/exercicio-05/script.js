//Dado o seguinte vetor de objetos:

let usuarios = [{
    nome : "Deniza",
    habilidades : ["JavaScript", "ReactJS"]
},
{
    nome : "José Vitor",
    habilidades : ["Liderança", "Vendas", "Atividade Física"]
}
]

//Escreva uma função que produza o seguinte resultado:

//O Diego possui as habilidades: Javascript, ReactJS, Redux
//O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir

for (const i of usuarios) {
    console.log(`${i.nome} possui as habilidades: ${i.habilidades.join()};`)
}