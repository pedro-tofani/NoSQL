## Desafios

Monte queries para encontrar as informações dos desafios a seguir.

##### Desafio 1

Inclua o campo `criadoPor` em todos os documentos, colocando seu nome no valor desse campo.

##### Desafio 2

Inclua o campo `valorUnitario` em todos os documentos em que esse campo não existe e atribua a ele o valor `0.00`, com o tipo `NumberDecimal`.

##### Desafio 3

Inclua o campo `avaliacao` do tipo `NumberInt` e com o valor `0` em todos os documentos da coleção.

##### Desafio 4

Incremente o valor do campo `avaliacao` em `5` em todos os sanduíches de carne do tipo `bovino`. Dica: utilize como filtro o campo `tags`.

##### Desafio 5

Incremente o valor do campo `avaliacao` em `3` em todos os sanduíches de `ave`.

##### Desafio 6

Atribua o valor `16.90` ao campo `valorUnitario` e a data corrente ao campo `ultimaModificacao` no sanduíche `Big Mac`.

##### Desafio 7

Adicione `ketchup` aos `ingredientes` para todos os sanduíches menos o `McChicken`, garantindo que não haja duplicidade nos `ingredientes`.

##### Desafio 8

Inclua `bacon` no final da lista de `ingredientes` dos sanduíches `Big Mac` e `Quarteirão com Queijo`.

##### Desafio 9

Remova o item `cebola` de todos os sanduíches.

##### Desafio 10

Remova o primeiro `ingrediente` do sanduíche `Quarteirão com Queijo`.

##### Desafio 11

Remova o último `ingrediente` do sanduíche `Cheddar McMelt`.

##### Desafio 12

Agora, vamos simular a quantidade de vendas dos sanduíches por dia da semana.

Para isso, inclua um _array_ com sete posições em todos os sanduíches. Cada uma delas representará um dia da semana, e cada posição iniciará em 0. O _array_ deve se parecer como abaixo:

```json
"vendasPorDia": [0, 0, 0, 0, 0, 0, 0]
```

O primeiro item desse _array_ representa as vendas no Domingo, enquanto o último representa as vendas no Sábado. Tenha isso claro porque vamos utilizar essa sequência mais à frente.

##### Desafio 13

Incremente as vendas de `Big Mac` às quartas-feiras em `60`.

##### Desafio 14

Incremente as vendas de todos os sanduíches de carne do tipo `bovino` e `pão` aos sábados em `120`.

##### Desafio 15

Insira os elementos `combo` e `tasty` no _array_ `tags` de todos os sanduíches e aproveite para deixar os elementos em ordem alfabética ascendente.

##### Desafio 16

Ordene os elementos do _array_ `valoresNutricionais` pelo campo `percentual` de forma descendente. Dica: mesmo sem adicionar nenhum novo elemento, para essa operação é necessário utilizar também o modificador `$each`.

##### Desafio 17

Adicione o elemento `muito sódio` ao _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior ou igual a `40`.

##### Desafio 18

Adicione o elemento `contém sódio` ao _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior do que `20` e menor do que `40`.

##### Desafio 19

Conte quantos produtos contêm `Mc` no nome, sem considerar letras maiúsculas ou minúsculas.

##### Desafio 20

Conte quantos produtos têm `4` ingredientes.

##### Desafio 21

Crie um índice do tipo `text` no campo `descricao` com o idioma padrão `portuguese`.

##### Desafio 22

Conte quantos documentos contêm as palavras `frango` e `hamburguer` utilizando o operador `$text`.

##### Desafio 23

Conte quantos documentos contêm a expressão `feito com` utilizando o operador `$text`.

##### Desafio 24

Renomeie o campo `descricao` para `descricaoSite` em todos os documentos.

##### Desafio 25

Remova o campo `valorUnitario` do item `Big Mac`.

##### Desafio 26

Retorne o nome dos sanduíches em que o número de `curtidas` é maior que o número de vendas.

##### Desafio 27

Retorne o nome e a quantidade de vendas dos sanduíches em que o número de vendas é múltiplo de `5`.
