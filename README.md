# steticmob.test.e2e
====================

Project com WebdriverIO, Cucumber e TypeScript.

![WebdriverIO](http://www.christian-bromann.com/wdio.png)

[![Build Status](https://travis-ci.org/webdriverio/webdriverio.svg?branch=master)](https://travis-ci.org/webdriverio/webdriverio) [![NPM version](https://badge.fury.io/js/webdriverio.svg)](http://badge.fury.io/js/webdriverio) [![typescript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://travis-ci.org/webdriverio/webdriverio) [![npm](https://img.shields.io/npm/dm/webdriverio.svg?maxAge=2592000)]() [![Coveralls](https://img.shields.io/coveralls/webdriverio/webdriverio/master.svg?maxAge=2592000)]() [![Gitter](https://badges.gitter.im/webdriverio/webdriverio.svg)](https://gitter.im/webdriverio/webdriverio?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

***

Projeto para automação de teste com WebdriverIO, cucumber e typescript.

---

## Introdução
Projeto criado com o intuito de facilitar a automação de testes dos projetos baseados em Web e Mobile, bem como, demonstrar as melhores práticas e ferramentas para o desenvolvimento e execução dos testes.

#### Funcionalidades:
* ts-node(typescript execução dirigido para node.js) no cucumberOpts;
* todos os scripts escritos em TypeScript e Cucumber 3.0;
* Estruturas de pastas limpas com arquivos js transpilados em pasta de saída separada;
* Implementação com padrão de design PageObject;
* Captura de tela quando houver falha na feature/scenario.

### WebdrioverIO
This library is a [Webdriver](https://w3c.github.io/webdriver/webdriver-spec.html)
(browser automation) module for Node.JS. It makes it possible to write
super easy [Selenium](https://en.wikipedia.org/wiki/Selenium_(software)) tests in your favorite
BDD/TDD test framework, that will run locally or in the cloud using Sauce Labs, BrowserStack or TestingBot.

WebdriverIO is agnostic with regards to the test framework you want to use. Cucumber, Jasmine and Mocha+Chai
are supported by the configuration wizard.

#### [Homepage](http://webdriver.io) | [Developer Guide](http://webdriver.io/guide.html) | [API Reference](http://webdriver.io/api.html) | [Contribute](http://webdriver.io/contribute.html)


### TypeScript
TypeScript é uma linguagem para desenvolvimento JavaScript em larga escala. Com TypeScript podemos escrever código utilizando uma estrutura fortemente tipada e ter este código compilado para JavaScript puro. Características: 

* Qualquer navegador;
* Qualquer host;
* Qualquer sistema operacional;
* Código aberto.

[TypeScript Documentation](https://www.typescriptlang.org/docs/home.html)

### Cucumber
O Cucumber é uma ferramenta de teste que suporta Behavior Driven Development quadro (BDD). Ele define o comportamento do aplicativo usando texto em Inglês simples, definido por uma linguagem chamada Gherkin.

Cucumber permite validação funcional de automação que é facilmente lido e compreendido. Cucumber foi inicialmente implementado em Ruby e depois estendido para framework Java.

O BDD em si, serve para criar testes e integrar regras de negócios com a linguagem de programação, focando no comportamento do software. Além disso, ainda melhora a comunicação entre as equipes de desenvolvimento e testes, aumentando o compartilhamento de conhecimento entre elas. Sendo útil em projetos de software ágeis, que são construídos em várias iterações e estão sofrendo alterações ao longo do seu ciclo de vida. Quanto maior o projeto, mais difícil será a comunicação. Entretanto, BDD propõe uma forma eficaz de resolver estes problemas.

[Cucumber Tutorial](http://www.w3ii.com/pt/cucumber/default.html)

## Para começar:
#### Pré-requisito
1. NodeJS instalado globalmente no sistema operacional. Instale sempre a versão estável.
https://nodejs.org/en/download/ ;

2. Git instalado;

3. Navegador Chrome ou Firefox instalado;

4. JAVA SDK: http://www.oracle.com/technetwork/java/javase/downloads/jdk9-downloads-3848520.html ; 

4. Editor de texto (Opcional) instalado => Sublime/VSCode/Atom/Sublime

**Editor padrão:** *VSCode (Visual Studio Code). Instalar os plugins [Cucumber (Gherkin)] by Steve Purves e [vscode-icons] by Roberto Huertas.*

5. Para SO MacOs, instale [Xcode](https://developer.apple.com/xcode/) ou na loja App Store

**Xcode:** *É necessário aceitar os termos do contrato após a instalação*

6. Para SO MacOS, instale também [Homebrew Tutorial](https://brew.sh/index_pt-br)

7. Instale o [Python 2.7](https://www.python.org/downloads/release/python-2714/) para MacOS / Windows

#### Setup Scripts:
* Clique no botão [Clone or download] para copiar o link.
**Caso realize o download do arquivo, descompacte na pasta desejada e abra a pasta raiz no prompt de comando (Para máquinas sem Git).

* Pelo prompt de comando/terminal, acesse a pasta a qual deseja salvar o projeto;

* Pelo prompt de comando/terminal, acesse a pasta com o projeto clonado e execute como administrador / root os seguintes comandos:

```
   xcode-select --install (Para MacOS)
```

```
   npm install gcc
```
```
   npm run production
```
```
   code .
```
* O visual studio code será aberto e poderá ver todas as dependências do package.json instaladas na pasta node_modules

## Executar os Scripts
### Comandos:
Abra o **Prompt de Comando do visual studio code** [menu View >> Integrated Terminal] e execute o comando abaixo, conforme necessidade:

> Comando sem variáveis, utilizará o padrão definido no projeto após instalação dos pacotes.
```
npm run test
```

## Detalhes do projeto
### Escrevendo Features:
```
Feature: Logar e deslogar no sistema X: 
    Como usuario do sistema X
    Eu quero logar e deslogar do mesmo
    Para que eu possa ter acesso ao sistema de acordo com meu perfil

    Background: possibilidade de acessar o sistema X
        Given eu estou na tela de login

    Scenario: Logar com usuário válido    
        When eu digito "email@email.com" "123456" corretamete as minhas informações do login
        And eu clico no botão de entrar
        Then eu visualizo a página home do sistema
```

### Escrevendo Step Definitions:
```
let expect = require('chai').expect;
import LoginPage from '../pages/loginPage';
import MenuLateralPage from '../pages/menuLateralPage';

var module: any;
module.exports = function suite() {

    this.Given(/^eu estou na tela de login$/, () => {

        LoginPage.open();
        expect(LoginPage.usuarioTxt.isVisible());
    });

    this.When(/^eu digito "([^"]*)" "([^"]*)" corretamete as minhas informações do login$/, (usuario, senha) => {
        
        LoginPage.usuarioTxt.waitForVisible();
        LoginPage.usuarioTxt.setValue(usuario);
        LoginPage.senhaTxt.setValue(senha);
    });

    this.When(/^eu clico no botão de entrar$/, () => {
        
        LoginPage.entrarBtn.click();
    });

    this.Then(/^eu visualizo a página home do sistema$/, () => {
        
        MenuLateralPage.menuEmailLogado.waitForVisible();
        expect(MenuLateralPage.menuEmailLogado.isVisible());
        browser.screenshot();
});

```

### Escrevendo Page Objects:
```
class Login_Page {

    public get usuarioTxt()  { return browser.element('#Username') }
    public get senhaTxt()  { return browser.element('#Password') }
    public get lembrarDeMimChecbox()  { return browser.element('.form-group.login-remember>label>strong') }
    public get entrarBtn()  { return browser.element('.btn.btn-primary.btn-full') }
    public get esqueciSenhaLink()  { return browser.element('.esqueceu-senha-text>a') }
    public get logoImg()  { return browser.element('.login-header>img') }    
    public get validacaoMsg() { return browser.element('.danger.validation-summary-errors>ul>li') }
    public get entrarComoLDCBtn() { return browser.element('.btn.btn-external.btn-ldc>span') }

    public open(): void {
        browser.url('/')
    }
}
const LoginPage = new Login_Page();
export default LoginPage
```

### Cucumber Hooks (Arquivo: local.conf.js):
A configuração seguinte gera um screenshot da falha de cada cenário, bem como uma nova sessão do navegador. Comente browser.reload() para que as steps rodem na mesmaa sessão logada.

```
 afterScenario: function (scenario) {
        browser.screenshot();
        browser.reload();
},
```

A configuração seguinte gera um screenshot da falha de cada step.

```
 afterStep: function (stepResult) {
        staus = stepResult.getStatus();
        if(staus === 'failed'){
            browser.screenshot();
        }
},
```

### CucumberOpts Tags (Arquivo: local.conf.js)
Configuração demonstra as configurações de compilação do Cucumber, bem como as tags específicas das features ou cenários que serão executadas, caso deseje configurar.

```
cucumberOpts: {
        compiler: ["ts:ts-node/register"],
        require: [
            './src/steps/'
        ], // <string[]> (file/dir) require files before executing features
        backtrace: true, // <boolean> show full backtrace for errors

        // EXTENSION after requiring MODULE (repeatable)
        dryRun: false, // <boolean> invoke formatters without executing steps
        failFast: false, // <boolean> abort the run on first failure
        format: ['pretty'], // <string[]> (type[:path]) specify the output
        colors: true, // <boolean> disable colors in formatter output
        snippets: true, // <boolean> hide step definition snippets for pending
        // steps
        source: true, // <boolean> hide source uris
        profile: [], // <string[]> (name) specify the profile to use
        strict: true, // <boolean> fail if there are any undefined or pending
        timeout: 50000,     // <number> timeout for step definitions
        ignoreUndefinedDefinitions: false, // <boolean> Enable this config to
        tags: ['@testes', '@all', '@qualquerOutro']
}
```
Exemplo:
```
Feature: Logar e deslogar no sistema X: 
    Como usuario do sistema X
    Eu quero logar e deslogar do mesmo
    Para que eu possa ter acesso ao sistema de acordo com meu perfil

    Background: possibilidade de acessar o sistema X
        Given eu estou na tela de login

    @testes
    Scenario: Logar com usuário válido    
        When eu digito "email@email.com" "123456" corretamete as minhas informações do login
        And eu clico no botão de entrar
        Then eu visualizo a página home do sistema
```

### Variáveis:
Parâmetros básicos do projeto de teste.

#### BASE_URL (Arquivo: local.conf.js)
Usado para projetos que possua múltiplos ambientes de teste, onde a URL é diferente de cada ambiente em que deseja ser rodado os scripts.

Solução que permite que você crie testes relativos a URL com o conceito de BaseURL, evitando assim, a necessidade de reescrever todos os testes do zero para fazer funcionar em URL's diferentes. 

A propriedade `BASE_URL` é a parte estática da URL definida como uma configuração global para todo o projeto, com isso, o teste poderá ser executado em todos os ambientes.

#### SPEC (Arquivo: local.conf.js)
Neste Momento para rodar uma feature específica, basta decomentar a desejada e comentar as demais, como no exemplo abaixo:

```
specs: [
        // All
        // './features/*.feature',
        './features/perfil-administrador/*.feature',
        // './features/perfil-clinica/*.feature',
        // './features/perfil-clinica/configurarClinica.feature',
        // './features/perfil-clinica/gerenciarCliente.feature',
        // './features/perfil-clinica/gerenciarProduto.feature',
        // './features/perfil-clinica/gerenciarServico.feature',
        // './features/perfil-clinica/gerenciarProtocolo.feature',
        // './features/perfil-clinica/gereciarAgendamento.feature',
    ],
```
Será criado variável de ambiente para que no momento de rodar os testes, informe as features dejadas.

#### SELENIUM CONFIGURATION (Arquivo: local.conf.js)
Usado pelo servidor selenium para seleção do navegador, podendo ser do tipo: `chrome`, `firefox`, `chrome-headless (modo sem cabeça / fantasma)`.

```
capabilities: [{
        browserName: (process.env.TEST_BROWSER_NAME || 'chrome'),
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        maxInstances: 1, //1
        //browserName: 'firefox'
        ///*
        //chromeOptions: {
        //ToDo: maximize propertly, current there is a bug with Chrome, thats why
        // so using window size
        //Check this chrome approach: --start-maximized: is not working
        //'window-size: maximized',
        //args: ['--incognito', '--window-size=2200,1800']//'--disable-extensions', '--start-maximized']
        //Chrome Headless:
        //args: ['--headless', '--disable-gpu', '--window-size=1280,800']
        //} //,ignoreZoomSetting:true
        //*/
}],
```
Código para configurar o Selenium-Standealone `local.conf.js`:
```
maxInstances: 1,

    services: ['selenium-standalone'],
    seleniumLogs: './support/context/selenium-logs',
    seleniumArgs: {
        drivers: {
            chrome: {
                version: 2.35,
                baseURL: 'https://chromedriver.storage.googleapis.com',
            }
        }
    },
    seleniumInstallArgs: {
        drivers: {
            chrome: {
                version: 2.35,
                baseURL: 'https://chromedriver.storage.googleapis.com'
            }
        }
    },
```

### Relatório HTML
Projeto integrado com [wdio-allure-reporte](https://docs.qameta.io/allure/#_about), que é gerado na pasta `..\reports\allure-results` quando executa o comando `npm run test`.

Podendo ser personalizados de acordo com a necessidade.

Para gerar o relatório Allure, execute o comando abaixo no terminal:

```
allure serve ./reports/allure-results/ && allure open
```