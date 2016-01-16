(function() {
    var w = 100;
    var h = 100;
    var padding = 2;
    var dataset = [5, 10, 15, 20, 25];
    var svg = d3.select("body")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", function(d, i) {
            return i * (w / dataset.length);
        })
        .attr("y", function(d){
            return h - (d * 4);
        })
        .attr("width", w / dataset.length - padding)
        .attr("height", function(d) {
            return d * 4;
        });
})();