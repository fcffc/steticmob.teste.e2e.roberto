/**
 * Arquivo: emailPage.ts
 * Data: 26/06/2019
 * Author: Fernanda Ferreira
 */

class email_Page {

    public get tituloLbl() { return browser.element('h1#headingText > span') }
    public get emailTxt() { return browser.element('input#identifierId') }
    public get proximoBtn() { return browser.element('div#identifierNext span > span') }
    public get emailLocalizadoLbl() { return browser.element('div#profileIdentifier') }
    public get senhaTxt() { return browser.element('input[name="password"]') }
    public get proximoSenhaBtn() { return browser.element('div#passwordNext span > span') }
    public get nomeContaLbl() { return browser.element('body#yDmH0d h1') }
    public get appsBtn() { return browser.element('div#gbwa a') }
    public get gmailBtn() { return browser.element('a#gb23 > span.gb_k') }
    public get emailRecebidoPrimeiroLbl() { return browser.element('body.aAU:nth-child(2) div.nH:nth-child(3) div.nH div.nH.bkL:nth-child(2) div.no div.nH.bkK.nn:nth-child(2) div.nH div.nH div.nH.ar4.z div.AO div.Tm.aeJ div.aeF div.nH div.BltHke.nH.oy8Mbf.aE3 div.UI:nth-child(6) div.aDP div.ae4.aDM:nth-child(1) div.Cp:nth-child(3) table.F.cf.zt tr.zA.zE td.yX.xY:nth-child(5) div.yW span.bA4 > span.zF') }
    public get confirmaCadastroLbl() { return browser.element('tbody > tr:nth-child(3) > td > div') }
    public get senhaGeradaLbl() { return browser.element('tbody > tr:nth-child(8) > td > div:nth-child(2)') }
    public get acesseSuaContaBtn() { return browser.element('body.aAU:nth-child(2) div.nH:nth-child(3) div.nH div.nH.bkL:nth-child(2) div.no div.nH.bkK.nn:nth-child(2) div.nH div.nH div.nH.ar4.z div.aeI div.AO div.Tm.aeJ div.aeF div.nH div.nH div.nH.g.id table.Bs.nH.iY.bAt td.Bu.bAn:nth-child(1) div.nH.if div.nH.aHU:nth-child(2) div.nH.hx div.nH:nth-child(3) div.h7.ie.nH.oy8Mbf div.Bk div.G3.G2 div.adn.ads div.gs div.ii.gt:nth-child(3) div.a3s.aXjCH tbody:nth-child(1) tr:nth-child(9) td:nth-child(1) div:nth-child(1) > a:nth-child(1)') }
    public get deletarEmailBtn() { return browser.element('div[aria-label="Delete"]') }
    public get hamburgueBtn() { return browser.element('div[aria-label="More"]') }
    public get deleteMensagemBtn() { return browser.element('div#tm > div') }

    public get mesgValidacaoLbl() { return browser.element('div#app div.alert.alert-danger') }
    
    public open(): void {
        browser.url('https://accounts.google.com/signin/v2/') //automatedsteticmob@gmail.com / Steticmob@2019 / https://mail.google.com/mail/#inbox
    }
}
const emailPage = new email_Page();
export default emailPage