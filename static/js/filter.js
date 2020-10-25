function myCustomerFunction() {
  var input, filter, table, tr, td, x;
  input = document.getElementById("UserInput");
  filter = input.value.toLowerCase();
  table = document.getElementById("CustomerTable"); 
  tr = table.getElementsByTagName("tr");

  for (x = 0; x < tr.length; x++) {
    td = tr[x].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toLowerCase().indexOf(filter) > -1) {
        tr[x].style.display = "";
      }
      else {
        tr[x].style.display = "none";
      }
    }
  }
}

function myCategoryFunction() {
    var input, filter, table, tr, td, x;
    input = document.getElementById("UserInput");
    filter = input.value.toLowerCase();
    table = document.getElementById("CategoryTable");
    tr = table.getElementsByTagName("tr");
  
    for (x = 0; x < tr.length; x++) {
      td = tr[x].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toLowerCase().indexOf(filter) > -1) {
          tr[x].style.display = "";
        }
        else {
          tr[x].style.display = "none";
        }
      }
    }
  }

function myProductFunction() {
    var input, filter, table, tr, td, x;
    input = document.getElementById("UserInput");
    filter = input.value.toLowerCase();
    table = document.getElementById("ProductTable");
    tr = table.getElementsByTagName("tr");
  
    for (x = 0; x < tr.length; x++) {
      td = tr[x].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toLowerCase().indexOf(filter) > -1) {
          tr[x].style.display = "";
        }
        else {
          tr[x].style.display = "none";
        }
      }
    }
  }

