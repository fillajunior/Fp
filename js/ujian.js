$(document).ready(function () {
    $('.jadwal_uas').hide()
    $('.jadwal_susulan').hide()
    $('#ujian').change(function () {
        if ($('#ujian').val()==1) {
             $('.jadwal_uts').show()
             $('.jadwal_susulan').hide()
             $('.jadwal_uas').hide()
        } 
        else if ($('#ujian').val()==2) {
             $('.jadwal_uts').hide()
             $('.jadwal_susulan').hide()
             $('.jadwal_uas').show()
        }
        else {
             $('.jadwal_uts').hide()
             $('.jadwal_susulan').show()
             $('.jadwal_uas').hide()
        }
       
    })
})