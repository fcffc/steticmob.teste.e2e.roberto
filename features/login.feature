Feature: Logar no sistema SteticMob
  Como usuario do portal SteticMob
  Eu desejo logar no sistema SteticMob
  Para que eu possa ter acesso a uma clínica do sistema

  Background: possibilidade de estar na tela de Login
    Given eu estou na tela de login

##FLUXO PRINCIPAL

###LOGIN01
  Scenario: Acessar uma clínica com usuário administrador válido
    When eu informo os dados do usuário
    And eu clico no botão entrar
    And eu acesso a tela principal do administrador
    And eu clico no menu clínica do sistema
    And eu localizo a clínica desejada
    And eu clico no ícone usuários
    And eu clico no botão entrar do usuário desejado
    Then eu visualizo os dados da minha clinica selecionada

##FLUXO EXCEÇÃO

###EX-LOGIN01
  @suite
  Scenario: Acessar uma clínica com usuário administrador inválido
    When eu informo os dados do usuário inválido
    And eu clico no botão entrar
    Then eu recebo a mensagem de validação "Login ou senha invalidos!"