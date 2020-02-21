$(function(){
    $('button').on('click', function(){
        var url="https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=red+flowers&image_type=photo&pretty=true";
        $.ajax({
            datatype:'json',
            url:url,
            succuss: function(datas){
                var result ="";
                datas.hits.forEach(el => {
                  console.log(el);
                    result+=`
                        <div class="card shadow-lg">
                            <div class="card-header">
                                <img src="${el.userImageURL}" style="border-radius:50%" width="50" height="50">
                                ${el.user}
                              </div>
                                <div class="modal-body">
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#db${el.id}">view</button>
                                <img src="${el.largeImageURL}" class="img-fluid">
                                </div>
                            </div>
                            <div class="modal fade" id="db${el.id}">
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                <img src="${el.userImageURL}" style="border-radius:50%" width="50" height="50">
                                ${el.user}
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div class="modal-body">
                                <img src="${el.largeImageURL}" style="border-radius:50%" width="50" height="50">
                                </div>
                              
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    `;
                });
                $('#result').append(result);
            }
        });
    });
});