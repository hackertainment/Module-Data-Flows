function sales(carsSold) {
    totals = {};

    for (let i of carsSold) {
        if (!totals.hasOwnProperty(i.make)) {
            totals[i.make] = 0;
        }
        totals[i.make] += i.price;
    }

    return totals;
}

module.exports = sales;
