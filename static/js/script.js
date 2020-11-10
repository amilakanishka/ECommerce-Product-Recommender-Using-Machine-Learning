/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 

// When the user scrolls down 50px from the top of the document, resize the header's font size
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("header").style.fontSize = "30px";
//   } else {
//     document.getElementById("header").style.fontSize = "90px";
//   }
// } 

//  Add smooth scrolling on button clicks
function scrollWin() {
  window.scrollTo(0, 800);
}

function hideFunction() {
  var x = document.getElementById("recommend");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}



// ADDITION FOR DEMO DAY

// Filtering cards
// Select Customer
// $(document).ready(function(){
//   $("#myInputID").on("keyup", function() {
//     var value = $(this).val().toLowerCase();
//     $("#customer_ID *").filter(function() {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//     });
//   });
// });

// // Select Category
// $(document).ready(function(){
//   $("#myInputCategory").on("keyup", function() {
//     var value = $(this).val().toLowerCase();
//     $("#product_category *").filter(function() {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//     });
//   });
// });

// // Select Product
// $(document).ready(function(){
//   $("#myInputProduct").on("keyup", function() {
//     var value = $(this).val().toLowerCase();
//     $("#product_name *").filter(function() {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//     });
//   });
// });

// 

// Declare d3 path as variable
var iowaPath4 = `/get_product_category_details`;

// Set global variables
var iowaCat;
var prodCatValue;

// DYNAMIC PRODUCT NAME DROPDOWN MENU
function displayAccordingly() {

  d3.json(iowaPath4)
  .then(data => {iowaCat = data

  // Get selected product category value
  prodCatValue = d3.select('#product_category option:checked').node().value

  // Format string to integer for filtering
  prodCatValue = parseInt(prodCatValue);
  
  // Create the new dropdown menu
  var whereToPut = document.getElementById("product_name");

  // Clear list of options (if any)
  document.querySelectorAll('#product_name option').forEach(option => option.remove())

  // Filter json to product category selected
  var productFilter = iowaCat.filter(element => element.category == prodCatValue);

  // Loop to add list of options
  for (var i = 0; i < productFilter.length; i++) {
    var productOption = document.createElement("option");
    productOption.text = productFilter[i].item_description;
    productOption.value = productFilter[i].item_number;
    whereToPut.add(productOption,whereToPut.options[null]);
    };
  });
}

// <!-- {% for r in prodDetailList %}
// <option value="{{ r['item_number'] }}">{{ r['item_description'] }}</option>
// {% endfor %} -->
