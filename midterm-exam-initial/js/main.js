// get all element from html code
const addButtonClick = document.querySelector("#btn-add");
const filterButtonClick = document.querySelector("#btn-filter");
const addInput = document.querySelector("#add");
const filterInput = document.querySelector("#filter");
const get_ul = document.querySelector(".food");
const get_icon = "create";

// click add button, it will show input fild for add item
addButtonClick.addEventListener("click", () => {
    setActive();
    addItem();
    clearInput();
});

// click filter button, it will show input fild for search item that you added
filterButtonClick.addEventListener("click", () => {
    setActive();
})
document.addEventListener("keyup", event => {
    if(event.code === "Enter"){
        addItem();
        clearInput();
    }
});

/**
 * @function setActive
 * @param {*} element 
 * @description this function use for set active color to element
 */
function setActive(){
    addButtonClick.classList.add("active");
    filterButtonClick.classList.add("active");
    addInput.style.display = "block";
    filterInput.style.display = "block";
}

// add infomation or item into my form
function addItem(){
    let inputValue = addInput.value;
    let htmlCode = "";
    if(inputValue != ""){
        htmlCode += `
            <li><i class="material-icons">
                ${get_icon}</i> ${inputValue}
            </li>
        `;
    }
    get_ul.insertAdjacentHTML("beforeend", htmlCode);
}

// clearInput
// description this function use to clear text from add input
function clearInput(){
    addInput.value = ""; 
}
