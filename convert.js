$(function(){
    $('#calc').click(function(){
        const cotacao = parseFloat($('#cotacao').val())
        const dolares = parseFloat($('#dolares').val())
        const convercao =  cotacao * dolares
        $('#convercao').val('R$ ' + parseFloat(convercao).toFixed(2))
    })
})