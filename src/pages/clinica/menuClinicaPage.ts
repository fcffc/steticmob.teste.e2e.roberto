/**
 * Arquivo: menuClinicaPage.ts
 * Data: 20/06/2019
 * Author: Fernanda Ferreira
 */

class MenuClinica_Page {

    /**
     * Menu Lateral
     */
    public get consultarClienteTxt() { return browser.element('input#campo-busca-menu') }
    public get menuMinhaClinicaLink() { return browser.element('ul#menu-principal li:nth-child(1) > a') }
    public get menuAtendimentoLink() { return browser.element('ul > li:nth-child(2) .icon-calendar') }
    public get menuClientesLink() { return browser.element('ul#menu-principal li:nth-child(3) > a') }
    public get menuProdutoServicoLink() { return browser.element('ul > li:nth-child(4) a[data-parent="#menu-principal"]') }
    public get subMenuMeusProdutosLink() { return browser.element('ul#collapse3 li:nth-child(2) > a') }
    public get subMenuMeusServicosLink() { return browser.element('ul#collapse3 li:nth-child(4) > a') }
    public get subMenuProtocolosLink() { return browser.element('ul#collapse3 li:nth-child(6) > a') }
    public get menuPedidosLink() { return browser.element('ul#menu-principal li:nth-child(5) > a') }
    public get subMenuMeusPedidosLink() { return browser.element('ul#collapse4 li:nth-child(2) > a') }
    public get subMenuLojasLink() { return browser.element('ul#collapse4 li:nth-child(4) > a') }
    public get menuFinanceiroLink() { return browser.element('ul > li:nth-child(6) a[data-parent="#menu-principal"]') }
    public get subMenuContasAPagarLink() { return browser.element('ul#collapse5 li:nth-child(2) > a') }
    public get subMenuContasAReceberLink() { return browser.element('ul#collapse5 li:nth-child(4) > a') }
    public get subMenuFluxoCaixaLink() { return browser.element('ul#collapse5 li:nth-child(6) > a') }
    public get subMenuConfigFinanceiraLink() { return browser.element('ul#collapse5 li:nth-child(8) > a') }
    public get menuFornecedoresLink() { return browser.element('ul#menu-principal li:nth-child(7) > a') }
    public get menuRelatoriosLink() { return browser.element('ul > li:nth-child(8) a[data-parent="#menu-principal"]') }
    public get subMenuEstoquesLink() { return browser.element('ul#collapse7 li:nth-child(2) > a') }
    public get subMenuEvolucaoFaturamentoLink() { return browser.element('ul#collapse7 li:nth-child(4) > a') }
    public get subMenuDRELink() { return browser.element('ul#collapse7 li:nth-child(6) > a') }
    public get subMenuRelatorioComprasLink() { return browser.element('ul#collapse7 li:nth-child(8) > a') }
    public get menuAjudaLink() { return browser.element('ul#menu-principal li:nth-child(9) > a') }
    public get contatoBtn() { return browser.element('#tawkchat-status-text-container') }
    /**
     * Menu Suspenso
     */
    public get menuUsuarioLink() { return browser.element('div#bs-example-navbar-collapse-1 li.dropdown > a') }
    public get nomeUsuarioLink() { return browser.element('div#bs-example-navbar-collapse-1 a > span:nth-child(1)') }
    public get subMenuUsuariosLink() { return browser.element('div#bs-example-navbar-collapse-1 ul > li:nth-child(1) > a') }
    public get subMenuPerfilAcessoLink() { return browser.element('div#bs-example-navbar-collapse-1 ul > li:nth-child(2) > a') }
    public get subMenuConfiguracaoLink() { return browser.element('div#bs-example-navbar-collapse-1 li.dropdown.open > ul > li:nth-child(3) > a') }
    public get subMenuConfiguracaoAdmLink() { return browser.element('div#bs-example-navbar-collapse-1 li:nth-child(1) > a') }
    public get subMenuSairBtn() { return browser.element('div#bs-example-navbar-collapse-1 li.dropdown.open > ul > li:nth-child(4) > a') }
    public get subMenuSairAdmBtn() { return browser.element('div#bs-example-navbar-collapse-1 li:nth-child(2) > a') }
    /**
     * Menu Topo
     */
    public get alertaBtn() { return browser.element('nav.navbar.navbar-default.navbar-fixed-top.ng-scope div.container-fluid div.collapse.navbar-collapse ul.nav.navbar-nav.navbar-right li:nth-child(1) > button.btn.btn-link.top-indicator > i') }
    public get avisoBtn() { return browser.element('nav.navbar.navbar-default.navbar-fixed-top.ng-scope div.container-fluid div.collapse.navbar-collapse ul.nav.navbar-nav.navbar-right li:nth-child(2) > button.btn.btn-link.top-indicator > i') }
    public get avisoContadorLbl() { return browser.element('nav.navbar.navbar-default.navbar-fixed-top.ng-scope div.container-fluid div.collapse.navbar-collapse ul.nav.navbar-nav.navbar-right li:nth-child(2) > button.btn.btn-link.top-indicator > span') }
    public get spotifyBtn() { return browser.element('div#bs-example-navbar-collapse-1 ul > li:nth-child(3) > a > i[class*="spotify"]') }
    /**
     * Caminho
     */
    public open(): void {
        browser.url('/clinica')
    }
}
const menuClinicaPage = new MenuClinica_Page();
export default menuClinicaPage