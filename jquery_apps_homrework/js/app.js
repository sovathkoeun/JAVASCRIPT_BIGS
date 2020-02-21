$(document).ready(function(){
    fb.collection('homework').get().then( (snapshot) => {
        var result = "";
        snapshot.forEach(item => {
            console.log(item);
            result+=`
                <div class="card shadow-lg mt-4">
                    <div class="card-header">
                        <img src="${item.data().profile}" style="border-radius:50%" width="50" height="50">
                        ${item.data().name}
                        <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#myModal${item.id}">View</button>
                        </di>
                        <div class="modal-body">
                       <img src="${item.data().post}" class="img-fluid">
                       <div class="modal-footer">
                       <button type="button" class="btn btn-danger float-right" onclick="deletepicture('${item.id}')" type="button">Delete</button>
                     </div>
                      </div>
                      
                      <div class="modal fade" id="myModal${item.id}">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                            <img src="${item.data().profile}" style="border-radius:50%" width="50" height="50">
                            ${item.data().name}
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            
                            <div class="modal-body">
                              <img src="${item.data().post}" class="img-fluid">
                            </div>
                                                
                          </div>
                        </div>                     
                    </div>
                </div>
            `;
        });
        $('#result').append(result);
    });
    $(document).ready(function() {
        $('button').on('click', function() {
            var name       = $('#name').val();
            var profile    = $('#frofile').val();
            var post       = $('#post').val();
            var text       = $('#text').val();
    
            fb.collection('homework').add( {
                name : name,
                profile : profile,
                post : post,
                text : text,
    
            });
        });
    });
});
function Deletepicture(pId){
    fb.collection('homework').doc(pId).Delete();
}