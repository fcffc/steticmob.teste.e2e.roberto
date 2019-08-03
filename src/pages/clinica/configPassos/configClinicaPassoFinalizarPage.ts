/**
 * Arquivo: configClinicaPassoFinalizarPage.ts
 * Data: 12/06/2019
 * Author: Fernanda Ferreira
 */

class ConfigClinicaPassoFinalizar_Page {

    /**
     * Passo 1 Bem Vindo
     */
    public get logoImg() { return browser.element('header > img') }
    public get passoBemVindoDisableLbl() { return browser.element('div#bootstrap-wizard-1 li:nth-child(1)[class=" "] > a > span.step') }
    public get passoFornecedorDisableLbl() { return browser.element('div#bootstrap-wizard-1 li:nth-child(2)[class=""] > a > span.step') }
    public get passoServicoDisableLbl() { return browser.element('div#bootstrap-wizard-1 li:nth-child(3)[class=""] > a > span.step') }
    public get passoProfissionaisDisableLbl() { return browser.element('div#bootstrap-wizard-1 li:nth-child(4)[class=""] > a > span.step') }
    public get passoFinalizarActiveLbl() { return browser.element('.active > a > span:nth-child(1)') }
    public get msgPassoLbl() { return browser.element('div#tab5 strong') }
    public get confirmacaoPassoImg() { return browser.element('div#tab5 img') }
    public get anteriorPassoImg() { return browser.element('div#tab5 li.previous > a') }
    public get prontoComecarBtn() { return browser.element('div#tab5 li.next > a') }
    
    public open(): void {
        browser.url('/clinica/passo/5')
    }
}
const configClinicaPassoFinalizarPage = new ConfigClinicaPassoFinalizar_Page();
export default configClinicaPassoFinalizarPage