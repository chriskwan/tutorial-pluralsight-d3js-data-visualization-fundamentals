(function() {
    var w = 350;
    var h = 400;

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

    //KPI color
    function salesKPI(d) {
        if (d>250) { return "#33CC66"; }
        else if (d<250) { return "#666666"; }
    }

    //create our svg
    var svg = d3.select("body").append("svg").attr({
        width: w,
        height: h
    });

    //add dots
    var dots = svg.selectAll("circle")
        .data(monthlySales)
        .enter()
        .append("circle")
    .attr({
        cx: function(d) { return d.month*3; },
        cy: function(d) { return h-d.sales; },
        r: 5,
        "fill": function(d) { return salesKPI(d.sales); }
    });

})();