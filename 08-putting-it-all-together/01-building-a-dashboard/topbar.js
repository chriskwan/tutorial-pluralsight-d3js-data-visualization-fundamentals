function buildBar(ds) {
    var barTooltip = d3.select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    var formatRatio = d3.format("%");

    var margin = { top: 20, right: 30, bottom: 30, left: 40},
        width = 800 - margin.left - margin.right,
        height = 200 - margin.top - margin.bottom;

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickFormat(d3.format("s"))
        .ticks(3);

    // get bar color
    var minProfit = d3.min(ds, function(d) { return d.profit; });
    var maxProfit = d3.max(ds, function(d) { return d.profit; });
    //console.log(minProfit);
    //console.log(maxProfit);
    var color = d3.scale.quantize()
        .domain([minProfit, maxProfit])
        .range(['rgb(202, 0, 32)', 'rgb(244, 165, 130)', 'rgb(186, 186, 186)', 'rgb(64, 64, 64)']);

    var chart = d3.select("#barChart")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.csv("2013-monthly-sales.csv", function(error, data) {
        x.domain(data.map(function(d) {
            return d.month;
        }));
        y.domain([0, d3.max(data, function(d) {
            return d.sales;
        })]);

        chart.append("g")
            .attr("class", "x-axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        chart.append("g")
            .attr("class", "y-axis")
            .call(yAxis);

        chart.selectAll("#barChart")
            .data(data)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", function (d) {
                return x(d.month);
            })
            .attr("y", function (d) {
                return y(d.sales); //cwkTODO this seems off
            })
            .attr("height", function (d) {
                return height = y(d.sales); //cwkTODO this seems off
            })
            .attr("width", x.rangeBand())
            .style("fill", function (d) {
                return color(d.profit);
            })
            .on("mouseover", function (d) {
                //cwkTODO
            })
            .on("mouseout", function (d) {
                //cwkTODO
            });
    });
}

d3.csv("2013-monthly-sales.csv", function(error, data) {
    // problems?
    if (error) {
        console.log(error);
    } else {
        // build something
        buildBar(data);
    }
});
