$(document).ready(function () {
    console.log(document.querySelector('header button'))
    console.log($('#botao-cancelar'))

    document.querySelector('header button').addEventListener('click', function (e) {

    })

    $('header button').click(function () {
        $('form').slideDown()
        // $(“seletor”).fadeIn()
        //     .fadeOut()
        //     .slideUp()
        //     .slideDown()
        //     .slideToggle()
        //     .show()
        //     .hide()
        //     .toggle()
    })
    $('#botao-cancelar').click(function () {
        $('form').slideUp()
    })

    // $('form').submit(function(e){
    //     e.preventDefault();

    //     alert('ok')
    // })

    $('form').on('submit', function (e) {
        e.preventDefault();

        const enderecoNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display:none;"></li>');
        $(`<img src='${enderecoNovaImagem}' />`).appendTo(novoItem);
        $(`<div class='overlay-images-links'/>
            <a href='${enderecoNovaImagem}' target='_blank' title='Ver imagem em tamanho real'>
                Ver imagem em tamanho real
            </a>
        </div>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('')
    });



})