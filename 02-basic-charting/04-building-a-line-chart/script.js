(function() {
    var w = 350;
    var h = 400;

    // old data
    // monthlySales = [
    //     {"month": 10, "sales": 20},
    //     {"month": 20, "sales": 14},
    //     {"month": 30, "sales": 20},
    //     {"month": 40, "sales": 21},
    //     {"month": 50, "sales": 15},
    //     {"month": 60, "sales": 22},
    //     {"month": 70, "sales": 9},
    //     {"month": 80, "sales": 6},
    //     {"month": 90, "sales": 23},
    //     {"month": 100, "sales": 7}
    // ];

    monthlySales = [
        {"month": 10, "sales": 100},
        {"month": 20, "sales": 130},
        {"month": 30, "sales": 250},
        {"month": 40, "sales": 300},
        {"month": 50, "sales": 265},
        {"month": 60, "sales": 225},
        {"month": 70, "sales": 180},
        {"month": 80, "sales": 120},
        {"month": 90, "sales": 145},
        {"month": 100, "sales": 130}
    ];

    var lineFun = d3.svg.line()
    .x(function(d) { return d.month*3; })
    .y(function(d) { return h - d.sales; })
    .interpolate("basis"); // other values: https://github.com/mbostock/d3/wiki/SVG-Shapes#line_interpolate

    var svg = d3.select("body").append("svg").attr({
        width: w, height: h});

    var viz = svg.append("path")
    .attr({
        d: lineFun(monthlySales),
        "stroke": "purple",
        "stroke-width": 2,
        "fill": "none"
    });

    //add labels
    var labels = svg.selectAll("text")
        .data(monthlySales)
        .enter()
        .append("text")
    .text(function(d) { return d.sales; })
    .attr({
        x: function(d) { return d.month*3 - 25; },
        y: function(d) { return h-d.sales; },
        "font-size": "12px",
        "font-family": "sans-serif",
        "fill": "#666666",
        "text-anchor": "start",
        "dy": ".35em", // text line height
        "font-weight": function(d, i) {
            if (i === 0 || i == (monthlySales.length-1)) {
                return "bold";
            } else {
                return "normal";
            }
        }
    })
})();