$(document).ready(function () {
    console.log(document.querySelector('header button'))
    console.log($('#botao-cancelar'))

    document.querySelector('header button').addEventListener('click', function (e) {

    })

    $('header button').click(function () {
        $('form').fadeIn()
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
        $('form').fadeOut()
    })

    // $('form').submit(function(e){
    //     e.preventDefault();

    //     alert('ok')
    // })

    $('form').on('submit', function (e) {
        e.preventDefault();

        alert('ok')
    })



})