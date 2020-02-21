$(document).ready(function(){
    var url="https://reqres.in/api/users?page=2";
    $.ajax({
        datatype: 'json',
        url:url,
        success:function(data){
            var result ="";
            data.data.forEach(element => {
                result+=`
                    <tr>
                        <td>${element.first_name}</td>
                        <td>${element.last_name}</td>
                        <td>${element.email}</td>
                        <td>
                            <img src="${element.avatar}" class="img-fluid rounded-circle" width="50">
                        </td>
                    </tr>
                `;
            });
            $('table').append(result);
        }
    });
});