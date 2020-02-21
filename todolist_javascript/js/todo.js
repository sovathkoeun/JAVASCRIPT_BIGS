
const result = document.querySelector('.java');
const INPUT_ELEMENT = document.querySelector('input');


 document.addEventListener('keydown', event => {   
     if(event.key === "Enter") {   
         let isEmpty = INPUT_ELEMENT.value != "";
         if(isEmpty){
          toDo(INPUT_ELEMENT.value);
         } 
        INPUT_ELEMENT.value = "";
     }
 });
  
 function toDo(todo) {
    const todos = `
        <li>${todo}</li>
    `;
    result.insertAdjacentHTML("beforeend",todos);
 }

 const options = { weekday: 'long', year: "numeric", month: "long" , day: 'mumeric'};
 const today = new Date();
  document.querySelector('h1').innerHTML = today.toLocaleString('ko-KR',options);

// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// const today = new Date();
// document.querySelector('h1').innerHTML = today.toLocaleString('en-us', options);















// let todoList = [
//     {name: "javascript"},
//     {name: "PHP"},
//     {name: "Java"},
//     {name: "CMS"},
//     {name: "PYthon"}
// ];
// todoList.forEach(Element => {
//     const result = document.querySelector('.java');
//     const todo =`
//         <ul>
//            <li> ${Element.name}</li>
//         </ul>
//     `;
//     result.insertAdjacentHTML("beforeend",todo);
// });
//  document.addEventListener('keydown', event => {
//      const input = document.querySelector('input').value;
//      if(event.key === "Enter") {
//        console.log(input);
//        input = "";
//      }
//  });








// todoList.forEach(Element => {
//     var result = document.querySelector('.java');
//     result.innerHTML +=`
//         <ul>
//            <li> ${Element.name}</li>
//         </ul>
//     `;