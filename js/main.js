(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');
    // $('.validate-form .input100').each(function () {
    //     $(this).focus(function () {
    //         hideValidate(this);
    //     });
    // });
    $('#btnLogin').click(function () {
        var check = true;
        var nim = $('#nim').val();
        var password = $('#password').val();
        console.log(password);

        if (nim != '19.11.3105' && password != '12345') {
            
            for (var i = 0; i < input.length; i++) {
                if (validate(nim,password) == false) {
                    showValidate(input[i]);
                    check = false;
                }
            }
        } else {
            alert('Login Success')
            $('.validate-form').attr('action','dashboard.html')
        }

    });

    

    function validate(nim,password) {
        console.log(nim.length)
        if (nim == null && password == nul) {
            return false;
        } else {
            if (nim.length >= 10 && password.length >= 5) {
                return true;
            } else {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

})(jQuery);