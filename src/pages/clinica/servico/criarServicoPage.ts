/**
 * Arquivo: criarServicoPage.ts
 * Data: 25/06/2019
 * Author: Fernanda Ferreira
 */

class CriarServico_Page {

    /**
     * Dados do Serviço
     */
    public get tituloLbl() { return browser.element('div > h1') }
    public get nomeServicoTxt() { return browser.element('input[ng-model="form.nome"]') }
    public get nomeServicoInvalid() { return browser.element('input[ng-model="form.nome"][class*="ng-invalid"]') }
    public get minMediaGastoTxt() { return browser.element('input[ng-model="form.media_hora"]') }
    public get maoObraTxt() { return browser.element('input[ng-model="form.mao_obra"]') }
    public get precoVendaTxt() { return browser.element('input[ng-model="form.preco_venda"]') }
    public get custoServicoLbl() { return browser.element('li:nth-child(1) > span.col-sm-6.ng-binding') }
    public get lucroBrutoLb() { return browser.element('li:nth-child(5) > span.col-sm-6.ng-binding') }
    /**
     * Ações do Serviço
     */
    public get inserirProtocoloBtn() { return browser.element('form > div:nth-child(3) > div > div > div:nth-child(1) > button[type="button"]') }
    public get cancelarBtn() { return browser.element('button[type="button"].btn.btn-default > strong') }
    public get salvarBtn() { return browser.element('div > button[type="submit"].btn.btn-primary') }
    public get excluirServicoBtn() { return browser.element('div:nth-child(2) > div > button:nth-child(1) > span') }
    public get printBtn() { return browser.element('button#crud_print > span') }
    /**
     * Modal Protocolos
     */
    public get tituloModalLbl() { return browser.element('div.modal.fade.in.show > div > div > div.modal-header > h4') }
    public get buscarTxt() { return browser.element('div.modal-body > div.input-search.row > div > input') }
    public get selecionarTodosRad() { return browser.element('th:nth-child(1) > span > input') }
    public get selecionarPrimeiroRad() { return browser.element('tr:nth-child(1) > td.ng-binding.ng-scope') }
    public get selecionarSegundoRad() { return browser.element('tr:nth-child(2) > td.ng-binding.ng-scope') }
    public get selecionarTerceiroRad() { return browser.element('tr:nth-child(3) > td.ng-binding.ng-scope') }
    public get selecionarQuartoRad() { return browser.element('tr:nth-child(4) > td.ng-binding.ng-scope') }
    public get paginacaoLbl() { return browser.element('div:nth-child(5) > div > div > ul > li > a') }
    public get selecionarQuintoRad() { return browser.element('tr:nth-child(5) > td.ng-binding.ng-scope') }
    public get selecionarBtn() { return browser.element('div.modal.fade.in.show > div > div > div.modal-footer > button[type="button"].btn.btn-primary') }
    public get cancelarProtocoloBtn() { return browser.element('div.modal-footer > button[type="button"].btn.btn-danger') }
    public get fecharModalBtn() { return browser.element('div.modal.fade.in.show > div > div > div.modal-header > button[type="button"]') }
    /**
     * Listagem de Protocolos
     */
    public get nomeProtocoloPrimeiroLbl() { return browser.element('div:nth-child(1) > div > h3 > span') }
    public get removerProtocoloPrimeiroBtn() { return browser.element('div:nth-child(5) > div:nth-child(1) > div > button[type="button"]') }
    public get nomeProtocoloSegundoLbl() { return browser.element('div:nth-child(5) > div:nth-child(2) > div > h3 > span') }
    public get removerProtocoloSegundoBtn() { return browser.element('div:nth-child(5) > div:nth-child(2) > div > button[type="button"]') }
    public get nomeforncedorProtocoloLbl() { return browser.element('div:nth-child(4) > div:nth-child(1) > span') }
    public get nomeProdutoProtocoloLbl() { return browser.element('div:nth-child(4) > div:nth-child(2) > span') }
    public get nomeLinhaProtocoloLbl() { return browser.element('div:nth-child(4) > div:nth-child(3) > span') }
    public get precoCompraProtocoloLbl() { return browser.element('Inspecionar') }
    public get rentabilidadeProtocoloLbl() { return browser.element('div:nth-child(4) > div:nth-child(5) > span') }
    public get qtdeProtocoloLbl() { return browser.element('div:nth-child(4) > div:nth-child(6) > span') }
    public get custoTotalProtocoloLbl() { return browser.element('Inspecionar') }
    /**
     * Mensagens e Validações
     */
    public get mesgValidacaoLbl() { return browser.element('div#toast-container div.toast-message > div') }
    /**
     * Caminho
     */
    public open(): void {
        browser.url('/clinica/servico')
    }
}
const criarServicoPage = new CriarServico_Page();
export default criarServicoPage