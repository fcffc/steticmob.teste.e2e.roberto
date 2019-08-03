/**
 * Arquivo: configuracaoPage.ts
 * Data: 20/06/2019
 * Author: Fernanda Ferreira
 */

class Configuracao_Page {

    /**
     * Abas
     */
    public get abaDadosPessoaisActiveLbl() { return browser.element('li.active > a') }
    public get abaDadosComerciaisActiveLbl() { return browser.element('li.active > a[aria-controls="comerciais"]') }
    public get abaDadosSenhaActiveLbl() { return browser.element('li.active > a[aria-controls="senha"]') }
    public get abaDadosSalaActiveLbl() { return browser.element('li.active > a[aria-controls="sala"]') }
    public get abaDadosProfissionaisActiveLbl() { return browser.element('li.active > a[aria-controls="profissional"]') }
    public get abaDadosPessoaisDisabledLbl() { return browser.element('form > ul > li:nth-child(1) > a[aria-expanded="false"]') }
    public get abaDadosComerciaisDisabledLbl() { return browser.element('form > ul > li:nth-child(2) > a[aria-expanded="false"]') }
    public get abaSenhaDisabledLbl() { return browser.element('form > ul > li:nth-child(3) > a[aria-expanded="false"]') }
    public get abaSalasDisabledLbl() { return browser.element('form > ul > li:nth-child(4) > a[aria-expanded="false"]') }
    public get abaProfissionaisDisabledLbl() { return browser.element('form > ul > li:nth-child(5) > a[aria-expanded="false"]') }
    /**
     * Aba Dados Pessoais
     */
    public get upFotoLbl() { var upFotoLbl = 'div#pessoais i'; return upFotoLbl }
    public get pessoaFiscaRad() { return browser.element('input[value="f"]') }
    public get pessoaJuridicaRad() { return browser.element('input[value="j"]') }
    public get nomeTxt() { return browser.element('input[ng-model="form.pessoa.nome"]') }
    public get nomeFantasiaTxt() { return browser.element('input[ng-model="form.pessoa.nome_fantasia"]') }
    public get selecioneSexoSlc() { return browser.element('div#pessoais select') }
    public get cpfTxt() { return browser.element('div#pessoais div.col-md-2 > div > input') }
    public get cnpjTxt() { return browser.element('div#pessoais div.col-md-2 > div > input') }
    public get dataNascimentoTxt() { return browser.element('input[ng-model="form.pessoa.data_nascimento"]') }
    public get emailTxt() { return browser.element('input[ng-model="form.pessoa.email"]') }
    public get telefoneTxt() { return browser.element('input[ng-model="form.pessoa.telefone"]') }
    /**
     * Aba Dados Comerciais
     */
    public get tituloComerciaisLbl() { return browser.element('div#comerciais span') }
    public get cepTxt() { return browser.element('input#cep') }
    public get selecioneUFSlc() { return browser.element('select[ng-model="form.pessoa.endereco.estado_id"]') }
    public get selecioneCidadeSlc() { return browser.element('select[ng-model="form.pessoa.endereco.cidade_id"]') }
    public get bairroTxt() { return browser.element('input[ng-model="form.pessoa.endereco.bairro"]') }
    public get logradouroTxt() { return browser.element('input#logradouro') }
    public get numeroTxt() { return browser.element('input[ng-model="form.pessoa.endereco.numero"]') }
    public get complementoTxt() { return browser.element('input[ng-model="form.pessoa.endereco.complemento"]') }
    public get siteTxt() { return browser.element('input[ng-model="form.site"]') }
    public get statusAtivoRag() { return browser.element('div#comerciais label:nth-child(3)') }
    public get obsTxt() { return browser.element('div#comerciais textarea') }
    /**
     * Aba Senha
     */
    public get novaSenhaTxt() { return browser.element('input[ng-model="form.nova_senha"]') }
    public get repetirNovaSenhaTxt() { return browser.element('input[ng-model="form.repetir_nova_senha"]') }
    /**
     * Aba Salas
     */
    public get tituloSalasLbl() { return browser.element('div#sala span') }
    public get criarSalaBtn() { return browser.element('div#sala div.col-lg-6.col-md-6.col-sm-6 > div > a') }
    public get semRegistroSalaLbl() { return browser.element('div#sala h1') }
    public get criarNovoSalaBtn() { return browser.element('a#criar_novo') }
    public get idSalaPrimeiraLbl() { return browser.element('div#sala tr:nth-child(1) > td:nth-child(1) > div > span') }
    public get nomeSalaPrimeiraLbl() { return browser.element('div#sala tr:nth-child(1) > td:nth-child(2) > div > span') }
    public get ativoSalaPrimeiraRad() { return browser.element('div#sala tr:nth-child(1) > td:nth-child(3) > div > span > div > label') }
    public get idSalaSegundaLbl() { return browser.element('div#sala tr:nth-child(2) > td:nth-child(1) > div > span') }
    public get nomeSalaSegundaLbl() { return browser.element('div#sala tr:nth-child(2) > td:nth-child(2) > div > span') }
    public get ativoSalaSegundaRad() { return browser.element('div#sala tr:nth-child(2) > td:nth-child(3) > div > span > div > label') }
    /**
     * Aba Profissionais
     */
    public get tituloProfLbl() { return browser.element('div#profissional div:nth-child(2) > div > h3 > span') }
    public get printProfBtn() { return browser.element('button#crud_print > span') }
    public get criarProfBtn() { return browser.element('div#profissional a') }
    public get idProfPrimeiroLbl() { return browser.element('div#profissional tr:nth-child(1) > td:nth-child(1) > div > span') }
    public get nomeProfPrimeiroLbl() { return browser.element('div#profissional tr:nth-child(1) > td:nth-child(2) > div > span') }
    public get ativoProfPrimeiroRad() { return browser.element('div#profissional tr:nth-child(1) > td:nth-child(3) > div > span > div > label') }
    public get idProfSegundoLbl() { return browser.element('div#profissional tr:nth-child(2) > td:nth-child(1) > div > span') }
    public get nomeProfSegundoLbl() { return browser.element('div#profissional tr:nth-child(2) > td:nth-child(2) > div > span') }
    public get ativoProfSegundoRad() { return browser.element('div#profissional tr:nth-child(2) > td:nth-child(3) > div > span > div > label') }
    /**
     * Ações
     */
    public get cancelarBtn() { return browser.element('div#pessoais strong') }
    public get salvarBtn() { return browser.element('div#pessoais button[type="submit"].btn.btn-primary') }
    /**
     * Mensagens e Validações
     */
    public get mesgValidacaoLbl() { return browser.element('div#app div.alert.alert-danger') }
    /**
     * Caminho
     */
    public open(): void {
        browser.url('/clinica/configuracao')
    }
}
const configuracaoPage = new Configuracao_Page();
export default configuracaoPage