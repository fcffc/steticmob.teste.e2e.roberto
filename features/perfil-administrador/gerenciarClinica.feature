Feature: Gerenciar Clínicas
  Como administrador do portal SteticMob
  Eu desejo cadastrar uma nova clínica no sistema SteticMob
  Para que a clinica possa gerenciar sua empresa no sistema SteticMob

##FLUXO PRINCIPAL

###CASE01
  Scenario: Cadastrar uma nova clínica
    Given eu estou na tela de login
    When eu estou logado no sistema SteticMob "admin@steticmob.com" "123456"
    And eu estou na tela de listagem da clínica
    And eu clico em criar uma clínica
    And eu informo os dados da nova clínica a ser indicada
    And eu clico em indicar clínica
    Then eu valido que a clínica foi indicada
    And eu valido o recebimento do email pela clínica

###CASE02
  Scenario: Cadastrar uma nova clínica e inativar
    Given eu estou na tela de login
    When eu estou logado no sistema SteticMob "admin@steticmob.com" "123456"
    And eu estou na tela de listagem da clínica
    And eu clico em criar uma clínica
    And eu informo os dados da nova clínica a ser indicada e inativada
    And eu clico em indicar clínica
    And eu valido que a clínica foi cadastrada
    And eu inativo a clínica
    Then valido que a clínica foi inativada