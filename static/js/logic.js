d3.select("#submit").on("click", handleSubmit);
// var myMap = null;

function handleSubmit() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input value from the form
  var customerSelection = d3.select("#customer_name").node().value;
  var productSelection = d3.select("#product_category").node().value;
  var productName = d3.select("#product_name").node().value;

  var url = `/get_recommendations/${customerSelection}/${productSelection}/${productName}`;
  d3.json(url).then(function(data) {
    renderProdRecTable(data,customerSelection,productSelection,productName);
  });
}

// Rendering the machine learned products XXXXXXXXX fix line 23 and 24
function renderProdRecTable(prodListing){
  d3.select("#recommend-product").selectAll("div").remove();
  var url = `/get_recommendations/${customerSelection}/${productSelection}/${productName}`;
  d3.json(url).then(function(productList) {
    prodListing = prodListing.filter(prod => prod.XXXXX);
    var loopMax = Math.min(prodListing.length, 5);
        for (i = 0; i < loopMax; i++) {
    
    // Get data and insert into variable
    var itemDescription = prodListing[i].item_description;
    var itemCost = prodListing[i].item_cost;
    var itemImage = prodListing[i].item_url;

    // Create a div container to hold the product details
    var containerDiv = document.createElement('div');
    containerDiv.id = 'prod-container';
    containerDiv.className = 'container';

    // Create row div
    var rowDiv = document.createElement('div');
    rowDiv.className = 'row';

    // DIV FOR PRODUCT LISTING
    // Create div for bootstrap
    var bootstrapDivLeft = document.createElement('div');
    bootstrapDivLeft.id = 'insertRecommendationHere';
    bootstrapDivLeft.className = 'col-md-6 mx-auto';

    // Create h3 for product description
    var titleH3 =  document.createElement('h3');
    titleH3.innerText = itemDescription;

    // Create h3 for product cost
    var costH3 =  document.createElement('h3');
    costH3.innerText = itemCost;

    // DIV FOR IMAGE
    // Create div for bootstrap 
    var bootstrapDivRight = document.createElement('div');
    bootstrapDivRight.id = 'insertImageHere'+i;
    bootstrapDivRight.className = 'col-md-6 product-image';

    // Create h3 for product description
    var titleH3 =  document.createElement('src');
    titleH3.innerText = itemImage;

    // Append child 
    containerDiv.appendChild(rowDiv);
    rowDiv.appendChild(bootstrapDivLeft);
    rowDiv.appendChild(bootstrapDivRight);

    // Then append the whole thing onto the section
    document.getElementById('recommend-product').appendChild(containerDiv);

    

  };

  // Dynamic product search
function myProductFunction() {
  var input, filter, table, selProd, filtProd, x;
  input = document.getElementById("inputProduct");
  filter = input.value.toLowerCase();
  table = document.getElementById("productName");
  selProd = table.getElementsByTagName("option");

  for (x = 0; x < selProd.length; x++) {
    filtProd = selProd[x].getElementsByTagName("option")[0];
    if (filtProd) {
      if (filtProd.innerHTML.toLowerCase().indexOf(filter) > -1) {
        selProd[x].style.display = "";
      }
      else {
        selProd[x].style.display = "none";
      }
    }
  }
}