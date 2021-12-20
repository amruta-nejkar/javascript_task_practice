// map insert
// delete splice

var arr = [];

var selectedRow = null;

function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData,selectData)
    }
    resetForm();

}

// Read operation using this function
function readFormData(){
    return {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
    };
}

// Create operation
function insertNewRecord(data){
    var table = document.getElementById("employeeList");
    arr.push({
        id: arr.length,
        fullName: data.fullName,
        email: data.email   
    });
    var newRow = table.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = arr.length;
    cell2.innerHTML = data.fullName;
    cell3.innerHTML = data.email;
    cell4.innerHTML = `<a href="#" id=${arr.length} onClick='onEdit(this)'>Edit</a><a href="#" onClick='onDelete(this)'>Delete</a>`;

// arr.map((item, key) => {
//     });  
       
    // console.log(item);
    //     table.innerHTML = `
    //     <td>${item.id}</td>
    //     <td>${item.fullName}</td>
    //     <td>${item.email}</td>
    //     <td>
    //             <a href="#" id=${item.id} onClick='onEdit(this)'>Edit</a>
    //             <a href="#" onClick='onDelete(this)'>Delete</a>
    //     </td>
    //     `;
}

function resetForm(){
    document.getElementById('fullName').value = '';
    document.getElementById('email').value = '';
    selectedRow = null;
}

function onEdit(td){
   console.log(td.parentElement.parentElement.children);
   document.getElementById("fullName").value = td.parentElement.parentElement.children[1].innerHTML;
   document.getElementById("email").value = td.parentElement.parentElement.children[2].innerHTML;
   selectedRow = td.parentElement.parentElement;
}

function onDelete(td){
    //   if(""){
    //     arr.splice(0,1);
    //     resetForm();
    //   }
    var table = document.getElementById("employeeList");
    table.deleteRow(td.parentNode.parentNode.rowIndex);
}

const updateRecord = (formData, selectData) =>{
    // selectData.children[0].innerHTML = formData.id
    selectData.children[1].innerHTML = formData.fullName
    selectData.children[2].innerHTML = formData.email
    console.log(selectData, formData) 
}