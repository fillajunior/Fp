$(document).ready(function () {
    
    $('.replay').hide();
    $('.replay-forum').hide();
    $('.button-replay').click(function () {
        $('.replay-forum').show()
        $('.button-replay').html("Html")
    })
    $('.button-close').click(function () {
    
        $('.replay-forum').hide()
        $('#replay').val("")
    })
})