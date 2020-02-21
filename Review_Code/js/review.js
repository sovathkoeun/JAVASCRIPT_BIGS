

const inputElemet = document.querySelector('#search');
const listElement = document.querySelector('#list');

document.addEventListener('keyup', event => {
    const toDo = inputElemet.value;
    if(event.key === "Enter"){
        if(toDo){
            addTodo(toDo);
            clearInputFilter();    
        }
    }
});

function addTodo(toDo){
    const items = `
        <li class="item">
            <i class="material-icons">create</i>
            ${toDo}
        </li>
    `;
    listElement.insertAdjacentHTML('beforeend', items);
}

function clearInputFilter(){
    inputElemet.value = "";
}

document.addEventListener('click', () => {
    const toDo = inputElemet.value;
    if(event.key != ""){
        if(toDo){
            addTodo(toDo);
            clearInputFilter();    
        }
})