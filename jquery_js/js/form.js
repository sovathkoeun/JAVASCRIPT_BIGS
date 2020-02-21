$(document).ready(function(){
    $('#text').on('keyup', function(){
        var text = $('#text').val();
        $('.alert-success').html(text);
    });
    $('#pass').on('keyup', function(){
        var pass = $('#pass').val();
        $('.alert-warning').html(pass);
    });
    $('#mail').on('keyup', function(){
        var email = $('#mail').val();
        $('.alert-danger').html(email);
    });
    $('.gender').on('click', function(){
        var gender = $('.gender:checked').val();
        $('.alert-secondary').html(gender);
    });
    $('.box').on('click', function(){
       var box = "";
       $('.box:checked').each(function(){
           box += $(this).val() + ",";
           $('.alert-primary').html(box);
       });
    });
    $('#select').on('click', function(){
        var select = $('#select').val();
        $('.alert-info').html(select);
    });
});