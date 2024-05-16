class Car{
    constructor(brand,model,price,milage){
        this.brand=brand
        this.model=model
        this.price=price
        this.milage=milage
    }
}
function printNam(Car){
    console.log(`this is a ${Car.brand}`)
}
export default Car
export {printNam}