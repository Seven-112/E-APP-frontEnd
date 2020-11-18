class ProductModel {
    constructor(id, title, imageUrl, description, price, productType,rating,hotsales,promotions) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
        this.productType = productType;
        this.hotsales = hotsales;
        this.rating = rating;
        this.promotions = promotions
    }
}

export default ProductModel