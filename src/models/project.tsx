class Product {
    public id:string;
    public ownerId:string;
    public title:string;
    public imageUrl:string;
    public description:string;
    public price:Number;
    constructor(id:string, ownerId:string, title:string, imageUrl:string, description:string, price:Number) {
        this.id = id;
        this.ownerId = ownerId;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = new Number(price);
    }
}

export default Product;