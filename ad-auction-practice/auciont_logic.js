// Given an array of bid responses, each with a price and duration,
// select a combination of bids that fills a 120-second ad break
// while maximizing total revenue.

const bids = [
    { id: 'a1', price: 50, duration: 30 },
    { id: 'a2', price: 30, duration: 60 },
    { id: 'a3', price: 90, duration: 60 },
    { id: 'a4', price: 25, duration: 30 },
    { id: 'a5', price: 60, duration: 30 }
];

const bids2 = [
    { id: 'a1', price: 30, duration: 30 },
    { id: 'a2', price: 60, duration: 60 },
    { id: 'a3', price: 90, duration: 60 },
    { id: 'a4', price: 30, duration: 30 }
];

const breakDuration = 120;

export function maxRevenue(bids, breakDuration) {
    // Greedy sort by price-per-second
    bids.sort((a, b) => (b.price / b.duration) - (a.price / a.duration));

    const selected = [];
    let time = 0;

    for (const bid of bids) {
        if (time + bid.duration <= breakDuration) {
            selected.push(bid);
            time += bid.duration;
        }
    }

    return {ads: selected, totalDuration: time};
}

console.log(maxRevenue(bids, breakDuration))
console.log(maxRevenue(bids2, breakDuration))