function addStudent() {
  // 取得表單中輸入的學生資料
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;

if (name!=""&&phone!=""&&email!=""){
    // 建立一個新的表格列，並填入學生資料
    var table = document.getElementById("studentTable");
    var newRow = table.insertRow(-1);
    var nameCell = newRow.insertCell(0);
    var phoneCell = newRow.insertCell(1);
    var emailCell = newRow.insertCell(2);
    var actionCell = newRow.insertCell(3);
    nameCell.innerHTML = name;
    phoneCell.innerHTML = phone;
    emailCell.innerHTML = email;
    actionCell.innerHTML = "<button type='button' onclick='editStudent(this)'>編輯</button> <button type='button' onclick='deleteRow(this)'>刪除</button>";


    // 清空表單中的輸入欄位
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
}else{
	alert("請輸入完整資料！");
}

}

function deleteRow(row) {
  var i = row.parentNode.parentNode.rowIndex; // 取得欲刪除的列索引
  document.getElementById("studentTable").deleteRow(i); // 在表格中刪除該列
}

function editStudent(button) {
  var row = button.parentNode.parentNode;
  var cells = row.querySelectorAll("td:not(:last-of-type)");

  cells.forEach(function(cell) {
    cell.setAttribute("contenteditable", true);
  });

  button.innerText = "儲存";
  button.onclick = function() {
    cells.forEach(function(cell) {
      cell.removeAttribute("contenteditable");
    });
    button.innerText = "編輯";
    button.onclick = function() {
      editStudent(button);
    }
  };
}
