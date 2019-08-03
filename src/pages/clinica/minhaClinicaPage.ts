/**
 * Arquivo: minhaClinicaPage.ts
 * Data: 12/06/2019
 * Author: Fernanda Ferreira
 */

class Clinica_Page {

    /**
     * Titulo, Filtros e Passos de Configurações iniciais da Clínica
     */
    public get tituloLbl() { return browser.element('div > h1') }
    public get manualPasso1Lbl() { return browser.element('div > div.introjs-tooltiptext') }
    public get manualPasso2Lbl() { return browser.element('div > div.introjs-tooltiptext') }
    public get manualPróximoPasso1Btm() { return browser.element('div.introjs-tooltipbuttons > a.introjs-button.introjs-nextbutton') }
    public get manualVoltarPasso2Btm() { return browser.element('div.introjs-tooltipbuttons > a.introjs-button.introjs-prevbutton') }
    public get manualFeitoPasso2Btm() { return browser.element('div.introjs-tooltipbuttons > a.introjs-button.introjs-skipbutton.introjs-donebutton') }
    public get buscaAgendaHojeTxt() { return browser.element('input[name="search"]') }
    /**
     * Agendamento
     */
    public get buscarClienteSlc() { return browser.element('span[id*="select2-cliente"]') }
    public get buscarClienteTxt() { return browser.element('span.select2-search.select2-search--dropdown > input') }
    public get buscarClienteResultLbl() { return browser.element('span.select2-container.select2-container--default.select2-container--open:nth-child(30) span.select2-dropdown.select2-dropdown--below span.select2-results ul.select2-results__options > li.select2-results__option.select2-results__option--highlighted') }
    public get buscarServicoSlc() { return browser.element('span#select2-pbx2-container') } // dinâmico
    public get buscarServicoTxt() { return browser.element('span.select2-search.select2-search--dropdown > input') }
    public get buscarServicoResultLbl() { return browser.element('span.select2-container.select2-container--default.select2-container--open:nth-child(30) span.select2-dropdown.select2-dropdown--below span.select2-results ul.select2-results__options > li.select2-results__option.select2-results__option--highlighted:nth-child(1)') }
    public get buscarProfissionalSlc() { return browser.element('span#select2-h79w-container') }
    public get buscarProfissionalTxt() { return browser.element('span.select2-search.select2-search--dropdown > input') }
    public get buscarProfissionalConversao() { var buscarProfissionalConversao = 'span[title="Profissional"]'; return buscarProfissionalConversao }
    public get buscarProfissionalResultLbl() { return browser.element('span.select2-container.select2-container--default.select2-container--open:nth-child(30) span.select2-dropdown.select2-dropdown--below span.select2-results ul.select2-results__options > li.select2-results__option.select2-results__option--highlighted') }
    public get dataTxt() { return browser.element('input#dataMinima') }
    public get dataInvalid() { return browser.element('input[class*="ng-invalid"][id="dataMinima"]') }
    public get buscaSalaSlc() { return browser.element('span#select2-lk78-container > span') }
    public get buscaSalaTxt() { return browser.element('span.select2-search.select2-search--dropdown > input') }
    public get buscaSalaResultLbl() { return browser.element('span.select2-container.select2-container--default.select2-container--open:nth-child(30) span.select2-dropdown.select2-dropdown--below span.select2-results ul.select2-results__options > li.select2-results__option.select2-results__option--highlighted') }
    public get criarSalaBtn() { return browser.element('a#button-modal-sala') }
    public get horaInicialTxt() { return browser.element('input[name="hora_inicial"]') }
    public get horaInicialInvalid() { return browser.element('input[name="hora_inicial"][class*="ng-invalid"]') }
    public get horaFinalLbl() { return browser.element('input[name="hora_final"]') } // Soma das horas dos serviços
    public get observacaoTxt() { return browser.element('input[name="observacao"]') }
    public get repeteAgendamentoRad() { return browser.element('div.row > div > label') }
    /**
     * Agendamennto - Modal Sala
     */
    public get tituloModalLbl() { return browser.element('div#modal-sala h4') }
    public get salaTxt() { return browser.element('div#modal-sala input') }
    public get cancelarSalaBtn() { return browser.element('div#modal-sala strong') }
    public get salvarSalaBtn() { return browser.element('div#modal-sala button[type="button"].btn.btn-primary') }
    public get fecharSalaBtn() { return browser.element('div#modal-sala span') }
    /**
     * Agendamento - Lista de Serviços
     */
    public get nomeServicoPrimeiroLbl() { return browser.element('tr:nth-child(1) > th.ng-binding') }
    public get mediaTempoServicoPrimeiroLbl() { return browser.element('tbody > tr:nth-child(1) > th:nth-child(2) > span') }
    public get mediaTempoUnidServicoPrimeiroLbl() { return browser.element('tbody > tr:nth-child(1) > th:nth-child(2)') }
    public get excluirServicoPrimeiroLbl() { return browser.element('tr:nth-child(1) > th:nth-child(3) > a') }
    public get nomeServicoSegundoLbl() { return browser.element('tr:nth-child(2) > th.ng-binding') }
    public get mediaTempoServicoSegundoLbl() { return browser.element('tbody > tr:nth-child(2) > th:nth-child(2) > span') }
    public get mediaTempoUnidServicoSegundoLbl() { return browser.element('tbody > tr:nth-child(2) > th:nth-child(2)') }
    public get excluirServicoSegundoLbl() { return browser.element('tr:nth-child(2) > th:nth-child(3) > a') }
    public get nomeServicoTerceiroLbl() { return browser.element('tr:nth-child(3) > th.ng-binding') }
    public get mediaTempoServicoTerceiroLbl() { return browser.element('tbody > tr:nth-child(3) > th:nth-child(2) > span') }
    public get mediaTempoUnidServicoTerceiroLbl() { return browser.element('tbody > tr:nth-child(3) > th:nth-child(2)') }
    public get excluirServicoTerceiroLbl() { return browser.element('tr:nth-child(3) > th:nth-child(3) > a') }
    /**
     * Ações
     */
    public get cancelarBtn() { return browser.element('form > button[type="button"].btn.btn-default > strong') }
    public get agendarBtn() { return browser.element('form > button[type="submit"].btn.btn-primary') }
    public get printBtn() { return browser.element('button#btn_print > span') }
    /**
     * Agenda Hoje
     */
    public get nomeClienteAgendaPrimeiroLink() { return browser.element('td:nth-child(1) > a') }
    public get telefoneClienteAgendaPrimeiroLbl() { return browser.element('tr > td:nth-child(2)') }
    public get servicoAgendaPrimeiroLbl() { return browser.element('tr > td:nth-child(3)') }
    public get profissionalAgendaPrimeiroLbl() { return browser.element('td:nth-child(4) > a') }
    public get horaInicialAgendaPrimeiroLbl() { return browser.element('td:nth-child(5) > span') }
    public get iniciarAtendimentoPrimeiroBtn() { return browser.element('td.ng-scope > button') }
    public get nomeClienteAgendaSegundoLink() { return browser.element('tr:nth-child(2) > td:nth-child(1) > a') }
    public get telefoneClienteAgendaSegundoLbl() { return browser.element('tr:nth-child(2) > td:nth-child(2)') }
    public get servicoAgendaSegundoLbl() { return browser.element('tr:nth-child(2) > td:nth-child(3)') }
    public get profissionalAgendaSegundoLbl() { return browser.element('tr:nth-child(2) > td:nth-child(4) > a') }
    public get horaInicialAgendaSegundoLbl() { return browser.element('tr:nth-child(2) > td:nth-child(5) > span') }
    public get iniciarAtendimentoSegundoBtn() { return browser.element('tr:nth-child(2) > td.ng-scope > button') }
    public get semResultadoHojeLbl() { return browser.element('td > div > h3') }
    /**
     * Mensagem e Validações
     */
    public get mesgValidacaoLbl() { return browser.element('div#toast-container div.toast-message > div') }
    public get mesgValidacaoClienteLbl() { return browser.element('//div[text()="O cliente é obrigatório"]') }
    public get mesgValidacaoServicoLbl() { return browser.element('//div[text()="O selecione pelo menos 1 serviço"]') }
    public get mesgValidacaoProfLbl() { return browser.element('//div[text()="O profissional é obrigatório"]') }
    /**
     * Caminho
     */
    public open(): void {
        browser.url('/clinica')
    }
}
const clinicaPage = new Clinica_Page();
export default clinicaPage