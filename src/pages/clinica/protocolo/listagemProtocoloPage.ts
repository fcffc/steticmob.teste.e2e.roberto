/**
 * Arquivo: listagemProtocoloPage.ts
 * Data: 25/06/2019
 * Author: Fernanda Ferreira
 */

class ListagemProtocolo_Page {

    /**
     * Titulo e Filtros
     */
    public get tituloLbl() { return browser.element('div > h1') }
    public get filtroBuscarTxt() { return browser.element('input[name="search"]') }
    /**
     * Listagem de Serviços
     */
    public get semResultadoLbl() { return browser.element('div#servicos h1') }
    public get modeloProtocoloPrimeiroLbl() { return browser.element('tr:nth-child(1) > td:nth-child(1) > div > span > a > strong') }
    public get nomeProtocoloPrimeiroLbl() { return browser.element('tr:nth-child(1) > td:nth-child(1) > div > span > a') }
    public get custoPrimeiroLbl() { return browser.element('tr:nth-child(1) > td:nth-child(2) > div > span') }
    public get modeloProtocoloSegundoLbl() { return browser.element('tr:nth-child(2) > td:nth-child(1) > div > span > a > strong') }
    public get nomeProtocoloSegundoLbl() { return browser.element('tr:nth-child(2) > td:nth-child(1) > div > span > a') }
    public get custoSegundoLbl() { return browser.element('tr:nth-child(2) > td:nth-child(2) > div > span') }
    public get modeloProtocoloTerceiroLbl() { return browser.element('tr:nth-child(3) > td:nth-child(1) > div > span > a > strong') }
    public get nomeProtocoloTerceiroLbl() { return browser.element('tr:nth-child(3) > td:nth-child(1) > div > span > a') }
    public get custoTerceiroLbl() { return browser.element('tr:nth-child(3) > td:nth-child(2) > div > span') }
    public get modeloProtocoloQuartoLbl() { return browser.element('tr:nth-child(4) > td:nth-child(1) > div > span > a > strong') }
    public get nomeProtocoloQuartoLbl() { return browser.element('tr:nth-child(4) > td:nth-child(1) > div > span > a') }
    public get custoQuartoLbl() { return browser.element('tr:nth-child(4) > td:nth-child(2) > div > span') }
    public get nomeProtocoloQuintoLbl() { return browser.element('tr:nth-child(5) > td:nth-child(1) > div > span > a') }
    public get custoProtocoloQuintoLbl() { return browser.element('tr:nth-child(5) > td:nth-child(2) > div > span') }
    /**
     * Ações
     */
    public get printBtn() { return browser.element('button#crud_print > span') }
    public get criarProtocoloBtn() { return browser.element('div.col-lg-6.col-md-6.col-sm-6 > div > a') }
    /**
     * Mensagens e Validações
     */
    public get mesgValidacaoLbl() { return browser.element('div#app div.alert.alert-danger') }
    /**
     * Caminho
     */
    public open(): void {
        browser.url('/clinica/protocolo')
    }
}
const listagemProtocoloPage = new ListagemProtocolo_Page();
export default listagemProtocoloPage