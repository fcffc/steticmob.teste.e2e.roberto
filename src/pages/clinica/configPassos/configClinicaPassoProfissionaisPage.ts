/**
 * Arquivo: configClinicaPassoProfissionaisPage.ts
 * Data: 12/06/2019
 * Author: Fernanda Ferreira
 */

class ConfigClinicaPassoProfissionais_Page {

    /**
     * Passo 4 Profissionais
     */
    public get logoImg() { return browser.element('header > img') }
    public get passoBemVindoDisableLbl() { return browser.element('div#bootstrap-wizard-1 li:nth-child(1)[class=" "] > a > span.step') }
    public get passoFornecedorActivebl() { return browser.element('div#bootstrap-wizard-1 li:nth-child(2)[class=""] > a > span.step') }
    public get passoServicoDisableLbl() { return browser.element('div#bootstrap-wizard-1 li:nth-child(3)[class=""] > a > span.step') }
    public get passoProfissionaisDisableLbl() { return browser.element('.active > a > span:nth-child(1)') }
    public get passoFinalizarDisableLbl() { return browser.element('div#bootstrap-wizard-1 li:nth-child(5)[class=""] > a > span.step') }
    public get msgPassoLbl() { return browser.element('div#tab4 strong') }
    public get anteriorPassoBtn() { return browser.element('div#tab4 li.previous > a') }
    public get continuarPassoBtn() { return browser.element('div#tab4 li.next > a') }
    /**
     * Passo 2 Profissionais - Criar Profissionais
     */
    public get criarProfissionalBtn() { return browser.element('div#tab4 button') }
    public get semRegistroLbl() { return browser.element('div#tab4 div > h1') }
    public get nomeProfPrimeiroLbl() { return browser.element('div#tab4 tr:nth-child(1) > td > div > span') }
    public get nomeProfSegundoLbl() { return browser.element('div#tab4 tr:nth-child(2) > td > div > span') }
    public get nomeProfTerceiroLbl() { return browser.element('div#tab4 tr:nth-child(3) > td > div > span') }
    /**
     * Caminho
     */
    public open(): void {
        browser.url('/clinica/passo/4')
    }
}
const configClinicaPassoProfissionaisPage = new ConfigClinicaPassoProfissionais_Page();
export default configClinicaPassoProfissionaisPage