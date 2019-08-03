Feature: Gerenciar Clientes - Fluxo de Exceção
  Como usuário perfil clínica do sistema SteticMob
  Eu desejo gerenciar meus clientes
  Para que eu possa realizar atendimentos e relacionar com o mesmo

Background: possibilidade de possuir uma nova clínica criada e configurada
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
  Scenario: Cadastrar um cliente pessoa física com campos inválidos
    And eu estou na tela de listagem de clientes
    And eu clico em criar um novo cliente
    And eu preencho os dados pessoais do cliente sem informar o nome
    Then eu visualizo a mensagem de validação do nome do cliente
    And eu preencho os dados pessoais do cliente com e-mail inválido
    Then eu visualizo o e-mail do cliente destacado em vermelho
    And eu preencho os dados pessoais do cliente com data de nascimento inválida
    Then eu visualizo a data de nascimento do cliente destacado em vermelho
    And eu preencho os dados pessoais do cliente com CPF inválido
    Then eu visualizo o CPF do cliente destacado em vermelho
    And eu preencho os dados pessoais do cliente com telefone inválido
    Then eu visualizo o telefone do cliente destacado em vermelho
    And eu preencho os dados pessoais do cliente com CEP inválido
    Then eu visualizo o CEP do cliente destacado em vermelho

###EX-CASE02
  @suite
  Scenario: Cadastrar um cliente pessoa física com dados da Anamnese invalidos
    And eu estou na tela de listagem de clientes
    And eu clico em criar um novo cliente
    And eu preencho os dados pessoais do cliente
    And eu preencho a avaliação estética do cliente com qtde de caracteres maior que 255
    Then eu visualizo a mensagem de validação dos campos inválidos do cliente

###EX-CASE03
  @suite
  Scenario: Cadastrar um cliente pessoa física com dados da avaliação inválido
    And eu estou na tela de listagem de clientes
    And eu clico em criar um novo cliente
    And eu preencho os dados pessoais do cliente
    And eu preencho a avaliação estética do cliente
    And eu preencho a avaliação facial do cliente
    And eu preencho a avaliação antropométrica do cliente sem o peso
    Then eu visualizo a mensagem de validação do peso do cliente
    And eu preencho a avaliação antropométrica do cliente sem a altura
    Then eu visualizo a mensagem de validação da altura do cliente

## Salva com CEP / Telefone e CPF inválido, mas pelo menos não grava os dados, deveria validar