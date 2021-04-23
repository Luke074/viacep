'use strict';

import {viaCep} from './viaCep.js'

const cep = document.getElementById('cep');

const preencherForm = (data) => {
    document.getElementById('rua').value = data.logradouro;
    document.getElementById('bairro').value = data.bairro;
    document.getElementById('cidade').value = data.cidade;
    document.getElementById('estado').value = data.estado;
}

const pesquisarCep = () => {
    viaCep(cep.value).then (response => (preencherForm(response)));
}

cep.addEventListener('blur', pesquisarCep);
