/**
 * Arquivo: geraNomePF.ts
 * Data: 17/05/2019
 * Author: Fernanda Ferreira
 */

const fs = require('fs');
let path = require('path');

let { sample } = require('underscore');
let nomesHomem = require('../util/helpers/pessoa/nomes-homem');
let nomesMulher = require('../util/helpers/pessoa/nomes-mulher');
let sobrenomes = require('../util/helpers/pessoa/sobrenomes');

class GeraNome_PF {

    public geraPrimeiroNome() {
        let primeiroNome;
        let nomeDoMeio;
        primeiroNome = sample(nomesHomem).split(' ')[0];
        nomeDoMeio = sample(nomesHomem).split(' ')[0];
        var primeiroMeioNome = [primeiroNome, nomeDoMeio].join(' ');
        return primeiroMeioNome;
    }

    public geraPrimeiroNomeMulher() {
        let primeiroNome;
        let nomeDoMeio;
        primeiroNome = sample(nomesMulher).split(' ')[0];
        nomeDoMeio = sample(nomesMulher).split(' ')[1];
        var primeiroNomeMulher = [primeiroNome, nomeDoMeio].join(' ');
        return primeiroNomeMulher;
    }

    public geraSobrenome() {
        let sobrenome;
        sobrenome = sample(sobrenomes).split(' ')[0];
        return sobrenome;
    }

    public geraNomeCompleto() {
        var nomeCompleto;
        nomeCompleto = (geraNomePF.geraPrimeiroNome() + " " + geraNomePF.geraSobrenome());

        return nomeCompleto;
    }

    public geraNomeCompletoMulher() {
        var nomeCompleto;
        nomeCompleto = (geraNomePF.geraPrimeiroNomeMulher() + " " + geraNomePF.geraSobrenome());

        return nomeCompleto;

    }
}
const geraNomePF = new GeraNome_PF();
export default geraNomePF