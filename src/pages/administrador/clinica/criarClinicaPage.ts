/**
 * Arquivo: criarClinicaPage.ts
 * Data: 20/06/2019
 * Author: Fernanda Ferreira
 */

class CriarClinica_Page {

    /**
     * Formulário
     */
    public get nomeClinicaTxt() { return browser.element('input[ng-model="form.pessoa.nome"]') }
    public get nomeClinicaRequired() { return browser.element('input[required="required"]') }
    public get telefoneTxt() { return browser.element('input[ng-model="form.pessoa.telefone"]') }
    public get emailTxt() { return browser.element('input[ng-model="form.pessoa.email"]') }
    public get emailValid() { return browser.element('input[class*="ng-valid-email"]') }
    public get observacaoTxt() { return browser.element('textarea[ng-model="form.pessoa.observacao"]') }
    /**
     * Ações
     */
    public get cancelarBtn() { return browser.element('div#modal-criar-clinica strong') }
    public get indicarBtn() { return browser.element('div#modal-criar-clinica button[type="submit"].btn.btn-primary') }
    public get fecharBtn() { return browser.element('div#modal-criar-clinica span') }
    /**
     * Mensagens e Validações
     */
    public get mesgValidacaoLbl() { return browser.element('//input[text()="Preencha este campo."]') }
    public get mesgSucesso() { return browser.element('//div[text()="Operação realizada com sucesso."]') }
    public get mesgEmailValid() { return browser.element('//div[text()="E-mail já existente no nosso sistema!"]') }
    /**
     * Caminho
     */
    public open(): void {
        browser.url('/admin/clinica')
    }
}
const criarClinicaPage = new CriarClinica_Page();
export default criarClinicaPage