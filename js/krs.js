$(document).ready(function () {
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

    $('#semester').change(function () {
        var tahun = $('#tahun').val()
        var semester = $('#semester').val()

        pilihan(tahun, semester)
    })
    $('#tahun').change(function () {
        var tahun = $('#tahun').val()
        var semester = $('#semester').val()

        pilihan(tahun,semester)
        
    })
    function pilihan(tahun,semester) {
            
        if (tahun == 1 && semester == 1) {
            $('#bodykartu').empty()
            $('#bodykartu').append([
                '<tr><th scope="row" class="text-center">1</th> <td>ST001 </td><td>PENDIDIKAN PANCASILA <br><i> PANCASILA EDUCATION</i></td><td>2</td><td>B</td> </tr>',
                '<tr><th scope="row" class="text-center">2</th> <td>ST002 </td><td>PENDIDIKAN AGAMA <br><i> RELIGION EDUCATION</i></td><td>2</td><td>B</td> </tr>',
                '<tr><th scope="row" class="text-center">3</th> <td>ST008 </td><td>BAHASA INGGRIS I <br><i> ENGLISH I</i></td><td>2</td><td>A</td> </tr>',
                '<tr><th scope="row" class="text-center">4</th> <td>ST011 </td><td>MANAJEMEN UMUM <br><i> GENERAL MANAGEMENT</i></td><td>2</td><td>B</td> </tr>',
                '<tr><th scope="row" class="text-center">5</th> <td>ST068 </td><td>ALGORITMA DAN PEMROGRAMAN <br><i> ALGORITHM AND PROGRAMMING</i></td><td>4</td><td>A</td> </tr>',
                '<tr><th scope="row" class="text-center">6</th> <td>ST070 </td><td>ETIKA PROFESI <br><i> PROFESSION ETHICS</i></td><td>2</td><td>A</td> </tr>',
                '<tr><th scope="row" class="text-center">7</th> <td>ST081 </td><td>LOGIKA INFORMATIKA <br><i> LOGIC INFORMATIC</i></td><td>2</td><td>B</td> </tr>',
                '<tr><th scope="row" class="text-center">8</th> <td>ST092 </td><td>ALJABAR LINIER DAN MATRIKS <br><i> LINEAR ALGEBRA AND MATRICS</i></td><td>2</td><td>B</td> </tr>',
                '<tr><th scope="row" class="text-center">9</th> <td>ST092 </td><td>KALKULUS <br><i> CALCULUS</i></td><td>2</td><td>B</td> </tr>',
                '<tr><th scope="row" class="text-center">10</th> <td>ST038 </td><td>FOTOGRAFI <br><i> PHOTOGRAPHY</i></td><td>2</td><td>A</td> </tr>',
                '<tr><th scope="row" class="text-center">11</th> <td>ST039 </td><td>PENGANTAR ILMU KOMPUTER <br><i> INTRODUCTION TO COMPUTER SCIENCE</i></td><td>2</td><td>B</td> </tr>',
            ])
        } else if (tahun == 1 && semester == 2) {
            $('#bodykartu').empty()
            $('#bodykartu').append([
                '<tr><th scope="row" class="text-center">1</th> <td>ST013 </td><td>LINGKUNGAN BISNIS <br><i> BUSINESS ENVIRONMENT</i></td><td>2</td><td>A</td> </tr>',
                '<tr><th scope="row" class="text-center">2</th> <td>ST014 </td><td>KOMUNIKASI DATA<br><i> DATA COMMUNICATION</i></td><td>4</td><td>A</td> </tr>',
                '<tr><th scope="row" class="text-center">3</th> <td>ST015 </td><td>STRUKTUR DATA <br><i> DATA STRUCTURES</i></td><td>4</td><td>A</td> </tr>',
                '<tr><th scope="row" class="text-center">4</th> <td>ST016 </td><td>BAHASA INGGRIS II <br><i> ENGLISH II</i></td><td>2</td><td>A</td> </tr>',
                '<tr><th scope="row" class="text-center">5</th> <td>ST019 </td><td>SISTEM OPERASI <br><i> OPERATING SYSTEMS</i></td><td>4</td><td>A</td> </tr>',
                '<tr><th scope="row" class="text-center">6</th> <td>ST021 </td><td>PEMROGRAMAN <br><i> PROGRAMMING</i></td><td>2</td><td>A</td> </tr>',
                '<tr><th scope="row" class="text-center">7</th> <td>ST094 </td><td>ORGANISASI & ARSITEKTUR KOMPUTER <br><i> COMPUTER ORGANIZATION & ARCHITECTUR</i></td><td>2</td><td>A</td> </tr>',
                '<tr><th scope="row" class="text-center">8</th> <td>ST123 </td><td>HARDWARE/ SOFTWARE I <br><i> HARDWARE/ SOFTWARE I</i></td><td>4</td><td>B</td> </tr>',
            ])
        } else if (tahun == 2 && semester == 1) {
            $('#bodykartu').empty()
            $('#bodykartu').append([
                '<tr><th scope="row" class="text-center">1</th> <td>ST022 </td><td>SISTEM BASIS DATA <br><i> DATABASE SYSTEM</i></td><td>4</td><td>A</td> </tr>',
                '<tr><th scope="row" class="text-center">2</th> <td>ST023 </td><td>MATEMATIKA DISKRET<br><i> DISCRETE MATHEMATICS</i></td><td>2</td><td>A</td> </tr>',
                '<tr><th scope="row" class="text-center">3</th> <td>ST024 </td><td>BAHASA INGGRIS III <br><i> ENGLISH III</i></td><td>2</td><td>B</td> </tr>',
                '<tr><th scope="row" class="text-center">4</th> <td>ST029 </td><td>KOMPUTER GRAFIS <br><i> COMPUTER GRAPHICS</i></td><td>2</td><td>A</td> </tr>',
                '<tr><th scope="row" class="text-center">5</th> <td>ST046 </td><td>INTERAKSI MANUSIA DAN KOMPUTER <br><i> HUMAN COMPUTER INTERACTION</i></td><td>2</td><td>A</td> </tr>',
                '<tr><th scope="row" class="text-center">6</th> <td>ST073 </td><td>JARINGAN KOMPUTER <br><i> COMPUTER NETWORKS</i></td><td>4</td><td>A</td> </tr>',
                '<tr><th scope="row" class="text-center">7</th> <td>ST095 </td><td>MULTIMEDIA <br><i> COMPUTER MULTIMEDIA</i></td><td>2</td><td>A</td> </tr>',
                '<tr><th scope="row" class="text-center">8</th> <td>ST021 </td><td>PEMROGRAMAN LANJUT <br><i> ADVANCED PROGRAMMING</i></td><td>4</td><td>A</td> </tr>',
                '<tr><th scope="row" class="text-center">9</th> <td>ST025 </td><td>PRAKTIKUM HARDWARE/ SOFTWARE II <br><i>PRAKTIKUM  HARDWARE/ SOFTWARE II</i></td><td>2</td><td>A</td> </tr>',
            ])
        } else if (tahun == 2 && semester == 2) {
            $('#bodykartu').empty()
            $('#bodykartu').append([
                '<tr><th scope="row" class="text-center">1</th> <td>ST035 </td><td>SISTEM INFORMASI MANAJEMEN <br><i> MANAGEMENT INFORMATION SYSTEMS</i></td><td>2</td><td>A</td> </tr>',
                '<tr><th scope="row" class="text-center">2</th> <td>ST082 </td><td>KECAKAPAN ANTAR PERSONALT<br><i> INTERPERSONAL SKILL</i></td><td>2</td><td>A</td> </tr>',
                '<tr><th scope="row" class="text-center">3</th> <td>ST084 </td><td>PEMROGRAMAN WEB <br><i> WEB PROGRAMMING</i></td><td>4</td><td>A</td> </tr>',
                '<tr><th scope="row" class="text-center">4</th> <td>ST091 </td><td>ANALISIS DESAIN SISTEM INFORMASI <br><i> INFORMATION SYSTEM ANALYSIS AND DESIGN</i></td><td>4</td><td>A</td> </tr>',
                '<tr><th scope="row" class="text-center">5</th> <td>ST116 </td><td>PEMROGRAMAN BASIS DATA <br><i> DATABASE PROGRAMMING</i></td><td>4</td><td>A</td> </tr>',
                '<tr><th scope="row" class="text-center">6</th> <td>ST121 </td><td>STATISTIK <br><i> STATISTICS</i></td><td>4</td><td>A</td> </tr>',
                '<tr><th scope="row" class="text-center">7</th> <td>ST129 </td><td>RISET OPERASI <br><i> OPERATION RISET</i></td><td>2</td><td>A</td> </tr>',
                '<tr><th scope="row" class="text-center">8</th> <td>ST140 </td><td>E-BISNIS <br><i> E-BISNIS</i></td><td>2</td><td>A</td> </tr>',
            ])
        }else {
            $('#bodykartu').empty()
            alert('Nothing')
        }
    }

});