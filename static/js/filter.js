// function myStoreFunction() {
//   var input, filter, table, tr, td, x;
//   input = document.getElementById("UserInput");
//   filter = input.value.toLowerCase();
//   table = document.getElementById("CustomerTable"); 
//   tr = table.getElementsByTagName("tr");

//   for (x = 0; x < tr.length; x++) {
//     td = tr[x].getElementsByTagName("td")[0];
//     if (td) {
//       if (td.innerHTML.toLowerCase().indexOf(filter) > -1) {
//         tr[x].style.display = "";
//       }
//       else {
//         tr[x].style.display = "none";
//       }
//     }
//   }
// }

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

// Create event listener to tigger myProductFunction()
var selProd = document.getElementById('product_name');
selProd.onkeyup = function() {myProductFunction()};

// Define function to filter product name list on user input
function myProductFunction() {
  
  // Declare variables
  var input = document.getElementById('product_name');
  var filter = input.value.toLowerCase();
  var ul = document.getElementById("productUL");
  var option = ul.getElementsByTagName('option');
  
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < option.length; i++) {
    var txtValue = option[i].textContent || option[i].innerText;
    if (txtValue.toLowerCase().indexOf(filter) > -1) {
      option[i].style.display = "";
    } else {
      option[i].style.display = "none";
    }
  }
  
}






