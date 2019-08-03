/**
 * Arquivo: gerenciarClinicaSteps.ts
 * Data: 24/06/2019
 * Author: FernWhena Ferreira
 */

let expect = require('chai').expect;
import loginPage from '../../pages/loginPage';
import principalAdmPage from '../../pages/administrador/principalAdmPage';
import clinicaListagemPage from '../../pages/administrador/clinica/clinicaListagemPage';
import criarClinicaPage from '../../pages/administrador/clinica/criarClinicaPage';
import emailPage from '../../pages/email/emailPage';

var nomeClinica, nomeClinicaInativa, telefone, email, obs, senhaGerada;

var module: any;
module.exports = function suite() {

    this.When(/^eu estou logado no sistema SteticMob "([^"]*)" "([^"]*)"$/, (email, senha) => {

        loginPage.emailTxt.setValue(email);
        loginPage.senhaTxt.setValue(senha);
        loginPage.acessarContaBtn.click();
        principalAdmPage.tituloLbl.waitForVisible();
        expect(principalAdmPage.tituloLbl.getText()).to.contain("INÍCIO");
    });

    this.When(/^eu estou na tela de listagem da clínica$/, () => {

        principalAdmPage.menuClinicaLink.waitForVisible();
        principalAdmPage.menuClinicaLink.click();

        // Exclui cadastro caso já exista
        nomeClinica = "Automated Testing Steticmob";
        nomeClinicaInativa = "Automated Testing Steticmob Inativar";
        clinicaListagemPage.tituloLbl.waitForVisible();
        expect(clinicaListagemPage.tituloLbl.isVisible());
        clinicaListagemPage.clinicaFiltroTxt.setValue(nomeClinica);
        clinicaListagemPage.filtrarBtn.click();
        var cond = clinicaListagemPage.nomeLbl.isVisible();

        if (cond == true) {
            console.log("Entrou no primeiro IF")
            var clinica = clinicaListagemPage.nomeLbl.getText();

            if (clinica == nomeClinica) {
                console.log("Entrou no segundo IF")
                clinicaListagemPage.excluir1Btn.click();
                clinicaListagemPage.modalConfirmacaoLbl.waitForVisible();
                clinicaListagemPage.okExcluirBtn.click();

                clinicaListagemPage.clinicaFiltroTxt.waitForVisible();
                clinicaListagemPage.clinicaFiltroTxt.setValue(nomeClinica);
                browser.pause(2000);
                clinicaListagemPage.filtrarBtn.waitForVisible();
                clinicaListagemPage.filtrarBtn.click();
                expect(clinicaListagemPage.semResultadoLbl.getText()).to.contain("Não há nenhum registro!");

            } else {
                clinicaListagemPage.clinicaFiltroTxt.setValue(nomeClinicaInativa);
                clinicaListagemPage.filtrarBtn.click();
                var cond = clinicaListagemPage.nomeLbl.isVisible();

                if (cond == true) {
                    var clinica = clinicaListagemPage.nomeLbl.getText();

                    if (clinica == nomeClinicaInativa) {
                        clinicaListagemPage.excluir1Btn.click();
                        clinicaListagemPage.modalConfirmacaoLbl.waitForVisible();
                        clinicaListagemPage.okExcluirBtn.click();

                        clinicaListagemPage.clinicaFiltroTxt.waitForVisible();
                        clinicaListagemPage.clinicaFiltroTxt.setValue(nomeClinicaInativa);
                        browser.pause(2000);
                        clinicaListagemPage.filtrarBtn.waitForVisible();
                        clinicaListagemPage.filtrarBtn.click();
                        expect(clinicaListagemPage.semResultadoLbl.getText()).to.contain("Não há nenhum registro!");

                    }
                }
            }
        }
    });

    this.When(/^eu clico em criar uma clínica$/, () => {

        clinicaListagemPage.criarClinicaBtn.waitForVisible();
        clinicaListagemPage.criarClinicaBtn.click();

    });

    this.When(/^eu informo os dados da nova clínica a ser indicada$/, () => {

        criarClinicaPage.nomeClinicaTxt.waitForVisible();
        nomeClinica = "Automated Testing Steticmob";
        criarClinicaPage.nomeClinicaTxt.setValue(nomeClinica);
        telefone = "659999999999";
        criarClinicaPage.telefoneTxt.setValue(telefone);
        email = "automatedsteticmob@gmail.com";
        criarClinicaPage.emailTxt.setValue(email);
        obs = "Automated Testing Obs";
        criarClinicaPage.observacaoTxt.setValue(obs);

    });

    this.When(/^eu clico em indicar clínica$/, () => {

        criarClinicaPage.indicarBtn.click();
        browser.pause(4000);

    });

    this.Then(/^eu valido que a clínica foi indicada$/, () => {

        clinicaListagemPage.clinicaFiltroTxt.waitForVisible();
        clinicaListagemPage.clinicaFiltroTxt.setValue(nomeClinica);
        clinicaListagemPage.filtrarBtn.click();
        clinicaListagemPage.nomeLbl.waitForVisible();
        expect(clinicaListagemPage.nomeLbl.getText()).to.equal(nomeClinica);

    });

    this.When(/^eu valido o recebimento do email pela clínica$/, () => {

        browser.url('https://accounts.google.com/signin/v2');
        emailPage.tituloLbl.waitForVisible();
        emailPage.emailTxt.setValue(email);
        emailPage.proximoBtn.click();
        emailPage.emailLocalizadoLbl.waitForVisible();
        emailPage.senhaTxt.waitForVisible();
        emailPage.senhaTxt.setValue("Steticmob@2019");
        emailPage.proximoSenhaBtn.waitForVisible();
        emailPage.proximoSenhaBtn.click();
        emailPage.appsBtn.waitForVisible();
        browser.url('https://mail.google.com/mail/#inbox');
        emailPage.emailRecebidoPrimeiroLbl.waitForVisible();
        expect(emailPage.emailRecebidoPrimeiroLbl.getText()).to.equal("Sistema Steticmob");
        emailPage.emailRecebidoPrimeiroLbl.click();
        emailPage.confirmaCadastroLbl.waitForVisible();
        emailPage.senhaGeradaLbl.waitForVisible();
        senhaGerada = emailPage.senhaGeradaLbl.getText();
        console.log("Senha Gerada é: " + senhaGerada);
        emailPage.hamburgueBtn.waitForVisible();
        emailPage.hamburgueBtn.click();
        emailPage.deleteMensagemBtn.waitForVisible();
        emailPage.deleteMensagemBtn.click();

    });

    //CASE02

    this.When(/^eu informo os dados da nova clínica a ser indicada e inativada$/, () => {

        criarClinicaPage.nomeClinicaTxt.waitForVisible();
        nomeClinicaInativa = "Automated Testing Steticmob Inativar";
        criarClinicaPage.nomeClinicaTxt.setValue(nomeClinicaInativa);
        telefone = "659999999999";
        criarClinicaPage.telefoneTxt.setValue(telefone);
        email = "automatedsteticmob1@gmail.com";
        criarClinicaPage.emailTxt.setValue(email);
        obs = "Automated Testing Obs";
        criarClinicaPage.observacaoTxt.setValue(obs);

    });

    this.When(/^eu valido que a clínica foi cadastrada$/, () => {

        clinicaListagemPage.clinicaFiltroTxt.waitForVisible();
        clinicaListagemPage.clinicaFiltroTxt.setValue(nomeClinicaInativa);
        clinicaListagemPage.filtrarBtn.click();
        clinicaListagemPage.nomeLbl.waitForVisible();
        expect(clinicaListagemPage.nomeLbl.getText()).to.equal(nomeClinicaInativa);

    });

    this.When(/^eu inativo a clínica$/, () => {

        clinicaListagemPage.statuLbl.waitForVisible();
        clinicaListagemPage.statuLbl.click();
        clinicaListagemPage.salvarBtn.click();
        clinicaListagemPage.msgSucesso.waitForVisible();
        expect(clinicaListagemPage.msgSucesso.getText()).to.equal("Operação realizada com sucesso.");

    });

    this.Then(/^valido que a clínica foi inativada$/, () => {

        clinicaListagemPage.filtrarBtn.click();
        clinicaListagemPage.nomeLbl.waitForVisible();
        expect(clinicaListagemPage.nomeLbl.getText()).to.equal(nomeClinicaInativa);


    });

    //EX-CASE01

    this.When(/^eu informo os dados da nova clínica a ser indicada sem informar o nome da clínica$/, () => {

        criarClinicaPage.nomeClinicaTxt.waitForVisible();
        telefone = "659999999999";
        criarClinicaPage.telefoneTxt.setValue(telefone);
        email = "automatedsteticmob@gmail.com";
        criarClinicaPage.emailTxt.setValue(email);
        obs = "Automated Testing Obs";
        criarClinicaPage.observacaoTxt.setValue(obs);

    });

    this.Then(/^eu recebo a mensagem de validação do campo nome da clínica$/, () => {

        expect(criarClinicaPage.nomeClinicaRequired.isVisible()).to.equal(true);

    });

    this.When(/^eu informo os dados da nova clínica a ser indicada com e-mail inválido da clínica$/, () => {

        criarClinicaPage.nomeClinicaTxt.waitForVisible();
        nomeClinica = "Automated Testing Steticmob";
        criarClinicaPage.nomeClinicaTxt.setValue(nomeClinica);
        telefone = "659999999999";
        criarClinicaPage.telefoneTxt.setValue(telefone);
        criarClinicaPage.emailTxt.clearElement();
        email = "automatedsteticmobgmail.com";
        criarClinicaPage.emailTxt.setValue(email);
        obs = "Automated Testing Obs";
        criarClinicaPage.observacaoTxt.setValue(obs);

    });

    this.Then(/^eu recebo a mensagem de validação do campo e-mail da clínica$/, () => {

        expect(criarClinicaPage.emailValid.isVisible()).to.equal(false);

    });

    this.When(/^eu informo os dados da nova clínica a ser indicada com e-mail já cadastrado da clínica$/, () => {

        criarClinicaPage.emailTxt.clearElement();
        email = "admin@steticmob.com";
        criarClinicaPage.emailTxt.setValue(email);

    });

    this.Then(/^eu recebo a mensagem de validação do campo e-mail já cadastrado clínica$/, () => {

        criarClinicaPage.mesgEmailValid.waitForVisible();
        expect(criarClinicaPage.mesgEmailValid.getText()).to.equal("E-mail já existente no nosso sistema!");

    });

    //EX-CASE02

    this.When(/^eu busco a clínica inativada com filtro ativo$/, () => {

        clinicaListagemPage.clinicaFiltroTxt.waitForVisible();
        clinicaListagemPage.clinicaFiltroTxt.setValue(nomeClinicaInativa);
        clinicaListagemPage.habilitadosRad.click();
        clinicaListagemPage.filtrarBtn.click();

    });

    this.Then(/^eu recebo a mensagem de sem resultados da clínica$/, () => {

        clinicaListagemPage.semResultadoLbl.waitForVisible();
        expect(clinicaListagemPage.semResultadoLbl.getText()).to.equal("Não há nenhum registro!");

    });
}