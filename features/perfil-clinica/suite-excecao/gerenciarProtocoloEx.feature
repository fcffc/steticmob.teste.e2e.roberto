Feature: Gerenciar Protocolos - Fluxo de Exceção
  Como usuário perfil clínica do sistema SteticMob
  Eu desejo gerenciar meus protocolos
  Para que eu possa realizar atendimentos e relacionar com o mesmo

Background: possibilidade de possuir uma nova clínica configurada com produtos e serviços
    Given eu estou na tela de login
    When eu estou logado no sistema SteticMob "admin@steticmob.com" "123456"
    And eu acesso a tela principal do administrador
    And eu clico no menu clínica do sistema
    And eu localizo a clínica desejada
    And eu clico no ícone usuários
    And eu clico no botão entrar do usuário desejado

##FLUXO EXCEÇÃO

###EX-CASE01
  #@suite
  Scenario: Cadastrar um protocolo com campos nulos
    And eu estou na tela de listagem de protocolos
    And eu clico em criar um novo protocolo
    And eu preencho os dados do protocolo
    And eu adiciono um produto ao protocolo sem a qtde de rendimento
    And eu clico em salvar o novo protocolo
    Then eu visualizo a mensagem de validação do campo rendimento do protocolo
    And eu preencho os dados do protocolo sem o nome
    And eu clico em salvar o novo protocolo
    Then eu visualizo a mensagem de validação do campo nome do protocolo

## Sem limitador e tratativa de validação nos campos nome e rendimento