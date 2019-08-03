/**
 * Arquivo: criarProdutoPage.ts
 * Data: 20/06/2019
 * Author: Fernanda Ferreira
 */

class CriarProduto_Page {

    /**
     * Dados do Produto
     */
    public get nomeProdutoTxt() { return browser.element('input[ng-model="form.nome"]') }
    public get nomeProdutoInvalid() { return browser.element('input[class*="ng-invalid"][ng-model="form.nome"]') }
    public get upArquivoLbl() { var upArquivoLbl = 'upload-image > div > div > div > i'; return upArquivoLbl }
    public get selecionarFrabricanteSlc() { return browser.element('span[class*="select2-selection"] > span[class*="rendered"]') }
    public get selecionarFrabricanteTxt() { return browser.element('span.select2-search.select2-search--dropdown > input') }
    public get selecionarFrabricanteResultLbl() { return browser.element('span.select2-container.select2-container--default.select2-container--open:nth-child(29) span.select2-dropdown.select2-dropdown--below span.select2-results ul.select2-results__options > li.select2-results__option.select2-results__option--highlighted') }
    public get selecioneLinhaSlc() { return browser.element('select[ng-model="form.linha_produto_id"]') }
    public get selecioneLinhaInvalid() { return browser.element('select[class*="ng-invalid"][ng-model="form.linha_produto_id"]') }
    public get novaLinhaLink() { return browser.element('div:nth-child(5) > div > span > a') }
    public get selecioneSubLinhaSlc() { return browser.element('select[ng-model="form.sub_linha_produto_id"]') }
    public get novaSubLinhaLink() { return browser.element('div:nth-child(6) > div:nth-child(1) > span > a') }
    public get codigoTxt() { return browser.element('input[ng-model="form.codigo"]') }
    public get estoqueMinimoTxt() { return browser.element('input[ng-model="form.estoque_minimo"]') }
    public get selecioneUnidadeMedidaSlc() { return browser.element('select[ng-model="form.unidade_medida_id"]') }
    public get selecioneUnidadeMedidaInvalid() { return browser.element('select[class*="ng-invalid"][ng-model="form.unidade_medida_id"]') }
    public get custoPrazoTxt() { return browser.element('input[ng-model="form.preco_custo_prazo"]') }
    public get custoVistaTxt() { return browser.element('input[ng-model="form.preco_custo_vista"]') }
    public get custoVistaInvalid() { return browser.element('input[class*="ng-invalid"][ng-model="form.preco_custo_vista"]') }
    public get rendimentoTxt() { return browser.element('input[ng-model="form.rendimento"]') }
    public get rendimentoInvalid() { return browser.element('input[class*="ng-invalid"][ng-model="form.rendimento"]') }
    public get custoAplicacaoLbl() { return browser.element('input[ng-model="form.preco_custo_aplicacao"]') } //CustoVista / rendimento
    public get precoTabelaTxt() { return browser.element('input[ng-model="form.preco_tabela"]') }
    public get precoTabelaInvalid() { return browser.element('input[class*="ng-invalid"][ng-model="form.preco_tabela"]') }
    public get descontoVistaTxt() { return browser.element('input[ng-model="form.desconto_vista"]') }
    public get descontoPrazoTxt() { return browser.element('input[ng-model="form.desconto_prazo"]') }
    public get descricaoProdutoTxt() { return browser.element('textarea[ng-model="form.observacao"]') }
    public get podeSerVendidoRad() { return browser.element('div:nth-child(11) > div > label') }
    /**
     * Ações do Produto
     */
    public get voltarBtn() { return browser.element('div:nth-child(13) > div > button[type="button"].btn.btn-default > strong') }
    public get salvarBtn() { return browser.element('div:nth-child(13) > div > button[type="submit"].btn.btn-primary') }
    public get excluirProdutoBtn() { return browser.element('div:nth-child(3) > div > button:nth-child(1) > span') }
    public get printBtn() { return browser.element('button#crud_print') }
    /**
     * Modal Nova Linha
     */
    public get nomeLinhaTxt() { return browser.element('form[name="nova-linha-form"] input') }
    public get nomeLinhaInvalid() { return browser.element('form[name="nova-linha-form"] input[class*="ng-invalid"]') }
    public get descricaoLinhaTxt() { return browser.element('form[name="nova-linha-form"] textarea') }
    public get descricaoLinhaInvalid() { return browser.element('form[name="nova-linha-form"] textarea[class*="ng-invalid"]') }
    public get cancelarLinhaBtn() { return browser.element('form[name="nova-linha-form"] strong') }
    public get salvarLinhaBtn() { return browser.element('form[name="nova-linha-form"] button[type="submit"].btn.btn-primary') }
    /**
     * Modal Nova SubLinha
     */
    public get selecioneLinhaSubLinhaSlc() { return browser.element('form[name="nova-sublinha-form"] select') }
    public get nomeSubLinhaTxt() { return browser.element('form[name="nova-sublinha-form"] input') }
    public get nomeSubLinhaInvalid() { return browser.element('form[name="nova-sublinha-form"] input[class*="ng-invalid"]') }
    public get descricaoSubLinhaTxt() { return browser.element('form[name="nova-sublinha-form"] textarea') }
    public get descricaoSubLinhaInvalid() { return browser.element('form[name="nova-sublinha-form"] textarea[class*="ng-invalid"]') }
    public get cancelarSubLinhaBtn() { return browser.element('form[name="nova-sublinha-form"] strong') }
    public get salvarSubLinhaBtn() { return browser.element('form[name="nova-sublinha-form"] button[type="submit"].btn.btn-primary') }
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
const criarProdutoPage = new CriarProduto_Page();
export default criarProdutoPage