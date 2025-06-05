// Write a function that accepts an endpointRequest and returns an endpointResponse
// after simulating calls to 3 fake bidders (which return fake bidResponses).

import { maxRevenue } from "./auciont_logic.js";

const endpointRequest = {
    content: 'Top Gear',
    viewer: 'user123',
    adBreak: 60
};

const bidders = [
    () => Promise.resolve({ price: 40, ad: 'Car Ad', duration: 30 }),
    () => Promise.resolve({ price: 35, ad: 'Insurance Ad', duration: 30 }),
    () => Promise.resolve({ price: 10, ad: 'Snack Ad', duration: 30 })
];

async function getAds(req, bidders) {
    const resp = await Promise.all(bidders.map(bidder => bidder(endpointRequest)))
    return maxRevenue(resp, req.adBreak)
}

getAds(endpointRequest, bidders).then(console.log)