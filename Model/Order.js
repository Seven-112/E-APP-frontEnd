

class Order {
    constructor(orderId, userId, address, date, total, discounts, products) {
        this.orderId = orderId;
        this.userId = userId;
        this.address = address;
        this.date = date;
        this.total = total;
        this.discounts = discounts;
        this.products = products;
    }
}

export default Order;