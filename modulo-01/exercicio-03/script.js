//Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript" e retorna um booleano true/false caso exista ou não.

function temHabilidade (skills){
    let confere = (skills.indexOf("JavaScript") != -1) ? true : false
    console.log(confere);
}

let skills = ["JavaScript", "ReactJS", "React Native"];
temHabilidade(skills)

//Dica: para verificar se um vetor contém um valor, utilize o método indexOf.

