Feature: Gerenciar Serviços - Fluxo de Exceção
  Como usuário perfil clínica do sistema SteticMob
  Eu desejo gerenciar meus serviços
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
  Scenario: Cadastrar um serviço com campos nulos
    And eu estou na tela de listagem de serviços
    And eu clico em criar um novo serviços
    And eu preencho os dados do serviços sem o nome
    And eu clico em salvar o novo serviço
    Then eu visualizo a mensagem de validação do campo nome do serviço
    And eu preencho os dados do serviços sem o preço de venda
    And eu clico em salvar o novo serviço
    Then eu visualizo a mensagem de validação do campo preço de venda do serviço

## Sem limitador e tratativa de validação nos campos nome / minuto em média / mão de obra / preço venda
## Minuto em média deixa salvar com campo estourado