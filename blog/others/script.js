$(document).ready(function(){

    $('#comment').click(function(){
        var input = $('#input').val();
        $('.box').append(input + '<br>');
        $('#input').val('');
        $('.box-container').slideDown();
    });

});
