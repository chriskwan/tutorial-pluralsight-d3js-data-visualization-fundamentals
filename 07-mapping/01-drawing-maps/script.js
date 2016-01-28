(function() {
    var w = 500;
    var h = 300;

    var projection = d3.geo.albersUsa()
                        .translate([w/2, h/2])
                        .scale([500]);

    var path = d3.geo.path().projection(projection);

    var svg = d3.select("body")
        .append("svg")
        .attr({
            width: w,
            height: h
        });

    d3.json("us.json", function(json) {
        svg.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("fill", "#666666");
    });
})();