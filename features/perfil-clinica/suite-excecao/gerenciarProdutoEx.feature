Feature: Gerenciar Produtos - Fluxo de Exceção
  Como usuário perfil clínica do sistema SteticMob
  Eu desejo gerenciar meus produtos
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