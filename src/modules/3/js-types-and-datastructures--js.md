
[Source - https://developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures "Permalink to JavaScript data types and data structures - JavaScript")

# JavaScript data types and data structures - JavaScript

Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have; these can be used to build other data structures. When possible, comparisons with other languages are drawn.

## Dynamic typing

JavaScript is a _loosely typed_ or a _dynamic_ language. That means you don't have to declare the type of a variable ahead of time. The type will get determined automatically while the program is being processed. That also means that you can have the same variable as different types:
    
    
    var foo = 42;    // foo is now a Number
    var foo = 'bar'; // foo is now a String
    var foo = true;  // foo is now a Boolean
    

## Data types

The latest ECMAScript standard defines seven data types:

## Primitive values

All types except objects define immutable values (values, which are incapable of being changed). For example and unlike to C, Strings are immutable. We refer to values of these types as "primitive values".

### Boolean type

Boolean represents a logical entity and can have two values: `true`, and `false`.

### Null type

The Null type has exactly one value: `null`. See [`null`][1] and [Null][2] for more details.

### Undefined type

A variable that has not been assigned a value has the value `undefined`. See [`undefined`][3] and [Undefined][4] for more details.

### Number type

According to the ECMAScript standard, there is only one number type: the [double-precision 64-bit binary format IEEE 754 value][5] (number between -(253 -1) and 253 -1). **There is no specific type for integers**. In addition to being able to represent floating-point numbers, the number type has three symbolic values: `+Infinity`, `-Infinity`, and [`NaN`][6] (not-a-number).

To check for the largest available value or smallest available value within `+/-Infinity`, you can use the constants [`Number.MAX_VALUE`][7] or [`Number.MIN_VALUE`][8] and starting with ECMAScript 6, you are also able to check if a number is in the double-precision floating-point number range using [`Number.isSafeInteger()`][9] as well as [`Number.MAX_SAFE_INTEGER`][10] and [`Number.MIN_SAFE_INTEGER`][11]. Beyond this range, integers in JavaScript are not safe anymore and will be a double-precision floating point approximation of the value.

The number type has only one integer that has two representations: 0 is represented as -0 and +0. ("0" is an alias for +0). In the praxis, this has almost no impact. For example `+0 === -0` is `true`. However, you are able to notice this when you divide by zero:
    
    
    > 42 / +0
    Infinity
    > 42 / -0
    -Infinity
    

Although a number often represents only its value, JavaScript provides [some binary operators][12]. These can be used to represent several Boolean values within a single number using [bit masking][13]. However, this is usually considered a bad practice, since JavaScript offers other means to represent a set of Booleans (like an array of Booleans or an object with Boolean values assigned to named properties). Bit masking also tends to make code more difficult to read, understand, and maintain. It may be necessary to use such techniques in very constrained environments, like when trying to cope with the storage limitation of local storage or in extreme cases when each bit over the network counts. This technique should only be considered when it is the last measure that can be taken to optimize size.

### String type

JavaScript's [`String`][14] type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values. Each element in the String occupies a position in the String. The first element is at index 0, the next at index 1, and so on. The length of a String is the number of elements in it.

Unlike in languages like C, JavaScript strings are immutable. This means that once a string is created, it is not possible to modify it. However, it is still possible to create another string based on an operation on the original string. For example:

* A substring of the original by picking individual letters or using [`String.substr()`][15].
* A concatenation of two strings using the concatenation operator (`+`) or [`String.concat()`][16].

#### Beware of "stringly-typing" your code!

It can be tempting to use strings to represent complex data. Doing this comes with short-term benefits:

* It is easy to build complex strings with concatenation.
* Strings are easy to debug (what you see printed is always what is in the string).
* Strings are the common denominator of a lot of APIs ([input fields][17], [local storage][18] values, [`XMLHttpRequest`][19] responses when using `responseText`, etc.) and it can be tempting to only work with strings.

With conventions, it is possible to represent any data structure in a string. This does not make it a good idea. For instance, with a separator, one could emulate a list (while a JavaScript array would be more suitable). Unfortunately, when the separator is used in one of the "list" elements, then, the list is broken. An escape character can be chosen, etc. All of this requires conventions and creates an unnecessary maintenance burden.

Use strings for textual data. When representing complex data, parse strings and use the appropriate abstraction.

### Symbol type

Symbols are new to JavaScript in ECMAScript Edition 6. A Symbol is a **unique** and **immutable** primitive value and may be used as the key of an Object property (see below). In some programming languages, Symbols are called atoms. You can also compare them to named enumerations (enum) in C. For more details see [Symbol][20] and the [`Symbol`][21] object wrapper in JavaScript.

## Objects

In computer science, an object is a value in memory which is possibly referenced by an [identifier][22].

### Properties

In JavaScript, objects can be seen as a collection of properties. With the [object literal syntax][23], a limited set of properties are initialized; then properties can be added and removed. Property values can be values of any type, including other objects, which enables building complex data structures. Properties are identified using key values. A key value is either a String or a Symbol value.

There are two types of object properties which have certain attributes: The data property and the accessor property.

#### Data property

Associates a key with a value and has the following attributes:

Attributes of a data property 
| ----- |
| Attribute |  Type |  Description |  Default value |  
| [[Value]] |  Any JavaScript type |  The value retrieved by a get access of the property. |  undefined |  
| [[Writable]] |  Boolean |  If `false`, the property's [[Value]] can't be changed. |  false |  
| [[Enumerable]] |  Boolean |  If `true`, the property will be enumerated in [for...in][24] loops. See also [Enumerability and ownership of properties][25] |  false |  
| [[Configurable]] |  Boolean |  If `false`, the property can't be deleted and attributes other than [[Value]] and [[Writable]] can't be changed. |  false | 

Obsolete attributes (as of ECMAScript 3, renamed in ECMAScript 5) 
| ----- |
| Attribute |  Type |  Description |  
| Read-only |  Boolean |  Reversed state of the ES5 [[Writable]] attribute. |  
| DontEnum |  Boolean |  Reversed state of the ES5 [[Enumerable]] attribute. |  
| DontDelete |  Boolean |  Reversed state of the ES5 [[Configurable]] attribute. | 

#### Accessor property

Associates a key with one or two accessor functions (get and set) to retrieve or store a value and has the following attributes:

Attributes of an accessor property 
| ----- |
| Attribute |  Type |  Description |  Default value |  
| [[Get]] |  Function object or undefined |  The function is called with an empty argument list and retrieves the property value whenever a get access to the value is performed. See also [`get`][26]. |  undefined |  
| [[Set]] |  Function object or undefined |  The function is called with an argument that contains the assigned value and is executed whenever a specified property is attempted to be changed. See also [`set`][27]. |  undefined |  
| [[Enumerable]] |  Boolean |  If `true`, the property will be enumerated in [for...in][24] loops. |  false |  
| [[Configurable]] |  Boolean |  If `false`, the property can't be deleted and can't be changed to a data property. |  false | 

**Note: **Attribute is usually used by JavaScript engine, so you can't directly access it(see more about [Object.defineProperty()][28]).That's why the attribute is put in double square brackets instead of single.

### "Normal" objects, and functions

A JavaScript object is a mapping between keys and values. Keys are strings (or [`Symbol`][21]s) and values can be anything. This makes objects a natural fit for [hashmaps][29].

Functions are regular objects with the additional capability of being callable.

### Dates

When representing dates, the best choice is to use the built-in `[Date` utility][30] in JavaScript.

### Indexed collections: Arrays and typed Arrays

[Arrays][31] are regular objects for which there is a particular relationship between integer-key-ed properties and the 'length' property. Additionally, arrays inherit from `Array.prototype` which provides to them a handful of convenient methods to manipulate arrays. For example, `[indexOf][32]` (searching a value in the array) or `[push][33]` (adding an element to the array), etc. This makes Arrays a perfect candidate to represent lists or sets.

[Typed Arrays][34] are new to JavaScript with ECMAScript Edition 6 and present an array-like view of an underlying binary data buffer. The following table helps you to find the equivalent C data types:

#### TypedArray objects

| -----                     |  
|  
| `[Int8Array`][35]         | 1 | 8-bit two's complement signed integer  | `byte`                | `int8_t`   |  
| `[Uint8Array`][36]        | 1 | 8-bit unsigned integer                 | `octet`               | `uint8_t`  |  
| `[Uint8ClampedArray`][37] | 1 | 8-bit unsigned integer (clamped)       | `octet`               | `uint8_t`  |  
| `[Int16Array`][38]        | 2 | 16-bit two's complement signed integer | `short`               | `int16_t`  |  
| `[Uint16Array`][39]       | 2 | 16-bit unsigned integer                | `unsigned short`      | `uint16_t` |  
| `[Int32Array`][40]        | 4 | 32-bit two's complement signed integer | `long`                | `int32_t`  |  
| `[Uint32Array`][41]       | 4 | 32-bit unsigned integer                | `unsigned long`       | `uint32_t` |  
| `[Float32Array`][42]      | 4 | 32-bit IEEE floating point number      | `unrestricted float`  | `float`    |  
| `[Float64Array`][43]      | 8 | 64-bit IEEE floating point number      | `unrestricted double` | `double`   |  

### Keyed collections: Maps, Sets, WeakMaps, WeakSets

These data structures take object references as keys and are introduced in ECMAScript Edition 6. `[Set`][44] and `[WeakSet`][45] represent a set of objects, while `[Map`][46] and `[WeakMap`][47] associate a value to an object. The difference between Maps and WeakMaps is that in the former, object keys can be enumerated over. This allows garbage collection optimizations in the latter case.

One could implement Maps and Sets in pure ECMAScript 5. However, since objects cannot be compared (in the sense of "less than" for instance), look-up performance would necessarily be linear. Native implementations of them (including WeakMaps) can have look-up performance that is approximately logarithmic to constant time.

Usually, to bind data to a DOM node, one could set properties directly on the object or use `data-*` attributes. This has the downside that the data is available to any script running in the same context. Maps and WeakMaps make it easy to privately bind data to an object.

### Structured data: JSON

JSON (JavaScript Object Notation) is a lightweight data-interchange format, derived from JavaScript but used by many programming languages. JSON builds universal data structures. See [JSON][48] and `[JSON`][49] for more details.

### More objects in the standard library

JavaScript has a standard library of built-in objects. Please have a look at the [reference][50] to find out about more objects.

## Determining types using the `typeof` operator

The `typeof` operator can help you to find the type of your variable. Please read the [reference page][51] for more details and edge cases.

## Specifications

## See also

Was this article helpful?

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values."
[2]: https://developer.mozilla.org/en-US/docs/Glossary/Null "Null: In computer science, a null value represents a reference that points, generally intentionally, to a nonexistent or invalid object or address. The meaning of a null reference varies among language implementations."
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types."
[4]: https://developer.mozilla.org/en-US/docs/Glossary/Undefined "Undefined: A primitive value automatically assigned to variables that have just been declared or to formal arguments for which there are no actual arguments."
[5]: http://en.wikipedia.org/wiki/Double_precision_floating-point_format
[6]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
[7]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE "The Number.MAX_VALUE property represents the maximum numeric value representable in JavaScript."
[8]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE "The Number.MIN_VALUE property represents the smallest positive numeric value representable in JavaScript."
[9]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger "The Number.isSafeInteger() method determines whether the provided value is a number that is a safe integer. A safe integer is an integer that"
[10]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER "The Number.MAX_SAFE_INTEGER constant represents the maximum safe integer in JavaScript (253 - 1)."
[11]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER "The Number.MIN_SAFE_INTEGER constant represents the minimum safe integer in JavaScript (-(253 - 1))."
[12]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators "en/JavaScript/Reference/Operators/Bitwise_Operators"
[13]: http://en.wikipedia.org/wiki/Mask_%28computing%29
[14]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "The String global object is a constructor for strings, or a sequence of characters."
[15]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr "The substr() method returns the characters in a string beginning at the specified location through the specified number of characters."
[16]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat "The concat() method combines the text of one or more strings and returns a new string."
[17]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement "HTMLInputElement"
[18]: https://developer.mozilla.org/en-US/docs/Storage "Storage"
[19]: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest "XMLHttpRequest is an API that provides client functionality for transferring data between a client and a server. It provides an easy way to retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just a part of the page without disrupting what the user is doing."
[20]: https://developer.mozilla.org/en-US/docs/Glossary/Symbol "Symbol: This glossary page describes both a data type, called "symbol", and the class like function, called "Symbol()", that (among other things) creates instances of the symbol data type."
[21]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol "The Symbol() function returns a value of type symbol, has static properties that expose several members of built-in objects, has static methods that expose the global symbol registry, and resembles a built-in object class but is incomplete as a constructor because it does not support the syntax "new Symbol()"."
[22]: https://developer.mozilla.org/en-US/docs/Glossary/Identifier "identifier: A sequence of characters in the code that identifies a variable, function, or property."
[23]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Values%2C_variables%2C_and_literals#Object_literals
[24]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
[25]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties
[26]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/get
[27]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/set
[28]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
[29]: http://en.wikipedia.org/wiki/Hash_table
[30]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[31]: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array "Array"
[32]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf "en/JavaScript/Reference/Global_Objects/Array/indexOf"
[33]: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/push "en/JavaScript/Reference/Global_Objects/Array/push"
[34]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays
[35]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array "The Int8Array typed array represents an array of twos-complement 8-bit signed integers. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."
[36]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array "The Uint8Array typed array represents an array of 8-bit unsigned integers. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."
[37]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray "The Uint8ClampedArray typed array represents an array of 8-bit unsigned integers clamped to 0-255; if you specified a value that is out of the range of [0,255], 0 or 255 will be set instead; if you specify a non-integer, the nearest integer will be set. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."
[38]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array "The Int16Array typed array represents an array of twos-complement 16-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."
[39]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array "The Uint16Array typed array represents an array of 16-bit unsigned integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."
[40]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array "The Int32Array typed array represents an array of twos-complement 32-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."
[41]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array "The Uint32Array typed array represents an array of 32-bit unsigned integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."
[42]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array "The Float32Array typed array represents an array of 32-bit floating point numbers (corresponding to the C float data type) in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."
[43]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array "The Float64Array typed array represents an array of 64-bit floating point numbers (corresponding to the C double data type) in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."
[44]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set "Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection."
[45]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet "The WeakSet object lets you store weakly held objects in a collection."
[46]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map "The Map object is a simple key/value map. Any value (both objects and primitive values) may be used as either a key or a value."
[47]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap "The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced.  The keys must be objects and the values can be arbitrary values."
[48]: https://developer.mozilla.org/en-US/docs/Glossary/JSON "JSON: The JavaScript Object Notation (JSON) is a data-interchange format.  Although not a strict subset, JSON closely resembles a subset of JavaScript syntax. Though many programming languages support JSON, JSON is especially useful for JavaScript-based apps, including websites and browser extensions."
[49]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "The JSON object contains methods for parsing JavaScript Object Notation (JSON) and converting values to JSON. It can't be called or constructed, and aside from its two method properties it has no interesting functionality of its own."
[50]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
[51]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

  