/**
 * Arquivo: listagemServicoPage.ts
 * Data: 25/06/2019
 * Author: Fernanda Ferreira
 */

class ListagemServico_Page {

    /**
     * Titulo e Filtros
     */
    public get tituloLbl() { return browser.element('div.col-md-4 > div > div > h1') }
    public get filtroServicoTxt() { return browser.element('input[name="search"]') }
    public get filtroExibirServicoRecomendadoRad() { return browser.element('form#form_filter div.col-md-2 > div > label') }
    public get filtrarBtn() { return browser.element('form#form_filter div:nth-child(3) > div > button ') }
    public get limparBtn() { return browser.element('form#form_filter button[type="reset"]') }
    /**
     * Listagem de Serviços
     */
    public get semResultadoLbl() { return browser.element('div#servicos h1') }
    public get nomeServicoPrimeiroLbl() { return browser.element('div#servicos tr:nth-child(1) > td:nth-child(1) > div > span') }
    public get mediaMinutoPrimeiroLbl() { return browser.element('div#servicos tr:nth-child(1) > td:nth-child(2) > div > span') }
    public get custoMaoObraPrimeiroLbl() { return browser.element('div#servicos tr:nth-child(1) > td:nth-child(3) > div.editable > span') }
    public get custoServicoPrimeiroLbl() { return browser.element('div#servicos tr:nth-child(1) > td:nth-child(4) > div.editable > span') }
    public get precoVendaPrimeiroLbl() { return browser.element('div#servicos tr:nth-child(1) > td:nth-child(5) > div.editable > span') }
    public get lucroBrutoPrimeiroLbl() { return browser.element('div#servicos tr:nth-child(1) > td:nth-child(6) > div > span') }
    public get editarPrimeiroBtn() { return browser.element('div#servicos tr:nth-child(1) > td:nth-child(7) > button.btn.btn-sm.btn-primary.hide.show') }
    public get nomeServicoSegundoLbl() { return browser.element('div#servicos tr:nth-child(2) > td:nth-child(1) > div > span') }
    public get mediaMinutoSegundoLbl() { return browser.element('div#servicos tr:nth-child(2) > td:nth-child(2) > div > span') }
    public get custoMaoObraSegundoLbl() { return browser.element('div#servicos tr:nth-child(2) > td:nth-child(3) > div.editable > span') }
    public get custoServicoSegundoLbl() { return browser.element('div#servicos tr:nth-child(2) > td:nth-child(4) > div.editable > span') }
    public get precoVendaSegundoLbl() { return browser.element('div#servicos tr:nth-child(2) > td:nth-child(5) > div.editable > span') }
    public get lucroBrutoSegundoLbl() { return browser.element('div#servicos tr:nth-child(2) > td:nth-child(6) > div > span') }
    public get editarSegundoBtn() { return browser.element('div#servicos tr:nth-child(2) > td:nth-child(7) > button.btn.btn-sm.btn-primary.hide.show') }
    public get nomeServicoTerceiroLbl() { return browser.element('div#servicos tr:nth-child(3) > td:nth-child(1) > div > span') }
    public get mediaMinutoTerceiroLbl() { return browser.element('div#servicos tr:nth-child(3) > td:nth-child(2) > div > span') }
    public get custoMaoObraTerceiroLbl() { return browser.element('div#servicos tr:nth-child(3) > td:nth-child(3) > div.editable > span') }
    public get custoServicoTerceiroLbl() { return browser.element('div#servicos tr:nth-child(3) > td:nth-child(4) > div.editable > span') }
    public get precoVendaTerceiroLbl() { return browser.element('div#servicos tr:nth-child(3) > td:nth-child(5) > div.editable > span') }
    public get lucroBrutoTerceiroLbl() { return browser.element('div#servicos tr:nth-child(3) > td:nth-child(6) > div > span') }
    public get editarTerceiroBtn() { return browser.element('div#servicos tr:nth-child(3) > td:nth-child(7) > button.btn.btn-sm.btn-primary.hide.show') }
    public get nomeServicoQuartoLbl() { return browser.element('div#servicos tr:nth-child(4) > td:nth-child(1) > div > span') }
    public get mediaMinutoQuartoLbl() { return browser.element('div#servicos tr:nth-child(4) > td:nth-child(2) > div > span') }
    public get custoMaoObraQuartoLbl() { return browser.element('div#servicos tr:nth-child(4) > td:nth-child(3) > div.editable > span') }
    public get custoServicoQuartoLbl() { return browser.element('div#servicos tr:nth-child(4) > td:nth-child(4) > div.editable > span') }
    public get precoVendaQuartoLbl() { return browser.element('div#servicos tr:nth-child(4) > td:nth-child(5) > div.editable > span') }
    public get lucroBrutoQuartoLbl() { return browser.element('div#servicos tr:nth-child(4) > td:nth-child(6) > div > span') }
    public get editarQuartoBtn() { return browser.element('div#servicos tr:nth-child(4) > td:nth-child(7) > button.btn.btn-sm.btn-primary.hide.show') }
    /**
     * Ações
     */
    public get obterSelecionadosBtn() { return browser.element('a.btn.btn-primary > span') }
    public get criarNovoUpBtn() { return browser.element('a.btn.btn-success > span') }
    public get criarNovoDownBtn() { return browser.element('a#criar_novo') }
    /**
     * Mensagens e Validações
     */
    public get mesgValidacaoLbl() { return browser.element('div#app div.alert.alert-danger') }
    /**
     * Caminho
     */
    public open(): void {
        browser.url('/clinica/servico')
    }
}
const listagemServicoPage = new ListagemServico_Page();
export default listagemServicoPage