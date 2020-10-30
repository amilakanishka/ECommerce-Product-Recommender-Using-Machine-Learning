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

