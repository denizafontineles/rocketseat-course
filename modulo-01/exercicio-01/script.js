//Crie uma função que dado o objeto a seguir:

const endereco = {
    rua: "Rua dos Pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

//Retorne o seguinte conteúdo:

function usuarioDados(){
    let retorna = `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com nº ${endereco.numero}.`
    
    return retorna
}

let retorna = usuarioDados()
console.log(retorna);

