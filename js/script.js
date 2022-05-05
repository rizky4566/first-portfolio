
/*
(function() {

})();
*/

// $=jquery 
// event pada saat link di klik

$('.page-scroll').on('click', function(e) {        // jquery tolong carikan saya sebuah elemen yang punya nama kelas 'page-scroll' jika ketemu pada saat dia di klik jalankan fungsi berikut ini 
    // ambil isi href
    var tujuan = $(this).attr('href');

    // tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);

    //pindahkan scroll
    $('html, body').animate({                                 //biar smooth perpindahan menu di navbar nya
        scrollTop: elemenTujuan.offset().top-50         //'-50' buat ngatur pindah nya gak terlalu atas si menu nya yg di klik ex:about
    }, 1000, 'easeInOutExpo');                                             //'300' seerapa cepet perpindahannya, semakin kecil semakin cepet, itungannya milisecond kalo 1000 berarti 1 detik perpindahhanya
    e.preventDefault();
});

//parallax

//about
$(window).on('load', function() {                   //dek: jquery tolong panggilkan saya elemen window pada saat di muat/refresh('load') yang fungsinya paragraf kiri muncul
    $('.pKiri').addClass('pMuncul');                //kalo addClass gaperlu make titik si 'pMuncul'nya, kalo di selector jquerynya baru make titik
    $('.pKanan').addClass('pMuncul');
});


$(window).scroll(function() {                         //dek: jquery tololng carikan saya elemen window lalu ketika di scroll jalankan sebuah fungsi berikut ini
    var wScroll = $(this).scrollTop();               //dek: jquery tolong carikan saya elemen ini/'this'(wScroll=window scroll)

    //jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4.5 +'%)'      //dek: jquery tolong carikan saya elemen .jumbotron img lalu saya akan ubah posisi nya setiap saya scroll halamannya
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });


    //portfolio
    if( wScroll > $('.portfolio').offset().top - 350) {         
        $('.portfolio .thumbnail').each(function(i) {                   //dari bberapapun elemen yg ada 'setiap/each' elemennya akan diberikan sebuah fungsi 
            setTimeout(function() {                                         //setTimeout = kita akan menjalakna sesuatu tapi nunggu dulu beberapa lama
                $('.portfolio .thumbnail').eq(i).addClass('muncul');        //dek: jquery tolong carikan saya 'portfolio' lalu 'thumbnail' lalu tambahin kelas baru(yg ada di css)
            }, 250 * (i+1));                                                  //250ms/0.25 detik, jadi gambarnya muncul satu2 tiap 0.2 detiik
        });                                              
        
    }

});


