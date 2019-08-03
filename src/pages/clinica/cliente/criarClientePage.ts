/**
 * Arquivo: criarClientePage.ts
 * Data: 20/06/2019
 * Author: Fernanda Ferreira
 */

class CriarCliente_Page {

    /**
     * Aba Pessoais - Dados Pessoais
     */
    public get abaDadosPessoaisBtn() { return browser.element('a[aria-controls="pessoais"]') }
    public get abaAnamneseBtn() { return browser.element('a[aria-controls="anamnese"]') }
    public get abaHistoricoAtendimentoBtn() { return browser.element('a[aria-controls="historico-atendimento"]') }
    public get excluirCadastroBtn() { return browser.element('div.col-sm-12 > div > button > span') }
    public get upFotoLbl() { var upFotoLbl = 'div#pessoais i'; return upFotoLbl }
    public get pessoaFisicaRad() { return browser.element('input[ng-model="form.pessoa.tipo_pessoa"][value="f"]') }
    public get pessoaJuridicaRad() { return browser.element('input[ng-model="form.pessoa.tipo_pessoa"][value="j"]') }
    public get nomeClienteTxt() { return browser.element('input[ng-model="form.pessoa.nome"]') }
    public get nomeClienteInvalid() { return browser.element('input[class*="ng-invalid"][ng-model="form.pessoa.nome"]') }
    public get nomeFantasiaTxt() { return browser.element('input[ng-model="form.pessoa.nome_fantasia"]') }
    public get emailTxt() { return browser.element('input[ng-model="form.pessoa.email"]') }
    public get emailInvalid() { return browser.element('input[class*="ng-invalid"][ng-model="form.pessoa.email"]') }
    public get dataNascimentoTxt() { return browser.element('input[ng-model="form.pessoa.data_nascimento"]') }
    public get dataNascimentoInvalid() { return browser.element('input[class*="ng-invalid"][ng-model="form.pessoa.data_nascimento"]') }
    public get cpfTxt() { return browser.element('input[name="cpf"]') }
    public get cpfInvalid() { return browser.element('div#pessoais div:nth-child(8) > div:nth-child(1) > div > div') }
    public get cnpjTxt() { return browser.element('div#pessoais input.form-control.ng-pristine.ng-untouched.ng-valid.ng-empty.ng-valid-cnpj') }
    public get selecioneSexoSlc() { return browser.element('select[ng-model="form.pessoa.sexo"]') } //value="m / f"
    /**
     * Aba Pessoais - Contato
     */
    public get telefoneTxt() { return browser.element('input[ng-model="form.pessoa.telefone"]') }
    public get telefoneInvalid() { return browser.element('input[class*="ng-invalid"][ng-model="form.pessoa.telefone"]') }
    /**
     * Aba Pessoais - Endereço
     */
    public get cepTxt() { return browser.element('input#cep') }
    public get cepInvalid() { return browser.element('input[class*="ng-invalid"][id="cep"]') }
    public get selecioneUFSlc() { return browser.element('select[ng-model="form.pessoa.endereco.estado_id"]') }
    public get selecioneCidadeSlc() { return browser.element('select[ng-model="form.pessoa.endereco.cidade_id"]') }
    public get logradouroTxt() { return browser.element('input#logradouro') }
    public get numeroTxt() { return browser.element('input[ng-model="form.pessoa.endereco.numero"]') }
    public get complementoTxt() { return browser.element('input[ng-model="form.pessoa.endereco.complemento"]') }
    public get bairroTxt() { return browser.element('input[ng-model="form.pessoa.endereco.bairro"]') }
    /**
     * Aba Pessoais - Ações
     */
    public get voltarListaBtn() { return browser.element('form[name="_form"] div.row > div > button[type="button"].btn.btn-default > strong') }
    public get salvarBtn() { return browser.element('form[name="_form"] button[type="submit"].btn.btn-primary') }
    /**
     * Aba Anamnese - Avaliação Estética
     */
    public get abaAvaliacaoEsteticaBtn() { return browser.element('div#anamnese li.active > a') }
    public get indicacaoTxt() { return browser.element('div#estetica div:nth-child(1) > div > textarea') }
    public get usoMedicamentoSimRad() { return browser.element('div#estetica div:nth-child(2) > div:nth-child(1) > label:nth-child(3) > span') }
    public get usoMedicamentoNaoRad() { return browser.element('div#estetica div:nth-child(2) > div:nth-child(1) > label:nth-child(4) > span') }
    public get alergiaSimRad() { return browser.element('div#estetica div:nth-child(3) > div:nth-child(1) > label:nth-child(3) > span') }
    public get alergiaNaoRad() { return browser.element('div#estetica div:nth-child(3) > div:nth-child(1) > label:nth-child(4) > span') }
    public get alergiaDescricaoTxt() { return browser.element('div#estetica div:nth-child(3) > div:nth-child(2) > textarea') }
    public get fezProcedimentoSimRad() { return browser.element('div#estetica div:nth-child(4) > div > label:nth-child(3) > span') }
    public get fezProcedimentoNaoRad() { return browser.element('div#estetica div:nth-child(4) > div > label:nth-child(4) > span') }
    public get lactanteSimRad() { return browser.element('div#estetica div:nth-child(5) > div > label:nth-child(3) > span') }
    public get lactanteNaoRad() { return browser.element('div#estetica div:nth-child(5) > div > label:nth-child(4) > span') }
    public get cicloMestrualNormalRad() { return browser.element('div#estetica div:nth-child(6) > div > label:nth-child(3) > span') }
    public get cicloMestrualRegularRad() { return browser.element('div#estetica div:nth-child(6) > div > label:nth-child(4) > span') }
    public get cicloMestrualIrregularRad() { return browser.element('div#estetica label:nth-child(5) > span') }
    public get contraceptivoSimRad() { return browser.element('div#estetica div:nth-child(7) > div > label:nth-child(3) > span') }
    public get contraceptivoNaoRad() { return browser.element('div#estetica div:nth-child(7) > div > label:nth-child(4) > span') }
    public get marcaPassoSimRad() { return browser.element('div#estetica div:nth-child(8) > div > label:nth-child(3) > span') }
    public get marcaPassoNaoRad() { return browser.element('div#estetica div:nth-child(8) > div > label:nth-child(4) > span') }
    /**
     * Aba Anamnese - Avaliação Facial
     */
    public get abaAvaliacaoFacialBtn() { return browser.element('div#anamnese li:nth-child(2) > a') }
    public get manchaPigmAcromiaRad() { return browser.element('div#facil div:nth-child(2) > div > div > div:nth-child(1) > label') }
    public get manchaPigmHipocromiaRad() { return browser.element('div#facil div:nth-child(2) > div > div > div:nth-child(2) > label') }
    public get manchaPigmEfelidesRad() { return browser.element('div#facil div:nth-child(2) > div > div > div:nth-child(3) > label') }
    public get manchaPigmCloasmaRad() { return browser.element('div#facil div:nth-child(2) > div > div > div:nth-child(4) > label') }
    public get manchaPigmHipercromiaRad() { return browser.element('div#facil div:nth-child(2) > div > div > div:nth-child(5) > label') }
    public get manchaVascCeratoseRad() { return browser.element('div#facil div:nth-child(3) > div > div > div:nth-child(1) > label') }
    public get manchaVascPapulaRad() { return browser.element('div#facil div:nth-child(3) > div > div > div:nth-child(2) > label') }
    public get manchaVascPetequiasRad() { return browser.element('div#facil div:nth-child(3) > div > div > div:nth-child(3) > label') }
    public get manchaVascNecroseRad() { return browser.element('div#facil div:nth-child(3) > div > div > div:nth-child(4) > label') }
    public get manchaVascNodulosRad() { return browser.element('div#facil div:nth-child(3) > div > div > div:nth-child(5) > label') }
    public get manchaVascVerrugasRad() { return browser.element('div#facil div:nth-child(3) > div > div > div:nth-child(6) > label') }
    public get manchaVascMilliumRad() { return browser.element('div#facil div:nth-child(7) > label') }
    public get solidaAngiomaRad() { return browser.element('div#facil div:nth-child(4) > div > div > div:nth-child(1) > label') }
    public get solidaEritemaRad() { return browser.element('div#facil div:nth-child(4) > div > div > div:nth-child(2) > label') }
    public get solidaPetequiasRad() { return browser.element('div#facil div:nth-child(4) > div > div > div:nth-child(3) > label') }
    public get solidaCianoseRad() { return browser.element('div#facil div:nth-child(4) > div > div > div:nth-child(4) > label') }
    public get solidaHematomaRad() { return browser.element('div#facil div:nth-child(4) > div > div > div:nth-child(5) > label') }
    public get solidaTeleangectasiasRad() { return browser.element('div#facil div:nth-child(4) > div > div > div:nth-child(6) > label') }
    /**
     * Aba Anamnese - Avaliação Antropométrica
     */
    public get abaAvaliacaoAntropometricaBtn() { return browser.element('div#anamnese li:nth-child(3) > a') }
    public get deDataTxt() { return browser.element('div#antropometrica div:nth-child(1) > input') }
    public get ateDataTxt() { return browser.element('div#antropometrica div:nth-child(2) > input') }
    public get novaAvaliacaoBtn() { return browser.element('div#antropometrica button[type="button"]') }
    public get evolucaoDescricaoTxt() { return browser.element('div#antropometrica textarea') }
    public get avaliacaoDataLbl() { return browser.element('div#antropometrica h3') }
    public get pesoLbl() { return browser.element('div#antropometrica div:nth-child(2) > p') }
    public get alturaLbl() { return browser.element('div#antropometrica div:nth-child(3) > p') }
    public get coxaLbl() { return browser.element('div#antropometrica div:nth-child(5) > p') }
    public get culotesLbl() { return browser.element('div#antropometrica div:nth-child(6) > p') }
    public get gluteosLbl() { return browser.element('div#antropometrica div:nth-child(7) > p') }
    public get flancosLbl() { return browser.element('div#antropometrica div:nth-child(8) > p') }
    public get abdomeLbl() { return browser.element('div#antropometrica div:nth-child(9) > p') }
    public get abdomeSupLbl() { return browser.element('div#antropometrica div:nth-child(10) > p') }
    public get bracoLbl() { return browser.element('div#antropometrica div:nth-child(11) > p') }
    /**
     * Aba Histórico de Atendimento - Avaliação Antropométrica
     */
    //Implementar
    /**
     * Mensagens
     */
    public get mesgValidacaoLbl() { return browser.element('div#app div.alert.alert-danger') }
    /**
     * Caminho
     */
    public open(): void {
        browser.url('/clinica/cliente/novo')
    }
}
const criarClientePage = new CriarCliente_Page();
export default criarClientePage