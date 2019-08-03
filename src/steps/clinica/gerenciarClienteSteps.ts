/**
 * Arquivo: gerenciarClienteSteps.ts
 * Data: 25/06/2019
 * Author: FernWhena Ferreira
 */

let expect = require('chai').expect;
import listagemClientesPage from '../../pages/clinica/cliente/listagemClientesPage';
import criarClientePage from '../../pages/clinica/cliente/criarClientePage';
import menuClinicaPage from '../../pages/clinica/menuClinicaPage';
import criarAvaliacaoPage from '../../pages/clinica/cliente/criarAvaliacaoPage';
import geraNomePF from '../../../support/util/geraNomePF';
import geraCpfCnpj from '../../../support/util/geraCpfCnpj';
import geraCep from '../../../support/util/geraCep';
import geraLocalizacao from '../../../support/util/geraLocalizacao';
import retornaDataAtual from '../../../support/util/retornaDataAtual';
import gravados from '../../../support/util/gravados';

var nomeCliente, cpf, dataNascimento, email, telefone, cep, uf, cidade, logradouro, numero, complemento, bairro;
var indicacao, alergiaDesc, peso, altura, coxaPerimetro, culotesPerimetro, gluteosPerimetro, flancosPerimetro, abdomePerimetro;
var abdomeSupPerimetro, bracoPerimetro

var module: any;
module.exports = function suite() {

    //CASE01

    this.When(/^eu estou na tela de listagem de clientes$/, () => {

        menuClinicaPage.menuClientesLink.waitForVisible();
        browser.pause(1000);
        menuClinicaPage.menuClientesLink.click();
        listagemClientesPage.tituloLbl.waitForVisible();
        expect(listagemClientesPage.tituloLbl.getText()).to.equal("CLIENTES");

    });

    this.When(/^eu clico em criar um novo cliente$/, () => {

        listagemClientesPage.criarClienteBtn.waitForVisible();
        listagemClientesPage.criarClienteBtn.click();

    });

    this.When(/^eu preencho os dados pessoais do cliente$/, () => {

        criarClientePage.abaDadosPessoaisBtn.waitForVisible();
        nomeCliente = geraNomePF.geraNomeCompletoMulher();
        gravados.gravaNomeClientePrimeiro(nomeCliente);
        criarClientePage.nomeClienteTxt.setValue(nomeCliente);
        email = "cliente@hotmail.com";
        criarClientePage.emailTxt.setValue(email);
        criarClientePage.dataNascimentoTxt.click();
        browser.keys("Numpad0");
        browser.keys("Numpad1");
        browser.keys("Numpad0");
        browser.keys("Numpad6");
        browser.keys("Numpad1");
        browser.keys("Numpad9");
        browser.keys("Numpad8");
        browser.keys("Numpad0");
        browser.keys('Tab');
        dataNascimento = "01/06/1980";
        cpf = geraCpfCnpj.cpf();
        criarClientePage.cpfTxt.setValue(cpf);
        criarClientePage.selecioneSexoSlc.waitForVisible();
        criarClientePage.selecioneSexoSlc.click();
        criarClientePage.selecioneSexoSlc.selectByAttribute('value', 'f');

        telefone = "65999299090";
        gravados.gravaFoneClientePrimeiro(telefone);
        criarClientePage.telefoneTxt.setValue(telefone);

        cep = geraCep.geraCEPAleatorio();
        criarClientePage.cepTxt.setValue(cep);
        criarClientePage.selecioneUFSlc.waitForVisible();
        uf = "MT"
        criarClientePage.selecioneUFSlc.click();
        browser.pause(1000);
        criarClientePage.selecioneUFSlc.selectByAttribute('label', uf);
        browser.pause(1000);
        criarClientePage.selecioneCidadeSlc.waitForVisible();
        // cidade = "Cuiaba";
        // browser.pause(2000);
        // criarClientePage.selecioneCidadeSlc.selectByAttribute('label', cidade);
        logradouro = geraLocalizacao.geraLogradouro();
        criarClientePage.logradouroTxt.setValue(logradouro);
        numero = geraLocalizacao.geraNumero();
        criarClientePage.numeroTxt.setValue(numero);
        complemento = geraLocalizacao.geraComplemento();
        criarClientePage.complementoTxt.setValue(complemento);
        bairro = geraLocalizacao.geraBairro();
        criarClientePage.bairroTxt.setValue(bairro);
        criarClientePage.abaDadosPessoaisBtn.scroll();

    });

    this.When(/^eu preencho a avaliação estética do cliente$/, () => {

        criarClientePage.abaAnamneseBtn.waitForVisible();
        browser.pause(1000);
        criarClientePage.abaAnamneseBtn.click();
        criarClientePage.abaAvaliacaoEsteticaBtn.waitForVisible();
        criarClientePage.indicacaoTxt.waitForVisible();
        indicacao = "Teste Indicação";
        criarClientePage.indicacaoTxt.setValue(indicacao);
        criarClientePage.usoMedicamentoNaoRad.click();
        alergiaDesc = "Teste Alergia";
        criarClientePage.alergiaSimRad.click();
        criarClientePage.alergiaDescricaoTxt.setValue(alergiaDesc);
        criarClientePage.fezProcedimentoNaoRad.click();
        criarClientePage.lactanteNaoRad.click();
        criarClientePage.cicloMestrualRegularRad.click();
        criarClientePage.contraceptivoSimRad.click();
        criarClientePage.fezProcedimentoNaoRad.click();
        criarClientePage.abaAnamneseBtn.scroll();

    });

    this.When(/^eu preencho a avaliação facial do cliente$/, () => {

        criarClientePage.abaAvaliacaoFacialBtn.waitForVisible();
        browser.pause(1000);
        criarClientePage.abaAvaliacaoFacialBtn.click();
        criarClientePage.manchaPigmAcromiaRad.waitForVisible();
        criarClientePage.manchaPigmAcromiaRad.click();
        criarClientePage.manchaPigmCloasmaRad.click();
        criarClientePage.manchaVascCeratoseRad.click();
        criarClientePage.solidaHematomaRad.click();

    });

    this.When(/^eu preencho a avaliação antropométrica do cliente$/, () => {

        criarClientePage.abaAvaliacaoAntropometricaBtn.waitForVisible();
        criarClientePage.abaAvaliacaoAntropometricaBtn.click();
        criarClientePage.deDataTxt.waitForVisible();
        browser.keys('Tab');
        browser.keys("Numpad2");
        browser.keys("Numpad7");
        browser.keys("Numpad0");
        browser.keys("Numpad6");
        browser.keys("Numpad2");
        browser.keys("Numpad0");
        browser.keys("Numpad1");
        browser.keys("Numpad9");
        browser.keys('Tab');

        browser.keys("Numpad2");
        browser.keys("Numpad7");
        browser.keys("Numpad0");
        browser.keys("Numpad6");
        browser.keys("Numpad2");
        browser.keys("Numpad0");
        browser.keys("Numpad2");
        browser.keys("Numpad0");
        browser.keys('Tab');

        browser.pause(3000);

        criarClientePage.novaAvaliacaoBtn.click();
        criarAvaliacaoPage.tituloLbl.waitForVisible();
        criarAvaliacaoPage.dataAtualLbl.waitForVisible();
        expect(criarAvaliacaoPage.dataAtualLbl.getText()).to.contain(retornaDataAtual.retornarDataHoje());
        peso = "55";
        criarAvaliacaoPage.pesoTxt.setValue(peso);
        altura = "160";
        criarAvaliacaoPage.alturaTxt.setValue(altura);
        coxaPerimetro = "35";
        criarAvaliacaoPage.coxaPerimetroTxt.setValue(coxaPerimetro);
        culotesPerimetro = "78";
        criarAvaliacaoPage.culotesPerimetroTxt.setValue(culotesPerimetro);
        gluteosPerimetro = "98";
        criarAvaliacaoPage.gluteosPerimetroTxt.setValue(gluteosPerimetro);
        flancosPerimetro = "30";
        criarAvaliacaoPage.flancosPerimetroTxt.setValue(flancosPerimetro);
        abdomePerimetro = "70";
        criarAvaliacaoPage.abdomePerimetroTxt.setValue(abdomePerimetro);
        abdomeSupPerimetro = "65";
        criarAvaliacaoPage.abdomeSupPerimetroTxt.setValue(abdomeSupPerimetro);
        bracoPerimetro = "12";
        criarAvaliacaoPage.bracoPerimetroTxt.setValue(bracoPerimetro);
        criarAvaliacaoPage.salvarAvaliacaoBtn.click();
        criarClientePage.evolucaoDescricaoTxt.waitForVisible();
        criarClientePage.evolucaoDescricaoTxt.setValue("Teste Evolução");
        expect(criarClientePage.avaliacaoDataLbl.getText()).to.contain(retornaDataAtual.retornarDataHoje());
        expect(criarClientePage.pesoLbl.getText()).to.equal(peso);
        expect(criarClientePage.alturaLbl.getText()).to.equal(altura);
        expect(criarClientePage.coxaLbl.getText()).to.equal(coxaPerimetro);
        expect(criarClientePage.culotesLbl.getText()).to.equal(culotesPerimetro);
        expect(criarClientePage.gluteosLbl.getText()).to.equal(gluteosPerimetro);
        expect(criarClientePage.flancosLbl.getText()).to.equal(flancosPerimetro);
        expect(criarClientePage.abdomeLbl.getText()).to.equal(abdomePerimetro);
        expect(criarClientePage.abdomeSupLbl.getText()).to.equal(abdomeSupPerimetro);
        expect(criarClientePage.bracoLbl.getText()).to.equal(bracoPerimetro);

    });

    this.When(/^eu clico em salvar o novo cliente$/, () => {

        criarClientePage.salvarBtn.waitForVisible();
        criarClientePage.salvarBtn.click();

    });

    this.Then(/^eu visualizo o cliente cadastrado na listagem de clientes$/, () => {

        listagemClientesPage.tituloLbl.waitForVisible();
        listagemClientesPage.nomeClienteLbl.waitForVisible();
        expect(listagemClientesPage.nomeClienteLbl.getText()).to.equal(nomeCliente);
        expect(listagemClientesPage.telefoneLbl.getText()).to.equal("(65) 99929-9090");
        expect(listagemClientesPage.emailLbl.getText()).to.equal("cliente@hotmail.com");

    });

    this.When(/^eu confirmo que o cliente esta sendo filtrado corretamente$/, () => {

        listagemClientesPage.filtroClienteTxt.setValue(nomeCliente);
        listagemClientesPage.filtroMesAniversarioSlc.click();
        listagemClientesPage.filtroMesAniversarioSlc.selectByAttribute('value', '6');
        // listagemClientesPage.filtroMesAnoNascTxt.setValue("0680"); Bug
        listagemClientesPage.filtroSexoSlc.click();
        listagemClientesPage.filtroSexoSlc.selectByAttribute('value', 'f');
        listagemClientesPage.filtrarBtn.click();

    });

    //EX-CASE01

    this.When(/^eu preencho os dados pessoais do cliente sem informar o nome$/, () => {

        criarClientePage.abaDadosPessoaisBtn.waitForVisible();
        nomeCliente = geraNomePF.geraNomeCompletoMulher();
        gravados.gravaNomeClientePrimeiro(nomeCliente);
        email = "cliente@hotmail.com";
        criarClientePage.emailTxt.setValue(email);
        criarClientePage.dataNascimentoTxt.click();
        browser.keys("Numpad0");
        browser.keys("Numpad1");
        browser.keys("Numpad0");
        browser.keys("Numpad6");
        browser.keys("Numpad1");
        browser.keys("Numpad9");
        browser.keys("Numpad8");
        browser.keys("Numpad0");
        browser.keys('Tab');
        dataNascimento = "01/06/1980";
        cpf = geraCpfCnpj.cpf();
        criarClientePage.cpfTxt.setValue(cpf);
        criarClientePage.selecioneSexoSlc.waitForVisible();
        criarClientePage.selecioneSexoSlc.click();
        criarClientePage.selecioneSexoSlc.selectByAttribute('value', 'f');

        telefone = "65999299090";
        gravados.gravaFoneClientePrimeiro(telefone);
        criarClientePage.telefoneTxt.setValue(telefone);

        cep = geraCep.geraCEPAleatorio();
        criarClientePage.cepTxt.setValue(cep);
        criarClientePage.selecioneUFSlc.waitForVisible();
        uf = "MT"
        criarClientePage.selecioneUFSlc.click();
        browser.pause(1000);
        criarClientePage.selecioneUFSlc.selectByAttribute('label', uf);
        browser.pause(2000);
        criarClientePage.selecioneCidadeSlc.waitForVisible();
        // cidade = "Cuiaba";
        // browser.pause(1000);
        // criarClientePage.selecioneCidadeSlc.selectByAttribute('label', cidade);
        logradouro = geraLocalizacao.geraLogradouro();
        criarClientePage.logradouroTxt.setValue(logradouro);
        numero = geraLocalizacao.geraNumero();
        criarClientePage.numeroTxt.setValue(numero);
        complemento = geraLocalizacao.geraComplemento();
        criarClientePage.complementoTxt.setValue(complemento);
        bairro = geraLocalizacao.geraBairro();
        criarClientePage.bairroTxt.setValue(bairro);

        criarClientePage.salvarBtn.waitForVisible();
        criarClientePage.salvarBtn.click();

    });

    this.Then(/^eu visualizo a mensagem de validação do nome do cliente$/, () => {

        criarClientePage.nomeClienteInvalid.waitForVisible();
        expect(criarClientePage.nomeClienteInvalid.isVisible()).to.equal(true);

    });

    this.When(/^eu preencho os dados pessoais do cliente com e-mail inválido$/, () => {

        criarClientePage.nomeClienteTxt.setValue(nomeCliente);
        criarClientePage.emailTxt.clearElement();
        criarClientePage.emailTxt.setValue("cliente");
        browser.keys('Tab');

    });

    this.Then(/^eu visualizo o e-mail do cliente destacado em vermelho$/, () => {

        criarClientePage.emailInvalid.waitForVisible();
        expect(criarClientePage.emailInvalid.isVisible()).to.equal(true);

    });

    this.When(/^eu preencho os dados pessoais do cliente com data de nascimento inválida$/, () => {

        criarClientePage.dataNascimentoTxt.click();
        browser.keys('Delete');
        browser.keys('Tab');
        browser.keys('Delete');
        browser.keys('Tab');
        browser.keys('Delete');
        browser.keys('Tab');
        criarClientePage.dataNascimentoTxt.click();
        browser.keys("Numpad0");
        browser.keys("Numpad1");
        browser.keys("Numpad0");
        browser.keys("Numpad6");
        browser.keys('Tab');

    });

    this.Then(/^eu visualizo a data de nascimento do cliente destacado em vermelho$/, () => {

        criarClientePage.dataNascimentoInvalid.waitForVisible();
        expect(criarClientePage.dataNascimentoInvalid.isVisible()).to.equal(true);

    });

    this.When(/^eu preencho os dados pessoais do cliente com CPF inválido$/, () => {

        browser.keys('Delete');
        criarClientePage.cpfTxt.setValue("90878689999");
        browser.keys('Tab');

    });

    this.Then(/^eu visualizo o CPF do cliente destacado em vermelho$/, () => {

        criarClientePage.cpfInvalid.waitForVisible();
        expect(criarClientePage.cpfInvalid.getText()).to.equal("CPF em formato inválido.");

    });

    this.When(/^eu preencho os dados pessoais do cliente com telefone inválido$/, () => {

        criarClientePage.telefoneTxt.clearElement();
        criarClientePage.telefoneTxt.setValue("659999");

    });

    this.Then(/^eu visualizo o telefone do cliente destacado em vermelho$/, () => {

        criarClientePage.telefoneInvalid.waitForVisible();
        expect(criarClientePage.telefoneInvalid.isVisible()).to.equal(true);

    });

    this.When(/^eu preencho os dados pessoais do cliente com CEP inválido$/, () => {

        criarClientePage.cepTxt.clearElement();
        criarClientePage.cepTxt.setValue("78048");
        browser.keys('Tab');

    });

    this.Then(/^eu visualizo o CEP do cliente destacado em vermelho$/, () => {

        criarClientePage.cepInvalid.waitForVisible();
        expect(criarClientePage.cepInvalid.isVisible()).to.equal(true);

    });

    //EX-CASE02

    this.When(/^eu preencho a avaliação estética do cliente com qtde de caracteres maior que 255$/, () => {

        criarClientePage.abaAnamneseBtn.waitForVisible();
        browser.pause(1000);
        criarClientePage.abaAnamneseBtn.click();
        criarClientePage.abaAvaliacaoEsteticaBtn.waitForVisible();
        criarClientePage.indicacaoTxt.waitForVisible();
        indicacao = "Lorem ipsum mollis pretium venenatis ipsum semper in posuere dictumst" +
            "leo sociosqu curae blandit tellus tincidunt accumsan purus, leo quis litora etiam" +
            "arcu fermentum etiam facilisis. aliquam ad netuLorem ipsum mollis pretium venenatis" +
            "ipsum semper88ewd123456789";
        criarClientePage.indicacaoTxt.setValue(indicacao);
        criarClientePage.usoMedicamentoNaoRad.click();
        alergiaDesc = "Lorem ipsum mollis pretium venenatis ipsum semper in posuere dictumst" +
            "leo sociosqu curae blandit tellus tincidunt accumsan purus, leo quis litora etiam" +
            "arcu fermentum etiam facilisis. aliquam ad netuLorem ipsum mollis pretium venenatis" +
            "ipsum semper88ewd123456789";
        criarClientePage.alergiaSimRad.click();
        criarClientePage.alergiaDescricaoTxt.setValue(alergiaDesc);
        criarClientePage.salvarBtn.waitForVisible();
        criarClientePage.salvarBtn.click();

    });

    this.Then(/^eu visualizo a mensagem de validação dos campos inválidos do cliente$/, () => {

        console.log("Mensagem de campo (indicação e alergia) estourado não tratado");
        browser.screenshot();

    });

    //EX-CASE03

    this.When(/^eu preencho a avaliação antropométrica do cliente sem o peso$/, () => {

        criarClientePage.abaAvaliacaoAntropometricaBtn.waitForVisible();
        criarClientePage.abaAvaliacaoAntropometricaBtn.click();
        criarClientePage.deDataTxt.waitForVisible();
        browser.keys('Tab');
        browser.keys("Numpad2");
        browser.keys("Numpad7");
        browser.keys("Numpad0");
        browser.keys("Numpad6");
        browser.keys("Numpad2");
        browser.keys("Numpad0");
        browser.keys("Numpad1");
        browser.keys("Numpad9");
        browser.keys('Tab');

        browser.keys("Numpad2");
        browser.keys("Numpad7");
        browser.keys("Numpad0");
        browser.keys("Numpad6");
        browser.keys("Numpad2");
        browser.keys("Numpad0");
        browser.keys("Numpad2");
        browser.keys("Numpad0");
        browser.keys('Tab');

        browser.pause(3000);

        criarClientePage.novaAvaliacaoBtn.click();
        criarAvaliacaoPage.tituloLbl.waitForVisible();
        criarAvaliacaoPage.dataAtualLbl.waitForVisible();
        expect(criarAvaliacaoPage.dataAtualLbl.getText()).to.contain(retornaDataAtual.retornarDataHoje());
        altura = "160";
        criarAvaliacaoPage.alturaTxt.setValue(altura);
        coxaPerimetro = "35";
        criarAvaliacaoPage.coxaPerimetroTxt.setValue(coxaPerimetro);
        culotesPerimetro = "78";
        criarAvaliacaoPage.culotesPerimetroTxt.setValue(culotesPerimetro);
        gluteosPerimetro = "98";
        criarAvaliacaoPage.gluteosPerimetroTxt.setValue(gluteosPerimetro);
        flancosPerimetro = "30";
        criarAvaliacaoPage.flancosPerimetroTxt.setValue(flancosPerimetro);
        abdomePerimetro = "70";
        criarAvaliacaoPage.abdomePerimetroTxt.setValue(abdomePerimetro);
        abdomeSupPerimetro = "65";
        criarAvaliacaoPage.abdomeSupPerimetroTxt.setValue(abdomeSupPerimetro);
        bracoPerimetro = "12";
        criarAvaliacaoPage.bracoPerimetroTxt.setValue(bracoPerimetro);
        criarAvaliacaoPage.salvarAvaliacaoBtn.click();

    });

    this.Then(/^eu visualizo a mensagem de validação do peso do cliente$/, () => {

        const textAlert = browser.alertText();
        expect(textAlert).to.contain("Informe o peso");
        browser.alertAccept();

    });

    this.When(/^eu preencho a avaliação antropométrica do cliente sem a altura$/, () => {

        peso = "55";
        criarAvaliacaoPage.pesoTxt.setValue(peso);
        criarAvaliacaoPage.alturaTxt.clearElement();
        browser.keys('Tab');
        criarAvaliacaoPage.salvarAvaliacaoBtn.click();

    });

    this.Then(/^eu visualizo a mensagem de validação da altura do cliente$/, () => {

        const textAlert = browser.alertText();
        expect(textAlert).to.contain("Informe a altura");
        browser.alertAccept();

    });
}