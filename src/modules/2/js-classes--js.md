
[Source - https://developer.mozilla.org](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes "Permalink to Classes - JavaScript | MDN")

# Classes - JavaScript | MDN

JavaScript classes introduced in ECMAScript 2015 are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax is **not** introducing a new object-oriented inheritance model to JavaScript. JavaScript classes provide a much simpler and clearer syntax to create objects and deal with inheritance.

## Defining classes

Classes are in fact "special [functions][1]", and just as you can define [function expressions][2] and [function declarations][3], the class syntax has two components: [class expressions][4] and [class declarations][5].

### Class declarations

One way to define a class is using a **class declaration**. To declare a class, you use the `class` keyword with the name of the class ("Rectangle" here).
    
```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

#### Hoisting

An important difference between **function declarations** and **class declarations** is that function declarations are [hoisted][6] and class declarations are not. You first need to declare your class and then access it, otherwise code like the following will throw a [`ReferenceError`][7]:
    
    
    var p = new Rectangle(); // ReferenceError
    
    class Rectangle {}
    

### Class expressions

A **class expression** is another way to define a class. Class expressions can be named or unnamed. The name given to a named class expression is local to the class's body.
    
    
    // unnamed
    var Rectangle = class {
      constructor(height, width) {
        this.height = height;
        this.width = width;
      }
    };
    
    // named
    var Rectangle = class Rectangle {
      constructor(height, width) {
        this.height = height;
        this.width = width;
      }
    };
    

**Note:** Class **expressions** also suffer from the same hoisting issues mentioned for Class **declarations**.

## Class body and method definitions

The body of a class is the part that is in curly brackets `{}`. This is where you define class members, such as methods or constructor.

### Strict mode

The bodies of _class declarations_ and _class expressions_ are executed in [strict mode][8] i.e. constructor, static and prototype methods, getter and setter functions are executed in strict mode.

### Constructor

The [`constructor][9]` method is a special method for creating and initializing an object created with a `class`. There can only be one special method with the name "constructor" in a class. A [`SyntaxError`][10] will be thrown if the class contains more than one occurrence of a `constructor` method.

A constructor can use the `super` keyword to call the constructor of a parent class.

### Prototype methods

See also [method definitions][11].
    
    
    class Rectangle {
      constructor(height, width) {
        this.height = height;
        this.width = width;
      }
      
      get area() {
        return this.calcArea();
      }
    
      calcArea() {
        return this.height * this.width;
      }
    }
    
    const square = new Rectangle(10, 10);
    
    console.log(square.area);

### Static methods

The [`static][12]` keyword defines a static method for a class. Static methods are called without [instantiating ][13]their class and **cannot **be called through a class instance. Static methods are often used to create utility functions for an application.
    
    
    class Point {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
    
      static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
    
        return Math.sqrt(dx*dx + dy*dy);
      }
    }
    
    const p1 = new Point(5, 5);
    const p2 = new Point(10, 10);
    
    console.log(Point.distance(p1, p2));

### Boxing with prototype and static methods

When a static or prototype method is called without an object valued "this", then the "this" value will be **`undefined`** inside the called function. Autoboxing will not happen. The behavior will be the same even if we write the code in non-strict mode because all the functions, methods, constructor, getters or setters are executed in strict mode. So if we do not specify _this _value then the _this_ value will be **`undefined.`**
    
    
    class Animal { 
      speak() {
        return this;
      }
      static eat() {
        return this;
      }
    }
    
    let obj = new Animal();
    let speak = obj.speak;
    speak(); // undefined
    
    let eat = Animal.eat;
    eat(); // undefined

If we write the above code using traditional function based classes, then autoboxing will happen based on the "this" value for which the function was called.
    
    
    function Animal() { }
    
    Animal.prototype.speak = function() {
      return this;
    }
    
    Animal.eat = function() {
      return this;
    }
    
    let obj = new Animal();
    let speak = obj.speak;
    speak(); // global object
    
    let eat = Animal.eat;
    eat(); // global object
    

## Sub classing with `extends`

The [`extends][14]` keyword is used in _class declarations_ or _class expressions_ to create a class as a child of another class.
    
    
    class Animal { 
      constructor(name) {
        this.name = name;
      }
      
      speak() {
        console.log(this.name + ' makes a noise.');
      }
    }
    
    class Dog extends Animal {
      speak() {
        console.log(this.name + ' barks.');
      }
    }
    
    var d = new Dog('Mitzie');
    d.speak(); // Mitzie barks.
    

If there is a constructor present in sub-class, it needs to first call super() before using "this".

One may also extend traditional function-based "classes":
    
    
    function Animal (name) {
      this.name = name;  
    }
    
    Animal.prototype.speak = function () {
      console.log(this.name + ' makes a noise.');
    }
    
    class Dog extends Animal {
      speak() {
        console.log(this.name + ' barks.');
      }
    }
    
    var d = new Dog('Mitzie');
    d.speak(); // Mitzie barks.
    

Note that classes cannot extend regular (non-constructible) objects. If you want to inherit from a regular object, you can instead use [`Object.setPrototypeOf()`][15]:
    
    
    var Animal = {
      speak() {
        console.log(this.name + ' makes a noise.');
      }
    };
    
    class Dog {
      constructor(name) {
        this.name = name;
      }
    }
    
    Object.setPrototypeOf(Dog.prototype, Animal);// If you do not do this you will get a TypeError when you invoke speak
    
    var d = new Dog('Mitzie');
    d.speak(); // Mitzie makes a noise.
    

## Species

You might want to return [`Array`][16] objects in your derived array class `MyArray`. The species pattern lets you override default constructors.

For example, when using methods such as [`map()`][17] that returns the default constructor, you want these methods to return a parent `Array` object, instead of the `MyArray` object. The [`Symbol.species`][18] symbol lets you do this:
    
    
    class MyArray extends Array {
      // Overwrite species to the parent Array constructor
      static get [Symbol.species]() { return Array; }
    }
    
    var a = new MyArray(1,2,3);
    var mapped = a.map(x => x * x);
    
    console.log(mapped instanceof MyArray); // false
    console.log(mapped instanceof Array);   // true
    

## Super class calls with `super`

The [`super][19]` keyword is used to call functions on an object's parent.
    
    
    class Cat { 
      constructor(name) {
        this.name = name;
      }
      
      speak() {
        console.log(this.name + ' makes a noise.');
      }
    }
    
    class Lion extends Cat {
      speak() {
        super.speak();
        console.log(this.name + ' roars.');
      }
    }
    
    var l = new Lion('Fuzzy');
    l.speak(); 
    // Fuzzy makes a noise.
    // Fuzzy roars.
    
    

## Mix-ins

Abstract subclasses or _mix-ins_ are templates for classes. An ECMAScript class can only have a single superclass, so multiple inheritance from tooling classes, for example, is not possible. The functionality must be provided by the superclass.

A function with a superclass as input and a subclass extending that superclass as output can be used to implement mix-ins in ECMAScript:
    
    
    var calculatorMixin = Base => class extends Base {
      calc() { }
    };
    
    var randomizerMixin = Base => class extends Base {
      randomize() { }
    };
    

A class that uses these mix-ins can then be written like this:
    
    
    class Foo { }
    class Bar extends calculatorMixin(randomizerMixin(Foo)) { }

## Specifications

## Browser compatibility

| ----- |
| Feature |  Chrome |  Firefox (Gecko) |  Edge |  Internet Explorer |  Opera |  Safari |  
| Basic support |  42.0[1]  
49.0 |  [45][20] (45) |  13 |  No support |  43.0 |  9.0 | 

| ----- |
| Feature |  Android |  Firefox Mobile (Gecko) |  IE Mobile |  Opera Mobile |  Safari Mobile |  Chrome for Android |  
| Basic support |  No support |  45.0 (45) |  ? |  ? |  9 |  42.0[1]  
49.0 | 

[1] Requires strict mode. Non-strict mode support is behind the flag "Enable Experimental JavaScript", disabled by default.


[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
[4]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class
[5]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class
[6]: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting "hoisted: Hoisting is a term you will not find in the JavaScript docs. Hoisting was thought up as a general way of thinking about how execution context (specifically the creation and execution phases) work in JavaScript. But, hoisting can lead to misunderstandings. For example, hoisting teaches that variable and function declarations are physically moved to the top of your coding, but this is not what happens at all. What does happen is that variable and function declarations are put into memory during the compile phase, but stays exactly where you typed it in your coding."
[7]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError "The ReferenceError object represents an error when a non-existent variable is referenced."
[8]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
[9]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
[10]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "The SyntaxError object represents an error when trying to interpret syntactically invalid code."
[11]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
[12]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
[13]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#The_object_(class_instance) "An example of class instance is "var john = new Person();""
[14]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
[15]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf "The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null."
[16]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects."
[17]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map "The map() method creates a new array with the results of calling a provided function on every element in the calling array."
[18]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species "The Symbol.species well-known symbol specifies a function valued property that the constructor function uses to create derived objects."
[19]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
[20]: https://developer.mozilla.org/en-US/Firefox/Releases/45 "Released on 2016-03-08."

  