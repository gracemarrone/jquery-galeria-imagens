$(document).ready(function(){
    // alert ('Olá, usuário');
    // console.log(document.querySelector('header button'))
    // console.log($('#btn-cancelar'));

    const botaoNovaImagem = document.querySelector('header button');

    // // FORMA DE ADICIONAR UM EVENTO NO JAVASCRIPT
    // botaoNovaImagem.addEventListener('click',function(){
    //     console.log('Teste evento click');
    // })

    // FORMAS DE TRABALHAR COM EVENTOS NO JQUERY
    // 1ª FORMA
    $('header button').click(function(){
        //USAREMOS UMA FUNÇÃO DE EXPADINR O FORMULÁRIO
        /* Para usamos o seletor do JQuery "$(elemento que será selecionado)" 
        e a função slideDown que está falando para o formulário desizar para baixo */
        $('form').slideDown();
    })

    $('#btn-cancelar').click(function(){
        //USAREMOS UMA FUNÇÃO DE RECOLHER O FORMULÁRIO
        /* Para usamos o seletor do JQuery "$(elemento que será selecionado)" 
        e a função slideUp que está falando para o formulário desizar para baixo */
        $('form').slideUp();
    })

    // 2ª FORMA
    $('form').on('submit',function(e){
        e.preventDefault();
        const valorLinkImagem = $('#input-link-imagem').val(); // armazenamos o valor do input dentro da variável utilizando o a função val()
        const novoItem = $('<li style="display: none"></li>');
        // o appendTo é utilizado para jogar um valor para dentro de uma tag
        $(`<img src="${valorLinkImagem}">`).appendTo(novoItem);
        $(`<div class="overlay-imagem-link">
                <a href=${valorLinkImagem}" title="Ver imagem em tamanho real" target="_blank">
                Ver imagem em tamanho real
                </a>
        </div>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        // o fadeIn é um tipo de animação podemos determinar quanto tempo irá demorar fadeIn(2000) a imagem irá demorar 2 segundos para carregar
        $(novoItem).fadeIn(2000);
        $('#input-link-imagem').val('');



    })


})