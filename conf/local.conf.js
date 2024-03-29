exports.config = {
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the
    // directory from which `wdio` was called. Notice that, if you are calling
    // `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script)
    // then the current working directory is where your package.json resides, so
    // `wdio` will be called from there.
    //
    specs: [
        // All
        './features/*.feature',
        './features/perfil-administrador/*.feature',
        './features/perfil-clinica/*.feature',
        // './features/perfil-clinica/configurarClinica.feature',
        // './features/perfil-clinica/gerenciarCliente.feature',
        // './features/perfil-clinica/gerenciarProduto.feature',
        // './features/perfil-clinica/gerenciarServico.feature',
        // './features/perfil-clinica/gerenciarProtocolo.feature',
        // './features/perfil-clinica/gereciarAgendamento.feature',
        './features/perfil-clinica/suite-excecao/*.feature',
        
    ],
    // ...
    // define specific suites
    suites: {
        suite: [
            './features/perfil-clinica/gereciarAgendamento.feature'
        ]
    },
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    // JIRA SERVICE
    // services: ['jira'],
    //     jiraConfig: {
    //     host: 'xxxxx.atlassian.net/',
    //     username: 'fernandaferreiraqa@gmail.com',
    //     password: 'xxxxx,
    //     jiraIssue: 'XXXX-327',
    //     failureId: '3',
    //     failureMessage: 'Test failed!', // Also a good place to @ a specific user / group on test failures or specify associated build numbers.
    //     successId: '6',
    //     successMessage: 'Test passed!',
    // },

    // ============================
    // LOCAL SELENIUM CONFIGURATION
    // ============================
    // Uncomment the services & capabilities keys below if you want to run using a local browser.nium
    // Descomentar para voltar configuração do sele

    //services: ['selenium-standalone'],
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

    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities
    // at the same time. Depending on the number of capabilities, WebdriverIO
    // launches several test sessions. Within your capabilities you can
    // overwrite the spec and exclude options in order to group specific specs
    // to a specific capability.
    //
    // First, you can define how many instances should be started at the same
    // time. Let's say you have 3 different capabilities (Chrome, Firefox, and
    // Safari) and you have set maxInstances to 1; wdio will spawn 3 processes.
    // Therefore, if you have 10 spec files and you set maxInstances to 10, all
    // spec files will get tested at the same time and 30 processes will get
    // spawned. The property handles how many capabilities from the same test
    // should run tests.
    //

    // If you have trouble getting all important capabilities together, check
    // out the Sauce Labs platform configurator - a great tool to configure your
    // capabilities: https://docs.saucelabs.com/reference/platforms-configurator
    capabilities: [{
        browserName: (process.env.TEST_BROWSER_NAME || 'chrome'),
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        maxInstances: 1, //1
        //browserName: 'firefox'
        ///*
        chromeOptions: {
            //ToDo: maximize propertly, current there is a bug with Chrome, thats why
            //so using window size
            //Check this chrome approach: --start-maximized: is not working
            //'window-size: maximized',
            //args: ['--incognito', '--window-size=2200,1800']//'--disable-extensions', '--start-maximized']
            //Chrome Headless:
            args: ['--headless', '--disable-gpu', '--window-size=2100,1200']
            // args: ['--window-size=2100,1200']
        } //,ignoreZoomSetting:true
        // //*/
    }],

    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // By default WebdriverIO commands are executed in a synchronous way using
    // the wdio-sync package. If you still want to run your tests in an async
    // way e.g. using promises you can set the sync option to false.
    sync: true,
    //
    // Level of logging verbosity: silent | verbose | command | data | result |
    // error
    logLevel: 'silent',
    //
    // Enables colors for log output.
    coloredLogs: true,
    //
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: './support/errorShots/',
    //
    // Set a base URL in order to shorten url command calls. If your url
    // parameter starts with "/", then the base url gets prepended.
    // URL'S: urlBackOfficeDevelop, urlBackOfficeHomolog, urlPlataformaDevelop, urlPlataformaHomolog
    // urlPortariaDevelop, urlPortariaHomolog
    baseUrl: (process.env.BASE_URL_APP),
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 20000,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 60000,
    //
    // Default request retries count
    connectionRetryCount: 1,
    //
    // Initialize the browser instance with a WebdriverIO plugin. The object
    // should have the plugin name as key and the desired plugin options as
    // properties. Make sure you have the plugin installed before running any
    // tests. The following plugins are currently available:
    // WebdriverCSS: https://github.com/webdriverio/webdrivercss
    // WebdriverRTC: https://github.com/webdriverio/webdriverrtc
    // Browserevent: https://github.com/webdriverio/browserevent
    // plugins: {
    //     webdrivercss: {
    //         screenshotRoot: 'my-shots',
    //         failedComparisonsRoot: 'diffs',
    //         misMatchTolerance: 0.05,
    //         screenWidth: [320,480,640,1024]
    //     },
    //     webdriverrtc: {},
    //     browserevent: {}
    // },
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They
    // enhance your test setup with almost no effort. Unlike plugins, they don't
    // add new commands. Instead, they hook themselves up into the test process.
    // services: ['selenium-standalone'],
    //
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: http://webdriver.io/guide/testrunner/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework
    // installed before running any tests.
    framework: 'cucumber',

    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: http://webdriver.io/guide/testrunner/reporters.html
    reporters: ['spec', 'dot', 'allure'],
    reporterOptions: {
        spec: { outputDir: './reports/spec-results' },
        dot: { outputDir: './reports/dot-results' },
        allure: { outputDir: './reports/allure-results' },
    },

    // If you are using Cucumber you need to specify the location of your step
    // definitions.
    cucumberOpts: {
        compiler: ["ts:ts-node/register"],
        require: [
            './src/steps/',
            './src/steps/administrador'
        ], // <string[]> (file/dir) require files before executing features
        backtrace: true, // <boolean> show full backtrace for errors

        // EXTENSION after requiring MODULE (repeatable)
        dryRun: false, // <boolean> invoke formatters without executing steps
        failFast: false, // <boolean> abort the run on first failure
        format: ['pretty'], // <string[]> (type[:path]) specify the output
        // format, optionally supply PATH to redirect
        // formatter output (repeatable)
        colors: true, // <boolean> disable colors in formatter output
        snippets: true, // <boolean> hide step definition snippets for pending
        // steps
        source: true, // <boolean> hide source uris
        profile: [], // <string[]> (name) specify the profile to use
        strict: true, // <boolean> fail if there are any undefined or pending
        // steps

        // tags: require('./teststests/tagProcessor')(process.argv),

        // <string[]> (expression) only execute the features or scenarios with
        // tags matching the expression
        timeout: 40000,     // <number> timeout for step definitions
        ignoreUndefinedDefinitions: false, // <boolean> Enable this config to
        // treat undefined definitions as
        // warnings.
        tags: [(process.env.TAGS)],
        // tags: ['@testes'],
    },

    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test
    // process in order to enhance it and to build services around it. You can
    // either apply a single function or an array of methods to it. If one of
    // them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    //
    // Gets executed once before all workers get launched.
    onPrepare: function onPrepare(config, capabilities) {
        require('dotenv').config();
    },
    //
    // Gets executed before test execution begins. At this point you can access
    // all global variables, such as `browser`. It is the perfect place to
    // define custom commands.
    before: function before(capabilities, specs) {
        // NOTE: This calls below look to be broken.
        //       Leaving them in in case they get fixed.
        //browser.url(this.baseUrl);
        //browser.windowHandleMaximize();
        // browser.timeouts('script', 60000);
        // browser.timeouts('page load', 300000);

        browser.timeouts('implicit', 5000);

        /**
         * Setup the Chai assertion framework
         */
        const chai = require('chai');

        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
    },
    //
    // Hook that gets executed before the suite starts
    // beforeSuite: function beforeSuite(suite) {
    // },
    //
    // Hook that gets executed _before_ a hook within the suite starts (e.g.
    // runs before calling beforeEach in Mocha)
    // beforeHook: function beforeHook() {
    // },
    //
    // Hook that gets executed _after_ a hook within the suite starts (e.g. runs
    // after calling afterEach in Mocha)
    // afterHook: function afterHook() {
    // },
    //
    // Function to be executed before a test (in Mocha/Jasmine) or a step (in
    // Cucumber) starts.
    // beforeTest: function beforeTest(test) {
    // },
    //
    // Runs before a WebdriverIO command gets executed.
    // beforeCommand: function beforeCommand(commandName, args) {
    // },
    //
    // Runs after a WebdriverIO command gets executed
    // afterCommand: function afterCommand(commandName, args, result, error) {
    // },
    //
    // Function to be executed after a test (in Mocha/Jasmine) or a step (in
    // Cucumber) starts.
    // afterTest: function afterTest(test) {
    // },
    //
    // Hook that gets executed after the suite has ended
    // afterSuite: function afterSuite(suite) {
    // },
    //
    // Gets executed after all tests are done. You still have access to all
    // global variables from the test.
    // after: function after(result, capabilities, specs) {
    // },
    //
    // Gets executed after all workers got shut down and the process is about to
    // exit. It is not possible to defer the end of the process using a promise.
    // onComplete: function onComplete(exitCode) {
    // }


    // Cucumber specific hooks
    beforeFeature: function (feature) {
        console.log('------------------------------------------------------');
        console.log('BASE_URL_APP:.....' + exports.config.baseUrl);
        console.log('------------------------------------------------------');
        var funcionalidade = feature.getName();
        console.log("INICIO DOS TESTES DA FEATURE:....." + funcionalidade);
    },
    // afterFeature: function (feature) {
    //     console.log('------------------------------------------------------');
    //     console.log('BASE_URL: ' + exports.config.baseUrl);
    //     console.log('------------------------------------------------------');
    //     var funcionalidade = feature.getName();
    //     console.log("FIM DOS TESTES DA FEATURE: "+funcionalidade);
    // },
    beforeScenario: function (scenario) {
        var cenario = scenario.getName();
        console.log("INICIO DOS TESTES DO CENÁRIO:....." + cenario);
        browser.url(this.baseUrl);
        //browser.windowHandleMaximize();
    },
    beforeStep: function (step) {
        var passo = step.getName();
        console.log("Inicio da Step:............" + passo);
    },
    afterStep: function (stepResult) {
        staus = stepResult.getStatus();
        if(staus === 'failed'){
            browser.screenshot();
        }
        console.log("Status da Step.:..." + staus);    
    },
    afterScenario: function (scenario) {
        browser.screenshot();
        browser.reload();

        // global.jiraIssue = jiraConfig.jiraIssue;
        // // global.services = jiraConfig.successId;
        // // global.services = jiraConfig.successMessage;
        // // global.services = jiraConfig.failureId;
        // // global.services = jiraConfig.failureMessage;
        var cenario = scenario.getName();
        console.log("FIM DOS TESTES DO CENÁRIO:.......................................");
    },
};