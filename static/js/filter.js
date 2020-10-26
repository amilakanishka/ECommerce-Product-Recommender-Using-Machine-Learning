function myStoreFunction() {
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

// function myCategoryFunction() {
//     var input, filter, table, tr, td, x;
//     input = document.getElementById("UserInput");
//     filter = input.value.toLowerCase();
//     table = document.getElementById("CategoryTable");
//     tr = table.getElementsByTagName("tr");
  
//     for (x = 0; x < tr.length; x++) {
//       td = tr[x].getElementsByTagName("td")[0];
//       if (td) {
//         if (td.innerHTML.toLowerCase().indexOf(filter) > -1) {
//           tr[x].style.display = "";
//         }
//         else {
//           tr[x].style.display = "none";
//         }
//       }
//     }
//   }



function myProductFunction() {
    var input, filter, table, selProd, filProd, x;
    input = document.getElementById("inputProduct");
    filter = input.value.toLowerCase();
    table = document.getElementById("productName");
    selProd = table.getElementsByTagName("option");
  
    for (x = 0; x < selProd.length; x++) {
      filProd = selProd[x].getElementsByTagName("option")[0];
      if (filProd) {
        if (filProd.innerHTML.toLowerCase().indexOf(filter) > -1) {
          selProd[x].style.display = "";
        }
        else {
          selProd[x].style.display = "none";
        }
      }
    }
  }

