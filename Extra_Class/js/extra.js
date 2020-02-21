// function getHtmlCode() {
//     var htmlCode = "";
    
//     htmlCode += `<img src="images/image01.png" width="130"> `;
//     htmlCode += `<img src="images/image02.jpg" width="200"> `;
//     htmlCode += `<img src="images/image3.png" width="120"> `;
//     htmlCode += `<img src="images/myImage4.jpg" width="120"> `;
//     htmlCode += `<img src="images/the5.jpg" width="100"> `;
    
//     return htmlCode;
//     }

    function getHtmlCode() {
        var htmlCode = "";
        var arrayImages = ["image01.png", "image02.png", "image03.png", "myImage4.jpg", "the5.jpg"];
        var arraySize = [130, 200,120, 120,100];
        for(let i = 0; i < arrayImages.length; i++){
            arraySize = arrayImages[i];
        htmlCode += `<img src="images/${arrayImages[i]}" width="${arraySize}"> `;
        }
        return htmlCode;
    }