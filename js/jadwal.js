$(document).ready(function () {
    $('.jadwal_praktikum').hide()
    $('#jk').change(function () {
        if ($('#jk').val()==1) {
             $('.jadwal_teori').show()
             $('.jadwal_praktikum').hide()
        } else {
             $('.jadwal_teori').hide()
             $('.jadwal_praktikum').show()
        }
       
    })
})