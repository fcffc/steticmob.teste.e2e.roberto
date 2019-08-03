/**
 * Arquivo: listagemClientesPage.ts
 * Data: 20/06/2019
 * Author: Fernanda Ferreira
 */

class ListagemClientes_Page {

    /**
     * Titulo e Filtros
     */
    public get tituloLbl() { return browser.element('div.col-md-4 > div > div > h1') }
    public get filtroClienteTxt() { return browser.element('input[name="cliente"]') }
    public get filtroMesAniversarioSlc() { return browser.element('form#form_filter div:nth-child(2) > div > select') }
    public get filtroMesAnoNascTxt() { return browser.element('input[name="dataNascimento"]') }
    public get filtroSexoSlc() { return browser.element('form#form_filter div:nth-child(4) > div > select') }
    public get filtrarBtn() { return browser.element('form#form_filter div:nth-child(6) > div > button') }
    public get limparBtn() { return browser.element('form#form_filter button[type="reset"]') }
    public get imprimirBtn() { return browser.element('button#crud_print > span') }
    public get criarClienteBtn() { return browser.element('div.col-lg-6.col-md-6.col-sm-6 > div > a') }
    /**
     * Listagem
     */
    public get semRegistroLbl() { return browser.element('content > div > div:nth-child(1) > div > h1') }
    public get criarNovoBtn() { return browser.element('a#criar_novo') }
    public get nomeClienteLbl() { return browser.element('td:nth-child(1) > div > span') }
    public get telefoneLbl() { return browser.element('td:nth-child(2) > div > span') }
    public get emailLbl() { return browser.element('td:nth-child(3) > div') }
    /**
     * Relatórios
     */
    public get implementar() { return browser.element('div#app div.alert.alert-danger') }
    /**
     * Caminho
     */
    public open(): void {
        browser.url('/clinica/cliente')
    }
}
const listagemClientesPage = new ListagemClientes_Page();
export default listagemClientesPage