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
//   $('#buts1').click(function(){
//  if ($('#jawabanuts1').val()==''){
//           alert("Mohon Isi jawaban Terlebih Dahulu")
//      }
//      else {
//        alert("File Jawaban UTS Berhasil Diupload");
//        $('#jawabanuts1').val('')   
//      }
// });
//   $('#buts2').click(function(){
//  if ($('#jawabanuts2').val()==''){
//           alert("Mohon Isi jawaban Terlebih Dahulu")
//      }
//      else {
//        alert("File Jawaban UTS Berhasil Diupload");
//        $('#jawabanuts2').val('')   
//      }
// });
//   $('#buts3').click(function(){
//  if ($('#jawabanuts3').val()==''){
//           alert("Mohon Isi jawaban Terlebih Dahulu")
//      }
//      else {
//        alert("File Jawaban UTS Berhasil Diupload");
//        $('#jawabanuts3').val('')   
//      }
// });
//   $('#buts4').click(function(){
//  if ($('#jawabanuts4').val()==''){
//           alert("Mohon Isi jawaban Terlebih Dahulu")
//      }
//      else {
//        alert("File Jawaban UTS Berhasil Diupload");
//        $('#jawabansusulan4').val('')   
//      }
// });


//  $('#buas1*').click(function(){
//  if ($('#jawabansusulan*').val()==''){
//           alert("Mohon Isi jawaban Terlebih Dahulu")
//      }
//      else {
//        alert("File Jawaban UAS Berhasil Diupload");
//        $('#jawabansusulan*').val('')   
//      }
// });


// $('#bus1*').click(function(){
//      if ($('#jawabansusulan*').val()==''){
//           alert("Mohon Isi jawaban Terlebih Dahulu")
//      }
//      else {
//        alert("File Jawaban Ujian Susulan Berhasil Diupload");
//        $('#jawabansusulan*').val('')   
//      }
 
// });

})

