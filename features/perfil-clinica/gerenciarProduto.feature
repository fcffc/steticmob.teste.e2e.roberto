Feature: Gerenciar Produtos
  Como usuário perfil clínica do sistema SteticMob
  Eu desejo gerenciar meus produtos
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
  Scenario: Cadastrar um produto válido que possa ser vendido pela clínica
    And eu estou na tela de listagem de produtos
    And eu clico em criar um novo produto
    And eu preencho os dados do produto
    And eu informo que o produto pode ser vendido na clínica
    And eu clico em salvar o novo produto
    Then eu visualizo o produto cadastrado na listagem de produtos
    And eu confirmo que o produto esta sendo filtrado corretamente

##FLUXO EXCEÇÃO

###EX-CASE01
  Scenario: Cadastrar um produto com campos inválidos ou nulos
    And eu estou na tela de listagem de produtos
    And eu clico em criar um novo produto
    And eu preencho os dados do produto sem o nome
    And eu clico em salvar o novo produto
    Then eu visualizo a mensagem de validação do campo nome do produto
    And eu preencho os dados do produto sem a linha do produto
    And eu clico em salvar o novo produto
    Then eu visualizo a mensagem de validação do campo linha do produto
    And eu preencho os dados do produto sem a unidade de medida do produto
    And eu clico em salvar o novo produto
    Then eu visualizo a mensagem de validação do campo unidade de medida do produto
    And eu preencho os dados do produto sem o custo à vista do produto
    And eu clico em salvar o novo produto
    Then eu visualizo a mensagem de validação do campo custo à vista do produto
    And eu preencho os dados do produto sem o rendimento do produto
    And eu clico em salvar o novo produto
    Then eu visualizo a mensagem de validação do campo rendimento do produto
    And eu preencho os dados do produto sem o preço de tabela do produto
    And eu clico em salvar o novo produto
    Then eu visualizo a mensagem de validação do campo preço de tabela do produto
    And eu preencho os dados do produto sem o nome da nova linha do produto
    Then eu visualizo a mensagem de validação do campo nome da nova linha do produto
    And eu preencho os dados do produto sem a descrição da nova linha do produto
    Then eu visualizo a mensagem de validação do campo descrição da nova linha do produto
    And eu preencho os dados do produto sem o nome da nova sublinha do produto
    Then eu visualizo a mensagem de validação do campo nome da nova sublinha do produto
    And eu preencho os dados do produto sem a descrição da nova sublinha do produto
    Then eu visualizo a mensagem de validação do campo descrição da nova sublinha do produto

## Campos como Cód / Estoque minimo / Custo à prazo / Custo à Vista / Rendimento / Preço Tabela
## Desconto à Vista / Desconto à Prazo não possui limitador de valor, estoura
## Nome da Linha / Descrição da Linha / Nome da Sublinha e Descrição da Sublinha sem limitador