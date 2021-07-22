
$(document).ready(function () {
    // var _url = 'http://localhost/restapi/api/';
    $('.jadwal_praktikum').hide()
    $('#jk').change(function () {
        if ($('#jk').val()==1) {
             $('.jadwal_teori').show()
            //  $.ajax({
            //         dataType: 'text',
            //         type: 'get',
            //         contentType: 'application/x-www-form-urlencoded',
            //          url: _url + 'jadwalteori',
            //      success: function (hasil) {
            //          $.each(hasil.data, function (index, data) {
            //              var id = 1
            //              $('#jadwalteori_body').append('<tr data-href="jadwal1.html"> <td > ' + id + ' </td> <td > Senin </td> <td > 7.00 - 7.40 </td> <td > 05.04 .06 </td> <td > Analisis Desain Sistem Informasi </td> <td > 19 IF 08 </td> <td > Ainul Yaqin, M.Kom </td> </tr>')
            //              id++
            //          });
            //      }
            //  });
             $('.jadwal_praktikum').hide()
        } else {
             $('.jadwal_teori').hide()
             $('.jadwal_praktikum').show()
        }
       
    });

    

    $('tr[data-href]').click(function () {
        document.location = $(this).data('href');
        $('#jk').empty()
        $('#ujian').empty()
    });
})