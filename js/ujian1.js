$(document).ready(function () {
    $('#subtn').click(function () {
        if($('#Jawaban').val() != '') {
            var file = $('#Jawaban').val()
            var name = $('#name').val()
            alert ('Jawaban Berhasil Di Upload');
            $('#jawaban1').append('<div class="card" style="width: 18rem;"> <div class = "card-body" ><h5 class = "card-title" > ' + name + ' </h5> <h6 class = "card-subtitle mb-2 text-muted" > ' + file.substring(12, 100) + ' </h6></div> </div>')
            $('#Jawaban').val('')
        } 
        else {
            alert('Mohon Isi Jawaban Terlebih Dahulu')
        }
    })
})