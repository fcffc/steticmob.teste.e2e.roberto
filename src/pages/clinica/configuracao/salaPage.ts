/**
 * Arquivo: salaPage.ts
 * Data: 20/06/2019
 * Author: Fernanda Ferreira
 */

class Sala_Page {

    /**
     * Formulário e Ações
     */
    public get cabecalhoSalaLbl() { return browser.element('div > h3') }
    public get nomeSalaTxt() { return browser.element('input[ng-model="form.nome"]') }
    public get ativoRad() { return browser.element('div > label') }
    public get cancelarBtn() { return browser.element('div:nth-child(2) > div > button[type="button"].btn.btn-default') }
    public get salvarBtn() { return browser.element('div > button[type="submit"].btn.btn-primary') }
    /**
     * Mensagens e Validações
     */
    public get mesgValidacaoLbl() { return browser.element('div#app div.alert.alert-danger') }
    public get msgSucesso() { return browser.element('//div[text()="Operação realizada com sucesso."]') }
    /**
     * Caminho
     */
    public open(): void {
        browser.url('/clinica/sala/novo')
    }
}
const salaPage = new Sala_Page();
export default salaPage