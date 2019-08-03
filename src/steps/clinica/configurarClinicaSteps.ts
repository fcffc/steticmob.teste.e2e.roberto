/**
 * Arquivo: loginSteps.ts
 * Data: 12/06/2019
 * Author: FernWhena Ferreira
 */

let expect = require('chai').expect;
import principalAdmPage from '../../pages/administrador/principalAdmPage';
import passoBemVindoPage from '../../pages/clinica/configPassos/configClinicaPassoBemVindoPage';
import passoFornecedorPage from '../../pages/clinica/configPassos/configClinicaPassoFornecedorPage';
import passoServicoPage from '../../pages/clinica/configPassos/configClinicaPassoServicoPage';
import passoProfissionaisPage from '../../pages/clinica/configPassos/configClinicaPassoProfissionaisPage';
import criarProfissionaisModalPage from '../../pages/clinica/configPassos/criarProfissionaisModalPage';
import passoFinalizarPage from '../../pages/clinica/configPassos/configClinicaPassoFinalizarPage';
import clinicaPage from '../../pages/clinica/minhaClinicaPage';
import menuClinicaPage from '../../pages/clinica/menuClinicaPage';
import geraNomePF from '../../../support/util/geraNomePF';
import geraCpfCnpj from '../../../support/util/geraCpfCnpj';
import geraCep from '../../../support/util/geraCep';
import geraLocalizacao from '../../../support/util/geraLocalizacao';
import gravados from '../../../support/util/gravados';

var condUrl, nomeProf, cpf, dataNascimento, email, telefone, cep, uf, cidade, logradouro, numero, complemento, bairro, servicoPrimeiro;
var servicoSegundo, servicoTerceiro;

var module: any;
module.exports = function suite() {

    //CASE01

    this.When(/^eu retorno para a tela do sistema SteticMob$/, () => {

        browser.pause(2500);
        principalAdmPage.open();
        var urlAtual = "https://staging.steticmob.com.br/admin";
        browser.waitUntil(() => {
            return condUrl = browser.getUrl() === urlAtual
        }, 5000, 'expected text to be different after 5s');

        expect(condUrl).to.equal(true);

    });

    this.When(/^eu estou na tela de configuração do primeiro passo$/, () => {

        passoBemVindoPage.logoImg.waitForVisible();
        passoBemVindoPage.passoBemVindoActiveLbl.waitForVisible()
        expect(passoBemVindoPage.msgPassoLbl.getText()).to.equal("Olá, seja bem vindo a SteticMob =)");

    });

    this.When(/^eu clico no próximo passo de configuração de fornecedores$/, () => {

        passoBemVindoPage.continuarPassoBtn.waitForVisible();
        passoBemVindoPage.continuarPassoBtn.click()

    });

    this.When(/^eu seleciono todos os fornecedores$/, () => {

        passoFornecedorPage.msgPassoLbl.waitForVisible();
        expect(passoFornecedorPage.msgPassoLbl.getText()).to.equal("Habilite os fornecedores que você gostaria de trabalhar.");
        passoFornecedorPage.selecionarTodosRad.waitForVisible();
        passoFornecedorPage.selecionarTodosRad.click();

    });

    this.When(/^eu clico no próximo passo de configuração de serviços$/, () => {

        passoFornecedorPage.continuarPassoUpBtn.waitForVisible();
        passoFornecedorPage.continuarPassoUpBtn.click();

    });

    this.When(/^eu seleciono os serviços desejados$/, () => {

        passoServicoPage.msgPassoLbl.waitForVisible();
        expect(passoServicoPage.msgPassoLbl.getText()).to.equal("Selecione os serviços que você trabalha.");
        passoServicoPage.selecionarPrimeiroRad.waitForVisible();
        servicoPrimeiro = passoServicoPage.nomeServicoPrimeiroLbl.getText();
        gravados.gravaServicoPrimeiro(servicoPrimeiro);
        passoServicoPage.selecionarPrimeiroRad.click();
        servicoSegundo = passoServicoPage.nomeServicoSegundoLbl.getText();
        gravados.gravaServicoSegundo(servicoSegundo);
        passoServicoPage.selecionarSegundoRad.click();
        servicoTerceiro = passoServicoPage.nomeServicoTerceiroLbl.getText();
        gravados.gravaServicoTerceiroGravado(servicoTerceiro);
        passoServicoPage.selecionarTerceiroRad.click();

    });

    this.When(/^eu clico no próximo passo de configuração de profissionais$/, () => {

        passoServicoPage.continuarPassoUpBtn.waitForVisible();
        passoServicoPage.continuarPassoUpBtn.click();

    });

    this.When(/^eu adiciono um novo profissional do tipo pessoa física$/, () => {

        passoProfissionaisPage.msgPassoLbl.waitForVisible();
        expect(passoProfissionaisPage.msgPassoLbl.getText()).to.equal("Cadastre seus profissionais.");
        passoProfissionaisPage.criarProfissionalBtn.waitForVisible();
        passoProfissionaisPage.criarProfissionalBtn.click();
        criarProfissionaisModalPage.abaDadosPessoaisActiveBtn.waitForVisible();
        criarProfissionaisModalPage.nomeProfTxt.waitForVisible();

        nomeProf = geraNomePF.geraNomeCompletoMulher();
        gravados.gravaNomeProfissionalPrimeiro(nomeProf);
        criarProfissionaisModalPage.nomeProfTxt.setValue(nomeProf);
        criarProfissionaisModalPage.selecioneEspecialidadeSlc.waitForVisible();
        criarProfissionaisModalPage.selecioneEspecialidadeSlc.click();
        criarProfissionaisModalPage.selecioneEspecialidadeSlc.selectByAttribute('value', 'number:1');
        criarProfissionaisModalPage.selecioneSexoSlc.waitForVisible();
        criarProfissionaisModalPage.selecioneSexoSlc.click();
        criarProfissionaisModalPage.selecioneSexoSlc.selectByAttribute('value', 'f');
        cpf = geraCpfCnpj.cpf();
        criarProfissionaisModalPage.cpfTxt.setValue(cpf);
        criarProfissionaisModalPage.dataNascimentoTxt.click();
        browser.keys("Numpad0");
        browser.keys("Numpad1");
        browser.keys("Numpad0");
        browser.keys("Numpad6");
        browser.keys("Numpad1");
        browser.keys("Numpad9");
        browser.keys("Numpad9");
        browser.keys("Numpad0");
        browser.keys('Tab');

        dataNascimento = "01/06/1990";
        email = "automated@teste.com";
        criarProfissionaisModalPage.emailTxt.setValue(email);
        telefone = "659999999999";
        criarProfissionaisModalPage.telefoneTxt.setValue(telefone);
        cep = geraCep.geraCEPAleatorio();

        criarProfissionaisModalPage.cepTxt.setValue(cep);
        criarProfissionaisModalPage.selecioneUFSlc.waitForVisible();
        uf = "MT"
        criarProfissionaisModalPage.selecioneUFSlc.click();
        criarProfissionaisModalPage.selecioneUFSlc.selectByAttribute('label', uf);
        browser.pause(1000);
        logradouro = geraLocalizacao.geraLogradouro();
        criarProfissionaisModalPage.logradouroTxt.waitForVisible();
        criarProfissionaisModalPage.logradouroTxt.setValue(logradouro);
        numero = geraLocalizacao.geraNumero();
        criarProfissionaisModalPage.numeroTxt.setValue(numero);
        complemento = geraLocalizacao.geraComplemento();
        criarProfissionaisModalPage.complementoTxt.setValue(complemento);
        bairro = geraLocalizacao.geraBairro();
        criarProfissionaisModalPage.bairroTxt.setValue(bairro);
        criarProfissionaisModalPage.salvarBtn.click();

    });

    this.When(/^eu visuliso o profissional criado na tela de configuração$/, () => {

        passoProfissionaisPage.nomeProfPrimeiroLbl.waitForVisible();
        expect(passoProfissionaisPage.nomeProfPrimeiroLbl.getText()).to.equal(nomeProf);

    });

    this.When(/^eu clino no próximo passo para finalizar a configuração$/, () => {

        passoProfissionaisPage.continuarPassoBtn.waitForVisible();
        passoProfissionaisPage.continuarPassoBtn.click();

    });

    this.Then(/^eu visualizo a mensagem de configuração realizada com sucesso$/, () => {

        passoFinalizarPage.msgPassoLbl.waitForVisible();
        expect(passoFinalizarPage.msgPassoLbl.getText()).to.equal("Parabéns, agora você está pronto para começar!");
        expect(passoFinalizarPage.confirmacaoPassoImg.isVisible());

    });

    this.When(/^eu clico no botão de começar a minha clínica$/, () => {

        passoFinalizarPage.prontoComecarBtn.waitForVisible();
        browser.pause(1000);
        passoFinalizarPage.prontoComecarBtn.click();

    });

    this.When(/^eu navego no step by do sistema SteticMob$/, () => {

        clinicaPage.manualPasso1Lbl.waitForVisible();
        expect(clinicaPage.manualPasso1Lbl.getText()).to.equal("Comece cadastrando seus clientes, quando mais informações você inserir mais completa ficará sua gestão.");
        clinicaPage.manualPróximoPasso1Btm.click();
        clinicaPage.manualPasso2Lbl.waitForVisible();
        expect(clinicaPage.manualPasso2Lbl.getText()).to.equal("Agora é só fazer os Agendamentos, e lembre-se que sempre que for executar um agendamento, clique em Atendimentos e localize-o na agenda. Bom trabalho!");
        browser.pause(1000);
        clinicaPage.manualFeitoPasso2Btm.waitForVisible();
        browser.pause(1000);
        clinicaPage.manualFeitoPasso2Btm.click();

    });

    this.When(/^eu acesso a tela prinicipal da minha clínica$/, () => {

        clinicaPage.tituloLbl.waitForVisible();
        expect(clinicaPage.tituloLbl.getText()).to.equal("MINHA CLÍNICA");
        menuClinicaPage.nomeUsuarioLink.waitForVisible();
        expect(menuClinicaPage.nomeUsuarioLink.getText()).to.equal("Automated Testing Steticmob");

    });

    //EX-CASE01

    this.When(/^eu busco um serviço inexistente$/, () => {

        passoServicoPage.servicosTxt.waitForVisible();
        passoServicoPage.servicosTxt.setValue("Serviço Inexistente");
        passoServicoPage.filtrarBtn.click();

    });

    this.Then(/^eu visualizo a mensagem de sem registro do serviçoo da configuração da clínica$/, () => {

        passoServicoPage.semRegistroLbl.waitForVisible();
        expect(passoServicoPage.semRegistroLbl.getText()).to.equal("Não há nenhum registro!");

    });

    //EX-CASE02

    this.When(/^eu adiciono um novo profissional do tipo pessoa física sem informar o nome$/, () => {

        passoProfissionaisPage.msgPassoLbl.waitForVisible();
        expect(passoProfissionaisPage.msgPassoLbl.getText()).to.equal("Cadastre seus profissionais.");
        passoProfissionaisPage.criarProfissionalBtn.waitForVisible();
        passoProfissionaisPage.criarProfissionalBtn.click();
        criarProfissionaisModalPage.abaDadosPessoaisActiveBtn.waitForVisible();
        criarProfissionaisModalPage.nomeProfTxt.waitForVisible();

        criarProfissionaisModalPage.selecioneEspecialidadeSlc.waitForVisible();
        criarProfissionaisModalPage.selecioneEspecialidadeSlc.click();
        criarProfissionaisModalPage.selecioneEspecialidadeSlc.selectByAttribute('value', 'number:1');
        criarProfissionaisModalPage.selecioneSexoSlc.waitForVisible();
        criarProfissionaisModalPage.selecioneSexoSlc.click();
        criarProfissionaisModalPage.selecioneSexoSlc.selectByAttribute('value', 'f');
        cpf = geraCpfCnpj.cpf();
        criarProfissionaisModalPage.cpfTxt.setValue(cpf);
        criarProfissionaisModalPage.dataNascimentoTxt.click();
        browser.keys("Numpad0");
        browser.keys("Numpad1");
        browser.keys("Numpad0");
        browser.keys("Numpad6");
        browser.keys("Numpad1");
        browser.keys("Numpad9");
        browser.keys("Numpad9");
        browser.keys("Numpad0");
        browser.keys('Tab');

        dataNascimento = "01/06/1990";
        email = "automated@teste.com";
        criarProfissionaisModalPage.emailTxt.setValue(email);
        telefone = "659999999999";
        criarProfissionaisModalPage.telefoneTxt.setValue(telefone);
        cep = geraCep.geraCEPAleatorio();

        criarProfissionaisModalPage.cepTxt.setValue(cep);
        criarProfissionaisModalPage.selecioneUFSlc.waitForVisible();
        uf = "MT"
        criarProfissionaisModalPage.selecioneUFSlc.click();
        criarProfissionaisModalPage.selecioneUFSlc.selectByAttribute('label', uf);
        browser.pause(1000);
        logradouro = geraLocalizacao.geraLogradouro();
        criarProfissionaisModalPage.logradouroTxt.waitForVisible();
        criarProfissionaisModalPage.logradouroTxt.setValue(logradouro);
        numero = geraLocalizacao.geraNumero();
        criarProfissionaisModalPage.numeroTxt.setValue(numero);
        complemento = geraLocalizacao.geraComplemento();
        criarProfissionaisModalPage.complementoTxt.setValue(complemento);
        bairro = geraLocalizacao.geraBairro();
        criarProfissionaisModalPage.bairroTxt.setValue(bairro);
        criarProfissionaisModalPage.salvarBtn.click();

    });

    this.Then(/^eu visualizo a mensagem de validação do nome do profissional na configuração da clínica$/, () => {

        criarProfissionaisModalPage.nomeProfInvalid.waitForVisible();
        expect(criarProfissionaisModalPage.nomeProfInvalid.isVisible()).to.equal(true);

    });

    this.When(/^eu adiciono um novo profissional do tipo pessoa física com CPF inválido$/, () => {

        criarProfissionaisModalPage.abaDadosPessoaisActiveBtn.waitForVisible();
        criarProfissionaisModalPage.nomeProfTxt.waitForVisible();
        nomeProf = geraNomePF.geraNomeCompletoMulher();
        criarProfissionaisModalPage.nomeProfTxt.setValue(nomeProf);
        criarProfissionaisModalPage.cpfTxt.waitForVisible();
        criarProfissionaisModalPage.cpfTxt.clearElement();
        criarProfissionaisModalPage.cpfTxt.setValue("90878778789");
        browser.keys('Tab');

    });

    this.Then(/^eu visualizo o CPF do profissional destacado em vermelho na configuração da clínica$/, () => {

        criarProfissionaisModalPage.cpfInvalid.waitForVisible();
        expect(criarProfissionaisModalPage.cpfInvalid.isVisible()).to.equal(true);

    });

    this.When(/^eu adiciono um novo profissional do tipo pessoa física com data de nascimento inválida$/, () => {

        criarProfissionaisModalPage.dataNascimentoTxt.click();
        browser.keys('Delete');
        browser.keys('Tab');
        browser.keys('Delete');
        browser.keys('Tab');
        browser.keys('Delete');
        browser.keys('Tab');
        criarProfissionaisModalPage.dataNascimentoTxt.click();
        browser.keys("Numpad0");
        browser.keys("Numpad1");
        browser.keys("Numpad0");
        browser.keys("Numpad6");
        browser.keys('Tab');

    });

    this.Then(/^eu visualizo a data de nascimento do profissional destacado em vermelho na configuração da clínica$/, () => {

        criarProfissionaisModalPage.dataNascimentoInvalid.waitForVisible();
        expect(criarProfissionaisModalPage.dataNascimentoInvalid.isVisible()).to.equal(true);

    });

    this.When(/^eu adiciono um novo profissional do tipo pessoa física com telefone inválido$/, () => {

        criarProfissionaisModalPage.telefoneTxt.clearElement();
        telefone = "659999";
        criarProfissionaisModalPage.telefoneTxt.setValue(telefone);

    });

    this.Then(/^eu visualizo o telefone do profissional destacado em vermelho na configuração da clínica$/, () => {

        criarProfissionaisModalPage.telefoneInvalid.waitForVisible();
        expect(criarProfissionaisModalPage.telefoneInvalid.isVisible()).to.equal(true);

    });

    this.When(/^eu adiciono um novo profissional do tipo pessoa física com CEP inválido$/, () => {

        criarProfissionaisModalPage.cepTxt.clearElement();
        criarProfissionaisModalPage.cepTxt.setValue("7878888");
        browser.keys('Tab')

    });

    this.Then(/^eu visualizo o CEP do profissional destacado em vermelho na configuração da clínica$/, () => {

        criarProfissionaisModalPage.cepInvalid.waitForVisible();
        expect(criarProfissionaisModalPage.cepInvalid.isVisible()).to.equal(true);

    });
}