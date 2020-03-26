---
title: "Criando um jogo simples no Construct 2"
layout: post
date: 2017-02-14 23:00
image: /assets/images/tutos/construct2/construct_2.jpg
headerImage: false
tag:
- Construct2
- scirra
- tutorial
- jogo
- simples
blog: true
comments: true
author: rychillie
category: blog
description: Bora aprender a fazer jogos!
---

O Contrusct 2 sem dúvida é uma ótima plataforma com ótimas possibilidades para quem não conhece programação ou não tem muito conhecimento na área e gostaria de fazer um jogo. E com isto em mente venho trazer este tutorial de Desenvolvimento de Games no Construct 2, no qual vou lhes ensinar a desenvolver um jogo em poucos passos no qual você poderá fazer inclusive na versão gratuita.

<img class="image" src="/assets/images/tutos/construct2/criandoumprojetosimplesnoc2.jpg" alt="Escolha de Template de Construct 2">

Para desenvolver este projeto vamos criar um “Projeto vazio(ou New empty project)” e logo teremos uma tela em branco, clicando duas vezes neste Layout ou Cena aparecera um campo de Criação de Objeto, nele vamos escolher a opção “Sprite”, e vamos escolher algum lugar para colocá-lo em nossa Cena. Com isso feito aparecera um campo de edição de sprite, no qual podemos trabalhar nossas sprites de todo tipo como, por exemplo, nosso personagem que será criado aqui. Mas antes vamos criar um Objeto Wall que será um objeto sólido e nele teremos colisão.

Na área de criação de sprite para começar vamos simplesmente preencher o fundo de forma com uma única cor, como, por exemplo, verde. Apos isso podemos fechar o editor de sprite e o sprite já tera uma arte. Para começarmos a adicionar Física, no caso a colisão, com o objeto selecionado vamos ao campo esquerdo do Construct 2 em “Behaviors”, ao clicar aparecerá um campo “Sprite: Behaviors”, nele clicamos no símbolo de mais(+) e em “Attributes” selecionamos “Solid”. Pronto, agora nosso objeto muro tem colisão pelo simples fato de ele ser um objeto sólido agora. Agora vamos posicionar ele em nosso mapa, simplesmente arrastando ele, aumentando e diminuindo de acordo com sua preferência, também é possível copiar este objeto e colar para criar diversos objetos pois a função de sólido estará aplicada a todos. Um exemplo de uma forma de utilizar é criar um Labirinto como o meu.

<img class="image" src="/assets/images/tutos/construct2/labirintosimplesnoc2.jpg" alt="Level design do Game">

Após criar o nosso level vamos criar o nosso personagem, e para isso vamos seguir os mesmos passos de criação de sprite, vamos clicar duas vezes na cena, adicionar um sprite e desta vez vamos pintar ele de Azul Claro.

<img class="image" src="/assets/images/tutos/construct2/personagemsimplesnoc2.jpg" alt="Criação do Personagem no Editor de Sprites">

Apos isso vamos posicionar ele em nosso level. Após posicionar vamos adicionar a função que deixara nosso game jogável. Vamos ao Behaviors e adicionaremos a função “Plataform”, que transformara nosso sprite em Player. Agora se você apertar o botão de play em seu Construct 2, ele abrira uma aba de navegador e rodará lá seu game e utilizando as setas do teclado será possível movimentar o personagem.

Agora vamos adicionar uma ação que fara com que o nosso personagem olhe para o lado em que estamos caminhando. Basta clicar duas vezes em nossa cena e adicionar o Teclado, isso fara com que inputs(cliques) de teclado funcionem com ações extras. Após adicionar um teclado vamos para o nosso Event Sheet, e vamos criar um evento, escolhemos o objeto Keyboard, depois escolhemos a ação “On key pressed(quando a tecla é pressionada)” e vamos escolher a tecla “Left(esquerda)”, e formara a função “Quando a tecla esquerda é pressionada…” com isso criamos uma ação nesta função no qual selecionamos o “Objeto Player”, vamos em “Apparance” e selecionamos “set mirrored” que fará com que o sprite do nosso player seja espelhado toda vez que alguém pressionar o botão para esquerda.

Agora, caso você pressione para o personagem voltar para direita o olhar dele não seguira, isto acontece pois temos que adicionar uma função que quando não está pressionado ele fica na posição normal e para fazer isso vamos “criar um evento” no qual adicionamos o “Teclado”, “On key pressed” só que desta vez escolhemos a tecla “Rigth(direita)”. Depois disso vamos “adicionar uma ação”, selecionaremos o “objeto Player”, escolhemos “Set mirrored” de novo e desta vez escolhemos o estado do objeto como “Não Espelhado” e pronto, nosso personagem está pronto.

Caso queira fazer um teste você pode criar um outro objeto como de outra cor, posicioná-lo no final do seu level, chamá-lo de Porta, nele você pode atribuir a função “Em colisão” que pode levar a outro Room, mas não vou detalhar isso hoje pois é assunto para outro Tutorial.

Espero que tenham gostado, então compartilhem com os amigos, vai que alguém se interesse em desenvolvimento de games e precise de um empurrãozinho para começar quem sabe isso não o ajude a criar grandes jogos. Você pode assistir a este tutorial em video <a href="https://youtu.be/isX2qv-gUYY">clicando aqui.</a>
