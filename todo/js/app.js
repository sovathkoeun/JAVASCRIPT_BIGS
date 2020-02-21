
const dateOfDay = document.querySelector('#date');
const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
let time = new Date();
dateOfDay.innerHTML = new Date().toLocaleDateString('en-US', options);
const timer = time.getMinutes() + ":" + time.getSeconds();

const result = document.querySelector('#list');
const InputElement = document.querySelector('#input');
const check = "fa-check-circle";
const uncheck = "fa-circle-thin";
const line = "lineThrough";
// declear variable Array List
let ArrayList = [];
let id;
let data = localStorage.getItem("todos");
if (data) {
    ArrayList = JSON.parse(data);
    ArrayList.forEach(item => {
        lists(item.name, item.id, item.done, item.trash);
});

} else {
    id = 0;
    ArrayList = [];
}

document.addEventListener('keydown', event => {
    if (event.key === "Enter") {
        const todos = InputElement.value;
        if (todos) {
            lists(todos);
            ArrayList.push({
                name: todos,
                time: timer,
                id: id,
                done: false,
                trash: false,
            });
            id++;
            localStorage.setItem("todos", JSON.stringify(ArrayList));
        }
        InputElement.value = "";
    }
});

function lists(element, isDone, id, trash) {
    const isCheck = isDone ? check : uncheck;
    const lineCross = isDone ? line : "";
    if(trash) return;
    const ofList = `
        <li class="item">
        <i class="fa ${isCheck} co" job="complete" id="${id}"></i>
            <p class="text ${lineCross}">${element} ${timer}</p>
        <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
        </li> 
    `;
    result.insertAdjacentHTML("beforeend", ofList);
}

document.addEventListener('click', event => {
    const element = event.target;
    const elementjob = element.attributes.job.value;
    if(elementjob === "complete") {

    } else if(elementjob === "delete") {
        listElement.removeChild(element.parentNode);
        lists[element.id].trash = true;
    }
});

