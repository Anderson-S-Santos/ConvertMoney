$(function(){
    $('#calc').click(function(){
        const cotacao = parseFloat($('#cotacao').val())
        const dolares = parseFloat($('#dolares').val())
        const real =  cotacao * dolares
        $('#real').val()
    })
})