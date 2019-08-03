/**
 * Arquivo: gravados.ts
 * Data: 29/06/2019
 * Author: Fernanda Ferreira
 */

const fs = require('fs');
let path = require('path');
let servicoPrimeiroGravado, servicoSegundoGravado, servicoTerceiroGravado, data, toFile, stringFile;
let produtoPrimeiroGravado, linhaPrimeiroGravado, precoTabelaPrimeiroGravado, precoVendaServicoPrimeiroGravado;
let nomeClientePrimeiroGravado, nomeProfissionalPrimeiroGravado, foneClientePrimeiroGravado;

class Gravados {

    public gravaServicoPrimeiro(servico) {

        servicoPrimeiroGravado = {
            servicoPrimeiroG: servico
        };

        data = JSON.stringify(servicoPrimeiroGravado);
        toFile = path.join(__dirname, '../util/gravados/servicoPrimeiro.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaServicoSegundo(servico) {

        servicoSegundoGravado = {
            servicoSegundoG: servico
        };

        data = JSON.stringify(servicoSegundoGravado);
        toFile = path.join(__dirname, '../util/gravados/servicoSegundo.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaServicoTerceiroGravado(servico) {

        servicoTerceiroGravado = {
            servicoTerceiroG: servico
        };

        data = JSON.stringify(servicoTerceiroGravado);
        toFile = path.join(__dirname, '../util/gravados/servicoTerceiro.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaProdutoPrimeiro(produto) {

        produtoPrimeiroGravado = {
            produtoPrimeiroG: produto
        };

        data = JSON.stringify(produtoPrimeiroGravado);
        toFile = path.join(__dirname, '../util/gravados/produtoPrimeiro.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaLinhaPrimeiro(linha) {

        linhaPrimeiroGravado = {
            linhaPrimeiroG: linha
        };

        data = JSON.stringify(linhaPrimeiroGravado);
        toFile = path.join(__dirname, '../util/gravados/linhaPrimeiro.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaPrecoTabelaPrimeiro(precoTabela) {

        precoTabelaPrimeiroGravado = {
            precoTabelaPrimeiroG: precoTabela
        };

        data = JSON.stringify(precoTabelaPrimeiroGravado);
        toFile = path.join(__dirname, '../util/gravados/precoTabelaPrimeiro.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaPrecoVendaServicoPrimeiro(precoVendaServico) {

        precoVendaServicoPrimeiroGravado = {
            precoVendaServicoPrimeiroG: precoVendaServico
        };

        data = JSON.stringify(precoVendaServicoPrimeiroGravado);
        toFile = path.join(__dirname, '../util/gravados/precoVendaServicoPrimeiro.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaNomeClientePrimeiro(nomeCliente) {

        nomeClientePrimeiroGravado = {
            nomeClientePrimeiroG: nomeCliente
        };

        data = JSON.stringify(nomeClientePrimeiroGravado);
        toFile = path.join(__dirname, '../util/gravados/nomeCliente.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaNomeProfissionalPrimeiro(nomeProfissional) {

        nomeProfissionalPrimeiroGravado = {
            nomeProfissionalPrimeiroG: nomeProfissional
        };

        data = JSON.stringify(nomeProfissionalPrimeiroGravado);
        toFile = path.join(__dirname, '../util/gravados/nomeProfissionalPrimeiro.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaFoneClientePrimeiro(foneCliente) {

        foneClientePrimeiroGravado = {
            foneClientePrimeiroG: foneCliente
        };

        data = JSON.stringify(foneClientePrimeiroGravado);
        toFile = path.join(__dirname, '../util/gravados/foneClientePrimeiro.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }
}
const gravados = new Gravados();
export default gravados