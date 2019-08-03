Feature: Gerenciar Protocolos
  Como usuário perfil clínica do sistema SteticMob
  Eu desejo gerenciar meus protocolos
  Para que eu possa realizar atendimentos e relacionar com o mesmo

Background: possibilidade de possuir uma nova clínica configurada com produtos e serviços
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

##FLUXO PRINCIPAL

###CASE01
  Scenario: Cadastrar um protocolo válido
    And eu estou na tela de listagem de protocolos
    And eu clico em criar um novo protocolo
    And eu preencho os dados do protocolo
    And eu adiciono um produto ao protocolo
    And eu adiciono um serviço ao protocolo
    And eu clico em salvar o novo protocolo
    And os calculos do custo são realizados do protocolo
    Then eu visualizo o protocolo cadastrado na listagem de protocolos
    And eu confirmo que o protocolo esta sendo filtrado corretamente

##FLUXO EXCEÇÃO

###EX-CASE01
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