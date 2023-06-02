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
                data += '</tr>';
            }
        }
        this.Count(this.list_items.length);
        return this.el.innerHTML = data;
    };  

    this.Add = function() {
        el = document.getElementById('add-item');
        var item = el.value;
        if(item) {
            this.list_items.push(item.trim());
            el.value='';
            this.FetchAll();
        }
    };

    this.Edit = function(item) {
        el = document.getElementById('edit-todo');
        el.value = this.list_items[item];
        document.getElementById('edit-box').style.display = 'block';
        self=this;

        document.getElementById('save-edit').onsubmit = function() {
            var task = el.value;
            if(task) {
                self.list_items.splice(item, 1, task.trim());
                self.FetchAll();
                CloseInput();
            }
        }
    };

    this.Delete = function(item) {
        this.list_items.splice(item,1);
        this.FetchAll();
    };

    this.Count = function(counter) {
        var el = document.getElementById('counter');
        var name = 'Tasks';
        if(counter) {
            if(counter == 1) {
                name = 'Task';
            }
            el.innerHTML = counter + ' ' + name;
        }
        else {
            el.innerHTML = "No " + name;
        }
    };

}

app.FetchAll();

function CloseInput() {
    document.getElementById("edit-box").style.display="none";
}