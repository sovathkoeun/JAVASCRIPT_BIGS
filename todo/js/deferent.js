
// code for cute is function 
if (event.key === "Enter") {
    const isEmpty = InputElement.value;
    if (isEmpty) {
        lists(InputElement.value);
    }
    InputElement.value = "";
};
//for function create call to 
function lists(element) {
const ofList = `
        <li>${element}</li> 
    `;
result.insertAdjacentHTML("beforeend", ofList);
}



// code for short same 

document.addEventListener('keydown', event => {
    if (event.key === "Enter") {
        const isEmpty = InputElement.value;
        if (isEmpty) {
            const ofList = `
            <li class="item">
                <p class="text">${isEmpty}</p>
            </li> 
        `;
         result.insertAdjacentHTML("beforeend", ofList);
        }
        InputElement.value = "";
    }
});


