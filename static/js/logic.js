d3.select("#submit").on("click", handleSubmit);
// var myMap = null;

function handleSubmit() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input value from the form
  var customerSelection = d3.select("#customer_name").node().value;
  var productSelection = d3.select("#product_category").node().value;
  var product_name = d3.select("#product_name").node().value;

  var url = `/get_recommendations_for_store/${customerSelection}`;
  d3.json(url).then(function(data) {
    renderWeekday(data);
    renderJobTable(data,stateSelection,roleSelection);
  });
}