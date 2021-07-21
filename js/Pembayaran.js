$(document).ready(function(){
    var a;
    var b;
    $('.ItemPembayaran').click(function(){
        cek = $('input[name = "ItemP"]:checked').val();
        item = $('input[name = "ItemP"]:checked').attr('id');
        a = cek;
        $('#Harga').val(cek);
        $('#ItemPembayaran').val(item);
    });

    $('.MetodePembayaran input:radio').click(function() {
        $('.MetodePembayaran input:radio').not(this).prop('checked', false);
        metode = $('input[name = "MetodeP"]:checked').attr('id');
        b = metode;
        $('#MetodePembayaran').val(metode);
    });

    $('button[type="submit"]', '.Konfirm').click(function(){
        if($('#Bukti').val() == ''){
            alert("Bukti Belum diupload");
        }else if(a == null){
            alert("Item Pembayaran Belum Dipilih");
        }else if(b == null){
            alert("Metode Pembayaran Belum Dipilih");
        }else{
            alert("Pembayaran Sedang Di Proses");
            window.location.href = "Pembayaran.html";
        }
    });

    $('.logo').click(function(){
        window.location.href = "Profile.html";
    });
});