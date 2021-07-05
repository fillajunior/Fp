$(document).ready(function () {
    
    $('.replay').hide();
    $('.replay-forum').hide();
    $('.button-replay').click(function () {
        $('.replay-forum').show()
        $('.button-replay').html("Html")
    });
    $('.button-close').click(function () {
    
        $('.replay-forum').hide()
        $('#replay').val("")
    });
    
    $('#matkul1').click(function () {
        if ($(this).is(':checked')) {
            var label1 = $('#label1').text()
            $('#1').hide()
            $('#31').append('<input type="radio" id="mapel1" class="input-form-chackbox"> <label for ="mapel1" >' + label1 + ' </label>')
        } else {

        }
        
        $('#mapel1').click(function () {
            if ($(this).is(':checked')) {
                $('#31').empty()
                $('#1').show()
            } else {
    
            }
    
        });
    });
    $('#matkul2').click(function () {
        if ($(this).is(':checked')) {
            var label2 = $('#label2').text()
            $('#2').hide()
            $('#32').append('<input type="radio" id="mapel2" class="input-form-chackbox"> <label for ="mapel2" >' + label2 + ' </label>')
        } else {

        }
        
        $('#mapel2').click(function () {
            if ($(this).is(':checked')) {
                $('#32').empty()
                $('#2').show()
            } else {
    
            }
    
        });
    });
    $('#matkul3').click(function () {
        if ($(this).is(':checked')) {
            var label3 = $('#label3').text()
            $('#3').hide()
            $('#33').append('<input type="radio" id="mapel3" class="input-form-chackbox"> <label for ="mapel3" >' + label3 + ' </label>')
        } else {

        }
        
        $('#mapel3').click(function () {
            if ($(this).is(':checked')) {
                $('#33').empty()
                $('#3').show()
            } else {
    
            }
    
        });
    });
    $('#matkul4').click(function () {
        if ($(this).is(':checked')) {
            var label4 = $('#label4').text()
            $('#4').hide()
            $('#34').append('<input type="radio" id="mapel4" class="input-form-chackbox"> <label for ="mapel4" >' + label4 + ' </label>')
        } else {

        }
        
        $('#mapel4').click(function () {
            if ($(this).is(':checked')) {
                $('#34').empty()
                $('#4').show()
            } else {
    
            }
    
        });
    });
    $('#matkul5').click(function () {
        if ($(this).is(':checked')) {
            var label5 = $('#label5').text()
            $('#5').hide()
            $('#35').append('<input type="radio" id="mapel5" class="input-form-chackbox"> <label for ="mapel5" >' + label5 + ' </label>')
        } else {

        }
        
        $('#mapel5').click(function () {
            if ($(this).is(':checked')) {
                $('#35').empty()
                $('#5').show()
            } else {
    
            }
    
        });
    });
    $('#matkul6').click(function () {
        if ($(this).is(':checked')) {
            var label6 = $('#label6').text()
            $('#6').hide()
            $('#36').append('<input type="radio" id="mapel6" class="input-form-chackbox"> <label for ="mapel6" >' + label6 + ' </label>')
        } else {

        }
        
        $('#mapel6').click(function () {
            if ($(this).is(':checked')) {
                $('#36').empty()
                $('#6').show()
            } else {
    
            }
    
        });
    });
    $('#matkul7').click(function () {
        if ($(this).is(':checked')) {
            var label7 = $('#label7').text()
            $('#7').hide()
            $('#37').append('<input type="radio" id="mapel7" class="input-form-chackbox"> <label for ="mapel7" >' + label7 + ' </label>')
        } else {

        }
        
        $('#mapel7').click(function () {
            if ($(this).is(':checked')) {
                $('#37').empty()
                $('#7').show()
            } else {
    
            }
    
        });
    });
    $('#matkul8').click(function () {
        if ($(this).is(':checked')) {
            var label8 = $('#label8').text()
            $('#8').hide()
            $('#38').append('<input type="radio" id="mapel8" class="input-form-chackbox"> <label for ="mapel8" >' + label8 + ' </label>')
        } else {

        }
        
        $('#mapel8').click(function () {
            if ($(this).is(':checked')) {
                $('#38').empty()
                $('#8').show()
            } else {
    
            }
    
        });
    });
    
})