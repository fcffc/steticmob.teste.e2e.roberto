/**
 * Arquivo: loginPage.ts
 * Data: 12/06/2019
 * Author: Fernanda Ferreira
 */

class Login_Page {

    public get emailTxt() { return browser.element('input#email') }
    public get senhaTxt() { return browser.element('input#password') }
    public get acessarContaBtn() { return browser.element('div#app button[type="submit"]') }
    public get tituloLoginLbl() { return browser.element('div#app div.text-login.text-primary.text-center') }

    public get mesgValidacaoLbl() { return browser.element('div#app div.alert.alert-danger') }
    
    public open(): void {
        browser.url('/login')
    }
}
const loginPage = new Login_Page();
export default loginPage