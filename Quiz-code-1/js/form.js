$(document).ready(function(){
    $('button').on('click', function() {
        let username = $('#user').val();
        let password = $('#pass').val();
        let email    = $('#email').val();
        if(username == ""){
            error('#user');
        }else{
            success('#user');
        }
        if(password == ""){
            error('#pass');
        }else{
            success('#pass');
        }
        if(email == ""){
            error('#email');
        }else{
            success('#email');
        }
    });
});

function error(e){
    $(e).css('border', '2px solid red');
};
function success(s){
    $(s).css('border', '2px solid green');
};