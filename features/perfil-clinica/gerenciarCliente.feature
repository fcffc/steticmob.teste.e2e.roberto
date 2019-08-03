Feature: Gerenciar Clientes
  Como usuário perfil clínica do sistema SteticMob
  Eu desejo gerenciar meus clientes
  Para que eu possa realizar atendimentos e relacionar com o mesmo

Background: possibilidade de possuir uma nova clínica criada e configurada
    Given eu estou na tela de login
    When eu estou logado no sistema SteticMob "admin@steticmob.com" "123456"
    And eu estou na tela de listagem da clínica
    And eu clico em criar uma clínica
    And eu informo os dados da nova clínica a ser indicada
    And eu clico em indicar clínica
    Then eu valido que a clínica foi indicada
    And eu retorno para a tela do sistema SteticMob
    And eu acesso a tela principal do administrador
    And eu clico no menu clínica do sistema
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

##FLUXO PRINCIPAL

###CASE01
  Scenario: Cadastrar um cliente pessoa física válida
    And eu estou na tela de listagem de clientes
    And eu clico em criar um novo cliente
    And eu preencho os dados pessoais do cliente
    And eu preencho a avaliação estética do cliente
    And eu preencho a avaliação facial do cliente
    And eu preencho a avaliação antropométrica do cliente
    And eu clico em salvar o novo cliente
    Then eu visualizo o cliente cadastrado na listagem de clientes
    And eu confirmo que o cliente esta sendo filtrado corretamente

##FLUXO EXCEÇÃO

###EX-CASE01
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
  Scenario: Cadastrar um cliente pessoa física com dados da Anamnese invalidos
    And eu estou na tela de listagem de clientes
    And eu clico em criar um novo cliente
    And eu preencho os dados pessoais do cliente
    And eu preencho a avaliação estética do cliente com qtde de caracteres maior que 255
    Then eu visualizo a mensagem de validação dos campos inválidos do cliente

###EX-CASE03
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