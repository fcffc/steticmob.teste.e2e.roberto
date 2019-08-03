/**
 * Arquivo: gerenciarProdutoSteps.ts
 * Data: 26/06/2019
 * Author: Fernanda Ferreira
 */

let expect = require('chai').expect;
import listagemProdutoPage from '../../pages/clinica/produto/listagemProdutoPage';
import criarProdutoPage from '../../pages/clinica/produto/criarProdutoPage';
import menuClinicaPage from '../../pages/clinica/menuClinicaPage';
import geraLocalizacao from '../../../support/util/geraLocalizacao';
import gravados from '../../../support/util/gravados';

var nomeLinha, nomeProduto, fabricante, nomeSubLinha, subLinhaDesc, codigo, estoqueMinimo, unidMedida, custoPrazo, custoVista;
var linhaDesc, rendimento, custoAplicacao, precoTabela, descontoVista, descontoPrazo, descricaoProduto;


var module: any;
module.exports = function suite() {

    //CASE01

    this.When(/^eu estou na tela de listagem de produtos$/, () => {

        menuClinicaPage.menuProdutoServicoLink.waitForVisible();
        browser.pause(1000);
        menuClinicaPage.menuProdutoServicoLink.click();
        menuClinicaPage.subMenuMeusProdutosLink.waitForVisible();
        menuClinicaPage.subMenuMeusProdutosLink.click();
        listagemProdutoPage.tituloLbl.waitForVisible();
        expect(listagemProdutoPage.tituloLbl.getText()).to.equal("PRODUTOS");

    });

    this.When(/^eu clico em criar um novo produto$/, () => {

        listagemProdutoPage.criarProdutoBtn.waitForVisible();
        listagemProdutoPage.criarProdutoBtn.click();

    });

    this.When(/^eu preencho os dados do produto$/, () => {

        criarProdutoPage.nomeProdutoTxt.waitForVisible();
        nomeProduto = ("Produto " + geraLocalizacao.geraNumero());
        gravados.gravaProdutoPrimeiro(nomeProduto);
        criarProdutoPage.nomeProdutoTxt.setValue(nomeProduto);
        criarProdutoPage.selecionarFrabricanteSlc.waitForVisible();
        criarProdutoPage.selecionarFrabricanteSlc.click();
        criarProdutoPage.selecionarFrabricanteTxt.waitForVisible();
        fabricante = "Extratos da Terra";
        criarProdutoPage.selecionarFrabricanteTxt.setValue(fabricante);
        // criarProdutoPage.selecionarFrabricanteResultLbl.waitForVisible();
        browser.pause(1500);
        browser.keys('Enter');

        criarProdutoPage.novaLinhaLink.click();
        criarProdutoPage.nomeLinhaTxt.waitForVisible();
        nomeLinha = "Linha A " + geraLocalizacao.geraNumero();
        gravados.gravaLinhaPrimeiro(nomeLinha);
        criarProdutoPage.nomeLinhaTxt.setValue(nomeLinha);
        linhaDesc = "Descrição da Linha";
        criarProdutoPage.descricaoLinhaTxt.setValue(linhaDesc);
        criarProdutoPage.salvarLinhaBtn.click();

        criarProdutoPage.novaSubLinhaLink.waitForVisible();
        browser.pause(2500);
        criarProdutoPage.novaSubLinhaLink.click();
        criarProdutoPage.nomeSubLinhaTxt.waitForVisible();
        nomeSubLinha = "SubLinha A " + geraLocalizacao.geraNumero();
        criarProdutoPage.nomeSubLinhaTxt.setValue(nomeSubLinha);
        subLinhaDesc = "Descrição da SubLinha";
        criarProdutoPage.descricaoSubLinhaTxt.setValue(subLinhaDesc);
        criarProdutoPage.salvarSubLinhaBtn.click();
        browser.pause(2000);

        codigo = geraLocalizacao.geraNumero();
        criarProdutoPage.codigoTxt.waitForVisible();
        criarProdutoPage.codigoTxt.setValue(codigo);
        estoqueMinimo = "5";
        criarProdutoPage.estoqueMinimoTxt.setValue(estoqueMinimo);
        criarProdutoPage.selecioneUnidadeMedidaSlc.waitForVisible();
        criarProdutoPage.selecioneUnidadeMedidaSlc.click();
        unidMedida = "Litros";
        criarProdutoPage.selecioneUnidadeMedidaSlc.selectByAttribute('label', unidMedida);
        custoPrazo = "23,00";
        criarProdutoPage.custoPrazoTxt.setValue(custoPrazo);
        custoVista = "15,00";
        criarProdutoPage.custoVistaTxt.setValue(custoVista);
        rendimento = "10";
        criarProdutoPage.rendimentoTxt.setValue(rendimento);
        var custoVistaConvert = parseFloat(custoVista);
        var rendimentoConvert = parseInt(rendimento);
        var resultadoRendimento = (custoVistaConvert / rendimentoConvert);
        var resultado = resultadoRendimento.toString();
        custoAplicacao = parseFloat(resultado).toFixed(2);
        custoAplicacao = custoAplicacao.toString().replace(".", ",");
        browser.pause(100);
        expect(criarProdutoPage.custoAplicacaoLbl.getValue()).to.equal(custoAplicacao);
        precoTabela = "55,00";
        gravados.gravaPrecoTabelaPrimeiro(precoTabela);
        criarProdutoPage.precoTabelaTxt.setValue(precoTabela);
        descontoVista = "5,00";
        criarProdutoPage.descontoVistaTxt.setValue(descontoVista);
        descontoPrazo = "2,00";
        criarProdutoPage.descontoPrazoTxt.setValue(descontoPrazo);
        descricaoProduto = (nomeProduto + " criado automaticamente.");
        criarProdutoPage.descricaoProdutoTxt.setValue(descricaoProduto);

    });

    this.When(/^eu informo que o produto pode ser vendido na clínica$/, () => {

        criarProdutoPage.podeSerVendidoRad.click();

    });

    this.When(/^eu clico em salvar o novo produto$/, () => {

        criarProdutoPage.salvarBtn.click();

    });

    this.Then(/^eu visualizo o produto cadastrado na listagem de produtos$/, () => {

        listagemProdutoPage.tituloLbl.waitForVisible();
        listagemProdutoPage.nomeProdutoPrimeiroLbl.waitForVisible();
        expect(listagemProdutoPage.nomeProdutoPrimeiroLbl.getText()).to.equal(nomeProduto);
        expect(listagemProdutoPage.linhaProdutoPrimeiroLbl.getText()).to.equal(nomeLinha);
        expect(listagemProdutoPage.subLinhaProdutoPrimeiroLbl.getText()).to.equal(nomeSubLinha);
        expect(listagemProdutoPage.estoqueProdutoPrimeiroLbl.getText()).to.equal("1");
        expect(listagemProdutoPage.estoqueAbertoProdPrimeiroLbl.getText()).to.equal("0");
        expect(listagemProdutoPage.editarProdPrimeiroBtn.isVisible());
        expect(listagemProdutoPage.acertoEstoqueProdPrimeiroBtn.isVisible());

    });

    this.When(/^eu confirmo que o produto esta sendo filtrado corretamente$/, () => {

        // listagemProdutoPage.filtroFabricanteSlc.click();
        // listagemProdutoPage.filtroFabricanteTxt.waitForVisible();
        // listagemProdutoPage.filtroFabricanteTxt.setValue(fabricante); Bug no sistema
        listagemProdutoPage.filtroProdutoSlc.waitForVisible();
        listagemProdutoPage.filtroProdutoSlc.click();
        listagemProdutoPage.filtroProdutoTxt.waitForVisible();
        listagemProdutoPage.filtroProdutoTxt.setValue(nomeProduto);
        listagemProdutoPage.filtroLinhaSlc.click();
        listagemProdutoPage.filtroLinhaSlc.selectByVisibleText(nomeLinha);
        listagemProdutoPage.filtroExibeProdutoEstoqueBaixoRad.click();
        listagemProdutoPage.filtrarBtn.click();

        listagemProdutoPage.nomeProdutoPrimeiroLbl.waitForVisible();
        expect(listagemProdutoPage.nomeProdutoPrimeiroLbl.getText()).to.equal(nomeProduto);
        expect(listagemProdutoPage.linhaProdutoPrimeiroLbl.getText()).to.equal(nomeLinha);
        expect(listagemProdutoPage.subLinhaProdutoPrimeiroLbl.getText()).to.equal(nomeSubLinha);
        expect(listagemProdutoPage.estoqueProdutoPrimeiroLbl.getText()).to.equal("1");
        expect(listagemProdutoPage.estoqueAbertoProdPrimeiroLbl.getText()).to.equal("0");
        expect(listagemProdutoPage.editarProdPrimeiroBtn.isVisible());
        expect(listagemProdutoPage.acertoEstoqueProdPrimeiroBtn.isVisible());

    });

    //EX-CASE01

    this.When(/^eu preencho os dados do produto sem o nome$/, () => {

        criarProdutoPage.nomeProdutoTxt.waitForVisible();
        nomeProduto = ("Produto " + geraLocalizacao.geraNumero());
        gravados.gravaProdutoPrimeiro(nomeProduto);
        criarProdutoPage.selecionarFrabricanteSlc.waitForVisible();
        criarProdutoPage.selecionarFrabricanteSlc.click();
        criarProdutoPage.selecionarFrabricanteTxt.waitForVisible();
        fabricante = "Extratos da Terra";
        criarProdutoPage.selecionarFrabricanteTxt.setValue(fabricante);
        browser.pause(1500);
        browser.keys('Enter');

        criarProdutoPage.novaLinhaLink.click();
        criarProdutoPage.nomeLinhaTxt.waitForVisible();
        nomeLinha = "Linha A " + geraLocalizacao.geraNumero();
        gravados.gravaLinhaPrimeiro(nomeLinha);
        criarProdutoPage.nomeLinhaTxt.setValue(nomeLinha);
        linhaDesc = "Descrição da Linha";
        criarProdutoPage.descricaoLinhaTxt.setValue(linhaDesc);
        criarProdutoPage.salvarLinhaBtn.click();

        criarProdutoPage.novaSubLinhaLink.waitForVisible();
        browser.pause(2500);
        criarProdutoPage.novaSubLinhaLink.click();
        criarProdutoPage.nomeSubLinhaTxt.waitForVisible();
        nomeSubLinha = "SubLinha A " + geraLocalizacao.geraNumero();
        criarProdutoPage.nomeSubLinhaTxt.setValue(nomeSubLinha);
        subLinhaDesc = "Descrição da SubLinha";
        criarProdutoPage.descricaoSubLinhaTxt.setValue(subLinhaDesc);
        criarProdutoPage.salvarSubLinhaBtn.click();
        browser.pause(2000);

        codigo = geraLocalizacao.geraNumero();
        criarProdutoPage.codigoTxt.waitForVisible();
        criarProdutoPage.codigoTxt.setValue(codigo);
        estoqueMinimo = "5";
        criarProdutoPage.estoqueMinimoTxt.setValue(estoqueMinimo);
        criarProdutoPage.selecioneUnidadeMedidaSlc.waitForVisible();
        criarProdutoPage.selecioneUnidadeMedidaSlc.click();
        unidMedida = "Litros";
        criarProdutoPage.selecioneUnidadeMedidaSlc.selectByAttribute('label', unidMedida);
        custoPrazo = "23,00";
        criarProdutoPage.custoPrazoTxt.setValue(custoPrazo);
        custoVista = "15,00";
        criarProdutoPage.custoVistaTxt.setValue(custoVista);
        rendimento = "10";
        criarProdutoPage.rendimentoTxt.setValue(rendimento);
        var custoVistaConvert = parseFloat(custoVista);
        var rendimentoConvert = parseInt(rendimento);
        var resultadoRendimento = (custoVistaConvert / rendimentoConvert);
        var resultado = resultadoRendimento.toString();
        custoAplicacao = parseFloat(resultado).toFixed(2);
        custoAplicacao = custoAplicacao.toString().replace(".", ",");
        browser.pause(100);
        expect(criarProdutoPage.custoAplicacaoLbl.getValue()).to.equal(custoAplicacao);
        precoTabela = "55,00";
        gravados.gravaPrecoTabelaPrimeiro(precoTabela);
        criarProdutoPage.precoTabelaTxt.setValue(precoTabela);
        descontoVista = "5,00";
        criarProdutoPage.descontoVistaTxt.setValue(descontoVista);
        descontoPrazo = "2,00";
        criarProdutoPage.descontoPrazoTxt.setValue(descontoPrazo);
        descricaoProduto = (nomeProduto + " criado automaticamente.");
        criarProdutoPage.descricaoProdutoTxt.setValue(descricaoProduto);

    });

    this.Then(/^eu visualizo a mensagem de validação do campo nome do produto$/, () => {

        criarProdutoPage.nomeProdutoInvalid.waitForVisible();
        expect(criarProdutoPage.nomeProdutoInvalid.isVisible()).to.equal(true);

    });

    this.When(/^eu preencho os dados do produto sem a linha do produto$/, () => {

        criarProdutoPage.nomeProdutoTxt.waitForVisible();
        criarProdutoPage.selecioneLinhaSlc.selectByAttribute('value', "");

    });

    this.Then(/^eu visualizo a mensagem de validação do campo linha do produto$/, () => {

        criarProdutoPage.selecioneLinhaInvalid.waitForVisible();
        expect(criarProdutoPage.selecioneLinhaInvalid.isVisible()).to.equal(true);

    });

    this.When(/^eu preencho os dados do produto sem a unidade de medida do produto$/, () => {

        criarProdutoPage.nomeProdutoTxt.waitForVisible();
        criarProdutoPage.selecioneLinhaSlc.selectByAttribute('label', nomeLinha);
        criarProdutoPage.selecioneUnidadeMedidaSlc.selectByAttribute('value', "");

    });

    this.Then(/^eu visualizo a mensagem de validação do campo unidade de medida do produto$/, () => {

        criarProdutoPage.selecioneUnidadeMedidaInvalid.waitForVisible();
        expect(criarProdutoPage.selecioneUnidadeMedidaInvalid.isVisible()).to.equal(true);

    });

    this.When(/^eu preencho os dados do produto sem o custo à vista do produto$/, () => {

        criarProdutoPage.selecioneUnidadeMedidaSlc.click();
        criarProdutoPage.selecioneUnidadeMedidaSlc.selectByAttribute('label', unidMedida);

        criarProdutoPage.custoVistaTxt.clearElement();

    });

    this.Then(/^eu visualizo a mensagem de validação do campo custo à vista do produto$/, () => {

        criarProdutoPage.custoVistaInvalid.waitForVisible();
        expect(criarProdutoPage.custoVistaInvalid.isVisible()).to.equal(true);

    });

    this.When(/^eu preencho os dados do produto sem o rendimento do produto$/, () => {

        criarProdutoPage.custoVistaTxt.setValue(custoVista);
        criarProdutoPage.rendimentoTxt.clearElement();

    });

    this.Then(/^eu visualizo a mensagem de validação do campo rendimento do produto$/, () => {

        criarProdutoPage.rendimentoInvalid.waitForVisible();
        expect(criarProdutoPage.rendimentoInvalid.isVisible()).to.equal(true);

    });

    this.When(/^eu preencho os dados do produto sem o preço de tabela do produto$/, () => {

        criarProdutoPage.rendimentoTxt.setValue(rendimento);
        criarProdutoPage.precoTabelaTxt.clearElement();

    });

    this.Then(/^eu visualizo a mensagem de validação do campo preço de tabela do produto$/, () => {

        criarProdutoPage.precoTabelaInvalid.waitForVisible();
        expect(criarProdutoPage.precoTabelaInvalid.isVisible()).to.equal(true);

    });

    this.When(/^eu preencho os dados do produto sem o nome da nova linha do produto$/, () => {

        criarProdutoPage.precoTabelaTxt.setValue(precoTabela);
        criarProdutoPage.novaLinhaLink.click();
        criarProdutoPage.nomeLinhaTxt.waitForVisible();
        criarProdutoPage.descricaoLinhaTxt.setValue(linhaDesc);
        criarProdutoPage.salvarLinhaBtn.click();

    });

    this.Then(/^eu visualizo a mensagem de validação do campo nome da nova linha do produto$/, () => {

        criarProdutoPage.nomeLinhaInvalid.waitForVisible();
        expect(criarProdutoPage.nomeLinhaInvalid.isVisible()).to.equal(true);

    });

    this.When(/^eu preencho os dados do produto sem a descrição da nova linha do produto$/, () => {

        criarProdutoPage.nomeLinhaTxt.waitForVisible();
        criarProdutoPage.nomeLinhaTxt.setValue(nomeLinha);
        criarProdutoPage.descricaoLinhaTxt.clearElement();
        criarProdutoPage.salvarLinhaBtn.click();

    });

    this.Then(/^eu visualizo a mensagem de validação do campo descrição da nova linha do produto$/, () => {

        criarProdutoPage.descricaoLinhaInvalid.waitForVisible();
        expect(criarProdutoPage.descricaoLinhaInvalid.isVisible()).to.equal(true);

    });

    this.When(/^eu preencho os dados do produto sem o nome da nova sublinha do produto$/, () => {

        criarProdutoPage.cancelarLinhaBtn.waitForVisible();
        criarProdutoPage.cancelarLinhaBtn.click();
        criarProdutoPage.novaSubLinhaLink.waitForVisible();
        browser.pause(1500);
        criarProdutoPage.novaSubLinhaLink.click();
        criarProdutoPage.nomeSubLinhaTxt.waitForVisible();
        // nomeSubLinha = "SubLinha A " + geraLocalizacao.geraNumero();
        // criarProdutoPage.nomeSubLinhaTxt.setValue(nomeSubLinha);
        criarProdutoPage.descricaoSubLinhaTxt.setValue(subLinhaDesc);
        criarProdutoPage.salvarSubLinhaBtn.click();

    });

    this.Then(/^eu visualizo a mensagem de validação do campo nome da nova sublinha do produto$/, () => {

        criarProdutoPage.nomeSubLinhaInvalid.waitForVisible();
        expect(criarProdutoPage.nomeSubLinhaInvalid.isVisible()).to.equal(true);

    });

    this.When(/^eu preencho os dados do produto sem a descrição da nova sublinha do produto$/, () => {

        criarProdutoPage.nomeSubLinhaTxt.waitForVisible();
        criarProdutoPage.nomeSubLinhaTxt.setValue(nomeSubLinha);
        criarProdutoPage.descricaoSubLinhaTxt.clearElement();
        criarProdutoPage.salvarSubLinhaBtn.click();

    });

    this.Then(/^eu visualizo a mensagem de validação do campo descrição da nova sublinha do produto$/, () => {

        criarProdutoPage.descricaoSubLinhaInvalid.waitForVisible();
        expect(criarProdutoPage.descricaoSubLinhaInvalid.isVisible()).to.equal(true);

    });
}