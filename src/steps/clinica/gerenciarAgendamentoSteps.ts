/**
 * Arquivo: gerenciarAgendamentoSteps.ts
 * Data: 30/06/2019
 * Author: Fernanda Ferreira
 */

let expect = require('chai').expect;
let path = require('path');
const fs = require('fs');
import clinicaPage from '../../pages/clinica/minhaClinicaPage';
import menuClinicaPage from '../../pages/clinica/menuClinicaPage';
import geraLocalizacao from '../../../support/util/geraLocalizacao';
import retornaDataAtual from '../../../support/util/retornaDataAtual';

var nomeClientePrimeiro, nomeProfissionalPrimeiro, sala, observacao, servicoPrimeiro;

var module: any;
module.exports = function suite() {

    //CASE01

    this.When(/^eu estou na tela prinicipal da minha clínica$/, () => {

        menuClinicaPage.menuMinhaClinicaLink.waitForVisible();
        menuClinicaPage.menuMinhaClinicaLink.click();
        clinicaPage.tituloLbl.waitForVisible();
        clinicaPage.buscarClienteSlc.waitForVisible();

    });

    this.When(/^eu preencho o cliente do agendamento$/, () => {

        this.nomeClientePrimeiroGravado = {
            nomeClientePrimeiroG: this.nomeCliente
        };

        this.data = JSON.stringify(this.nomeClientePrimeiroGravado);
        this.toFile = path.join(__dirname, '../../../support/util/gravados/nomeCliente.json');
        this.stringFile = this.toFile.toString();

        fs.readFile(this.stringFile, (err, data) => {
            if (err) throw err;
            this.nomeClientePrimeiroG = JSON.parse(data);
            var str = JSON.stringify(this.nomeClientePrimeiroG);
            var nomeClientePrimeiro1 = str.split(/[\:\}]/g)[1];
            this.nomeClientePrimeiro2 = nomeClientePrimeiro1.replace(/[\\"]/g, '');
            nomeClientePrimeiro = this.nomeClientePrimeiro2;

        });

        clinicaPage.buscarClienteSlc.click();
        clinicaPage.buscarClienteTxt.waitForVisible();
        clinicaPage.buscarClienteTxt.setValue(nomeClientePrimeiro);
        // clinicaPage.buscarClienteResultLbl.waitForVisible(); Rodar Desktop
        browser.pause(1500); //Rodar headless
        browser.keys('Enter');

    });

    this.When(/^eu preencho o serviço do agendamento$/, () => {

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
            var servicoPrimeiro1 = str.split(/[\:\}]/g)[1];
            this.servicoPrimeiro2 = servicoPrimeiro1.replace(/[\\"]/g, '');
            servicoPrimeiro = this.servicoPrimeiro2;

        });

        browser.keys('Tab');
        browser.keys('Enter');
        // clinicaPage.buscarServicoResultLbl.waitForVisible(); Rodar Desktop
        clinicaPage.buscarServicoTxt.setValue(servicoPrimeiro);
        browser.pause(1500); // Rodar headless
        // clinicaPage.buscarServicoResultLbl.waitForVisible(); Rodar Desktop
        browser.keys('Enter');
        clinicaPage.nomeServicoPrimeiroLbl.waitForVisible();
        expect(clinicaPage.nomeServicoPrimeiroLbl.getText()).to.equal(servicoPrimeiro);

    });

    this.When(/^eu preencho o profissional do agendamento$/, () => {

        this.nomeProfissionalPrimeiroGravado = {
            nomeProfissionalPrimeiroG: this.nomeProfissional
        };

        this.data = JSON.stringify(this.nomeProfissionalPrimeiroGravado);
        this.toFile = path.join(__dirname, '../../../support/util/gravados/nomeProfissionalPrimeiro.json');
        this.stringFile = this.toFile.toString();

        fs.readFile(this.stringFile, (err, data) => {
            if (err) throw err;
            this.nomeProfissionalPrimeiroG = JSON.parse(data);
            var str = JSON.stringify(this.nomeProfissionalPrimeiroG);
            var profissionalPrimeiro1 = str.split(/[\:\}]/g)[1];
            this.profissionalPrimeiro2 = profissionalPrimeiro1.replace(/[\\"]/g, '');
            nomeProfissionalPrimeiro = this.profissionalPrimeiro2;

        });

        browser.keys('Tab');
        browser.keys('Tab');
        browser.keys('Enter');
        clinicaPage.buscarProfissionalTxt.waitForVisible();
        clinicaPage.buscarProfissionalTxt.setValue(nomeProfissionalPrimeiro);
        // clinicaPage.buscarProfissionalResultLbl.waitForVisible(); Rodar desktop
        browser.pause(1500); //Rodar headless
        browser.keys('Enter');
        browser.keys('Tab');

    });

    this.When(/^eu preencho a data de hoje do agendamento$/, () => {

        var dataAtual = retornaDataAtual.retornarDataHoje();
        browser.keys(dataAtual);
        browser.keys('Tab');

    });

    this.When(/^eu adiciono uma sala no agendamento$/, () => {

        browser.keys('Enter');
        clinicaPage.criarSalaBtn.waitForVisible();
        clinicaPage.criarSalaBtn.click();
        clinicaPage.tituloModalLbl.waitForVisible();
        clinicaPage.salaTxt.waitForVisible();
        sala = ("Sala " + geraLocalizacao.geraNumero());
        clinicaPage.salaTxt.setValue(sala);
        clinicaPage.salvarSalaBtn.waitForVisible();
        clinicaPage.salvarSalaBtn.click();
        browser.pause(2000);
        var setProf = clinicaPage.buscarProfissionalConversao.toString();
        var getProf = setProf.replace("Profissional", nomeProfissionalPrimeiro);
        browser.waitForVisible(getProf);
        browser.click(getProf);
        browser.keys('Enter');
        browser.keys('Tab');
        browser.keys('Tab');
        browser.keys('Tab');
        browser.keys('Tab');
        browser.keys('Enter');
        // Bug na seleção da busca da sala
        // clinicaPage.buscaSalaTxt.waitForVisible();
        // clinicaPage.buscaSalaTxt.setValue(sala);

        // clinicaPage.buscaSalaResultLbl.waitForVisible(); Rodar Desktop
        browser.pause(1500); //Rodar headless
        browser.keys('Enter');

    });

    this.When(/^eu preencho o período de atendimento do agendamento$/, () => {

        clinicaPage.horaInicialTxt.waitForVisible();
        clinicaPage.horaInicialTxt.setValue("1700");
        clinicaPage.horaFinalLbl.waitForVisible();
        expect(clinicaPage.horaFinalLbl.getValue()).to.equal("17:40");

    });

    this.When(/^eu preencho as observações necessárias para o atendimento$/, () => {

        observacao = "Atendimento Urgente";
        clinicaPage.observacaoTxt.setValue(observacao);

    });

    this.When(/^eu clico no botão de agendar para realizar o agendamento$/, () => {

        clinicaPage.agendarBtn.waitForVisible();
        clinicaPage.agendarBtn.click();

    });

    this.Then(/^eu visualizo o agendamento na agenda de hoje$/, () => {

        clinicaPage.nomeClienteAgendaPrimeiroLink.waitForVisible();
        expect(clinicaPage.nomeClienteAgendaPrimeiroLink.getText()).to.equal(nomeClientePrimeiro);
        expect(clinicaPage.telefoneClienteAgendaPrimeiroLbl.getText()).to.equal("(65) 99929-9090");
        expect(clinicaPage.servicoAgendaPrimeiroLbl.getText()).to.equal(servicoPrimeiro);
        expect(clinicaPage.horaInicialAgendaPrimeiroLbl.getText()).to.equal("17:00");
        expect(clinicaPage.iniciarAtendimentoPrimeiroBtn.isVisible());

    });

    this.When(/^eu confirmo que o agendamento esta sendo filtrado corretamente$/, () => {

        clinicaPage.buscaAgendaHojeTxt.waitForVisible();
        clinicaPage.buscaAgendaHojeTxt.setValue(nomeClientePrimeiro);
        browser.keys('Enter');
        clinicaPage.nomeClienteAgendaPrimeiroLink.waitForVisible();
        expect(clinicaPage.nomeClienteAgendaPrimeiroLink.getText()).to.equal(nomeClientePrimeiro);
        expect(clinicaPage.telefoneClienteAgendaPrimeiroLbl.getText()).to.equal("(65) 99929-9090");
        expect(clinicaPage.servicoAgendaPrimeiroLbl.getText()).to.equal(servicoPrimeiro);
        expect(clinicaPage.horaInicialAgendaPrimeiroLbl.getText()).to.equal("17:00");
        expect(clinicaPage.iniciarAtendimentoPrimeiroBtn.isVisible());
        browser.screenshot();

    });

    //EX-CASE01

    this.When(/^eu não preencho o cliente do agendamento$/, () => {

        clinicaPage.buscarClienteSlc.click();
        browser.keys('Tab');

    });

    this.When(/^eu preencho uma sala no agendamento$/, () => {

        browser.keys('Enter');
        // clinicaPage.buscaSalaTxt.waitForVisible();
        // clinicaPage.buscaSalaTxt.setValue("sala"); //Bug - Só consulta minusculo
        browser.pause(3000);
        // clinicaPage.buscaSalaResultLbl.waitForVisible();
        browser.keys('Enter');

    });

    this.Then(/^eu visualizo a mensagem de validação do campo clinte do agendamento$/, () => {

        clinicaPage.mesgValidacaoClienteLbl.waitForVisible();
        expect(clinicaPage.mesgValidacaoClienteLbl.getText()).to.equal("O cliente é obrigatório");
        clinicaPage.cancelarBtn.waitForVisible();
        clinicaPage.cancelarBtn.click();
        do {
            var cond = clinicaPage.excluirServicoPrimeiroLbl.isVisible();
        } while (cond == true);

    });

    this.When(/^eu informo o período de atendimento do agendamento$/, () => {

        clinicaPage.horaInicialTxt.waitForVisible();
        clinicaPage.horaInicialTxt.setValue("1700");

    });

    this.Then(/^eu visualizo a mensagem de validação do campo serviço do agendamento$/, () => {

        clinicaPage.mesgValidacaoServicoLbl.waitForVisible();
        expect(clinicaPage.mesgValidacaoServicoLbl.getText()).to.equal("O selecione pelo menos 1 serviço");
        clinicaPage.cancelarBtn.waitForVisible();
        clinicaPage.cancelarBtn.click();
        do {
            var nomeTitle = clinicaPage.buscarClienteSlc.getTitle();
        } while (nomeTitle == nomeClientePrimeiro);

    });

    this.When(/^eu não preencho o profissional do agendamento$/, () => {

        browser.keys('Tab');
        browser.keys('Tab');
        browser.keys('Tab');

    });

    this.Then(/^eu visualizo a mensagem de validação do campo profissional do agendamento$/, () => {

        clinicaPage.mesgValidacaoProfLbl.waitForVisible();
        expect(clinicaPage.mesgValidacaoProfLbl.getText()).to.equal("O profissional é obrigatório");
        clinicaPage.cancelarBtn.waitForVisible();
        clinicaPage.cancelarBtn.click();
        do {
            var nomeTitle = clinicaPage.buscarClienteSlc.getTitle();
        } while (nomeTitle == nomeClientePrimeiro);

    });

    this.When(/^eu não preencho a data do agendamento$/, () => {

        browser.keys('Tab');
        browser.keys('Tab');
        browser.keys('Tab');

    });

    this.Then(/^eu visualizo a mensagem de validação do campo data do agendamento$/, () => {

        clinicaPage.dataInvalid.waitForVisible();
        expect(clinicaPage.dataInvalid.isVisible()).to.equal(true);
        clinicaPage.cancelarBtn.waitForVisible();
        clinicaPage.cancelarBtn.click();
        do {
            var nomeTitle = clinicaPage.buscarClienteSlc.getTitle();
        } while (nomeTitle == nomeClientePrimeiro);

    });

    this.Then(/^eu visualizo a mensagem de validação do campo hora inicial do agendamento$/, () => {

        clinicaPage.horaInicialInvalid.waitForVisible();
        expect(clinicaPage.horaInicialInvalid.isVisible()).to.equal(true);

    });
}