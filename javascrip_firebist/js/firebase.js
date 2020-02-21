database.collection('learnfierbase').get().then( (data) =>{
    const table = document.querySelector('table');
    data.forEach(item => {
        table.innerHTML +=`
            <tr>
                <td>${item.data().name}</td>
                <td>${item.data().age}</td>
                <td>
                    <i class="material-icons text-danger" style="cursor:pointer" id="${item.id}"
                        onclick="dellearnfierbase('${item.id}')"
                    >delete</i>
                    <i class="material-icons text-success" style="cursor:pointer" id="${item.id}">edit</i>
                </td>
            </tr>       
        `;
    });
});
function dellearnfierbase(learId) {
    database.collection('learnfierbase').doc(learId).delete();
}


const btnAdd = document.querySelector('button');
btnAdd.addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    database.collection('learnfierbase').add( {
        name: name,
        age : age,
    });
}); 
