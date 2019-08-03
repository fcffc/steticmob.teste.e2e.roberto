/**
 * Arquivo: clinicaListagemPage.ts
 * Data: 12/06/2019
 * Author: Fernanda Ferreira
 */

class ClinicaListagem_Page {

    public get tituloLbl() { return browser.element('div > h1') }
    public get clinicaFiltroTxt() { return browser.element('input[name="search"]') }
    public get habilitadosRad() { return browser.element('form > div > div:nth-child(2) > label') }
    public get filtrarBtn() { return browser.element('form > div > div:nth-child(3) > button') }
    public get nomeLbl() { return browser.element('div.row.ng-scope:nth-child(2) div.col-sm-12:nth-child(3) div.table-theme.table-responsive:nth-child(2) table.table.table-striped.table-hover tbody:nth-child(2) tr.link td.align-1:nth-child(1) div.not-editable > span:nth-child(1)') }
    public get statuLbl() { return browser.element('span > label') }
    public get usuarios1Btn() { return browser.element('span > a.btn.btn-info.btn-xs') }
    public get excluir1Btn() { return browser.element('span > a.btn.btn-danger.btn-xs') }
    public get criarClinicaBtn() { return browser.element('content:nth-child(7) div.row.ng-scope:nth-child(2) div.col-sm-12:nth-child(5) div.alert.alert-info > button.btn.btn-primary:nth-child(2)') }
    public get semResultadoLbl() { return browser.element('div:nth-child(3) > div > h1') }
    public get importarBtn() { return browser.element('div > button.btn.btn-success') }
    public get salvarBtn() { return browser.element('content > div > div:nth-child(1) > div > button.btn.btn-primary') }
    /**
     * Modal Excluir
     */
    public get modalConfirmacaoLbl() { return browser.element('div#modal-2 h4') }
    public get okExcluirBtn() { return browser.element('div#modal-2 button.btn.btn-primary.pull-left') }
    public get cancelarExcluirBtn() { return browser.element('div#modal-2 button.btn.pull-right') }
    /**
     * Mensagens e Validações
     */
    public get msgSucesso() { return browser.element('//div[text()="Operação realizada com sucesso."]') }
    /**
     * Caminho
     */
    public open(): void {
        browser.url('/admin/clinica')
    }
}
const clinicaListagemPage = new ClinicaListagem_Page();
export default clinicaListagemPage