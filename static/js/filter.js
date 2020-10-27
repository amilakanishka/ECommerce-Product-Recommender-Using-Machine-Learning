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


selProd.onkeyup = function() {myProductFunction()};

function myProductFunction() {
  
  // Declare variables
  var input, filter, div, option, i, txtValue;
  input = document.getElementById('product_name');
  filter = input.value.toLowerCase();
  ul = document.getElementById("productUL");
  option = div.getElementsByTagName('option');
  
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < option.length; i++) {
    txtValue = option[i].textContent || option[i].innerText;
    if (txtValue.toLowerCase().indexOf(filter) > -1) {
      option[i].style.display = "";
    } else {
      option[i].style.display = "none";
    }
  }
  
}




