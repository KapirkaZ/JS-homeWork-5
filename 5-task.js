class Car {
    // Write code under this line
     
     static getSpecs(car){
       return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`}
     constructor(car){
     this.speed = 0;
     this._price = car.price;
     this.maxSpeed = car.maxSpeed;
     this.isOn = false;
     this.distance = 0;}
     
     get price() {return this._price}
     
     set price(value) {this._price = value}
     
     turnOn() {this.isOn = true;}
     
     turnOff() {
       this.isOn = false;
       this.speed = 0;
     }
     
    accelerate(value) {
       if (this.speed + value < this.maxSpeed) {
         this.speed += value;
       }
      else { this.speed = this.maxSpeed }
     }
     
     decelerate(value) {
       if (this.speed - value > 0) {
         this.speed = this.speed - value;
             }
       else { this.speed = 0 }
     } 
     
     drive(hours) {
       if ((this.isOn)) {
         this.distance += hours * this.speed;
       }
     }
   }
    
   const mustang = new Car({ maxSpeed: 200, price: 2000 });
   mustang.turnOn();
   mustang.accelerate(50);
   mustang.drive(2);
   
    console.log(Car.getSpecs(mustang));
   // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
   
   mustang.decelerate(20);
   mustang.drive(1);
   mustang.turnOff();
   
    console.log(Car.getSpecs(mustang));
   // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'
   
    console.log(mustang.price); // 2000
   mustang.price = 4000;
    console.log(mustang.price); // 4000

    // class Car {
  /*
   * Добавь `статический` метод 
   * `getSpecs(car)`, который принимает 
   * объект-машину как параметр 
   * и возвращает шаблонную строку 
   * со свойствами и значениями объекта.
   * Свойства: 
   *   maxSpeed, 
   *   speed, 
   *   isOn, 
   *   distance,
   *   price
   * Пример строки, полученной этим методом:
   * 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
   */

  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, 
   *          начальное значение `0`
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль. 
   *         Значения `true` или `false`,  
   *         начальное значение false
   *  distance - пробег в километрах, 
   *             начальное значение `0`
   */
  constructor() {}

  /*
   * Добавь геттер и сеттер 
   * для свойства `price`, который будет 
   * работать с свойством цены автомобиля.
   * 
   * ВАЖНО: для записи методов get и set
   * значение параметра записывают с 
   * подчеркиванием. См. ниже пример 1.
   */

  /*
   * Метод, который заводит автомобиль
   * Записывает в свойство `isOn` значение `true`
   */
  turnOn() {}

  /*
   * Метод, чтобы заглушить автомобиль
   * Этот метод должен записывать 
   * в свойство isOn значение false,
   * и сбрасывать текущую скорость до 0
   */
  turnOff() {}

  /*
   * Этот метод должен добавлять 
   * к свойству `speed` полученное
   * значение, при условии, 
   * что результирующая скорость
   * не больше чем значение свойства `maxSpeed`
   */
  accelerate(value) {}

  /*
   * Этот метод должен отнимать 
   * от свойства `speed` 
   * полученное значение, при условии, 
   * что результирующая скорость не меньше 0
   */

  decelerate(value) {}

  /*
   * Этот метод должен добавлять к свойству 
   * `distance` пробег в километрах, 
   * т.е. hours * speed,
   * но только в том случае, 
   * если машина заведена!
   */
  drive(hours) {}
}

#### Пример 1.

```js
class Guest {
  // Собственные свойства класса размещаем в конструкторе
  constructor(name, roomNumber) {
    /* параметр name не должен 
     *   совпадать с названием свойства
     *   но должен быть похож.
     *   Поэтому используют прием смены
     *   названия добавляя символ '_'.
     *   Хотя это может любой другой символ
     */
    this._name = name;
  }

  // Используем геттеры и сеттеры для описания интерфейса доступа к свойствам
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}
Редактор JavaScript:
class Car {
 // Write code under this line
  
  static getSpecs(car){
    return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`}
  constructor(car){
  this.speed = 0;
  this._price = car.price;
  this.maxSpeed = car.maxSpeed;
  this.isOn = false;
  this.distance = 0;}
  
  get price() {return this._price}
  
  set price(value) {this._price = value}
  
  turnOn() {this.isOn = true;}
  
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  
 accelerate(value) {
    if (this.speed + value < this.maxSpeed) {
      this.speed += value;
    }
   else { this.speed = this.maxSpeed }
  }
  
  decelerate(value) {
    if (this.speed - value > 0) {
      this.speed = this.speed - value;
          }
    else { this.speed = 0 }
  } 
  
  drive(hours) {
    if ((this.isOn)) {
      this.distance += hours * this.speed;
    }
  }
}
 
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

 console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

 console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

 console.log(mustang.price); // 2000
mustang.price = 4000;
 console.log(mustang.price); // 4000
1
class Car {
2
 // Write code under this line
3
  
4
  static getSpecs(car){
5
    return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`}
6
  constructor(car){
7
  this.speed = 0;
8
  this._price = car.price;
9
  this.maxSpeed = car.maxSpeed;
10
  this.isOn = false;
11
  this.distance = 0;}
12
  
13
  get price() {return this._price}
14
  
15
  set price(value) {this._price = value}
16
  
17
  turnOn() {this.isOn = true;}
18
  
19
  turnOff() {
20
    this.isOn = false;
21
    this.speed = 0;
22
  }
23
  
24
 accelerate(value) {
25
    if (this.speed + value < this.maxSpeed) {
26
      this.speed += value;
27
    }
28
   else { this.speed = this.maxSpeed }
29
  }
30
  
31
  decelerate(value) {
32
    if (this.speed - value > 0) {
33
      this.speed = this.speed - value;
34
          }
35
    else { this.speed = 0 }
36
  } 
37
  
38
  drive(hours) {
Завершить
Сбросить
Скрыть секцию результатов
Результаты:
(обновляются при нажатии на кнопку - Проверить)

Класс Car JS должен определить как функцию-конструктор
Ожидается использование метода 'static getSpecs'
Статический метод 'static getSpecs' должен возвращать строку со свойствами и значениями объекта согласно спецификации.
Методы get и set для свойства price должны выполняться согласно спецификации.
Метод 'turnOn' должен задавать свойству 'isOn' значение 'true'.
Метод 'turnOff' должен задавать свойству 'isOn' значение 'false' и свойству 'speed' значение '0'.
Метод 'accelerate' должен добавлять к свойству 'speed' значение 'value'
Метод 'accelerate' должен оставлять свойству 'speed' значение 'maxSpeed', если значение 'value' в сумме со значением 'speed' превышают значение 'maxSpeed'.
Метод 'decelerate' должен уменьшать свойство 'speed' на значение 'value'
Метод 'decelerate' должен оставлять свойству 'speed' значение '0', если значение 'value' в сумме со значением 'speed' превышают значение '0'.
Метод 'drive' должен изменять свойство 'distance', добавляя произведение значений 'hours' и 'speed'
Результат выполнения кода:
maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
2000
