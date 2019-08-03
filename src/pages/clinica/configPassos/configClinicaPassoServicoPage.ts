/**
 * Arquivo: configClinicaPassoServicoPage.ts
 * Data: 12/06/2019
 * Author: Fernanda Ferreira
 */

class ConfigClinicaPassoServico_Page {

    /**
     * Passo 3 Serviços
     */
    public get logoImg() { return browser.element('header > img') }
    public get passoBemVindoDisableLbl() { return browser.element('div#bootstrap-wizard-1 li:nth-child(1)[class=" "] > a > span.step') }
    public get passoFornecedorActivebl() { return browser.element('div#bootstrap-wizard-1 li:nth-child(2)[class=""] > a > span.step') }
    public get passoServicoDisableLbl() { return browser.element('.active > a > span:nth-child(1)') }
    public get passoProfissionaisDisableLbl() { return browser.element('div#bootstrap-wizard-1 li:nth-child(4)[class=""] > a > span.step') }
    public get passoFinalizarDisableLbl() { return browser.element('div#bootstrap-wizard-1 li:nth-child(5)[class=""] > a > span.step') }
    public get msgPassoLbl() { return browser.element('div#tab3 strong') }
    public get anteriorPassoUpBtn() { return browser.element('div#tab3 div:nth-child(3) > div > div > ul > li.previous > a') }
    public get continuarPassoUpBtn() { return browser.element('div#tab3 div:nth-child(3) > div > div > ul > li.next > a') }
    public get anteriorPassoDownBtn() { return browser.element('div#tab3 div:nth-child(6) > div > div > ul > li.previous > a') }
    public get continuarPassoDownBtn() { return browser.element('div#tab3 div:nth-child(6) > div > div > ul > li.next > a') }
    /**
     * Passo 3 Serviços - Selecionar Serviços
     */
    public get servicosTxt() { return browser.element('input#servico') }
    public get filtrarBtn() { return browser.element('div#tab3 button[type="submit"]') }
    public get selecionarTodosRad() { return browser.element('div#tab3 th:nth-child(1) > label') }
    public get selecionarPrimeiroRad() { return browser.element('div#tab3 tr:nth-child(1) > td:nth-child(1) > label') }
    public get nomeServicoPrimeiroLbl() { return browser.element('div#tab3 tr:nth-child(1) > td:nth-child(2) > div > span') }
    public get mediaTempoServicoPrimeiroLbl() { return browser.element('div#tab3 tr:nth-child(1) > td:nth-child(3) > div > span') }
    public get selecionarSegundoRad() { return browser.element('div#tab3 tr:nth-child(2) > td:nth-child(1) > label') }
    public get nomeServicoSegundoLbl() { return browser.element('div#tab3 tr:nth-child(2) > td:nth-child(2) > div > span') }
    public get mediaTempoServicoSegundoLbl() { return browser.element('div#tab3 tr:nth-child(2) > td:nth-child(3) > div > span') }
    public get selecionarTerceiroRad() { return browser.element('div#tab3 tr:nth-child(3) > td:nth-child(1) > label') }
    public get nomeServicoTerceiroLbl() { return browser.element('div#tab3 tr:nth-child(3) > td:nth-child(2) > div > span') }
    public get mediaTempoServicoTerceiroLbl() { return browser.element('div#tab3 tr:nth-child(3) > td:nth-child(3) > div > span') }
    public get selecionarQuartoRad() { return browser.element('div#tab3 tr:nth-child(4) > td:nth-child(1) > label') }
    public get nomeServicoQuartoLbl() { return browser.element('div#tab3 tr:nth-child(4) > td:nth-child(2) > div > span') }
    public get mediaTempoServicoQuartoLbl() { return browser.element('div#tab3 tr:nth-child(4) > td:nth-child(3) > div > span') }
    public get semRegistroLbl() { return browser.element('div#tab3 div > h1') }
    /**
     * Caminho
     */
    public open(): void {
        browser.url('/clinica/passo/3')
    }
}
const configClinicaPassoServicoPage = new ConfigClinicaPassoServico_Page();
export default configClinicaPassoServicoPage