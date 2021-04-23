'use strict';

const formatar = (data) =>{
    return{
        logradouro  : data.logradouro,
        bairro      : data.bairro,
        cidade      : data.localidade,
        estado      : data.uf
    }
}

export const viaCep = (cep) =>{
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    return fetch(url).then(response => response.json())
              .then(data=> formatar(data));
}