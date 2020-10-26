d3.select("#submit").on("click", handleSubmit);
// var myMap = null;

function handleSubmit() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input value from the form
  var customerSelection = d3.select("#customer_name").node().value;
  var productSelection = d3.select("#product_category").node().value;
  var productName = d3.select("#product_name").node().value;

  var url = `/get_recommendations_for_store/${customerSelection}/${productSelection}/${productName}`;
  d3.json(url).then(function(data) {
    renderWeekday(data);
    renderJobTable(data,stateSelection,roleSelection);
  });
}

function myProductFunction() {
  var input, filter, table, selProd, filProd, x;
  input = document.getElementById("inputProduct");
  filter = input.value.toLowerCase();
  table = document.getElementById("productName");
  selProd = table.getElementsByTagName("option");

  for (x = 0; x < selProd.length; x++) {
    filProd = selProd[x].getElementsByTagName("option")[0];
    if (filProd) {
      if (filProd.innerHTML.toLowerCase().indexOf(filter) > -1) {
        selProd[x].style.display = "";
      }
      else {
        selProd[x].style.display = "none";
      }
    }
  }
}