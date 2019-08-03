/**
 * Arquivo: loginSteps.ts
 * Data: 12/06/2019
 * Author: FernWhena Ferreira
 */

let expect = require('chai').expect;
import loginPage from '../pages/loginPage';
import principalAdmPage from '../pages/administrador/principalAdmPage';
import clinicaListagemPage from '../pages/administrador/clinica/clinicaListagemPage';
import usuariosClinicaPage from '../pages/administrador/clinica/usuariosClinicaPage';
import clinicaPage from '../pages/administrador/clinica/clinicaListagemPage';

var module: any;
module.exports = function suite() {

    //LOGIN01

    this.Given(/^eu estou na tela de login$/, () => {

        loginPage.open();
        loginPage.emailTxt.waitForVisible();
        expect(loginPage.emailTxt.isVisible());

    });

    this.When(/^eu informo os dados do usuário$/, () => {

        loginPage.emailTxt.setValue("admin@steticmob.com");
        loginPage.senhaTxt.setValue("123456");

    });

    this.When(/^eu clico no botão entrar$/, () => {

        loginPage.acessarContaBtn.click();

    });

    this.When(/^eu acesso a tela principal do administrador$/, () => {

        principalAdmPage.tituloLbl.waitForVisible();
        expect(principalAdmPage.tituloLbl.getText()).to.contain('INÍCIO');

    });

    this.When(/^eu clico no menu clínica do sistema$/, () => {

        principalAdmPage.menuClinicaLink.waitForVisible();
        principalAdmPage.menuClinicaLink.click();

    });

    this.When(/^eu localizo a clínica desejada$/, () => {

        clinicaListagemPage.tituloLbl.waitForVisible();
        expect(clinicaListagemPage.tituloLbl.isVisible());
        clinicaListagemPage.clinicaFiltroTxt.setValue("Automated Testing Steticmob");
        clinicaListagemPage.filtrarBtn.click();
        clinicaListagemPage.nomeLbl.waitForVisible();
        expect(clinicaListagemPage.nomeLbl.getText()).to.equal("Automated Testing Steticmob");

    });

    this.When(/^eu clico no ícone usuários$/, () => {

        clinicaListagemPage.usuarios1Btn.click();

    });

    this.When(/^eu clico no botão entrar do usuário desejado$/, () => {

        usuariosClinicaPage.tituloLbl.waitForVisible();
        expect(usuariosClinicaPage.nome1Lbl.getText()).to.equal("Automated Testing Steticmob");
        usuariosClinicaPage.entrar1Btn.click();

    });

    this.Then(/^eu visualizo os dados da minha clinica selecionada$/, () => {

        clinicaPage.tituloLbl.waitForVisible();
        expect(clinicaPage.tituloLbl.getText()).to.equal("MINHA CLÍNICA");

    });

    //EX-LOGIN01

    this.When(/^eu informo os dados do usuário inválido$/, () => {

        loginPage.emailTxt.setValue("admin@steticmob.com");
        loginPage.senhaTxt.setValue("1234567");

    });

    this.Then(/^eu recebo a mensagem de validação "([^"]*)"$/, (msg) => {

        loginPage.mesgValidacaoLbl.waitForVisible();
        expect(loginPage.mesgValidacaoLbl.getText()).to.equal(msg);

    });
}