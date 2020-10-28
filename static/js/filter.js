// Create event listener to tigger myStoreFunction()
var selStore = document.getElementById('store_number');
selStore.onkeyup = function() {myStoreFunction()};

// Define function to filter product name list on user input
function myStoreFunction() {
  
  // Declare variables
  var input = document.getElementById('store_number');
  var filter = input.value.toLowerCase();
  var ul = document.getElementById("storeUL");
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

// Create event listener to tigger myCategoryFunction()
var selCat = document.getElementById('product_category');
selCat.onkeyup = function() {myCategoryFunction()};

// Define function to filter product name list on user input
function myCategoryFunction() {
  
  // Declare variables
  var input = document.getElementById('product_category');
  var filter = input.value.toLowerCase();
  var ul = document.getElementById("catUL");
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






