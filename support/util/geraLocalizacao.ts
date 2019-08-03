/**
 * Arquivo: geraLocalizacao.ts
 * Data: 26/06/2019
 * Author: Fernanda Ferreira
 */

let { sample } = require('underscore');
let logradouro = require('../util/helpers/localizacao/logradouro');
let bairro = require('../util/helpers/localizacao/bairro');
let complemento = require('../util/helpers/localizacao/complemento');
const fs = require('fs');

class Gera_Localizacao {

    public geraAleatorio() {
        var aleatorio = '0123456789';
        var sufixo = '';
        var tamanho = 3
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * aleatorio.length);
            sufixo += aleatorio.substring(rnum, rnum + 1);
        }

        return sufixo;
    }

    public geraNumero() {
        var aleatorio = '0123456789';
        var sufixo = '';
        var tamanho = 3
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * aleatorio.length);
            sufixo += aleatorio.substring(rnum, rnum + 1);
        }

        return sufixo;
    }

    public geraLogradouro() {
        let lograd;
        lograd = sample(logradouro).split(' ')[0];

        return lograd;
    }

    public geraBairro() {
        let bairr;
        bairr = sample(bairro).split(' ')[0];

        return bairr;
    }

    public geraComplemento() {
        let comp;
        comp = sample(complemento).split(' ')[0];
        var comple = comp+" "+(this.geraAleatorio());

        return comple
    }

    public geraPontoReferencia() {
        let pontoRef;
        pontoRef = sample(complemento).split(' ')[0];
        var pontoRefe = "Próximo ao "+pontoRef+" "+(this.geraAleatorio());

        return pontoRefe
    }
}
const geraLocalizacao = new Gera_Localizacao();
export default geraLocalizacao