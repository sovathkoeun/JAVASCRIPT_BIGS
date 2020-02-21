$(document).ready(function(){
    var url ="https://reqres.in/api/users?page=2";
    $.ajax({
        datatype: 'json',
        url:url,
        success: function(data) {
            var result = "";
            data.data.forEach(el => {
                result +=`
                    <tr>
                        <td>${el.first_name}</td>
                        <td>${el.last_name}</td>
                        <td>${el.email}</td>
                        <td>
                             <img src="${el.avatar}" class="img-fluid rounded-circle" width="50">
                        </td>
                    </tr>
                `;
            });
            $('table').append(result);
        }
    });
});