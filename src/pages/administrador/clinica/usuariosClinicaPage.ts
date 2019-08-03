/**
 * Arquivo: usuariosClinicaPage.ts
 * Data: 12/06/2019
 * Author: Fernanda Ferreira
 */

class UsuariosClinica_Page {

    public get email1Lbl() { return browser.element('td:nth-child(1) > div > span') }
    public get nome1Lbl() { return browser.element('td:nth-child(2) > div > span') }
    public get entrar1Btn() { return browser.element('span > a') }
    public get tituloLbl() { return browser.element('div > h1') }
    /**
     * Caminho
     */
    public open(): void {
        browser.url('/admin/clinica/id/usuarios')
    }
    
}
const usuariosClinicaPage = new UsuariosClinica_Page();
export default usuariosClinicaPage