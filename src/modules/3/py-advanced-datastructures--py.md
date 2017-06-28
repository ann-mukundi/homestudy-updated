
[Source - https://code.tutsplus.com/articles](https://code.tutsplus.com/articles/advanced-python-data-structures--net-32748 "Permalink to Advanced Python Data Structures")

# Advanced Python Data Structures

The aim of this tutorial is to show off [Python's][1] data structures and the best way to use them. Depending on what you need from a data structure, whether it's fast lookup, immutability, indexing, etc, you can choose the best data structure for the job and most of the time, you will be combining data structures together to obtain a logical and easy to understand data model.

* * *

## Introduction

Python data structures are very intuitive from a syntax point of view and they offer a large choice of operations. This tutorial tries to put together the most common and useful information about each data structure and offer a guide on when it is best to use one structure or another. You can choose different kinds of data structures depending on what the data involves, if it needs to be modified, or if it's fixed data, and even what access type you would like, such as at the beginning/end/random etc.

* * *

## Lists

A List represents the most versatile type of data structure in Python. It can contain items of different types and it has no rule against unicity. List indices start from zero, the elements can be sliced, concatenated, and so on. Lists also have a lot of similarities with strings, supporting the same kind of operations but unlike strings, lists are _mutable_.

### How to Construct a List

A list can be built using the keyword `list` or using square brackets: `[]`, both of which accept comma separated values. Here's an example:
    
    
    
    >>> l = ['a', 'b', 123]
    >>> l
    ['a', 'b', 123]

### How to Retrieve an Element From a List
    
    
    
    >>> l[0]
    'a'
    >>> l[10]
    Traceback (most recent call last):
    File "", line 1, in 
    IndexError: list index out of range

As seen above, in order to access the data within your list, you must know what index position the element is at, otherwise you get an "index out of range" error.

### How to Slice a List

All slicing operations return a shallow copy of the list. The slicing indexes are optional and they work in the same way as slicing indexes for strings.

Here's an example of how to slice a list:
    
    
    
    >>> l = ['a', 'b', 123]
    >>> l[:]
    ['a', 'b', 123]
    >>> new_l = l[1:]
    >>> new_l
    ['b', 123]
    >>> l
    ['a', 'b', 123]

Let's take a look at some other common list operations.

### Inserting and Removing Elements
    
    
    
    >>> l = ['a', 'b', 123]
    >>> l.append(234) #inserts an element at the end of the list
    >>> l
    ['a', 'b', 123, 234]
    >>> l.insert(2, 'c') #inserts an element into the third position
    >>> l
    ['a', 'b', 'c', 123, 234]
    >>> l.insert(-1, 111) #inserts an element into the second from last position of the list (negative indices start from the end of the list)
    >>> l
    ['a', 'b', 'c', 123, 111, 234]
    >>> l.remove(111) #removes an element based on value
    >>> l
    ['a', 'b', 'c', 123, 234]
    >>> l.remove('does not exist in the list') 
    Traceback (most recent call last):
      File "", line 1, in 
    ValueError: list.remove(x): x not in list

### Retrieving and Looking Up Elements

Lists can also be used as stacks or queues because of how easy it is to add and remove elements from the beginning or end of the list.
    
    
    
    >>> last_element = l.pop() #returns the last element, modifying the list
    >>> last_element
    234
    >>> l
    ['a', 'b', 'c', 123]
    >>> third_element = l.pop(2) #returns the third element, modifying the list
    >>> third_element
    'c'
    >>> l
    ['a', 'b', 123]
    >>> l.index('a') 
    0
    >>> l.index('does not exist in the list')
    Traceback (most recent call last):
      File "", line 1, in 
    ValueError: 'does not exist in the list' is not in list
    >>> l.count('a') #returns the number of occurrences of an element 
    1

### Whole List Operations
    
    
    
    >>> l.extend ([1, 2]) # concatenates a list on to the existing list
    >>> l
    ['a', 'b', 123, 1, 2]
    >>> l.sort()
    >>> l
    [1, 2, 123, 'a', 'b']
    >>> l.reverse()
    >>> l
    ['b', 'a', 123, 2, 1]

As you can see, it's very easy to extend, sort, and reverse lists using the above methods.

### List Comprehensions

A list comprehension means, constructing a list in a way that is very natural from a mathematical point of view. The code for doing this is brief and very easy to read. A simple example of when you would use list comprehensions is when you want to construct a new list based on the elements from another list. Let's have a look at how you can multiply all of the elements of a numeric list by two, in a simple one line construct:
    
    
    
    >>> l = [1, 2, 3]
    >>> new_l = [x*2 for x in l]
    >>> new_l 
    [2, 4, 6]

In the example above, the comprehension is represented by the multiplication expression that will be applied to every `x` element in the original, `l` list.

### When to Use Lists

As shown in the examples above, lists are best used in the following situations:

* When you need a mixed collection of data all in one place.
* When the data needs to be ordered.
* When your data requires the ability to be changed or extended. Remember, lists are mutable.
* When you don't require data to be indexed by a custom value. Lists are numerically indexed and to retrieve an element, you must know its numeric position in the list.
* When you need a stack or a queue. Lists can be easily manipulated by appending/removing elements from the beginning/end of the list.
* When your data doesn't have to be unique. For that, you would use sets.
* * *

## Sets

A set is an unordered collection with no duplicate values. A set can be created by using the keyword `set` or by using curly braces `{}`. However, to create an empty set you can only use the `set` construct, curly braces alone will create an empty dictionary.

> Use the `set` keyword to create an empty set, curly brackets `{}` will create an empty dictionary.

### How to Construct a Set

The `set` construct accepts one argument, a list.
    
    
    
    >>> l = [1, 2, 3]
    >>> s = set(l)
    >>> s
    set([1, 2, 3])

The `{}` construct is straight forward as well:
    
    
    
    >>> s = {1, 2, 3}
    >>> s

Sets are used to eliminate duplicate values from within a list:
    
    
    
    >>> l = [1, 2, 3, 3]
    >>> s = set(l)
    >>> s
    set([1, 2, 3])

The way a `set` detects if a clash between non-unique elements has occurred is by indexing the data in memory, creating a hash for each element. This means that all elements in a set must be hashable.

Here is an example:
    
    
    
    >>> set ([1, [1,2]])
    Traceback (most recent call last):
      File "", line 1, in 
    TypeError: unhashable type: 'list'

Note that a hashable object doesn't necessarily mean that an object has the `__hash__` method available to it. It is important that the hash of the object doesn't change during its lifetime, which is obviously not the case with lists, sets, or dictionaries (dictionaries will be discussed later in this tutorial).

### Set Operations

The `set` structure also supports mathematical operations like:

* Union
* Intersection
* Difference
* Symmetric Difference

Here are a few examples:
    
    
    
    >>> set1 = set([1, 2, 3])
    >>> set2 = set([3, 4, 5])
    >>> set1 | set2 #union
    set([1, 2, 3, 4, 5])
    >>> set1 & set2 #intersection
    set([3])
    >>> set1 -  set2 #difference
    set([1, 2])
    >>> set1 ^ set2 #symmetric difference (elements that are in the first set and the second, but not in both)
    set([1, 2, 4, 5])
    >>>

### Set Comprehensions

Just like lists, sets also support comprehensions. Here is an example of how to use set comprehensions to find the unique consonants within a word:
    
    
    
    >>> vowels = ['a', 'e', 'i', 'o', 'u']
    >>> {x for x in 'maintenance' if x not in vowels }
    set(['c', 'm', 't', 'n'])

### Frozensets

A frozenset is basically just like a regular set, except that is immutable. It is created using the keyword `frozenset`, like this:
    
    
    
    >>> frozen = frozenset([1, 2, 3])

### When to Use Sets

You should choose to use a `set` in the following situations:

* When you need a unique set of data: Sets check the unicity of elements based on hashes.
* When your data constantly changes: Sets, just like lists, are mutable.
* When you need a collection that can be manipulated mathematically: With sets it's easy to do operations like difference, union, intersection, etc.
* When you don't need to store nested lists, sets, or dictionaries in a data structure: Sets don't support unhashable types.
* * *

## Tuples

> Tuples are immutable, but can hold mutable objects.

A tuple is represented by a number of values separated by commas. Unlike lists, tuples are immutable and the output is surrounded by parentheses so that nested tuples are processed correctly. Additionally, even though tuples are immutable, they can hold mutable data if needed.  

### How to Construct a Tuple

Constructing an empty tuple requires parentheses. Here's an example:
    
    
    
    >>> my_empty_tuple = ()
    >>> my_empty_tuple 
    ()

Constructing a tuple with one element requires a trailing comma. Example:
    
    
    
    >>> one_elem_tuple = 'a',
    >>> one_elem_tuple 
    ('a',)
    >>> one_elem_tuple = ('a',)
    >>> one_elem_tuple
    ('a',)

> If the trailing comma is not there when creating a single element tuple, regardless if you use parentheses or not, Python will just interpret the value as a literal and will not create the tuple.

Constructing a tuple with multiple elements requires a list of values separated by commas. Here's an example:
    
    
    
    >>> s = 'a', 'b', [1, 2, 3]
    >>> s
    ('a', 'b', [1, 2, 3])
    >>>

Tuples, from a performance point of view are great because of their immutability. Python will know exactly how much memory to allocate for the data to be stored.

### When to Use Tuples

* When you need to store data that doesn't have to change.
* When the performance of the application is very important. In this situation you can use tuples whenever you have fixed data collections.
* When you want to store your data in logical immutable pairs, triples etc.
* * *

## Dictionaries

Dictionaries are represented by a `key:value` pair. In other words, they are maps or associative collections. The keys, unlike lists where they are numeric, can be of any immutable type and must be unique. The values can be of any type, mutable or immutable. 

### How to Construct a Dictionary

There are several ways to construct a dictionary. The most efficient way in terms of performance is to use curly braces `{}`:
    
    
    
    >>> vowels = {1: 'a', 2: 'e', 3: 'i', 4: 'o', 5:'u'}
    >>> vowels
    {1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u'}

Another way to create a dictionary is by using comprehensions. By using an input collection you can create the `key:value` pairs in one simple construct.

Here's an example:
    
    
    
    >>> {x:x*x for x in (1, 2, 3)}
    {1: 1, 2: 4, 3: 9}

You can also use the keyword `dict` and get the same result. The `dict` construct takes as an argument, a list of `key:value` pairs. Here's one in action:
    
    
    
    >>> dict([(1,'a'), (2,'e'), (3,'i'), (4,'o'), (5,'u')])
    {1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u'}

If the keys are strings, you can use the following keyword expression:
    
    
    
    >>> dict(a=1, e=2, i=3, o=4, u=5)
    {'i': 3, 'u': 5, 'e': 2, 'a': 1, 'o': 4}

However, it does not work the other way around when the keywords are numeric:
    
    
    
    >>> dict(1=a, 2=e, 3=i, 4=o, 5=u)
      File "", line 1
    SyntaxError: keyword can't be an expression

### Dictionary Operations

Accessing data in a dictionary is very straight forward, just wrap its key name within square brackets:
    
    
    
    >>> vowels = {1: 'a', 2: 'e', 3: 'i', 4: 'o', 5:'u'}
    >>> vowels[1]
    'a'
    >>> vowels[10]
    Traceback (most recent call last):
      File "", line 1, in 
    KeyError: 10
    >>>

As seen above, a `KeyError` occurs if the key doesn't exist in the dictionary.

Also, a `key:value` pair can be deleted using the `del` keyword, like so:
    
    
    
    >>> vowels = {1: 'a', 2: 'e', 3: 'i', 4: 'o', 5:'u'}
    >>> del(vowels[1])
    >>> vowels
    {2: 'e', 3: 'i', 4: 'o', 5: 'u'}
    >>> del(vowels[10])
    Traceback (most recent call last):
      File "", line 1, in 
    KeyError: 10
    >>>

### Built-in Methods

Dictionaries support many built-in methods, but some of the most useful ones are: `keys()`, `values()`, `iteritems()`, `itervalues()`, and `has_key()`.

Here's an example: 
    
    
    
    >>> vowels = {1: 'a', 2: 'e', 3: 'i', 4: 'o', 5:'u'}
    >>> vowels.keys()
    [1, 2, 3, 4, 5]
    >>> vowels.values()
    ['a', 'e', 'i', 'o', 'u']

The methods `iteritems()` and `itervalues()` return iterators, so they can be used in `for` loops. Here's an example:
    
    
    
    >>> for k, v in vowels.iteritems():
    ...     print k, v
    ... 
    1 a
    2 e
    3 i
    4 o
    5 u
    >>> for v in vowels.itervalues():
    ...     print v
    ... 
    a
    e
    i
    o
    u
    >>>

### When to Use a Dictionary

* When you need a logical association between a `key:value` pair.
* When you need fast lookup for your data, based on a custom key.
* When your data is being constantly modified. Remember, dictionaries are mutable.
* * *

## Conclusion

#### General Python Data Structure Usage

* Use lists if you have a collection of data that does not need random access. For random access, you need to have knowledge of the element's numeric index. Try to choose lists when you need a simple, iterable collection that is modified frequently. Lists are very useful in comprehension expressions for constructing sets or dictionaries.
* Use a set if you need unicity for the elements and you don't need a nested dictionary or list. Also remember that a set cannot hold any unhashable data types.
* Use tuples when your data cannot change. Many times, a tuple is used in combination with a dictionary, for example, a tuple might represent a key, because it's immutable.
* Use frozensets if you need both unique data and immutability.

#### Other Tips

* Every data structure has a multitude of built in methods and capabilities. If you go through them carefully you'll learn how the data is meant to be used. For example, if you call `dir` and pass in a set object, you will see that it holds a lot of methods that can perform mathematical operations.
* Most of the time, your data needs to adapt to the operations that you want to perform. So if you know your object will be hashed, create an immutable structure.
* Most data structures have multiple ways of constructing or accessing its data. If you are concerned about the performance of your application always read the documentation or read the source code of the construct implementation to find out more about its performance. For example, creating a dictionary by using `dict` offers less performance than using the curly braces (`{}`) syntax.
* While debugging, many developers find it useful to learn how to identify and connect the error that they are receiving to a specific data structure. For example, you'll find that lists throw `IndexError` and `ValueError` and dictionaries throw `KeyError`. This technique should help you with detecting which of your data structures is causing the error.

[1]: http://www.python.org/

  