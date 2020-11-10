
var prod_list = [];
// handling recommendations on first load
handleDivVisibility("recommend-product-head",false);
handleDivVisibility("recommend-popular-head",false);
handleDivVisibility("recommend-customer-head",false);

d3.select("#submit").on("click", handleSubmit);

function ClearAll() {
	localStorage.clear();
	doShowAll();
}

function doShowAll() {
		var key = "";
		var list = "<tr><th>Product</th><th>Quantity</th></tr>\n";
    var i = 0;
    var prodDetatils = '';
    prod_list = [];
		//for more advance feature, you can set cap on max items in the cart
		for (i = 0; i <= localStorage.length-1; i++) {
      key = localStorage.key(i);
      prodDetatils = key.split(",");
      prod_list.push(prodDetatils[0]); 
			list += "<tr><td>" + prodDetatils[1] + "</td>\n<td>" + localStorage.getItem(key) + "</td></tr>\n";
		}
		//if no item exists in the cart
		if (list == "<tr><th>Product</th><th>Quantity</th></tr>\n") {
			list += "<tr><td><i>Item is Empty</i></td>\n<td><i>Quantity is Empty</i></td></tr>\n";
		}
		//bind the data to html table
		//you can use jQuery too....
		document.getElementById('list').innerHTML = list;
}

function populateRecommendation(recommendDiv, path){
  var iowaList;
  d3.select('#' + recommendDiv).html("");
  d3.json(path)
  .then(data => {iowaList = data;
  
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
    document.getElementById(recommendDiv).appendChild(containerDiv);

  }
  
  })
}

function handleDivVisibility(divItem, isVisible){
  if(isVisible){
    document.getElementById(divItem).style.display = "block";
  }
  else{
    document.getElementById(divItem).style.display = "none";
  }

}

function handleSubmit() {
// Prevent the page from refreshing
  d3.event.preventDefault();
  var prodText = d3.select('#product_name option:checked').text();
  var productSiteSelector = d3.select("#product_name").node().value; 
  var customerSiteSelector = d3.select("#store_number").node().value;  
  var prod_details = [productSiteSelector,prodText];  	
	var qty = d3.select("#myInputQuantity").property("value");
	localStorage.setItem(prod_details, qty);
	doShowAll();	  

// Select the input value from the index.html
  console.log(prod_list);
  var basket_items = prod_list.join(',');
  console.log(basket_items);
  var iowaPath = `/get_recommendations_for_products_selection/${basket_items}`
  var iowaPath2 = `/get_recommendations_for_store/${customerSiteSelector}`
  var iowaPath3 = `/get_popularity_recommendations/${customerSiteSelector}`

  if(customerSiteSelector == '1'){
    populateRecommendation("recommend-product",iowaPath);
    populateRecommendation("recommend-popular",iowaPath3);
    handleDivVisibility("recommend-product-head",true);
    handleDivVisibility("recommend-popular-head",true);
    handleDivVisibility("recommend-customer-head",false);
  }
  else{
    populateRecommendation("recommend-product",iowaPath);
    populateRecommendation("recommend-customer",iowaPath2);
    populateRecommendation("recommend-popular",iowaPath3);
    handleDivVisibility("recommend-product-head",true);
    handleDivVisibility("recommend-popular-head",true);
    handleDivVisibility("recommend-customer-head",true);
  }

}
