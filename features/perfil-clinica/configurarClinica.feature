Feature: Configurar Clínicas
  Como novo usuário do sistema SteticMob
  Eu desejo realizar as configuraçãoes iniciais da minha clínica no sistema SteticMob
  Para que eu possa gerenciar minha empresa no sistema SteticMob

Background: possibilidade de possuir uma nova clínica criada
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

##FLUXO PRINCIPAL

###CASE01
  Scenario: Configurar minha clínica
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

##FLUXO EXCEÇÃO

###EX-CASE01
  @suite
  Scenario: Configurar minha clínica com busca de serviço inexistente
    And eu estou na tela de configuração do primeiro passo
    And eu clico no próximo passo de configuração de fornecedores
    And eu seleciono todos os fornecedores
    And eu clico no próximo passo de configuração de serviços
    And eu busco um serviço inexistente
    Then eu visualizo a mensagem de sem registro do serviçoo da configuração da clínica

###EX-CASE02
  @suite
  Scenario: Configurar minha clínica com campos inválidos do profissional
    And eu estou na tela de configuração do primeiro passo
    And eu clico no próximo passo de configuração de fornecedores
    And eu seleciono todos os fornecedores
    And eu clico no próximo passo de configuração de serviços
    And eu seleciono os serviços desejados
    And eu clico no próximo passo de configuração de profissionais
    And eu adiciono um novo profissional do tipo pessoa física sem informar o nome
    Then eu visualizo a mensagem de validação do nome do profissional na configuração da clínica
    And eu adiciono um novo profissional do tipo pessoa física com CPF inválido
    Then eu visualizo o CPF do profissional destacado em vermelho na configuração da clínica
    And eu adiciono um novo profissional do tipo pessoa física com data de nascimento inválida
    Then eu visualizo a data de nascimento do profissional destacado em vermelho na configuração da clínica
    And eu adiciono um novo profissional do tipo pessoa física com telefone inválido
    Then eu visualizo o telefone do profissional destacado em vermelho na configuração da clínica
    And eu adiciono um novo profissional do tipo pessoa física com CEP inválido
    Then eu visualizo o CEP do profissional destacado em vermelho na configuração da clínica

##Permite cadastrar mesmo com o CPF / CEP e Data de Nacimento inválido do Profissional no Modal