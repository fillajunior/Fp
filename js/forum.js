$(document).ready(function () {
    
    $('.replay-forum').hide();
    $('.button-replay').click(function () {
        console.log('success')
        $('.replay-forum').show()
    })
    $('.button-close').click(function () {
    
        $('.replay-forum').hide()
    })
})