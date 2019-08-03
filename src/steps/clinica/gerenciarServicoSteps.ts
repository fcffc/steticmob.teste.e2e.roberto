/**
 * Arquivo: gerenciarServicoSteps.ts
 * Data: 29/06/2019
 * Author: Fernanda Ferreira
 */

let expect = require('chai').expect;
let path = require('path');
const fs = require('fs');
import lisgemServicoPage from '../../pages/clinica/servico/listagemServicoPage';
import listagemProdutoPage from '../../pages/clinica/produto/listagemProdutoPage';
import criarServicoPage from '../../pages/clinica/servico/criarServicoPage';
import menuClinicaPage from '../../pages/clinica/menuClinicaPage';
import geraLocalizacao from '../../../support/util/geraLocalizacao';
import listagemServicoPage from '../../pages/clinica/servico/listagemServicoPage';
import gravados from '../../../support/util/gravados';

var minMediaGasto, nomeServico, maoObra, precoVenda, lucroBruto, nomeProtocolo, servicoPrimeiro, servicoSegundo, servicoTerceiro;
var condListagem;

var module: any;
module.exports = function suite() {

    //CASE01

    this.When(/^eu estou na tela de listagem de serviços$/, () => {

        menuClinicaPage.menuProdutoServicoLink.waitForVisible();
        browser.pause(1000);
        var cond = listagemProdutoPage.nomeProdutoPrimeiroLbl.isVisible();
        if (cond == false) {
            menuClinicaPage.menuProdutoServicoLink.click();
            menuClinicaPage.subMenuMeusServicosLink.waitForVisible();
            menuClinicaPage.subMenuMeusServicosLink.click();
        } else {
            menuClinicaPage.subMenuMeusServicosLink.waitForVisible();
            menuClinicaPage.subMenuMeusServicosLink.click();
        }

        listagemServicoPage.tituloLbl.waitForVisible();
        expect(listagemServicoPage.tituloLbl.getText()).to.equal("SERVIÇOS");

    });

    this.When(/^eu clico em criar um novo serviços$/, () => {

        lisgemServicoPage.criarNovoUpBtn.waitForVisible();
        listagemServicoPage.criarNovoUpBtn.click();

    });

    this.When(/^eu preencho os dados do serviços$/, () => {

        criarServicoPage.tituloLbl.waitForVisible();
        expect(criarServicoPage.tituloLbl.getText()).to.equal("CRIANDO SERVIÇO");
        nomeServico = "Serviço " + geraLocalizacao.geraNumero();
        criarServicoPage.nomeServicoTxt.setValue(nomeServico);
        minMediaGasto = "40";
        criarServicoPage.minMediaGastoTxt.setValue(minMediaGasto);
        maoObra = "25,00";
        criarServicoPage.maoObraTxt.setValue(maoObra);
        precoVenda = "75,00";
        criarServicoPage.precoVendaTxt.setValue(precoVenda);

        var precoVendaConvert = parseInt(precoVenda);
        var maoObraConvert = parseInt(maoObra);
        var resultadoCustoBruto = (precoVendaConvert - maoObraConvert);
        var resultado = resultadoCustoBruto.toString();
        lucroBruto = parseFloat(resultado).toFixed(2);
        lucroBruto = lucroBruto.toString().replace(".", ",");
        maoObra = parseFloat(maoObra).toFixed(2);
        maoObra = maoObra.toString().replace(".", ",");

        expect(criarServicoPage.custoServicoLbl.getText()).to.equal("R$ " + maoObra);
        expect(criarServicoPage.lucroBrutoLb.getText()).to.equal("R$ " + lucroBruto);

    });

    this.When(/^eu adiciono um protocolo ao serviço$/, () => {

        criarServicoPage.inserirProtocoloBtn.waitForVisible();
        criarServicoPage.inserirProtocoloBtn.click();
        criarServicoPage.tituloModalLbl.waitForVisible();
        criarServicoPage.buscarTxt.waitForVisible();
        nomeProtocolo = "Limpeza de Pele Mezzo";
        criarServicoPage.buscarTxt.setValue(nomeProtocolo);
        browser.pause(1500);

        var condPrimeiro = criarServicoPage.selecionarPrimeiroRad.getText();
        if (condPrimeiro == nomeProtocolo) {
            criarServicoPage.selecionarPrimeiroRad.waitForVisible();
            criarServicoPage.selecionarPrimeiroRad.click();
        } else {
            do {
                var cond = criarServicoPage.selecionarSegundoRad.isVisible();
            } while (cond == true);
            criarServicoPage.selecionarPrimeiroRad.waitForVisible();
            criarServicoPage.selecionarPrimeiroRad.click();
        }

        browser.pause(1000);
        criarServicoPage.selecionarBtn.waitForVisible();
        criarServicoPage.selecionarBtn.click();
        criarServicoPage.removerProtocoloPrimeiroBtn.waitForVisible();
        expect(criarServicoPage.nomeProtocoloPrimeiroLbl.getText()).to.equal(nomeProtocolo);

    });

    this.When(/^eu clico em salvar o novo serviço$/, () => {

        criarServicoPage.salvarBtn.waitForVisible();
        criarServicoPage.salvarBtn.click();

    });

    this.Then(/^eu visualizo o serviço cadastrado na listagem de serviços$/, () => {

        listagemServicoPage.filtroServicoTxt.waitForVisible();


        this.servicoPrimeiroGravado = {
            servicoPrimeiroG: this.servico
        };

        this.data = JSON.stringify(this.servicoPrimeiroGravado);
        this.toFile = path.join(__dirname, '../../../support/util/gravados/servicoPrimeiro.json');
        this.stringFile = this.toFile.toString();

        fs.readFile(this.stringFile, (err, data) => {
            if (err) throw err;
            this.servicoPrimeiroG = JSON.parse(data);
            var str = JSON.stringify(this.servicoPrimeiroG);
            var servPrimeiro1 = str.split(/[\:\}]/g)[1];
            this.servPrimeiro2 = servPrimeiro1.replace(/[\\"]/g, '');
            servicoPrimeiro = this.servPrimeiro2;

        });

        this.servicoSegundoGravado = {
            servicoSegundoG: this.servico
        };

        this.data = JSON.stringify(this.servicoSegundoGravado);
        this.toFile = path.join(__dirname, '../../../support/util/gravados/servicoSegundo.json');
        this.stringFile = this.toFile.toString();

        fs.readFile(this.stringFile, (err, data) => {
            if (err) throw err;
            this.servicoSegundoG = JSON.parse(data);
            var str = JSON.stringify(this.servicoSegundoG);
            var servSegundo1 = str.split(/[\:\}]/g)[1];
            this.servSegundo2 = servSegundo1.replace(/[\\"]/g, '');
            servicoSegundo = this.servSegundo2;

        });

        this.servicoTerceiroGravado = {
            servicoTerceiroG: this.servico
        };

        this.data = JSON.stringify(this.servicoTerceiroGravado);
        this.toFile = path.join(__dirname, '../../../support/util/gravados/servicoTerceiro.json');
        this.stringFile = this.toFile.toString();

        fs.readFile(this.stringFile, (err, data) => {
            if (err) throw err;
            this.servicoTerceiroG = JSON.parse(data);
            var str = JSON.stringify(this.servicoTerceiroG);
            var servTerceiro1 = str.split(/[\:\}]/g)[1];
            this.servTerceiro2 = servTerceiro1.replace(/[\\"]/g, '');
            servicoTerceiro = this.servTerceiro2;

        });

        expect(listagemServicoPage.nomeServicoPrimeiroLbl.getText()).to.equal(servicoPrimeiro);
        expect(lisgemServicoPage.nomeServicoSegundoLbl.getText()).to.equal(servicoSegundo);
        expect(lisgemServicoPage.nomeServicoTerceiroLbl.getText()).to.equal(servicoTerceiro);
        expect(lisgemServicoPage.nomeServicoQuartoLbl.getText()).to.equal(nomeServico);
        expect(lisgemServicoPage.mediaMinutoQuartoLbl.getText()).to.equal(minMediaGasto);
        expect(lisgemServicoPage.custoMaoObraQuartoLbl.getText()).to.equal("R$ " + maoObra);
        expect(lisgemServicoPage.custoServicoQuartoLbl.getText()).to.equal("R$ " + maoObra);
        expect(lisgemServicoPage.precoVendaQuartoLbl.getText()).to.equal("R$ " + precoVenda);
        expect(lisgemServicoPage.lucroBrutoQuartoLbl.getText()).to.equal("R$ " + lucroBruto);
        gravados.gravaServicoPrimeiro(nomeServico);
        gravados.gravaPrecoVendaServicoPrimeiro(precoVenda);

    });

    this.When(/^eu confirmo que o serviço esta sendo filtrado corretamente$/, () => {

        lisgemServicoPage.filtroServicoTxt.waitForVisible();
        listagemServicoPage.filtroServicoTxt.setValue(nomeServico);
        listagemServicoPage.filtrarBtn.click();

        listagemServicoPage.nomeServicoPrimeiroLbl.waitUntil(() => {
            return condListagem = listagemServicoPage.nomeServicoPrimeiroLbl.getText() === nomeServico
        }, 5000, 'expected text to be different after 5s');

        expect(listagemServicoPage.nomeServicoPrimeiroLbl.getText()).to.equal(nomeServico);
        expect(lisgemServicoPage.mediaMinutoPrimeiroLbl.getText()).to.equal(minMediaGasto);
        expect(lisgemServicoPage.custoMaoObraPrimeiroLbl.getText()).to.equal("R$ " + maoObra);
        expect(lisgemServicoPage.custoServicoPrimeiroLbl.getText()).to.equal("R$ " + maoObra);
        expect(lisgemServicoPage.precoVendaPrimeiroLbl.getText()).to.equal("R$ " + precoVenda);
        expect(lisgemServicoPage.lucroBrutoPrimeiroLbl.getText()).to.equal("R$ " + lucroBruto);

    });

    //EX-CASE01

    this.When(/^eu preencho os dados do serviços sem o nome$/, () => {

        criarServicoPage.tituloLbl.waitForVisible();
        expect(criarServicoPage.tituloLbl.getText()).to.equal("CRIANDO SERVIÇO");
        minMediaGasto = "40";
        criarServicoPage.minMediaGastoTxt.setValue(minMediaGasto);
        maoObra = "25,00";
        criarServicoPage.maoObraTxt.setValue(maoObra);
        precoVenda = "75,00";
        criarServicoPage.precoVendaTxt.setValue(precoVenda);

    });

    this.Then(/^eu visualizo a mensagem de validação do campo nome do serviço$/, () => {

        criarServicoPage.nomeServicoInvalid.waitForVisible();
        expect(criarServicoPage.nomeServicoInvalid.isVisible()).to.equal(true);

    });

    this.When(/^eu preencho os dados do serviços sem o preço de venda$/, () => {

        criarServicoPage.tituloLbl.waitForVisible();
        expect(criarServicoPage.tituloLbl.getText()).to.equal("CRIANDO SERVIÇO");
        nomeServico = "Serviço " + geraLocalizacao.geraNumero();
        criarServicoPage.nomeServicoTxt.setValue(nomeServico);
        
        criarServicoPage.precoVendaTxt.clearElement();
        browser.keys('Tab');

    });

    this.Then(/^eu visualizo a mensagem de validação do campo preço de venda do serviço$/, () => {

        criarServicoPage.mesgValidacaoLbl.waitForVisible();
        expect(criarServicoPage.mesgValidacaoLbl.getText()).to.equal("O preço de venda é obrigatório");

    });
}