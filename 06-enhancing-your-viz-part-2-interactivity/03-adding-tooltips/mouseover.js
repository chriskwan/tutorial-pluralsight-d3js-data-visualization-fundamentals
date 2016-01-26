(function() {
    var w = 300;
    var h = 120;
    var padding = 2; // space between bars
    var dataset = [5, 10, 13, 19, 21, 25,
                    11, 25, 22, 18, 7];

    var svg = d3.select("body").append("svg")
        .attr("width", w)
        .attr("height", h);

    function colorPicker(v) {
        if (v<=20) { return "#666666"; }
        else if (v>20) { return "#FF0033"; }
    }

    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
    .attr({
        x: function(d, i) {
            return i * (w/ dataset.length);
        },
        y: function(d) {
            return h - (d*4);
        },
        width: w / dataset.length - padding,
        height: function(d) {
            return d*4;
        },
        fill: function(d) {
            return colorPicker(d);
        }
    })
    .on("mouseover", function(d) {
        svg.append("text")
            .text(d)
            .attr({
                "text-anchor": "middle",
                x: parseFloat(d3.select(this).attr("x")) +
                    parseFloat(d3.select(this).attr("width")/2),
                y: parseFloat(d3.select(this).attr("y"))+12,
                "font-family": "sans-serif",
                "font-size": "12",
                "fill": "#ffffff",
                id: "tooltip"
            })
    })
    .on("mouseout", function(d) {
        d3.select("#tooltip").remove();
    });
})();