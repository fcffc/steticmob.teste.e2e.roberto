Feature: Gerenciar Serviços
  Como usuário perfil clínica do sistema SteticMob
  Eu desejo gerenciar meus serviços
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
  Scenario: Cadastrar um serviço válido
    And eu estou na tela de listagem de serviços
    And eu clico em criar um novo serviços
    And eu preencho os dados do serviços
    And eu adiciono um protocolo ao serviço
    And eu clico em salvar o novo serviço
    Then eu visualizo o serviço cadastrado na listagem de serviços
    And eu confirmo que o serviço esta sendo filtrado corretamente

##FLUXO EXCEÇÃO

###EX-CASE01
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