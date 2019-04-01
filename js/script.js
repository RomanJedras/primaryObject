
function Phone(brand, price, color,system) {
    //Here we put interior of the constructing function.
    this.brand = brand;
    //by using this, the "brand" property of the object we create will assume the value of the brand argument
    this.price = price;
    this.color = color;
    this.system = system;
}


Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

Phone.prototype.printSystem = function() {
    console.log("The phone system is " + this.system+".");
}

let SamsungGalaxyS6  = new Phone('Samsung Galaxy S6',1000, 'black','Android');
let iPhone6S = new Phone("Apple", 2250, "silver",'Android');
let onePlus = new Phone('OnePlus One',2500,'gold','OS');


SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlus.printInfo();

SamsungGalaxyS6.printSystem();
iPhone6S.printSystem();
onePlus.printSystem();


function Button(text) {
    this.text = text || 'Hello';
}

Button.prototype = {
    create: function() {
        const self = this;
        this.element = document.createElement('button');
        this.element.innerText = this.text;
        this.element.addEventListener('click', function() {
            alert(self.text);
        });
        document.body.appendChild(this.element);
    }
};

const btn1 = new Button('Hello!');
btn1.create();
