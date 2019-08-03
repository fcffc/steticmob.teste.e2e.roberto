Feature: Gerenciar Agendamentos - Fluxo de Exceção
  Como usuário perfil clínica do sistema SteticMob
  Eu desejo gerenciar meus agendamentos
  Para que eu possa realizar atendimentos e relacionar com o mesmo

Background: possibilidade de possuir uma nova clínica configurada com clientes, produtos, serviços e protocolos
    Given eu estou na tela de login
    When eu estou logado no sistema SteticMob "admin@steticmob.com" "123456"
    And eu acesso a tela principal do administrador
    And eu clico no menu clínica do sistema
    And eu localizo a clínica desejada
    And eu clico no ícone usuários
    And eu clico no botão entrar do usuário desejado

##FLUXO EXCEÇÃO

###EX-CASE01
  @suite
  Scenario: Agendar um atendimento com campos nulos ou inválidos
    And eu estou na tela prinicipal da minha clínica
    And eu não preencho o cliente do agendamento
    And eu preencho o serviço do agendamento
    And eu preencho o profissional do agendamento
    And eu preencho a data de hoje do agendamento
    And eu preencho uma sala no agendamento
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