/**
 * Arquivo: gerenciarProtocoloSteps.ts
 * Data: 29/06/2019
 * Author: Fernanda Ferreira
 */

let expect = require('chai').expect;
let path = require('path');
const fs = require('fs');
import listagemProtocoloPage from '../../pages/clinica/protocolo/listagemProtocoloPage';
import criarProtocoloPage from '../../pages/clinica/protocolo/criarProtocoloPage';
import menuClinicaPage from '../../pages/clinica/menuClinicaPage';
import geraLocalizacao from '../../../support/util/geraLocalizacao';

var nomeProtocolo, descricaoProtocolo, produtoPrimeiro, linhaPrimeiro, precoPrimeiro, precoTotal, servicoPrimeiro;
var precoVendaServico, rendimento, precoPrimeiroConvert, precoTotalProtocolo, precoResultado;


var module: any;
module.exports = function suite() {

  //CASE01

  this.When(/^eu estou na tela de listagem de protocolos$/, () => {

    menuClinicaPage.menuProdutoServicoLink.waitForVisible();
    var cond = menuClinicaPage.subMenuProtocolosLink.isVisible();
    if (cond == false) {
      listagemProtocoloPage.open();
      browser.pause(1000);
      listagemProtocoloPage.tituloLbl.waitForVisible();
      expect(listagemProtocoloPage.tituloLbl.getText()).to.equal("PROTOCOLOS");
    } else {
      menuClinicaPage.subMenuProtocolosLink.waitForVisible();
      menuClinicaPage.subMenuProtocolosLink.click();
      browser.pause(1000);
      listagemProtocoloPage.tituloLbl.waitForVisible();
      expect(listagemProtocoloPage.tituloLbl.getText()).to.equal("PROTOCOLOS");
    }

  });

  this.When(/^eu clico em criar um novo protocolo$/, () => {

    listagemProtocoloPage.criarProtocoloBtn.waitForVisible();
    listagemProtocoloPage.criarProtocoloBtn.click();

  });

  this.When(/^eu preencho os dados do protocolo$/, () => {

    criarProtocoloPage.nomeProtocoloTxt.waitForVisible();
    nomeProtocolo = "Protocolo " + geraLocalizacao.geraNumero();
    criarProtocoloPage.nomeProtocoloTxt.setValue(nomeProtocolo);

    criarProtocoloPage.descricaoIframe.waitForExist();
    descricaoProtocolo = "Descrição do " + nomeProtocolo;
    browser.pause(2000);
    browser.keys('Tab');
    browser.keys('Tab');
    browser.keys(descricaoProtocolo);
    browser.keys('Tab');
    browser.keys('Enter');

  });

  this.When(/^eu adiciono um produto ao protocolo$/, () => {

    criarProtocoloPage.tituloModalModeloLbl.waitForVisible();
    criarProtocoloPage.buscarProdutoTxt.waitForVisible();

    this.produtoPrimeiroGravado = {
      produtoPrimeiroG: this.produto
    };

    this.data = JSON.stringify(this.produtoPrimeiroGravado);
    this.toFile = path.join(__dirname, '../../../support/util/gravados/produtoPrimeiro.json');
    this.stringFile = this.toFile.toString();

    fs.readFile(this.stringFile, (err, data) => {
      if (err) throw err;
      this.produtoPrimeiroG = JSON.parse(data);
      var str = JSON.stringify(this.produtoPrimeiroG);
      var prodPrimeiro1 = str.split(/[\:\}]/g)[1];
      this.prodPrimeiro2 = prodPrimeiro1.replace(/[\\"]/g, '');
      produtoPrimeiro = this.prodPrimeiro2;

    });

    this.linhaPrimeiroGravado = {
      linhaPrimeiroG: this.linha
    };

    this.data = JSON.stringify(this.linhaPrimeiroGravado);
    this.toFile = path.join(__dirname, '../../../support/util/gravados/linhaPrimeiro.json');
    this.stringFile = this.toFile.toString();

    fs.readFile(this.stringFile, (err, data) => {
      if (err) throw err;
      this.linhaPrimeiroG = JSON.parse(data);
      var str = JSON.stringify(this.linhaPrimeiroG);
      var linhaPrimeiro1 = str.split(/[\:\}]/g)[1];
      this.linhaPrimeiro2 = linhaPrimeiro1.replace(/[\\"]/g, '');
      linhaPrimeiro = this.linhaPrimeiro2;

    });

    this.precoTabelaPrimeiroGravado = {
      precoTabelaPrimeiroG: this.precoTabela
    };

    this.data = JSON.stringify(this.precoTabelaPrimeiroG);
    this.toFile = path.join(__dirname, '../../../support/util/gravados/precoTabelaPrimeiro.json');
    this.stringFile = this.toFile.toString();

    fs.readFile(this.stringFile, (err, data) => {
      if (err) throw err;
      this.precoTabelaPrimeiroG = JSON.parse(data);
      var str = JSON.stringify(this.precoTabelaPrimeiroG);
      var precoPrimeiro1 = str.split(/[\:\}]/g)[1];
      this.precoPrimeiro2 = precoPrimeiro1.replace(/[\\"]/g, '');
      precoPrimeiro = this.precoPrimeiro2;

    });

    criarProtocoloPage.buscarProdutoTxt.setValue(produtoPrimeiro);
    browser.pause(1500);

    var condPrimeiro = criarProtocoloPage.selecionarNomeProdutoPrimeiroRad.getText();
    if (condPrimeiro == produtoPrimeiro) {
      criarProtocoloPage.selecionarNomeProdutoPrimeiroRad.waitForVisible();
      expect(criarProtocoloPage.selecionarNomeProdutoPrimeiroRad.getText()).to.equal(produtoPrimeiro);
      expect(criarProtocoloPage.selecionarLinhaProdutoPrimeiroRad.getText()).to.equal(linhaPrimeiro);
      expect(criarProtocoloPage.selecionarPrecoCompraProdutoPrimeiroRad.getText()).to.equal("R$ " + precoPrimeiro);
      criarProtocoloPage.selecionarNomeProdutoPrimeiroRad.click();
      browser.pause(1000);
      criarProtocoloPage.selecionarProdutoBtn.click();

    } else {
      do {
        var cond = criarProtocoloPage.selecionarNomeProdutoSegundoRad.isVisible();
      } while (cond == true);
      criarProtocoloPage.selecionarNomeProdutoPrimeiroRad.waitForVisible();
      expect(criarProtocoloPage.selecionarNomeProdutoPrimeiroRad.getText()).to.equal(produtoPrimeiro);
      expect(criarProtocoloPage.selecionarLinhaProdutoPrimeiroRad.getText()).to.equal(linhaPrimeiro);
      expect(criarProtocoloPage.selecionarPrecoCompraProdutoPrimeiroRad.getText()).to.equal("R$ " + precoPrimeiro);
      criarProtocoloPage.selecionarNomeProdutoPrimeiroRad.click();
      browser.pause(1000);
      criarProtocoloPage.selecionarProdutoBtn.click();
    }

    criarProtocoloPage.removerProdutoPrimeiroBtn.waitForVisible();
    expect(criarProtocoloPage.nomeProdutoPrimeiroLbl.getText()).to.equal(produtoPrimeiro);
    expect(criarProtocoloPage.linhaProdutoPrimeiroLbl.getText()).to.equal(linhaPrimeiro);
    expect(criarProtocoloPage.fornecedorProdutoPrimeiroLbl.getText()).to.equal("--");
    expect(criarProtocoloPage.precoCompraProdutoPrimeiroLbl.getText()).to.equal(precoPrimeiro);
    expect(criarProtocoloPage.totalProdutoPrimeiroLbl.getText()).to.equal("R$ " + precoPrimeiro);

    rendimento = "1,55";
    criarProtocoloPage.rendimentoProdutoPrimeiroTxt.setValue(rendimento);
    rendimento = 1.55;
    precoPrimeiroConvert = parseFloat(precoPrimeiro);
    var resultadoTotal = (precoPrimeiroConvert * rendimento);
    precoResultado = resultadoTotal.toString();
    precoTotal = parseFloat(precoResultado).toFixed(2);
    precoTotal = precoTotal.toString().replace(".", ",");
    expect(criarProtocoloPage.totalProdutoPrimeiroLbl.getText()).to.equal("R$ " + precoTotal);

  });

  this.When(/^eu adiciono um serviço ao protocolo$/, () => {

    criarProtocoloPage.inserirServicoBtn.waitForVisible();
    criarProtocoloPage.inserirServicoBtn.click();
    criarProtocoloPage.buscarServicoTxt.waitForVisible();

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

    // Bug ao add serviço após filtro / apoós correção voltar para o servico pesquisado
    // criarProtocoloPage.buscarServicoTxt.setValue(servicoPrimeiro);
    // do {
    //   var cond = criarProtocoloPage.selecionarNomeServicoSegundoRad.isVisible();
    // } while (cond == true);

    // criarProtocoloPage.selecionarNomeServicoPrimeiroRad.waitForVisible();
    // criarProtocoloPage.selecionarNomeServicoPrimeiroRad.click();

    criarProtocoloPage.selecionarNomeServicoQuartoRad.waitForVisible();
    criarProtocoloPage.selecionarNomeServicoQuartoRad.click();
    criarProtocoloPage.selecionarServicoBtn.waitForVisible();
    browser.pause(2000);
    criarProtocoloPage.selecionarServicoBtn.click();
    criarProtocoloPage.removerServicoPrimeiroBtn.waitForVisible();
    expect(criarProtocoloPage.nomeServicoPrimeiroLbl.getText()).to.equal(servicoPrimeiro);

  });

  this.When(/^eu clico em salvar o novo protocolo$/, () => {

    criarProtocoloPage.salvarBtn.waitForVisible();
    criarProtocoloPage.salvarBtn.click();

  });

  this.When(/^os calculos do custo são realizados do protocolo$/, () => {

    this.precoVendaServicoPrimeiroGravado = {
      precoVendaServicoPrimeiroG: this.precoVendaServico
    };

    this.data = JSON.stringify(this.precoVendaServicoPrimeiroGravado);
    this.toFile = path.join(__dirname, '../../../support/util/gravados/precoVendaServicoPrimeiro.json');
    this.stringFile = this.toFile.toString();

    fs.readFile(this.stringFile, (err, data) => {
      if (err) throw err;
      this.precoVendaServicoPrimeiroG = JSON.parse(data);
      var str = JSON.stringify(this.precoVendaServicoPrimeiroG);
      var precoVendaServPrimeiro1 = str.split(/[\:\}]/g)[1];
      this.precoVendaServPrimeiro2 = precoVendaServPrimeiro1.replace(/[\\"]/g, '');
      precoVendaServico = this.precoVendaServPrimeiro2;

      var precoVendaServicoConvert = parseFloat(precoVendaServico);
      var resultadoTotal = +precoResultado + +precoVendaServicoConvert;
      var resultado = resultadoTotal.toString();
      precoTotalProtocolo = parseFloat(resultado).toFixed(2);
      precoTotalProtocolo = precoTotalProtocolo.toString().replace(".", ",");

    });
  });

  this.Then(/^eu visualizo o protocolo cadastrado na listagem de protocolos$/, () => {

    listagemProtocoloPage.tituloLbl.waitForVisible();
    listagemProtocoloPage.nomeProtocoloQuintoLbl.waitForVisible();
    expect(listagemProtocoloPage.nomeProtocoloQuintoLbl.getText()).to.equal(nomeProtocolo);
    expect(listagemProtocoloPage.custoProtocoloQuintoLbl.getText()).to.equal("R$ " + precoTotalProtocolo);

  });

  this.When(/^eu confirmo que o protocolo esta sendo filtrado corretamente$/, () => {

    listagemProtocoloPage.filtroBuscarTxt.waitForVisible();
    listagemProtocoloPage.filtroBuscarTxt.setValue(nomeProtocolo);
    browser.keys('Enter');
    expect(listagemProtocoloPage.nomeProtocoloPrimeiroLbl.getText()).to.equal(nomeProtocolo);
    expect(listagemProtocoloPage.custoPrimeiroLbl.getText()).to.equal("R$ " + precoTotalProtocolo);

  });

  //EX-CASE01

  this.When(/^eu adiciono um produto ao protocolo sem a qtde de rendimento$/, () => {

    criarProtocoloPage.tituloModalModeloLbl.waitForVisible();
    criarProtocoloPage.buscarProdutoTxt.waitForVisible();

    this.produtoPrimeiroGravado = {
      produtoPrimeiroG: this.produto
    };

    this.data = JSON.stringify(this.produtoPrimeiroGravado);
    this.toFile = path.join(__dirname, '../../../support/util/gravados/produtoPrimeiro.json');
    this.stringFile = this.toFile.toString();

    fs.readFile(this.stringFile, (err, data) => {
      if (err) throw err;
      this.produtoPrimeiroG = JSON.parse(data);
      var str = JSON.stringify(this.produtoPrimeiroG);
      var prodPrimeiro1 = str.split(/[\:\}]/g)[1];
      this.prodPrimeiro2 = prodPrimeiro1.replace(/[\\"]/g, '');
      produtoPrimeiro = this.prodPrimeiro2;

    });

    this.linhaPrimeiroGravado = {
      linhaPrimeiroG: this.linha
    };

    this.data = JSON.stringify(this.linhaPrimeiroGravado);
    this.toFile = path.join(__dirname, '../../../support/util/gravados/linhaPrimeiro.json');
    this.stringFile = this.toFile.toString();

    fs.readFile(this.stringFile, (err, data) => {
      if (err) throw err;
      this.linhaPrimeiroG = JSON.parse(data);
      var str = JSON.stringify(this.linhaPrimeiroG);
      var linhaPrimeiro1 = str.split(/[\:\}]/g)[1];
      this.linhaPrimeiro2 = linhaPrimeiro1.replace(/[\\"]/g, '');
      linhaPrimeiro = this.linhaPrimeiro2;

    });

    this.precoTabelaPrimeiroGravado = {
      precoTabelaPrimeiroG: this.precoTabela
    };

    this.data = JSON.stringify(this.precoTabelaPrimeiroG);
    this.toFile = path.join(__dirname, '../../../support/util/gravados/precoTabelaPrimeiro.json');
    this.stringFile = this.toFile.toString();

    fs.readFile(this.stringFile, (err, data) => {
      if (err) throw err;
      this.precoTabelaPrimeiroG = JSON.parse(data);
      var str = JSON.stringify(this.precoTabelaPrimeiroG);
      var precoPrimeiro1 = str.split(/[\:\}]/g)[1];
      this.precoPrimeiro2 = precoPrimeiro1.replace(/[\\"]/g, '');
      precoPrimeiro = this.precoPrimeiro2;

    });

    criarProtocoloPage.buscarProdutoTxt.setValue(produtoPrimeiro);
    browser.pause(1500);

    var condPrimeiro = criarProtocoloPage.selecionarNomeProdutoPrimeiroRad.getText();
    if (condPrimeiro == produtoPrimeiro) {
      criarProtocoloPage.selecionarNomeProdutoPrimeiroRad.waitForVisible();
      expect(criarProtocoloPage.selecionarNomeProdutoPrimeiroRad.getText()).to.equal(produtoPrimeiro);
      expect(criarProtocoloPage.selecionarLinhaProdutoPrimeiroRad.getText()).to.equal(linhaPrimeiro);
      expect(criarProtocoloPage.selecionarPrecoCompraProdutoPrimeiroRad.getText()).to.equal("R$ " + precoPrimeiro);
      criarProtocoloPage.selecionarNomeProdutoPrimeiroRad.click();
      browser.pause(1000);
      criarProtocoloPage.selecionarProdutoBtn.click();

    } else {
      do {
        var cond = criarProtocoloPage.selecionarNomeProdutoSegundoRad.isVisible();
      } while (cond == true);
      criarProtocoloPage.selecionarNomeProdutoPrimeiroRad.waitForVisible();
      expect(criarProtocoloPage.selecionarNomeProdutoPrimeiroRad.getText()).to.equal(produtoPrimeiro);
      expect(criarProtocoloPage.selecionarLinhaProdutoPrimeiroRad.getText()).to.equal(linhaPrimeiro);
      expect(criarProtocoloPage.selecionarPrecoCompraProdutoPrimeiroRad.getText()).to.equal("R$ " + precoPrimeiro);
      criarProtocoloPage.selecionarNomeProdutoPrimeiroRad.click();
      browser.pause(1000);
      criarProtocoloPage.selecionarProdutoBtn.click();
    }

    criarProtocoloPage.removerProdutoPrimeiroBtn.waitForVisible();
    expect(criarProtocoloPage.nomeProdutoPrimeiroLbl.getText()).to.equal(produtoPrimeiro);
    expect(criarProtocoloPage.linhaProdutoPrimeiroLbl.getText()).to.equal(linhaPrimeiro);
    expect(criarProtocoloPage.fornecedorProdutoPrimeiroLbl.getText()).to.equal("--");
    expect(criarProtocoloPage.precoCompraProdutoPrimeiroLbl.getText()).to.equal(precoPrimeiro);
    expect(criarProtocoloPage.totalProdutoPrimeiroLbl.getText()).to.equal("R$ " + precoPrimeiro);

    console.log("Chegou aqui deletar")
    criarProtocoloPage.rendimentoProdutoPrimeiroTxt.clearElement();
    criarProtocoloPage.rendimentoProdutoPrimeiroTxt.setValue(0);

  });

  this.Then(/^eu visualizo a mensagem de validação do campo rendimento do protocolo$/, () => {

    criarProtocoloPage.rendimentoProdutoPrimeiroInvalid.waitForVisible();
    expect(criarProtocoloPage.rendimentoProdutoPrimeiroInvalid.isVisible()).to.equal(true);

  });

  this.When(/^eu preencho os dados do protocolo sem o nome$/, () => {

    criarProtocoloPage.voltarBtn.waitForVisible();
    criarProtocoloPage.voltarBtn.click();
    listagemProtocoloPage.criarProtocoloBtn.waitForVisible();
    listagemProtocoloPage.criarProtocoloBtn.click();
    criarProtocoloPage.nomeProtocoloTxt.waitForVisible();
    criarProtocoloPage.nomeProtocoloTxt.click();
    criarProtocoloPage.descricaoIframe.waitForExist();
    descricaoProtocolo = "Descrição do " + nomeProtocolo;
    browser.pause(2000);
    browser.keys('Tab');
    browser.keys('Tab');
    browser.keys(descricaoProtocolo);
    browser.keys('Tab');

  });

  this.Then(/^eu visualizo a mensagem de validação do campo nome do protocolo$/, () => {

    criarProtocoloPage.nomeProtocoloInvalid.waitForVisible();
    expect(criarProtocoloPage.nomeProtocoloInvalid.isVisible()).to.equal(true);

  });
}