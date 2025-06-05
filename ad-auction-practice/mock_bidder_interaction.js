// Write an async function that sends a bidRequest to 3 simulated bidders
// and returns the highest-paying bid.

async function getBestBid(request, bidders) {
    const responses = await Promise.all(bidders.map(bidder => bidder(request)));
    return responses.reduce((best, curr) => curr.price > best.price ? curr : best);
}

// Sample
const bidders = [
    () => Promise.resolve({ price: 20, ad: 'Nature Ad' }),
    () => Promise.resolve({ price: 50, ad: 'Travel Ad' }),
    () => Promise.resolve({ price: 35, ad: 'Shoes Ad' })
];

const bidRequest = {
    content: 'Documentary',
    viewer: 'abc123'
};

getBestBid(bidRequest, bidders).then(console.log);