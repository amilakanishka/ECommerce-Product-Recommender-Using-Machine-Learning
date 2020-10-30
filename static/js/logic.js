d3.select("#submit").on("click", handleSubmit);

function handleSubmit() {
// Prevent the page from refreshing
  d3.event.preventDefault();

// Select the input value from the index.html
  var productSiteSelector = d3.select("#product_name").node().value; 
  var customerSiteSelector = d3.select("#store_number").node().value;  
  var iowaPath = `/get_recommendations_for_product_selection/${productSiteSelector}`
  var iowaPath2 = `/get_recommendations_for_store/${customerSiteSelector}`
  var iowaPath3 = `/get_popularity_recommendations/${customerSiteSelector}`

d3.select("#recommend-product").html("");
d3.select("#recommend-customer").html("");
d3.select("#recommend-popular").html("");

// RECOMMENDER FUNCTION HERE

// Set global variable
var iowaList;

d3.json(iowaPath)
  .then(data => {iowaList = data; 

  console.log("iowaList");
  console.log(iowaList);
  
  // TEMP ONLY - replace with recommender data later
  // Place 4 products for now *** can change
  for (i = 0; i < 4; i++) {

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
  d3.json(iowaPath2)
  .then(data => {iowaList = data; 

  console.log("iowaList");
  console.log(iowaList);
  
  // TEMP ONLY - replace with recommender data later
  // Place 4 products for now *** can change
  for (i = 0; i < 4; i++) {

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
    document.getElementById('recommend-customer').appendChild(containerDiv);

  }
  
  })

  d3.json(iowaPath3)
  .then(data => {iowaList = data; 

  console.log("iowaList");
  console.log(iowaList);
  
  // TEMP ONLY - replace with recommender data later
  // Place 4 products for now *** can change
  for (i = 0; i < 4; i++) {

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
    document.getElementById('recommend-popular').appendChild(containerDiv);

  }
  
  })

}
