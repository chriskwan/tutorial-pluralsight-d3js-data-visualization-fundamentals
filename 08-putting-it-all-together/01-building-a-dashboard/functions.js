function formatSales(d) {
    var prefix = d3.formatPrefix(d);
    var num = prefix.scale(d).toFixed();
    return num + prefix.symbol;
}

function compareNums(a, b) {
    return a-b;
}
