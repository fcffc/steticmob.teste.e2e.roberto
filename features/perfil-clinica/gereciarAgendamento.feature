Feature: Gerenciar Agendamentos
  Como usuário perfil clínica do sistema SteticMob
  Eu desejo gerenciar meus agendamentos
  Para que eu possa realizar atendimentos e relacionar com o mesmo

Background: possibilidade de possuir uma nova clínica configurada com clientes, produtos, serviços e protocolos
    Given eu estou na tela de login
    When eu estou logado no sistema SteticMob "admin@steticmob.com" "123456"
    And eu estou na tela de listagem da clínica
    And eu clico em criar uma clínica
    And eu informo os dados da nova clínica a ser indicada
    And eu clico em indicar clínica
    #.....Remova validacao do Gmail p/ rodar em modo Headless
    #.....Descomente os itens p/ rodar somente em modo desktop
    #Then eu valido que a clínica foi indicada
    #And eu valido o recebimento do email pela clínica
    #And eu retorno para a tela do sistema SteticMob
    #And eu acesso a tela principal do administrador
    #And eu clico no menu clínica do sistema
    And eu localizo a clínica desejada
    And eu clico no ícone usuários
    And eu clico no botão entrar do usuário desejado
    And eu estou na tela de configuração do primeiro passo
    And eu clico no próximo passo de configuração de fornecedores
    And eu seleciono todos os fornecedores
    And eu clico no próximo passo de configuração de serviços
    And eu seleciono os serviços desejados
    And eu clico no próximo passo de configuração de profissionais
    And eu adiciono um novo profissional do tipo pessoa física
    And eu visuliso o profissional criado na tela de configuração
    And eu clino no próximo passo para finalizar a configuração
    Then eu visualizo a mensagem de configuração realizada com sucesso
    And eu clico no botão de começar a minha clínica
    And eu navego no step by do sistema SteticMob
    And eu acesso a tela prinicipal da minha clínica
    And eu estou na tela de listagem de clientes
    And eu clico em criar um novo cliente
    And eu preencho os dados pessoais do cliente
    And eu preencho a avaliação estética do cliente
    And eu preencho a avaliação facial do cliente
    And eu preencho a avaliação antropométrica do cliente
    And eu clico em salvar o novo cliente
    Then eu visualizo o cliente cadastrado na listagem de clientes
    And eu estou na tela de listagem de produtos
    And eu clico em criar um novo produto
    And eu preencho os dados do produto
    And eu informo que o produto pode ser vendido na clínica
    And eu clico em salvar o novo produto
    Then eu visualizo o produto cadastrado na listagem de produtos
    And eu estou na tela de listagem de serviços
    And eu clico em criar um novo serviços
    And eu preencho os dados do serviços
    And eu adiciono um protocolo ao serviço
    And eu clico em salvar o novo serviço
    Then eu visualizo o serviço cadastrado na listagem de serviços
    And eu estou na tela de listagem de protocolos
    And eu clico em criar um novo protocolo
    And eu preencho os dados do protocolo
    And eu adiciono um produto ao protocolo
    And eu adiciono um serviço ao protocolo
    And eu clico em salvar o novo protocolo
    And os calculos do custo são realizados do protocolo
    Then eu visualizo o protocolo cadastrado na listagem de protocolos

##FLUXO PRINCIPAL

###CASE01
  @suite
  Scenario: Agendar um atendimento válido para data atual pela tela principal
    And eu estou na tela prinicipal da minha clínica
    And eu preencho o cliente do agendamento
    And eu preencho o serviço do agendamento
    And eu preencho o profissional do agendamento
    And eu preencho a data de hoje do agendamento
    And eu adiciono uma sala no agendamento
    And eu preencho o período de atendimento do agendamento
    And eu preencho as observações necessárias para o atendimento
    And eu clico no botão de agendar para realizar o agendamento
    Then eu visualizo o agendamento na agenda de hoje
    And eu confirmo que o agendamento esta sendo filtrado corretamente

##FLUXO EXCEÇÃO

###EX-CASE01
  Scenario: Agendar um atendimento com campos nulos ou inválidos
    And eu estou na tela prinicipal da minha clínica
    And eu não preencho o cliente do agendamento
    And eu preencho o serviço do agendamento
    And eu preencho o profissional do agendamento
    And eu preencho a data de hoje do agendamento
    And eu adiciono uma sala no agendamento
    And eu preencho o período de atendimento do agendamento
    And eu preencho as observações necessárias para o atendimento
    And eu clico no botão de agendar para realizar o agendamento
    Then eu visualizo a mensagem de validação do campo clinte do agendamento
    And eu preencho o cliente do agendamento
    And eu preencho o profissional do agendamento
    And eu preencho a data de hoje do agendamento
    And eu preencho uma sala no agendamento
    And eu informo o período de atendimento do agendamento
    And eu preencho as observações necessárias para o atendimento
    And eu clico no botão de agendar para realizar o agendamento
    Then eu visualizo a mensagem de validação do campo serviço do agendamento
    And eu preencho o cliente do agendamento
    And eu preencho o serviço do agendamento
    And eu não preencho o profissional do agendamento
    And eu preencho a data de hoje do agendamento
    And eu preencho uma sala no agendamento
    And eu preencho o período de atendimento do agendamento
    And eu preencho as observações necessárias para o atendimento
    And eu clico no botão de agendar para realizar o agendamento
    Then eu visualizo a mensagem de validação do campo profissional do agendamento
    And eu preencho o cliente do agendamento
    And eu preencho o serviço do agendamento
    And eu preencho o profissional do agendamento
    And eu não preencho a data do agendamento
    And eu preencho uma sala no agendamento
    And eu preencho o período de atendimento do agendamento
    And eu preencho as observações necessárias para o atendimento
    And eu clico no botão de agendar para realizar o agendamento
    Then eu visualizo a mensagem de validação do campo data do agendamento
    And eu preencho o cliente do agendamento
    And eu preencho o serviço do agendamento
    And eu preencho o profissional do agendamento
    And eu preencho a data de hoje do agendamento
    And eu preencho uma sala no agendamento
    Then eu visualizo a mensagem de validação do campo hora inicial do agendamento