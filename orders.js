//write a random function that generates a random order ID
function generateRandomOrderID() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let orderID = '';
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        orderID += characters[randomIndex];
    }
    return orderID;
}

// Example usage
const newOrderID = generateRandomOrderID();
console.log('Generated Order ID:', newOrderID);