$(document).ready(function(){
    var url="https://jsonplaceholder.typicode.com/users";
    $.getJSON(
        
        url,
       function(data){
            var result="";
             data.forEach(element => {
                result+=`
                    <tr>
                        <td>${element.name}</td>
                        <td>${element.email}</td>
                        <td>${element.phone}</td>
                        <td>${element.website}</td>
                    </tr>
                `;
            });
            $('table').append(result);
        }
    );
});