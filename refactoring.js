function getDeliveryFee(category) {
    if (category === 'food') return 5;
    if (category === 'electronics') return 20;
    return 10;
}

const discountRules = {
    vip: { priceThreshold: 100, aboveRate: 0.8, belowRate: 0.9, orderThreshold: 500, orderDiscount: 50 },
    regular: { priceThreshold: 100, aboveRate: 0.95, belowRate: 1, orderThreshold: 1000, orderDiscount: 25 },
    default: { priceThreshold: Infinity, aboveRate: 1, belowRate: 1, orderThreshold: Infinity, orderDiscount: 0 }
};

function calculateOrder(orders, customerType) {
    const rules = discountRules[customerType] || discountRules.default;
    let total = 0;
    let delivery = 0;

    for (let index = 0; index < orders.length; index++) {
        const price = orders[index].price;
        total += price > rules.priceThreshold ? price * rules.aboveRate : price * rules.belowRate;
        delivery += getDeliveryFee(orders[index].category);
    }

    if (total > rules.orderThreshold) {
        total -= rules.orderDiscount;
    }

    console.log('Total: ' + total);
    console.log('Delivery: ' + delivery);

    return {
        total: total,
        delivery: delivery
    };
}

let orders = [
    { price: 120, category: 'electronics' },
    { price: 40, category: 'food' },
    { price: 75, category: 'books' }
];

calculateOrder(orders, 'vip');