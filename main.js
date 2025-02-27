$(document).ready(function(){
    console.log(document.querySelector('header button'))
    console.log($('#botao-cancelar'))

    document.querySelector('header button').addEventListener('click', function(e) {
        
    })

    $('header button').click(function(){
        alert('oiie')
    })

    // $('form').submit(function(e){
    //     e.preventDefault();

    //     alert('ok')
    // })

    $('form').on('submit', function(e){
        e.preventDefault();

        alert('ok')
    })


    
})