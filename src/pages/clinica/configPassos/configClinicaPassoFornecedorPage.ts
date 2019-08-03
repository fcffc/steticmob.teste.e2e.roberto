/**
 * Arquivo: configClinicaPassoFornecedorPage.ts
 * Data: 12/06/2019
 * Author: Fernanda Ferreira
 */

class ConfigClinicaPassoFornecedor_Page {

    /**
     * Passo 2 Fornecedor
     */
    public get logoImg() { return browser.element('header > img') }
    public get passoBemVindoDisableLbl() { return browser.element('div#bootstrap-wizard-1 li:nth-child(1)[class=" "] > a > span.step') }
    public get passoFornecedorActivebl() { return browser.element('.active > a > span:nth-child(1)') }
    public get passoServicoDisableLbl() { return browser.element('div#bootstrap-wizard-1 li:nth-child(3)[class=""] > a > span.step') }
    public get passoProfissionaisDisableLbl() { return browser.element('div#bootstrap-wizard-1 li:nth-child(4)[class=""] > a > span.step') }
    public get passoFinalizarDisableLbl() { return browser.element('div#bootstrap-wizard-1 li:nth-child(5)[class=""] > a > span.step') }
    public get msgPassoLbl() { return browser.element('div#tab2 strong') }
    public get anteriorPassoUpBtn() { return browser.element('div#tab2 div:nth-child(4) > div > div > ul > li.previous > a') }
    public get continuarPassoUpBtn() { return browser.element('div#tab2 div:nth-child(4) > div > div > ul > li.next > a') }
    public get anteriorPassoDownBtn() { return browser.element('div#tab2 div:nth-child(9) > div > div > ul > li.previous > a') }
    public get continuarPassoDownBtn() { return browser.element('div#tab2 div:nth-child(9) > div > div > ul > li.next > a') }
    /**
     * Passo 2 Fornecedor - Selecionar Fornecedores
     */
    public get selecionarTodosRad() { return browser.element('div#tab2 > label') }
    public get selecionarTodosSlc() { return browser.element('div#tab2 > label') }
    public get selecionarPrimeiroRad() { return browser.element('div#tab2 tr:nth-child(1) > td:nth-child(1) > div > span > label') }
    public get fornecedorPrimeiroRad() { return browser.element('div#tab2 tr:nth-child(1) > td:nth-child(2) > div > span') }
    public get selecionarSegundoRad() { return browser.element('div#tab2 tr:nth-child(2) > td:nth-child(1) > div > span > label') }
    public get fornecedorSegundoRad() { return browser.element('div#tab2 tr:nth-child(2) > td:nth-child(2) > div > span') }
    public get selecionarTerceiroRad() { return browser.element('div#tab2 tr:nth-child(3) > td:nth-child(1) > div > span > label') }
    public get fornecedorTerceiroRad() { return browser.element('div#tab2 tr:nth-child(3) > td:nth-child(2) > div > span') }
    public get selecionarQuartoRad() { return browser.element('div#tab2 tr:nth-child(4) > td:nth-child(1) > div > span > label') }
    public get fornecedorQuartoRad() { return browser.element('div#tab2 tr:nth-child(4) > td:nth-child(2) > div > span') }
    /**
     * Caminho
     */
    public open(): void {
        browser.url('/clinica/passo/2')
    }
}
const configClinicaPassoFornecedorPage = new ConfigClinicaPassoFornecedor_Page();
export default configClinicaPassoFornecedorPage