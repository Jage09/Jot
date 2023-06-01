var app = new function() {
    this.el = document.getElementById("list_items");
    this.list_items=[]

    this.FetchAll = function() {
        var data="";

        //check to see if list is empty, if not then iterate through and show data        
        if(this.list_items.length > 0) {
            for(i = 0; i < this.list_items.length; i++){
                data += '<tr>';
                data += '<td>' + (i+1) + '. ' + this.list_items[i] +  '</td>';
                data += '<td><button onclick="app.Edit('+i+')"class="btn btn-warning">Edit</button></td> ';
                data += '<td><button onclick="app.Delete('+i+')"class="btn btn-danger">Delete</button></td> ';
            }
        }
        this.Count(this.list_items.length);
        return this.el.innerHTML = data
    };  

    this.Add = function() {

    };

    this.Edit = function(item) {

    };

    this.Delete = function(item) {

    };

    this.Count = function(counter) {

    };

}

app.FetchAll();

function CloseInput() {
    document.getElementById("edit-box").style.display="none";
}