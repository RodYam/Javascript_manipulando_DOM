# Javascript_manipulando_DOM
 Manipulando o DOM

 ETAPA 01 - Baixando os arquivos.

 SELECIONANDO ELEMENTOS:
 O DOM (Document Object Model) e o JavaScript, juntos, possuem grande poder de modificar dinamicamente a estrutura de um documento HTML. Sendo possível, por exemplo:

Adicionar/modificar/remover tags, textos, imagens e qualquer elemento no HTML.
Alterar estilos CSS da página.
Criar novos eventos HTML.
Vamos conferir formas de realizar os itens listados acima.

Métodos para selecionar elementos no HTML

document.getElementByID(id) - Recupera um elemento pelo ID.
document.getElementsByTagName(name) - Recupera um elemento pelo nome.
document.getElementsByClassName(name) - Recupera um elemento pelo nome da classe.

Propriedades e métodos para alterar elementos no HTML

element.innerHTML - Esta propriedade obtém ou altera qualquer elemento no HTML, inclusive tags.
element.innerText - Esta propriedade permite inserir textos no HTML.
element.attribute - Esta propriedade altera o valor de um elemento HTML
element.setAttribute(atributo, valor) - Este método altera o valor de um atributo de um elemento HTML.

Adicionando e excluindo elementos

document.write() - Escreve no fluxo de saída do HTML.
document.appendChild() - Adiciona um elemento HTML.
document.removeChild() - Remove um elemento HTML.
document.replaceChild() - Substitui um elemento HTML.
document.createElement() - Cria um elemento HTML.


Lembrete: 
function dizOi(nome) {
    console.log("Oi " + nome)
    console.log("Bem-vindo(a) ao Robotron 2000.")
}

dizOi("Dakota"); 

// Queremos que todas as vezes que a página for carregada, a função dizOi seja executada. Para isso, nós chamamos esse função colocando o nome dela e abrindo e fechando parênteses, assim a função será executada no momento exato em que ela for lida.
