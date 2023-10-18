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
                '<i class="bi bi-x" style="font-size:33px;"></i>');
            $('.popup').css('display', 'block');
        } else {
            $('.whatsapp').html(
                '<i class="bi bi-whatsapp mt-1" style="font-size: 25px;"></i>');
            $('.popup').css('display', 'none');
        }
    });
    
});
