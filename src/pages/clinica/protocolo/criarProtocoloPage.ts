/**
 * Arquivo: criarProtocoloPage.ts
 * Data: 25/06/2019
 * Author: Fernanda Ferreira
 */

class CriarProtocolo_Page {

    /**
     * Dados do Protocolo
     */
    public get tituloLbl() { return browser.element('div > h1') }
    public get nomeProtocoloTxt() { return browser.element('input[ng-model="form.nome"]') }
    public get nomeProtocoloInvalid() { return browser.element('input[ng-model="form.nome"][class*="ng-invalid"]') }
    public get descricaoIframe() { return browser.element('iframe[class*="wysiwyg_frame "]') }
    public get descricaoTxt() { return browser.element('body.cke_editable.cke_editable_themed.cke_contents_ltr.cke_show_borders:nth-child(2)') }
    /**
     * Ações do Protocolo
     */
    public get carregarModeloBtn() { return browser.element('div.col-sm-3 > div > div:nth-child(1) > button[type="button"]') }
    public get inserirProdutoBtn() { return browser.element('div:nth-child(4) > div > div > div:nth-child(1) > button[type="button"]') }
    public get inserirServicoBtn() { return browser.element('div:nth-child(9) > div > div > div:nth-child(1) > button[type="button"]') }
    public get voltarBtn() { return browser.element('button[type="button"].btn.btn-default > strong') }
    public get salvarBtn() { return browser.element('div > button[type="submit"].btn.btn-primary') }
    public get excluirProtocoloBtn() { return browser.element('div:nth-child(2) > div > button:nth-child(1) > span') }
    public get printBtn() { return browser.element('button#crud_print > span') }
    /**
     * Modal Modelo
     */
    public get tituloModalModeloLbl() { return browser.element('div.modal.fade.in.show > div > div > div.modal-header > h4') }
    public get buscarModeloTxt() { return browser.element('div.modal.fade.in.show > div > div > div.modal-body > div.input-search.row > div > input') }
    public get selecionarModeloPrimeiroRad() { return browser.element('div.modal.fade.in.show > div > div > div.modal-body > div:nth-child(4) > table > tbody > tr:nth-child(1) > td.ng-binding.ng-scope') }
    public get selecionarModeloSegundoRad() { return browser.element('div.modal.fade.in.show > div > div > div.modal-body > div:nth-child(4) > table > tbody > tr:nth-child(2) > td.ng-binding.ng-scope') }
    public get selecionarModeloTerceiroRad() { return browser.element('div.modal.fade.in.show > div > div > div.modal-body > div:nth-child(4) > table > tbody > tr:nth-child(3) > td.ng-binding.ng-scope') }
    public get selecionarModeloQuartoRad() { return browser.element('div.modal.fade.in.show > div > div > div.modal-body > div:nth-child(4) > table > tbody > tr:nth-child(4) > td.ng-binding.ng-scope') }
    public get selecionarModeloQuintoRad() { return browser.element('div.modal.fade.in.show > div > div > div.modal-body > div:nth-child(4) > table > tbody > tr:nth-child(5) > td.ng-binding.ng-scope') }
    public get selecionarModeloBtn() { return browser.element('div.modal.fade.in.show > div > div > div.modal-footer > button[type="button"].btn.btn-primary') }
    public get cancelarProtocoloBtn() { return browser.element('div.modal.fade.in.show > div > div > div.modal-footer > button[type="button"].btn.btn-danger') }
    public get fecharModalBtn() { return browser.element('div.modal.fade.in.show > div > div > div.modal-header > button[type="button"]') }
    /**
     * Modal Produtos
     */
    public get tituloModalProdutoLbl() { return browser.element('div.modal.fade.in.show > div > div > div.modal-header > h4') }
    public get buscarProdutoTxt() { return browser.element('div.modal.fade.in.show > div > div > div.modal-body > div.input-search.row > div > input') }
    public get selecionarTodosProdutoRad() { return browser.element('div.modal.fade.in.show > div > div > div.modal-body > div:nth-child(4) > table > thead > tr > th:nth-child(1) > span > input') }
    public get selecionarNomeProdutoPrimeiroRad() { return browser.element('div.modal.fade.in.show > div > div > div.modal-body > div:nth-child(4) > table > tbody > tr:nth-child(1) > td:nth-child(2)') }
    public get selecionarLinhaProdutoPrimeiroRad() { return browser.element('tr:nth-child(1) > td:nth-child(3)') }
    public get selecionarFornecedorProdutoPrimeiroRad() { return browser.element('tr:nth-child(1) > td:nth-child(4)') }
    public get selecionarPrecoCompraProdutoPrimeiroRad() { return browser.element('tr:nth-child(1) > td:nth-child(5)') }
    public get selecionarNomeProdutoSegundoRad() { return browser.element('div.modal.fade.in.show > div > div > div.modal-body > div:nth-child(4) > table > tbody > tr:nth-child(2) > td:nth-child(2)') }
    public get selecionarLinhaProdutoSegundoRad() { return browser.element('tr:nth-child(2) > td:nth-child(3)') }
    public get selecionarFornecedorProdutoSegundoRad() { return browser.element('tr:nth-child(2) > td:nth-child(4)') }
    public get selecionarPrecoCompraProdutoSegundoRad() { return browser.element('tr:nth-child(2) > td:nth-child(5)') }
    public get selecionarNomeProdutoTerceiroRad() { return browser.element('div.modal.fade.in.show > div > div > div.modal-body > div:nth-child(4) > table > tbody > tr:nth-child(3) > td.ng-binding.ng-scope') }
    public get selecionarLinhaProdutoTerceiroRad() { return browser.element('tr:nth-child(3) > td:nth-child(3)') }
    public get selecionarFornecedorProdutoTerceiroRad() { return browser.element('tr:nth-child(3) > td:nth-child(4)') }
    public get selecionarPrecoCompraProdutoTerceiroRad() { return browser.element('tr:nth-child(3) > td:nth-child(5)') }
    public get selecionarProdutoBtn() { return browser.element('div.modal.fade.in.show > div > div > div.modal-footer > button[type="button"].btn.btn-primary') }
    public get cancelarProdutoBtn() { return browser.element('div.modal.fade.in.show > div > div > div.modal-footer > button[type="button"].btn.btn-danger') }
    public get fecharProdutoBtn() { return browser.element('div.modal.fade.in.show > div > div > div.modal-header > button[type="button"]') }
    /**
     * Listagem de Produtos
     */
    public get removerProdutoPrimeiroBtn() { return browser.element('div:nth-child(6) > div > div:nth-child(1) > div:nth-child(1) > button[type="button"]') }
    public get nomeProdutoPrimeiroLbl() { return browser.element('div:nth-child(1) > div:nth-child(2) > span') }
    public get linhaProdutoPrimeiroLbl() { return browser.element('div:nth-child(1) > div.col-md-2 > span') }
    public get fornecedorProdutoPrimeiroLbl() { return browser.element('div:nth-child(1) > div:nth-child(4) > span') }
    public get precoCompraProdutoPrimeiroLbl() { return browser.element('div:nth-child(1) > div:nth-child(5) > span') }
    public get rendimentoProdutoPrimeiroTxt() { return browser.element('div:nth-child(1) > div:nth-child(6) > input') }
    public get rendimentoProdutoPrimeiroInvalid() { return browser.element('div:nth-child(1) > div:nth-child(6) > input[class*="ng-invalid"]') }
    public get totalProdutoPrimeiroLbl() { return browser.element('div:nth-child(1) > div:nth-child(7) > span') }
    public get removerProdutoSegundoBtn() { return browser.element('div:nth-child(6) > div > div:nth-child(2) > div:nth-child(1) > button[type="button"]') }
    public get nomeProdutoSegundoLbl() { return browser.element('div:nth-child(2) > div:nth-child(2) > span') }
    public get linhaProdutoSegundoLbl() { return browser.element('div:nth-child(2) > div.col-md-2 > span') }
    public get fornecedorProdutoSegundoLbl() { return browser.element('div:nth-child(2) > div:nth-child(4) > span') }
    public get precoCompraProdutoSegundoLbl() { return browser.element('div:nth-child(2) > div:nth-child(5) > span') }
    public get rendimentoProdutoSegundoTxt() { return browser.element('div:nth-child(2) > div:nth-child(6) > input') }
    public get totalProdutoSegundoLbl() { return browser.element('div:nth-child(2) > div:nth-child(7) > span') }
    /**
     * Modal Serviço
     */
    public get tituloModalServicoLbl() { return browser.element('div.modal.fade.in.show > div > div > div.modal-header > h4') }
    public get buscarServicoTxt() { return browser.element('div.modal.fade.in.show > div > div > div.modal-body > div.input-search.row > div > input') }
    public get selecionarTodosServicoRad() { return browser.element('div.modal.fade.in.show > div > div > div.modal-body > div:nth-child(4) > table > thead > tr > th:nth-child(1) > span > input') }
    public get selecionarNomeServicoPrimeiroRad() { return browser.element('div.modal.fade.in.show > div > div > div.modal-body > div:nth-child(4) > table > tbody > tr:nth-child(1) > td:nth-child(2)') }
    public get selecionarNomeServicoSegundoRad() { return browser.element('div.modal.fade.in.show > div > div > div.modal-body > div:nth-child(4) > table > tbody > tr:nth-child(2) > td.ng-binding.ng-scope') }
    public get selecionarNomeServicoTerceiroRad() { return browser.element('div.modal.fade.in.show > div > div > div.modal-body > div:nth-child(4) > table > tbody > tr:nth-child(3) > td.ng-binding.ng-scope') }
    public get selecionarNomeServicoQuartoRad() { return browser.element('div.modal.fade.in.show > div > div > div.modal-body > div:nth-child(4) > table > tbody > tr:nth-child(4) > td.ng-binding.ng-scope') }
    public get paginacaoModalServicoLbl() { return browser.element('div.row.ng-scope:nth-child(3) div.col-sm-12:nth-child(3) form.ng-valid.ng-valid-required.ng-valid-min.ng-valid-step.ng-dirty.ng-valid-parse div.row:nth-child(9) div.col-sm-12 div.ng-isolate-scope div.modal.fade.in.show:nth-child(3) div.modal-dialog.modal-lg div.modal-content div.modal-body div.row:nth-child(5) div.col-sm-12 div.pull-right.ng-isolate-scope ul.pagination li.ng-scope.active > a.ng-binding') }
    public get selecionarServicoBtn() { return browser.element('div.row.ng-scope:nth-child(3) div.col-sm-12:nth-child(3) form.ng-valid.ng-valid-required.ng-valid-min.ng-valid-step.ng-dirty.ng-valid-parse div.row:nth-child(9) div.col-sm-12 div.ng-isolate-scope div.modal.fade.in.show:nth-child(3) div.modal-dialog.modal-lg div.modal-content div.modal-footer > button.btn.btn-primary:nth-child(1)') }
    public get cancelarServicoBtn() { return browser.element('div.modal.fade.in.show > div > div > div.modal-footer > button[type="button"].btn.btn-danger') }
    public get fecharServicoBtn() { return browser.element('div.modal.fade.in.show > div > div > div.modal-header > button[type="button"]') }
    /**
     * Listagem Serviço
     */
    public get removerServicoPrimeiroBtn() { return browser.element('div:nth-child(11) > div > div:nth-child(1) > div.col-md-1 > button[type="button"]') }
    public get nomeServicoPrimeiroLbl() { return browser.element('div:nth-child(11) > div > div:nth-child(1) > div.col-md-3 > span') }
    public get removerServicoSegundoBtn() { return browser.element('div:nth-child(11) > div > div:nth-child(2) > div.col-md-1 > button[type="button"]') }
    public get nomeServicoSegundoLbl() { return browser.element('div:nth-child(11) > div > div:nth-child(2) > div.col-md-3 > span') }
    /**
     * Mensagens e Validações
     */
    public get mesgValidacaoLbl() { return browser.element('div#app div.alert.alert-danger') }
    /**
     * Caminho
     */
    public open(): void {
        browser.url('/clinica/protocolo/novo')
    }
}
const criarProtocoloPage = new CriarProtocolo_Page();
export default criarProtocoloPage