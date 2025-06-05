// Assign the highest-paying bids to a list of ad slots, prioritizing earlier slots (more valuable).

function assignBidsToSlots(bids, slots) {
    const sortedBids = [...bids].sort((a, b) => b.price - a.price);

    return slots.map((slot, i) => ({
        slot,
        bid: sortedBids[i] || null
    }));
}

const bids = [
    { id: 'b1', price: 25 },
    { id: 'b2', price: 60 },
    { id: 'b3', price: 45 }
];

const slots = ['slot1', 'slot2', 'slot3'];

console.log(assignBidsToSlots(bids, slots));