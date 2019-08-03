/**
 * Arquivo: principalAdmPage.ts
 * Data: 12/06/2019
 * Author: Fernanda Ferreira
 */

class PrincipalAdm_Page {

    public get menuIncioLink() { return browser.element('ul#menu-principal li:nth-child(1) > a') }
    public get menuClinicaLink() { return browser.element('ul#menu-principal li:nth-child(2) > a') }
    public get tituloLbl() { return browser.element('div > h1') }
    /**
     * Caminho
     */
    public open(): void {
        browser.url('/admin')
    }
}
const principalAdmPage = new PrincipalAdm_Page();
export default principalAdmPage