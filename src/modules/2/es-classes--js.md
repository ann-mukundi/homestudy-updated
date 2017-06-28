
[Source - https://www.sitepoint.com](https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/ "Permalink to Object-Oriented JavaScript — A Deep Dive into ES6 Classes — SitePoint")

# Object-Oriented JavaScript — A Deep Dive into ES6 Classes — SitePoint

_This article was peer reviewed by [Nilson Jacques][1] and [Tim Severien][2]. Thanks to all of SitePoint's peer reviewers for making SitePoint content the best it can be!_

Often we need to represent an idea or concept in our programs—maybe a car engine, a computer file, a router, or a temperature reading. Representing these concepts directly in code comes in two parts: data to represent the state and functions to represent the behavior. Classes give us a convenient syntax to define the state and behavior of objects that will represent our concepts. They make our code safer by guaranteeing an initialization function will be called, and they make it easier to define a fixed set of functions that operate on that data and maintain valid state. If you can think of something as a separate entity, it's likely you should define a class to represent that "thing" in your program.

Consider this non-class code. How many errors can you find? How would you fix them?
    
    
    // set today to December 24
    let today = {
      month: 12,
      day: 24,
    };
    
    let tomorrow = {
      year: today.year,
      month: today.month,
      day: today.day + 1,
    };
    
    let dayAfterTomorrow = {
      year: tomorrow.year,
      month: tomorrow.month,
      day: tomorrow.day + 1 <= 31 ? tomorrow.day + 1 : 1,
    };
    

###  More from this author 

* [JavaScript Object Creation: Patterns and Best Practices][3]
* [Quick Tip: Master Closures by Reimplementing Them from Scratch][4]

The date `today` isn't valid; there is no month 24. Also, `today` isn't fully initialized; it's missing the year. It would be better if we had an initialization function that couldn't be forgotten. Notice also, that when adding a day, we checked in one place if we went beyond 31 but missed that check in another place. It would be better if we interacted with the data only through a small and fixed set of functions that each maintain valid state.

Here's the corrected version that uses classes.
    
    
    class SimpleDate {
      constructor(year, month, day) {
        // Check that (year, month, day) is a valid date
        // ...
    
        // If it is, use it to initialize "this" date
        this._year = year;
        this._month = month;
        this._day = day;
      }
    
      addDays(nDays) {
        // Increase "this" date by n days
        // ...
      }
    
      getDay() {
        return this._day;
      }
    }
    
    // "today" is guaranteed to be valid and fully initialized
    let today = new SimpleDate(2000, 2, 28);
    
    // Manipulating data only through a fixed set of functions ensures we maintain valid state
    today.addDays(1);
    

**JARGON TIP:**

* When a function is associated with a class or object, we call it a "method".
* When an object is created from a class, that object is said to be an "instance" of the class.

## Constructors

The `constructor` method is special, and it solves the first problem. Its job is to initialize an instance to a valid state, and it will be called automatically so we can't forget to initialize our objects.

## Keep Data Private

We try to design our classes so that their state is guaranteed to be valid. We provide a constructor that creates only valid values, and we design methods that also always leave behind only valid values. But as long as we leave the data of our classes accessible to everyone, someone _will_ mess it up. We protect against this by keeping the data inaccessible except through the functions we supply.

**JARGON TIP:** Keeping data private to protect it is called "encapsulation".

### Privacy with Conventions

Unfortunately, private object properties don't exist in JavaScript. We have to fake them. The most common way to do that is to adhere to a simple convention: If a property name is prefixed with an underscore (or, less commonly, suffixed with an underscore), then it should be treated as non-public. We used this approach in the earlier code example. Generally this simple convention works, but the data is technically still accessible to everyone, so we have to rely on our own discipline to do the right thing.

### Privacy with Privileged Methods

The next most common way to fake private object properties is to use ordinary variables in the constructor, and capture them in closures. This trick gives us truly private data that is inaccessible to the outside. But to make it work, our class's methods would themselves need to be defined in the constructor and attached to the instance.
    
    
    class SimpleDate {
      constructor(year, month, day) {
        // Check that (year, month, day) is a valid date
        // ...
    
        // If it is, use it to initialize "this" date's ordinary variables
        let _year = year;
        let _month = month;
        let _day = day;
    
        // Methods defined in the constructor capture variables in a closure
        this.addDays = function(nDays) {
          // Increase "this" date by n days
          // ...
        }
    
        this.getDay = function() {
          return _day;
        }
      }
    }
    

### Privacy with Symbols

Symbols are a new feature to JavaScript, and they give us another way to fake private object properties. Instead of underscore property names, we could use unique symbol object keys, and our class can capture those keys in a closure. But there's a leak. Another new feature to JavaScript is `Object.getOwnPropertySymbols`, and it allows the outside to access the symbol keys we tried to keep private.
    
    
    let SimpleDate = (function() {
      let _yearKey = Symbol();
      let _monthKey = Symbol();
      let _dayKey = Symbol();
    
      class SimpleDate {
        constructor(year, month, day) {
          // Check that (year, month, day) is a valid date
          // ...
    
          // If it is, use it to initialize "this" date
          this[_yearKey] = year;
          this[_monthKey] = month;
          this[_dayKey] = day;
        }
    
        addDays(nDays) {
          // Increase "this" date by n days
          // ...
        }
    
        getDay() {
          return this[_dayKey];
        }
      }
    
      return SimpleDate;
    }());
    

### Privacy with Weak Maps

[Weak maps][5] are also a new feature to JavaScript. We can store private object properties in key/value pairs using our instance as the key, and our class can capture those key/value maps in a closure.
    
    
    let SimpleDate = (function() {
      let _years = new WeakMap();
      let _months = new WeakMap();
      let _days = new WeakMap();
    
      class SimpleDate {
        constructor(year, month, day) {
          // Check that (year, month, day) is a valid date
          // ...
    
          // If it is, use it to initialize "this" date
          _years.set(this, year);
          _months.set(this, month);
          _days.set(this, day);
        }
    
        addDays(nDays) {
          // Increase "this" date by n days
          // ...
        }
    
        getDay() {
          return _days.get(this);
        }
      }
    
      return SimpleDate;
    }());
    

### Other Access Modifiers

There are other levels of visibility besides "private" that you'll find in other languages, such as "protected", "internal", "package private", or "friend". JavaScript still doesn't give us a way to enforce those other levels of visibility. If you need them, you'll have to rely on conventions and self discipline.

## Referring to the Current Object

Look again at `getDay()`. It doesn't specify any parameters, so how does it know the object for which it was called? When a function is called as a method using the `object.function` notation, there is an implicit argument that it uses to identify the object, and that implicit argument is assigned to an implicit parameter named `this`. To illustrate, here's how we would send the object argument explicitly rather than implicitly.
    
    
    // Get a reference to the "getDay" function
    let getDay = SimpleDate.prototype.getDay;
    
    getDay.call(today); // "this" will be "today"
    getDay.call(tomorrow); // "this" will be "tomorrow"
    
    tomorrow.getDay(); // same as last line, but "tomorrow" is passed implicitly
    

## Static Properties and Methods

We have the option to define data and functions that are part of the class but not part of any instance of that class. We call these static properties and static methods, respectively. There will only be one copy of a static property rather than a new copy per instance.
    
    
    class SimpleDate {
      static setDefaultDate(year, month, day) {
        // A static property can be referred to without mentioning an instance
        // Instead, it's defined on the class
        SimpleDate._defaultDate = new SimpleDate(year, month, day);
      }
    
      constructor(year, month, day) {
        // If constructing without arguments,
        // then initialize "this" date by copying the static default date
        if (arguments.length === 0) {
          this._year = SimpleDate._defaultDate._year;
          this._month = SimpleDate._defaultDate._month;
          this._day = SimpleDate._defaultDate._day;
    
          return;
        }
    
        // Check that (year, month, day) is a valid date
        // ...
    
        // If it is, use it to initialize "this" date
        this._year = year;
        this._month = month;
        this._day = day;
      }
    
      addDays(nDays) {
        // Increase "this" date by n days
        // ...
      }
    
      getDay() {
        return this._day;
      }
    }
    
    SimpleDate.setDefaultDate(1970, 1, 1);
    
    let defaultDate = new SimpleDate();
    

## Subclasses

Often we find commonality between our classes—repeated code that we'd like to consolidate. Subclasses let us incorporate another class's state and behavior into our own. This process is often called "inheritance," and our subclass is said to "inherit" from a parent class, also called a superclass. Inheritance can avoid duplication and simplify the implementation of a class that needs the same data and functions as another class. Inheritance also allows us to substitute subclasses, relying only on the [interface][6] provided by a common superclass.

## Inherit to Avoid Duplication

Consider this non-inheritance code.
    
    
    class Employee {
      constructor(firstName, familyName) {
        this._firstName = firstName;
        this._familyName = familyName;
      }
    
      getFullName() {
        return `${this._firstName} ${this._familyName}`;
      }
    }
    
    class Manager {
      constructor(firstName, familyName) {
        this._firstName = firstName;
        this._familyName = familyName;
        this._managedEmployees = [];
      }
    
      getFullName() {
        return `${this._firstName} ${this._familyName}`;
      }
    
      addEmployee(employee) {
        this._managedEmployees.push(employee);
      }
    }
    

The data properties `_firstName` and `_familyName`, and the method `getFullName`, are repeated between our classes. We could eliminate that repetition by having our `Manager` class inherit from the `Employee` class. When we do, the state and behavior of the `Employee` class—its data and functions—will be incorporated into our `Manager` class.

Here's a version that uses inheritance. Notice the use of [super][7].
    
    
    // Manager still works same as before but without repeated code
    class Manager extends Employee {
      constructor(firstName, familyName) {
        super(firstName, familyName);
        this._managedEmployees = [];
      }
    
      addEmployee(employee) {
        this._managedEmployees.push(employee);
      }
    }
    

### IS-A and WORKS-LIKE-A

There are design principles to help you decide when inheritance is appropriate. Inheritance should always model an IS-A and WORKS-LIKE-A relationship. That is, a manager "is a" and "works like a" specific kind of employee, such that anywhere we operate on a superclass instance, we should be able to substitute in a subclass instance, and everything should still just work. The difference between violating and adhering to this principle can sometimes be subtle. A classic example of a subtle violation is a `Rectangle` superclass and a `Square` subclass.
    
    
    class Rectangle {
      set width(w) {
        this._width = w;
      }
    
      get width() {
        return this._width;
      }
    
      set height(h) {
        this._height = h;
      }
    
      get height() {
        return this._height;
      }
    }
    
    // A function that operates on an instance of Rectangle
    function f(rectangle) {
      rectangle.width = 5;
      rectangle.height = 4;
    
      // Verify expected result
      if (rectangle.width * rectangle.height !== 20) {
        throw new Error("Expected the rectangle's area (width * height) to be 20");
      }
    }
    
    // A square IS-A rectangle... right?
    class Square extends Rectangle {
      set width(w) {
        super.width = w;
    
        // Maintain square-ness
        super.height = w;
      }
    
      set height(h) {
        super.height = h;
    
        // Maintain square-ness
        super.width = h;
      }
    }
    
    // But can a rectangle be substituted by a square?
    f(new Square()); // error
    

A square may be a rectangle _mathematically_, but a square doesn't _work like a_ rectangle behaviorally.

This rule that any use of a superclass instance should be substitutable by a subclass instance is called the [Liskov Substitution Principle][8], and it's an important part of object oriented class design.

### Beware Overuse

It's easy to find commonality everywhere, and the prospect of having a class that offers complete functionality can be alluring, even for experienced developers. But there are disadvantages to inheritance too. Recall that we ensure valid state by manipulating data only through a small and fixed set of functions. But when we inherit, we increase the list of functions that can directly manipulate the data, and those additional functions are then also responsible for maintaining valid state. If too many functions can directly manipulate the data, then that data becomes nearly as bad as global variables. Too much inheritance creates monolithic classes that dilute encapsulation, are harder to make correct, and harder to reuse. Instead, prefer to design minimal classes that embody just one concept.

Let's revisit the code duplication problem. Could we solve it without inheritance? An alternative approach is to connect objects through references to represent a part-whole relationship. We call this "composition".

Here's a version of the manager-employee relationship using composition rather than inheritance.
    
    
    class Employee {
      constructor(firstName, familyName) {
        this._firstName = firstName;
        this._familyName = familyName;
      }
    
      getFullName() {
        return `${this._firstName} ${this._familyName}`;
      }
    }
    
    class Group {
      constructor(manager /* : Employee */ ) {
        this._manager = manager;
        this._managedEmployees = [];
      }
    
      addEmployee(employee) {
        this._managedEmployees.push(employee);
      }
    }
    

Here, a manager isn't a separate class. Instead, a manager is an ordinary `Employee` instance that a `Group` instance holds a reference to. If inheritance models the IS-A relationship, then composition models the HAS-A relationship. That is, a group "has a" manager.

If either inheritance or composition can reasonably express our program concepts and relationships, then prefer composition.

## Inherit to Substitute Subclasses

Inheritance also allows different subclasses to be used interchangeably through the interface provided by a common superclass. A function that expects a superclass instance as an argument can also be passed a subclass instance without the function having to know about any of the subclasses. Substituting classes that have a common superclass is often called "polymorphism."
    
    
    // This will be our common superclass
    class Cache {
      get(key, defaultValue) {
        let value = this._doGet(key);
        if (value === undefined || value === null) {
          return defaultValue;
        }
    
        return value;
      }
    
      set(key, value) {
        if (key === undefined || key === null) {
          throw new Error('Invalid argument');
        }
    
        this._doSet(key, value);
      }
    
      // Must be overridden
      // _doGet()
      // _doSet()
    }
    
    // Subclasses define no new public methods
    // The public interface is defined entirely in the superclass
    class ArrayCache extends Cache {
      _doGet() {
        // ...
      }
    
      _doSet() {
        // ...
      }
    }
    
    class LocalStorageCache extends Cache {
      _doGet() {
        // ...
      }
    
      _doSet() {
        // ...
      }
    }
    
    // Functions can polymorphically operate on any cache by interacting through the superclass interface
    function compute(cache) {
      let cached = cache.get('result');
      if (!cached) {
        let result = // ...
        cache.set('result', result);
      }
    
      // ...
    }
    
    compute(new ArrayCache()); // use array cache through superclass interface
    compute(new LocalStorageCache()); // use local storage cache through superclass interface
    

## More than Sugar

JavaScript's class syntax is often said to be syntactic sugar, and in a lot of ways it is, but there are also real differences—things we can do with ES6 classes that we couldn't with ES5.

### Static Properties Are Inherited

ES5 didn't let us create true inheritance between constructor functions. `Object.create` could create an ordinary object but not a function object. We faked inheritance of static properties by manually copying them. Now with ES6 classes, we get a real prototype link between a subclass constructor function and the superclass constructor.
    
    
    // ES5
    function B() {}
    B.f = function () {};
    
    function D() {}
    D.prototype = Object.create(B.prototype);
    
    D.f(); // error
    
    
    
    
    // ES6
    class B {
      static f() {}
    }
    
    class D extends B {}
    
    D.f(); // ok
    

### Built-in Constructors Can Be Subclassed

Some objects are "exotic" and don't behave like ordinary objects. Arrays, for example, adjust their `length` property to be greater than the largest integer index. In ES5, when we tried to subclass `Array`, the `new` operator would allocate an ordinary object for our subclass, not the exotic object of our superclass.
    
    
    // ES5
    function D() {
      Array.apply(this, arguments);
    }
    D.prototype = Object.create(Array.prototype);
    
    var d = new D();
    d[0] = 42;
    
    d.length; // 0 - bad, no array exotic behavior
    

ES6 classes fixed this by changing when and by whom objects are allocated. In ES5, objects were allocated before invoking the subclass constructor, and the subclass would pass that object to the superclass constructor. Now with ES6 classes, objects are allocated before invoking the _superclass_ constructor, and the superclass makes that object available to the subclass constructor. This lets `Array` allocate an exotic object even when we invoke `new` on our subclass.
    
    
    // ES6
    class D extends Array {}
    
    let d = new D();
    d[0] = 42;
    
    d.length; // 1 - good, array exotic behavior
    

### Miscellaneous

There's a small assortment of other, probably less significant differences. Class constructors can't be function-called. This protects against forgetting to invoke constructors with `new`. Also, a class constructor's `prototype` property can't be reassigned. This may help JavaScript engines optimize class objects. And finally, class methods don't have a `prototype` property. This may save memory by eliminating unnecessary objects.

## Using New Features in Imaginative Ways

Many of the features described here and in other SitePoint articles are new to JavaScript, and the community is experimenting right now to use those features in new and imaginative ways.

### Multiple Inheritance with Proxies

One such experiment uses [proxies][9], a new feature to JavaScript, to implement multiple inheritance. JavaScript's prototype chain allows only single inheritance. Objects can delegate to only one other object. Proxies give us a way to delegate property accesses to multiple other objects.
    
    
    let transmitter = {
      transmit() {}
    };
    
    let receiver = {
      receive() {}
    };
    
    // Create a proxy object that intercepts property accesses and forwards to each parent,
    // returning the first defined value it finds
    let inheritsFromMultiple = new Proxy([transmitter, receiver], {
      get: function(proxyTarget, propertyKey) {
        const foundParent = proxyTarget.find(parent => parent[propertyKey] !== undefined);
        return foundParent && foundParent[propertyKey];
      }
    });
    
    inheritsFromMultiple.transmit(); // works
    inheritsFromMultiple.receive(); // works
    

Can we expand this to work with classes? A class's `prototype` could be a proxy that forwards property access to multiple other prototypes. The JavaScript community is working on this right now. Can you figure it out? Join the discussion and share your ideas.

## Multiple Inheritance with Class Factories

Another approach the JavaScript community has been experimenting with is generating classes on demand that extend a variable superclass. Each class still has only a single parent, but we can chain those parents in interesting ways.
    
    
    function makeTransmitterClass(Superclass = Object) {
      return class Transmitter extends Superclass {
        transmit() {}
      };
    }
    
    function makeReceiverClass(Superclass = Object) {
      return class Receiver extends Superclass 
        receive() {}
      };
    }
    
    class InheritsFromMultiple extends makeTransmitterClass(makeReceiverClass()) {}
    
    let inheritsFromMultiple = new InheritsFromMultiple();
    
    inheritsFromMultiple.transmit(); // works
    inheritsFromMultiple.receive(); // works
    

Are there other imaginative ways to use these features? Now's the time to leave your footprint in the JavaScript world.

## Conclusion

Hopefully this article has given you an insight into how classes work in ES6 and has demystified some of the jargon surrounding them. Unfortunately, at the time of writing, [support for classes isn't very good][10], so you'll need to use a transpiler such as Babel if you want to give them a try. Nonetheless, I'd be keen to hear your thoughts on classes and whether this is an ES6 feature you'll consider using in the comments below.

[1]: http://www.sitepoint.com/author/njacques/
[2]: http://www.sitepoint.com/author/tseverien/
[3]: https://www.sitepoint.com/javascript-object-creation-patterns-best-practises/?utm_source=sitepoint&utm_medium=relatedinline&utm_term=&utm_campaign=relatedauthor
[4]: https://www.sitepoint.com/quick-tip-master-closures-by-reimplementing-them-from-scratch/?utm_source=sitepoint&utm_medium=relatedinline&utm_term=&utm_campaign=relatedauthor
[5]: http://www.sitepoint.com/preparing-ecmascript-6-map-weakmap/
[6]: http://stackoverflow.com/q/2866987/1136887
[7]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
[8]: https://en.wikipedia.org/wiki/Liskov_substitution_principle
[9]: http://www.sitepoint.com/preparing-ecmascript-6-proxies/
[10]: https://kangax.github.io/compat-table/es6/#test-class

  