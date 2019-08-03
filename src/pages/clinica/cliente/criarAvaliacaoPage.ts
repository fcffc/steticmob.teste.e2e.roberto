/**
 * Arquivo: criarAvaliacaoPage.ts
 * Data: 21/06/2019
 * Author: Fernanda Ferreira
 */

class CriarAvaliacao_Page {

    /**
     * Formulário
     */
    public get tituloLbl() { return browser.element('div#modal-avaliacao div.modal-header > h4') }
    public get dataAtualLbl() { return browser.element('div#modal-avaliacao div.form-group.col-sm-3.ng-binding') }
    public get pesoTxt() { return browser.element('input[ng-model="formAvaliacao.peso"]') }
    public get alturaTxt() { return browser.element('input[ng-model="formAvaliacao.altura"]') }
    public get coxaPerimetroTxt() { return browser.element('input[ng-model="formAvaliacao.coxa"]') }
    public get culotesPerimetroTxt() { return browser.element('input[ng-model="formAvaliacao.culotes"]') }
    public get gluteosPerimetroTxt() { return browser.element('input[ng-model="formAvaliacao.gluteos"]') }
    public get flancosPerimetroTxt() { return browser.element('input[ng-model="formAvaliacao.flancos"]') }
    public get abdomePerimetroTxt() { return browser.element('input[ng-model="formAvaliacao.abdomen"]') }
    public get abdomeSupPerimetroTxt() { return browser.element('input[ng-model="formAvaliacao.abdomen_superior"]') }
    public get bracoPerimetroTxt() { return browser.element('input[ng-model="formAvaliacao.braco"]') }
    /**
     * Ações
     */
    public get cancelarBtn() { return browser.element('div#modal-avaliacao strong') }
    public get salvarAvaliacaoBtn() { return browser.element('div#modal-avaliacao button[type="button"].btn.btn-primary') }
    /**
     * Caminho
     */
    public open(): void {
        browser.url('/clinica/cliente/novo')
    }
}
const criarAvaliacaoPage = new CriarAvaliacao_Page();
export default criarAvaliacaoPage