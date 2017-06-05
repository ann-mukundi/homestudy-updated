
[Source - https://developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction "Permalink to Introduction - JavaScript | MDN")

# Introduction - JavaScript | MDN

This chapter introduces JavaScript and discusses some of its fundamental concepts.

## What you should already know

This guide assumes you have the following basic background:

* A general understanding of the Internet and the World Wide Web ([WWW][1]).
* Good working knowledge of HyperText Markup Language ([HTML][2]).
* Some programming experience. If you are new to programming, try one of the tutorials linked on the main page about [JavaScript][3].

## Where to find JavaScript information

The JavaScript documentation on MDN includes the following:

* [Learning the Web][4] provides information for beginners and introduces basic concepts of programming and the Internet.
* [JavaScript Guide][5] (this guide) provides an overview about the JavaScript language and its objects.
* [JavaScript Reference][6] provides detailed reference material for JavaScript.

If you are new to JavaScript, start with the articles in the [learning area][4] and the [JavaScript Guide][5]. Once you have a firm grasp of the fundamentals, you can use the [JavaScript Reference][6] to get more details on individual objects and statements.

## What is JavaScript?

JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.

JavaScript contains a standard library of objects, such as `Array`, `Date`, and `Math`, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:

* _Client-side JavaScript_ extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.
* _Server-side JavaScript_ extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.

## JavaScript and Java

JavaScript and Java are similar in some ways but fundamentally different in some others. The JavaScript language resembles Java but does not have Java's static typing and strong type checking. JavaScript follows most Java expression syntax, naming conventions and basic control-flow constructs which was the reason why it was renamed from LiveScript to JavaScript.

In contrast to Java's compile-time system of classes built by declarations, JavaScript supports a runtime system based on a small number of data types representing numeric, Boolean, and string values. JavaScript has a prototype-based object model instead of the more common class-based object model. The prototype-based model provides dynamic inheritance; that is, what is inherited can vary for individual objects. JavaScript also supports functions without any special declarative requirements. Functions can be properties of objects, executing as loosely typed methods.

JavaScript is a very free-form language compared to Java. You do not have to declare all variables, classes, and methods. You do not have to be concerned with whether methods are public, private, or protected, and you do not have to implement interfaces. Variables, parameters, and function return types are not explicitly typed.

Java is a class-based programming language designed for fast execution and type safety. Type safety means, for instance, that you can't cast a Java integer into an object reference or access private memory by corrupting Java bytecodes. Java's class-based model means that programs consist exclusively of classes and their methods. Java's class inheritance and strong typing generally require tightly coupled object hierarchies. These requirements make Java programming more complex than JavaScript programming.

In contrast, JavaScript descends in spirit from a line of smaller, dynamically typed languages such as HyperTalk and dBASE. These scripting languages offer programming tools to a much wider audience because of their easier syntax, specialized built-in functionality, and minimal requirements for object creation.

JavaScript compared to Java 

| JavaScript                                                                                                                                                                   | Java                                                                                                                                                                                     |  
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Object-oriented. No distinction between types of objects. Inheritance is through the prototype mechanism, and properties and methods can be added to any object dynamically. | Class-based. Objects are divided into classes and instances with all inheritance through the class hierarchy. Classes and instances cannot have properties or methods added dynamically. |  
| Variable data types are not declared (dynamic typing).                                                                                                                       | Variable data types must be declared (static typing).                                                                                                                                    |  
| Cannot automatically write to hard disk.                                                                                                                                     | Can automatically write to hard disk.                                                                                                                                                    |  

For more information on the differences between JavaScript and Java, see the chapter [Details of the object model][7].

## JavaScript and the ECMAScript specification

JavaScript is standardized at [Ecma International][8] — the European association for standardizing information and communication systems (ECMA was formerly an acronym for the European Computer Manufacturers Association) to deliver a standardized, international programming language based on JavaScript. This standardized version of JavaScript, called ECMAScript, behaves the same way in all applications that support the standard. Companies can use the open standard language to develop their implementation of JavaScript. The ECMAScript standard is documented in the ECMA-262 specification. See [New in JavaScript][9] to learn more about different versions of JavaScript and ECMAScript specification editions.

The ECMA-262 standard is also approved by the [ISO][10] (International Organization for Standardization) as ISO-16262. You can also find the specification on [the Ecma International website][11]. The ECMAScript specification does not describe the Document Object Model (DOM), which is standardized by the [World Wide Web Consortium (W3C)][12] and/or [WHATWG (Web Hypertext Application Technology Working Group)][13]. The DOM defines the way in which HTML document objects are exposed to your script. To get a better idea about the different technologies that are used when programming with JavaScript, consult the article [JavaScript technologies overview][14].

### JavaScript documentation versus the ECMAScript specification

The ECMAScript specification is a set of requirements for implementing ECMAScript; it is useful if you want to implement standards-compliant language features in your ECMAScript implementation or engine (such as SpiderMonkey in Firefox, or v8 in Chrome).

The ECMAScript document is not intended to help script programmers; use the JavaScript documentation for information on writing scripts.

The ECMAScript specification uses terminology and syntax that may be unfamiliar to a JavaScript programmer. Although the description of the language may differ in ECMAScript, the language itself remains the same. JavaScript supports all functionality outlined in the ECMAScript specification.

The JavaScript documentation describes aspects of the language that are appropriate for a JavaScript programmer.

## Getting started with JavaScript

Getting started with JavaScript is easy: all you need is a modern Web browser. This guide includes some JavaScript features which are only currently available in the latest versions of Firefox, so using the most recent version of Firefox is recommended.

There are two tools built into Firefox that are useful for experimenting with JavaScript: the Web Console and Scratchpad.

### The Web Console

The [Web Console][15] shows you information about the currently loaded Web page, and also includes a [command line][16] that you can use to execute JavaScript expressions in the current page.

To open the Web Console (Ctrl+Shift+K on Windows and Linux or Cmd-Option-K on Mac), select "Web Console" from the "Developer" menu, which is under the "Tools" menu in Firefox. It appears at the bottom of the browser window. Along the bottom of the console is a command line that you can use to enter JavaScript, and the output appears in the pane above:

![][17]

### Scratchpad

The Web Console is great for executing single lines of JavaScript, but although you can execute multiple lines, it's not very convenient for that, and you can't save your code samples using the Web Console. So for more complex examples [Scratchpad][18] is a better tool.

To open Scratchpad (Shift+F4), select "Scratchpad" from the "Developer" menu, which is under the menu in Firefox. It opens in a separate window and is an editor that you can use to write and execute JavaScript in the browser. You can also save scripts to disk and load them from disk.

![][19]

### Hello world

To get started with writing JavaScript, open the Scratchpad and write your first "Hello world" JavaScript code:
    
    
    function greetMe(yourName) {
      alert('Hello ' + yourName);
    }
    
    greetMe('World');
    

Select the code in the pad and hit Ctrl+R to watch it unfold in your browser!

In the following pages, this guide will introduce you to the JavaScript syntax and language features, so that you will be able to write more complex applications.

Was this article helpful?

[1]: https://developer.mozilla.org/en-US/docs/Glossary/WWW "WWW: The World Wide Web—commonly referred to as WWW, W3, or the Web—is a system of interconnected public webpages accessible through the Internet. The Web is not the same as the Internet: the Web is one of many applications built on top of the Internet."
[2]: https://developer.mozilla.org/en-US/docs/Glossary/HTML "HTML: HTML (HyperText Markup Language) is a descriptive language that specifies webpage structure."
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[4]: https://developer.mozilla.org/en-US/Learn
[5]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
[6]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
[7]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
[8]: http://www.ecma-international.org/
[9]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript
[10]: http://www.iso.ch/
[11]: http://www.ecma-international.org/publications/standards/Ecma-262.htm
[12]: http://www.w3.org/
[13]: https://whatwg.org
[14]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview
[15]: https://developer.mozilla.org/en-US/docs/Tools/Web_Console
[16]: https://developer.mozilla.org/en-US/docs/Tools/Web_Console#The_command_line_interpreter
[17]: https://mdn.mozillademos.org/files/7363/web-console-commandline.png
[18]: https://developer.mozilla.org/en-US/docs/Tools/Scratchpad
[19]: https://mdn.mozillademos.org/files/13468/scratchpad.png

  