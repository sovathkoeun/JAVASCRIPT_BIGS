$(document).ready(function(){
    $('#result').on('click', function(){
        var username = $('#user').val();
        var password = $('#pass').val();
        (username != "") ? setSucces('user'):setError('user');
        (password != "") ? setSucces('pass'):setError('pass');
    });
});
function setSucces (s){
    $('#' + s).addClass('border-success').removeClass('border-danger');
}
function setError(e){
    $('#' + e).addClass('border-danger').removeClass('border-success');
}