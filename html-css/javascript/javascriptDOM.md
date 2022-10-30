# DOM
- Document Object Model
- Estrutura de um arquivo na web
- Representa documentos HTML ou XML 
- Interface de programação
- NÃO é uma linguagem de programação
- É essencial para o JS entender o modelo de páginas web

## Para que serve?
- Alterar a estrutura 
- Alterar o estilo
- Alterar o conteúdo

## Como?
- Disponibilizando API (Application Programming Interface)
- Rotinas e padrões estabelecidos
- Métodos (funções)
- Árvore de elementos
- Seletores
- Objetos (nós / nodes)

## Exemplo HTML
```
<html>
    <head></head>
    <body></body>
</html>
```

## Exemplo Obj
```
objeto = {
    html : {
        head : {},
        body : {
            h1 : {

            }
        }
    }
}
```

## DOM x JS
- O DOM pode ser usado por outras linguagens
- Sem o DOM o JS não teria noção da página

### Vantagens de usar JavaScript 
- Código é executado por navegadores
- Tornar as páginas dinâmicas
- Evitar Requisições desnecessárias (performance)
- SPA (Single Page Applications)
- Reagir rapidamente a ações dos usuários

### Desevantagens de usar o JavaScript
- Código é executado por navegadores
- O conteúdo NÃO fica visível para indexadores de busca
- Alterações em tempo de execução não ficam salvas no documento 


### Exemplos
Seleciona objetos e disponibiliza (metodos / funções), chamados de .callback

- document.getElementById(id) 
    // seleciona elemento html pelo id.
- document.getElementByTagName('div') 
    // seleciona elemento html por uma tag, posso por exemplo selecionar todas as div´s de uma página por esse parâmetro.
- document.createElement('div') 
    // com esse parâmetro posso criar elementos na minha página, como por exemplo uma div.
- parentNode.appendChild(node)
    // com esse parâmetro nós acessamos os nós, por exemplo para inserir uma body no html utilizaríamos algo como html.appendChild('body').
- element.innerHTML
    // parâmetro para inserir intens no HTML
- element.style
    // parâmetro para alterar o estilo
- element.setAttribute('name')
    // serve para inserir atributos em uma tag html
- element.getAttribute('name')
    // parâmetro para buscar atributos em uma tag html
- element.addEventListener()
    // parâmetro para observar objetos, esta função observa se houve alterações por exemplo em um formulário é submetido para adicionar funções.
- window.location
    // parâmetro para saber por exemplo a url de uma página.
- window.onload
    // controlar funções por exemplo quando uma página for carregada.
- window.scrollTo()
    // ???
- console.log()
    // exibir funções no console.


### Referências
- DOM: https://dom.spec.whatwg.org/
- Tecnologias JS: https://developer.mozila.org/pt-BR/docs/Web/JavaScript/
JavaScript_technologies_overview
- Motores de execução: https://pt.wikipidia.org/wiki/Lista_de_motores_de_renderiza%C3%A7%C3%A3o


