/**
 * Arquivo: criarProfissionaisModalPage.ts
 * Data: 12/06/2019
 * Author: Fernanda Ferreira
 */

class CriarProfissionaisModal_Page {

    /**
     * Dados Pessoais
     */
    public get abaDadosPessoaisActiveBtn() { return browser.element('form[name="formProfissional"] li.active > a') }
    public get abaDadosPessoaisDisabledBtn() { return browser.element('form[name="formProfissional"] li:nth-child(1) > a[aria-expanded="false"]') }
    public get abaHistoricoAtendimentoActiveBtn() { return browser.element('form[name="formProfissional"] li:nth-child(2) > a[aria-expanded="true"]') }
    public get abaHistoricoAtendimentoDisabledBtn() { return browser.element('form[name="formProfissional"] li:nth-child(2) > a[aria-expanded="false"]') }
    public get upFotoPerfilFocus() { return browser.element('div#pessoais i') }
    public get upFotoPerfilLbl() { var upFotoPerfilLbl = 'div#pessoais i'; return upFotoPerfilLbl }
    public get pessoaFisicaRad() { return browser.element('div#pessoais div:nth-child(4) > div:nth-child(1) > label') }
    public get pessoaJuridicaRad() { return browser.element('div#pessoais div:nth-child(4) > div:nth-child(2) > label') }
    public get nomeProfTxt() { return browser.element('input[ng-model="form.pessoa.nome"]') }
    public get nomeProfInvalid() { return browser.element('input[class*="ng-invalid ng-invalid-required"]') }
    public get nomeFantasiaTxt() { return browser.element('input[ng-model="form.pessoa.nome_fantasia"]') }
    public get selecioneEspecialidadeBox() { var selecioneEspecialidadeBox = 'select[ng-model="form.pessoa.sexo"]'; return selecioneEspecialidadeBox }
    public get selecioneEspecialidadeSlc() { return browser.element('select[ng-model="form.especialidade_id"]') } //value="number:1"
    public get selecioneSexoSlc() { return browser.element('select[ng-model="form.pessoa.sexo"]') } //value="m / f"
    public get cpfTxt() { return browser.element('input[placeholder="Digite o CPF"]') }
    public get cpfInvalid() { return browser.element('input[class*="ng-invalid ng-invalid-cpf"]') }
    public get cnpjTxt() { return browser.element('div#pessoais input.form-control.ng-pristine.ng-untouched.ng-valid.ng-empty.ng-valid-cnpj') }
    public get dataNascimentoTxt() { return browser.element('input[ng-model="form.pessoa.data_nascimento"]') }
    public get dataNascimentoInvalid() { return browser.element('input[class*="ng-invalid"][ng-model="form.pessoa.data_nascimento"]') }
    /**
     * Contatos
     */
    public get emailTxt() { return browser.element('input[ng-model="form.pessoa.email"]') }
    public get telefoneTxt() { return browser.element('input[ng-model="form.pessoa.telefone"]') }
    public get telefoneInvalid() { return browser.element('input[class*="ng-invalid"][ng-model="form.pessoa.telefone"]') }
    /**
     * Endereço
     */
    public get cepTxt() { return browser.element('input#cep') }
    public get cepInvalid() { return browser.element('input[class*="ng-invalid"][id="cep"]') }
    public get selecioneUFSlc() { return browser.element('select#estado') }
    public get selecioneCidadeSlc() { return browser.element('select#cidade') }
    public get logradouroTxt() { return browser.element('input#logradouro') }
    public get numeroTxt() { return browser.element('input[ng-model="form.pessoa.endereco.numero"]') }
    public get complementoTxt() { return browser.element('input[ng-model="form.pessoa.endereco.complemento"]') }
    public get bairroTxt() { return browser.element('input[ng-model="form.pessoa.endereco.bairro"]') }
    public get voltarListaBtn() { return browser.element('form[name="formProfissional"] strong') }
    public get salvarBtn() { return browser.element('form[name="formProfissional"] button[type="submit"].btn.btn-primary') }
    /**
     * Caminho
     */
    public open(): void {
        browser.url('/clinica/passo/4')
    }
}
const criarProfissionaisModalPage = new CriarProfissionaisModal_Page();
export default criarProfissionaisModalPage