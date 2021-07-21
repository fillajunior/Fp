$(document).ready(function () {
    
    $('.replay').hide();
    $('.replay-forum').hide();
    $('.button-replay').click(function () {
        $('.replay-forum').show()
    });
    $('.button-close').click(function () {
    
        $('.replay-forum').hide()
        $('#replay').val("")
    });
    
    
    
})