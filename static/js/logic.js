d3.select("#submit").on("click", handleSubmit);

function handleSubmit() {
  // Prevent the page from refreshing
  d3.event.preventDefault();



// RECOMMENDER FUNCTION HERE
// Iowa file path
var iowaPath = "../static/data/iowa.csv" 
d3.csv(iowaPath)
  .then(data => {var iowaList = data;
  console.log("iowaList");
  console.log(iowaList);

  // TEMP ONLY - replace with recommender data later
  // Place 8 products for now *** can change
  for (i = 0; i < 8; i++) {
    // Get data and insert into variable
    var imageUrl = iowaList[i].image_url;
    var productName = iowaList[i].item_description;
    // Create container div for product detail
    var containerDiv = document.createElement('div');
    containerDiv.className = 'container';
    
    // // Create row div
    // var rowDiv = document.createElement('div');
    // rowDiv.className = 'row';
    
    // DIV FOR PRODUCT LISTING
    // Create div for bootstrap
    var bootstrapDivLeft = document.createElement('div');
    bootstrapDivLeft.id = 'insertProductHere';
    bootstrapDivLeft.className = 'col-mx-4';
    // Create img for product image
    var productImg = document.createElement('img');
    productImg.src = imageUrl;
    // Create h3 for product name
    var titleH3 =  document.createElement('h3');
    titleH3.innerText = productName;
    
    // Append child
    // containerDiv.appendChild(rowDiv);
    // rowDiv.appendChild(bootstrapDivLeft);
    containerDiv.appendChild(bootstrapDivLeft);
    bootstrapDivLeft.appendChild(productImg);
    bootstrapDivLeft.appendChild(titleH3);
    
    // Then append the whole thing onto the recommend-product section
    document.getElementById('recommend-product').appendChild(containerDiv);
  }
  })

// document.querySelector(document).ready(function(){
//   document.querySelector("#product_name").addEventListener("keyup", function() {
//     var value = document.querySelector(this).value.toLowerCase();
//     document.querySelector("#prodDiv *").filter(function() {
//       document.querySelector(this).toggle(document.querySelector(this).text().toLowerCase().indexOf(value) > -1)
//     });
//   });
// })
}
