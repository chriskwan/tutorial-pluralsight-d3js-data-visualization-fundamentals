d3.csv("2013-monthly-sales.csv", function(error, data) {
    // problems?
    if (error) {
        console.log(error);
    } else {
        // build something
        alert("build the chart now!");
    }
});
