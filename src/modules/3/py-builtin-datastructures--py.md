
[Source - https://www.codecademy.com](https://www.codecademy.com/courses/python-s-built-in-data-structures/0/0 "Permalink to Python's Built In Data Structures")

# Python's Built In Data Structures

Arrays have special properties that translate better to other languages. First of all they have a fixed size. Lists, sets, and dicts can be changed in size. Secondly they are strongly typed, meaning that you can't just throw any old things in there like you can with the other data structures. What makes them better is that they can immediately access someplace in an array, and for some problems being able to move through data fast is an issue that has to be addressed. 

```python

# Arrays need a type code. There is a list of type codes available
# here: http://docs.python.org/library/array.html Note that the only
# arrays you can make are primitive data types, like characters and
# numbers and that sort of thing.

# You have to import arrays from the array module, as arrays are a
# class.

import array

# Next, let's make a list of integers:

myList = [1, 2, 3, 4]

# Now with this list consider the fact that they have all the same
# type of value: all integers. Since arrays are objects we have to
# make a new one based on the constructor:

# array(typecode)

# This constructor isn't complete but it has some optional arguments,
# you can look that up on your own. The type code is a character and
# for integers it is 'i'. Again the
# http://docs.python.org/library/array.html page has a table at the
# top listing the typecodes.

myArray = array.array('i')
myArray.fromlist(myList)

# Note the fact we had to take two steps to do this. First we
# constructed the object and assigned to myArray. Then we called the
# fromList function from myArray and gave it myList to construct the
# array.

# We will look at some of the ways to access things in an array later
# on.

##
#  Exercise
##

# If 'f' is a type code for floating point values, and someValues is a
# list of floats, make an array and assign it to floatArray.

someValues = [ 1.0, 2.0, 3.0, 4.0 ]

floatArray =
```

  