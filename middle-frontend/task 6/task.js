class Transport {
  constructor(type, price, vendor, model) {
    this.type = type;
    this.price = price;
    this.vendor = vendor;
    this.model = model;
    this.getInfo = this.getInfo.bind(this);
    this.getPrice = this.getPrice.bind(this);
  }

  getInfo() {
    return `${this.vendor}, ${this.model}`;
  }

  getPrice() {
    return this.price.toLocaleString('ru-RU') + ' ₽';
  }
}

class Car extends Transport {
  constructor(vendor, model, doorsCount, price) {
    super('car', price, vendor, model);
    this.doorsCount = doorsCount;
    this.getDoorsCount = this.getDoorsCount.bind(this);
  }

  getDoorsCount() {
    return `Кол-во дверей: ${this.doorsCount}`;
  }
}

class Bike extends Transport {
  constructor(vendor, model, maxSpeed, price) {
    super('bike', price, vendor, model);
    this.maxSpeed = maxSpeed;
    this.getMaxSpeed = this.getMaxSpeed.bind(this);
  }

  getMaxSpeed() {
    return `Макс. скорость: ${this.maxSpeed} км/ч`;
  }
}

const car1 = new Car('KIA', 'Rio', 5, 1200000);
const { getDoorsCount } = car1;
console.log(getDoorsCount());