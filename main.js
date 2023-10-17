$(document).ready(function() {

    
    $('#dropdown').click(function() {
        if ($('#dropdown-content').css('display') === 'none') {
            $('#dropdown-content').css('display', 'block');
            $('#arrow').html(
                '<i class="fas fa-angle-up ms-1" style="font-size:18px"></i>'
            );
        } else {
            $('#dropdown-content').css('display', 'none');
            $('#arrow').html(
                '<i class="fas fa-angle-down ms-1" style="font-size:18px"></i>'
            );
        }
    });

    $('.whatsapp').click(function() {

        

        if ($('.popup').css('display') === 'none') {
            $('.whatsapp').html(
                '<img src="images/icon-chat/close.svg" alt="whatsapp">');
            $('.popup').css('display', 'block');
        } else {
            $('.whatsapp').html(
                '<img src="images/icon-chat/whatsapp.svg" alt="whatsapp">');
            $('.popup').css('display', 'none');
        }
    });
    
});
