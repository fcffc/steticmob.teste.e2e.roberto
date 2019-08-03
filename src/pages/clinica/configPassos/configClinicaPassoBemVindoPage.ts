/**
 * Arquivo: configClinicaPassoBemVindoPage.ts
 * Data: 12/06/2019
 * Author: Fernanda Ferreira
 */

class ConfigClinicaPassoBemVindo_Page {

    /**
     * Passo 1 Bem Vindo
     */
    public get logoImg() { return browser.element('header > img') }
    public get passoBemVindoActiveLbl() { return browser.element('.active > a > span:nth-child(1)') }
    public get passoFornecedorDisableLbl() { return browser.element('div#bootstrap-wizard-1 li:nth-child(2)[class=""] > a > span.step') }
    public get passoServicoDisableLbl() { return browser.element('div#bootstrap-wizard-1 li:nth-child(3)[class=""] > a > span.step') }
    public get passoProfissionaisDisableLbl() { return browser.element('div#bootstrap-wizard-1 li:nth-child(4)[class=""] > a > span.step') }
    public get passoFinalizarDisableLbl() { return browser.element('div#bootstrap-wizard-1 li:nth-child(5)[class=""] > a > span.step') }
    public get msgPassoLbl() { return browser.element('div#tab1 strong') }
    public get continuarPassoBtn() { return browser.element('div#tab1 a') }
    /**
     * Caminho
     */
    public open(): void {
        browser.url('/clinica/passo/1')
    }
}
const configClinicaPassoBemVindoPage = new ConfigClinicaPassoBemVindo_Page();
export default configClinicaPassoBemVindoPage