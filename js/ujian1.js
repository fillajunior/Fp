$(document).ready(function () {
    $('#subtn').click(function () {
        if($('#Jawaban').val==1) {
            alert ('Jawaban Berhasil Di Upload');
            $('#jawaban1').append('<input type="radio" id="mapel1" class="input-form-chackbox"> <label for ="mapel1" >' + label1 + ' </label>')
            $('#Jawaban').val('')
        }
        else {
            alert('Mohon Isi Jawaban Terlebih Dahulu')
        }
    })
})