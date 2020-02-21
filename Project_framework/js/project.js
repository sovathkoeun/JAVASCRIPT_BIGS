// $(document).ready( () =>{
//     $('#recipe').on('change', () => {
//         var fruit = $('#recipe').val();
//         choose (fruit);
//     });
// });
// var choose = (data) => {
//     switch(parseInt(data)) {
//         case 1:
//             getApple();
//             break;
//         case 2:
//             getBanana();
//             break;
//         case 3:
//             getCoconut();
//             break;
//     }
// }

// //get apple
// var getApple = () => {
//     var apple = "I love apple ";
//     printOut(apple);
// }
// // get Banana
// var getBanana = () => {
//     var banana = "I love Banana ";
//     printOut(banana);
// }
// //get coconut
// var getCoconut = () => {
//     var coconut = "I love Coconut ";
//     printOut(coconut);
// }
// //print out to HTML
// var printOut = (out) => {
//     $('#done').html(out);
// }

//===============API=======================//

$(document).ready( () => {
    requestAPI();
});

var requestAPI = () => {
    $.ajax( {
        dataType: 'json',
        url: getUrl(),
        success: (data) => getRecipe(data),
        error: () => getError(),
    });
}
var getUrl = () => {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}

// get data 
    var getRecipe = (myData) => {
      myData.recipes.forEach(item => {
        //   console.log(item.ingredients);
        //   recipes : item.name;
        getIngredient(item.ingredients);
      });
    }

// get error
var getError = () => {

}

// get  ingredients

var getIngredient = (ing) => {
    ing.forEach( item => {
        computeHTML(item);
    });
}
// compute html

var computeHTML = (ele) => {
    var result = "";
    result +=`
        <tr>
            <td><img src="${ele.iconUrl}" width="80"></td>
            <td>${ele.quantity}</td>
            <td>${ele.name}</td>
            <td>${ele.unit}</td>
        </tr>
    `;
    printOut(result);
}

// print out to html
var printOut = (out) => {
    $('#ingrediants').append(out);
}
