$(document).ready(function () {

    $('#btnLogin').click(function () {
        var nim = $('#nim').val() 
        var password = $('#password').val()
        if (nim == '19.11.3105' && password == '12345') {
            location.href = 'dashboard.html'
        } else {
            location.href = 'index.html'
        }
    });
});