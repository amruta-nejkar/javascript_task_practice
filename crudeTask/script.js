var arr = [];

var selectedRow = null;

function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData)
    }
    resetForm();

    }


// Read operation using this function
function readFormData(){
    let formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["email"] = document.getElementById("email").value;
    return formData;
}

// Create operation
function insertNewRecord(data){
    arr.push({
        fullName: data.fullName,
        email: data.email,
        
    });

    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    // var newRow = table.insertRow(table.length);
    arr.map((item,index) => {
        // console.log(item);
        table.innerHTML = `
        <td>${item.fullName}</td>
        <td>${item.email}</td>
        <td>
                <a href="#" onClick='onEdit(${index})'>Edit</a>
                <a href="#" onClick='onDelete(${index})'>Delete</a>
        </td>
        `;
    });   
}

function resetForm(){
    document.getElementById('fullName').value = '';
    document.getElementById('email').value = '';
    selectedRow = null;
}
function updateRecord(formData){

    
}

// function onEdit(td){
//  selectedRow=td.parentElement.parentElement;
// }

function onDelete(td){
  if("are you delete this record?"){
    arr.splice(0,0);
   document.getElementById("employeeList").deleteRow(row.index)
  }
//   resetForm();
}
