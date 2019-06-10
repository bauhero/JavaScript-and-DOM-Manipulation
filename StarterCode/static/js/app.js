// from data.js
var tableData = data;

// YOUR CODE HERE!
// from data.js
var tableData = data;

console.log(tableData);

// YOUR CODE HERE!

// Display the whole table from data.js through looping 

var tbody = d3.select("tbody");

tableData.forEach(data => {
    var row = tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
     });
});


// Initiate the filter function with date/time, city, etc.

var filter = d3.select("#filter-btn");

filter.on("click", function(){

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    // Get the value property of the input element
    var inputDate = d3.select("#datetime").property("value");
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");

    console.log(inputDate);
    console.log(inputCity);
    console.log(inputState);
    console.log(inputCountry);
    console.log(inputShape);

    var tbody = d3.select("tbody");

    tbody.html("");

    var filterData = data;

        if (inputDate != "") {
            filterData = filterData.filter(fd =>
                fd.datetime === inputDate);
            }
        else 
            {alert("You haven't chosen a data/time!")}
    
        if (inputCity != "") {
            filterData = filterData.filter(fd => 
                fd.city.toUpperCase() === inputCity.toUpperCase());
            }
        else
             {alert("You haven't chosen a City!")}
    
        if (inputState != "") {
            filterData = filterData.filter(fd => 
                fd.state.toUpperCase() === inputState.toUpperCase());
            }
        else
             {alert("You haven't chosen a State!")}
    
        if (inputCountry != "") {
            filterData = filterData.filter(fd => 
                fd.country.toUpperCase() === inputCountry.toUpperCase());
            }
        else
            {alert("You haven't chosen a Country!")}
   
        if (inputShape != "") {
            filterData = filterData.filter(fd => 
                fd.shape.toUpperCase() === inputShape.toUpperCase());
            }  
        
        else
            {alert("You haven't chosen a Shape!")}    
        // console.log(filterData);

// Display how many sightings we've matched
        if (filterData.length > 0) {
        alert("We have found " + filterData.length +" sightings for you!")
        }
        else 
            {alert("Try enter another set of filters!")};

// Display the filtered table
    filterData.forEach(fd => {
    var row = tbody.append("tr");
    Object.entries(fd).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
     });
});
});



// Select the reset button (since it can be used as "value = "Reset" directly in .html")
var reset = d3.select("#reset-btn");

// Reset button handler
reset.on("click", function() {
    tbody.html("");
});