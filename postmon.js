'use strict';

const cep = document.getElementById('cep');

const preencherForm = (data) => {
    document.getElementById('rua').value = data.logradouro;
    document.getElementById('bairro').value = data.bairro;
    document.getElementById('cidade').value = data.cidade;
    document.getElementById('estado').value = data.estado;
}

const viaCep = (cep) =>{
    const url = `https://api.postmon.com.br/v1/cep/${cep}`;
    fetch(url).then(response => response.json())
              .then(data=> preencherForm(data));
}

const pesquisarCep = () => {
    viaCep(cep.value);
}

cep.addEventListener('blur', pesquisarCep);