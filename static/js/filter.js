// // Create event listener to tigger myStoreFunction()
// var selStore = document.getElementById('store_number');
// selStore.onkeyup = function() {myStoreFunction()};

// // Define function to filter product name list on user input
// function myStoreFunction() {
  
//   // Declare variables
//   var input = document.getElementById('store_number');
//   var filter = input.value.toLowerCase();
//   var ul = document.getElementById("storeUL");
//   var option = ul.getElementsByTagName('option');
  
//   // Loop through all list items, and hide those who don't match the search query
//   for (i = 0; i < option.length; i++) {
//     var txtValue = option[i].textContent || option[i].innerText;
//     if (txtValue.toLowerCase().indexOf(filter) > -1) {
//       option[i].style.display = "";
//     } else {
//       option[i].style.display = "none";
//     }
//   }
// }

// // Create event listener to tigger myCategoryFunction()
// var selCat = document.getElementById('product_category');
// selCat.onkeyup = function() {myCategoryFunction()};

// // Define function to filter product name list on user input
// function myCategoryFunction() {
  
//   // Declare variables
//   var input = document.getElementById('product_category');
//   var filter = input.value.toLowerCase();
//   var ul = document.getElementById("catUL");
//   var option = ul.getElementsByTagName('option');
  
//   // Loop through all list items, and hide those who don't match the search query
//   for (i = 0; i < option.length; i++) {
//     var txtValue = option[i].textContent || option[i].innerText;
//     if (txtValue.toLowerCase().indexOf(filter) > -1) {
//       option[i].style.display = "";
//     } else {
//       option[i].style.display = "none";
//     }
//   }
// }

// // Create event listener to tigger myProductFunction()
// var selProd = document.getElementById('product_name');
// selProd.onkeyup = function() {myProductFunction()};

// // Define function to filter product name list on user input
// function myProductFunction() {
  
//   // Declare variables
//   var input = document.getElementById('product_name');
//   var filter = input.value.toLowerCase();
//   var ul = document.getElementById("productUL");
//   var option = ul.getElementsByTagName('option');
  
//   // Loop through all list items, and hide those who don't match the search query
//   for (i = 0; i < option.length; i++) {
//     var txtValue = option[i].textContent || option[i].innerText;
//     if (txtValue.toLowerCase().indexOf(filter) > -1) {
//       option[i].style.display = "";
//     } else {
//       option[i].style.display = "none";
//     }
//   }
  
// }

// RECOMMENDER FUNCTION HERE

// Set global variable
var iowaList;

// If read from csv
// var iowaPath = "../static/data/iowa.csv" 
// d3.csv(iowaPath)
//   .then(data => {var iowaList = data;

// If read from Heroku json
// Iowa file path
// var iowaPath = `/get_recommendations_for_product_selection/${productSelection}`;
var iowaPath = `/get_recommendations_for_product_selection/966136`;

d3.json(iowaPath)
  .then(data => {iowaList = data; 

  console.log("iowaList");
  console.log(iowaList);
  
  // TEMP ONLY - replace with recommender data later
  // Place 8 products for now *** can change
  for (i = 0; i < 8; i++) {

    // Get data and insert into variable
    var imageUrl = iowaList[i].image_url; // for image url
    var productName = iowaList[i].item_description; // for product name
    var productNo = iowaList[i].item_number; // for product number
    var categoryName = iowaList[i].category_name; // for category name
    var categoryNo = iowaList[i].category; // for category number
    var price = iowaList[i].price; // for price
    var volume = iowaList[i].volume; // for volume

    // Create container div for product detail
    var containerDiv = document.createElement('div');
    containerDiv.className = 'containerProd';

    // DIV FOR PRODUCT LISTING
    // Create div for bootstrap
    var bootstrapDivLeft = document.createElement('div');
    bootstrapDivLeft.id = 'insertProductHere';
    // bootstrapDivLeft.className = 'col-md-3';

    // Create img for product image
    var productImg = document.createElement('img');
    productImg.src = imageUrl;

    // Create h5 for product name
    var titleH5 =  document.createElement('h5');
    titleH5.id = productNo;
    titleH5.innerText = productName;

    // Create ul for product category
    var categoryUl =  document.createElement('p');
    categoryUl.id = categoryNo;
    categoryUl.innerText = categoryName;

    // Create ul for price
    var priceUl =  document.createElement('p');
    priceUl.innerText = `$${price.toFixed(2)}`;
  
    // Create ul for volume
    var volumeUl =  document.createElement('p');
    volumeUl.innerText = `${volume} ml`;

    // Append child
    containerDiv.appendChild(bootstrapDivLeft);
    bootstrapDivLeft.appendChild(productImg);
    bootstrapDivLeft.appendChild(titleH5);
    bootstrapDivLeft.appendChild(categoryUl);
    bootstrapDivLeft.appendChild(priceUl);
    bootstrapDivLeft.appendChild(volumeUl);

    // Then append the whole thing onto the recommend-product section
    document.getElementById('recommend-product').appendChild(containerDiv);

  }
  
  })

