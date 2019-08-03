/**
 * Arquivo: listagemProdutoPage.ts
 * Data: 20/06/2019
 * Author: Fernanda Ferreira
 */

class ListagemProduto_Page {

    /**
     * Titulo e Filtros
     */
    public get tituloLbl() { return browser.element('div.col-md-4 > div > div > h1') }
    public get filtroFabricanteSlc() { return browser.element('span#select2-fabricante-xw-container') }
    public get filtroFabricanteTxt() { return browser.element('span.select2-search.select2-search--dropdown > input') }
    public get filtroProdutoSlc() { return browser.element('span[id*="select2-produto"]') }
    public get filtroProdutoTxt() { return browser.element('span.select2-search.select2-search--dropdown > input') }
    public get filtroLinhaSlc() { return browser.element('form#form_filter div:nth-child(3) > div > select') }
    public get filtroExibeProdutoEsgotadoRad() { return browser.element('form#form_filter div:nth-child(4) > div > label') }
    public get filtroExibeProdutoEstoqueBaixoRad() { return browser.element('form#form_filter div:nth-child(5) > div > label') }
    public get filtrarBtn() { return browser.element('form#form_filter div:nth-child(5) > div > label') }
    public get limparBtn() { return browser.element('form#form_filter button[type="reset"]') }
    /**
     * Listagem de Produtos
     */
    public get semResultadoLbl() { return browser.element('div:nth-child(3) > div > div > h1') }
    public get selecionarTodosRad() { return browser.element('th:nth-child(1) > label') }
    public get selecionarPrimeiroRad() { return browser.element('tr:nth-child(1) > td:nth-child(1) > label') }
    public get notImagemPrimeiroImg() { return browser.element('tr:nth-child(1) > td:nth-child(2) > div > span > i') }
    public get imagemPrimeiroImg() { return browser.element('tr:nth-child(1) > td:nth-child(2) > div > span > img') }
    public get nomeProdutoPrimeiroLbl() { return browser.element('tr:nth-child(1) > td:nth-child(3) > div > span') }
    public get linhaProdutoPrimeiroLbl() { return browser.element('tr:nth-child(1) > td:nth-child(4) > div > span') }
    public get subLinhaProdutoPrimeiroLbl() { return browser.element('tr:nth-child(1) > td:nth-child(5) > div > span') }
    public get estoqueProdutoPrimeiroLbl() { return browser.element('tr:nth-child(1) > td:nth-child(6) > div > span') }
    public get estoqueAbertoProdPrimeiroLbl() { return browser.element('tr:nth-child(1) > td:nth-child(7) > div > span') }
    public get editarProdPrimeiroBtn() { return browser.element('tr:nth-child(1) > td:nth-child(8) > div > span > a.btn.btn-success.btn-xs') }
    public get acertoEstoqueProdPrimeiroBtn() { return browser.element('tr:nth-child(1) > td:nth-child(8) > div > span > a.btn.btn-info.btn-xs') }
    public get selecionarSegundoRad() { return browser.element('tr:nth-child(2) > td:nth-child(1) > label') }
    public get notImagemSegundoImg() { return browser.element('tr:nth-child(2) > td:nth-child(2) > div > span > i') }
    public get imagemSegundoImg() { return browser.element('tr:nth-child(2) > td:nth-child(2) > div > span > img') }
    public get nomeProdutoSegundoLbl() { return browser.element('tr:nth-child(2) > td:nth-child(3) > div > span') }
    public get linhaProdutoSegundoLbl() { return browser.element('tr:nth-child(2) > td:nth-child(4) > div > span') }
    public get subLinhaProdutoSegundoLbl() { return browser.element('tr:nth-child(2) > td:nth-child(5) > div > span') }
    public get estoqueProdutoSegundoLbl() { return browser.element('tr:nth-child(2) > td:nth-child(6) > div > span') }
    public get estoqueAbertoProdSegundoLbl() { return browser.element('tr:nth-child(2) > td:nth-child(7) > div > span') }
    public get editarProdSegundoBtn() { return browser.element('tr:nth-child(2) > td:nth-child(8) > div > span > a.btn.btn-success.btn-xs') }
    public get acertoEstoqueProdSegundoBtn() { return browser.element('tr:nth-child(2) > td:nth-child(8) > div > span > a.btn.btn-info.btn-xs') }
    public get selecionarTerceiroRad() { return browser.element('tr:nth-child(3) > td:nth-child(1) > label') }
    public get notImagemTerceiroImg() { return browser.element('tr:nth-child(3) > td:nth-child(2) > div > span > i') }
    public get imagemTerceiroImg() { return browser.element('tr:nth-child(3) > td:nth-child(2) > div > span > img') }
    public get nomeProdutoTerceiroLbl() { return browser.element('tr:nth-child(3) > td:nth-child(3) > div > span') }
    public get linhaProdutoTerceiroLbl() { return browser.element('tr:nth-child(3) > td:nth-child(4) > div > span') }
    public get subLinhaProdutoTerceiroLbl() { return browser.element('tr:nth-child(3) > td:nth-child(5) > div > span') }
    public get estoqueProdutoTerceiroLbl() { return browser.element('tr:nth-child(3) > td:nth-child(6) > div > span') }
    public get estoqueAbertoProdTerceiroLbl() { return browser.element('tr:nth-child(3) > td:nth-child(7) > div > span') }
    public get editarProdTerceiroBtn() { return browser.element('tr:nth-child(3) > td:nth-child(8) > div > span > a.btn.btn-success.btn-xs') }
    public get acertoEstoqueProdTerceiroBtn() { return browser.element('tr:nth-child(3) > td:nth-child(8) > div > span > a.btn.btn-info.btn-xs') }
    /**
     * Ações
     */
    public get printBtn() { return browser.element('button#crud_print > span') }
    public get criarProdutoBtn() { return browser.element('div.hide-print > div > div > a') }
    /**
     * Mensagens e Validações
     */
    public get mesgValidacaoLbl() { return browser.element('div#app div.alert.alert-danger') }
    /**
     * Caminho
     */
    public open(): void {
        browser.url('/clinica/produto')
    }
}
const listagemProdutoPage = new ListagemProduto_Page();
export default listagemProdutoPage