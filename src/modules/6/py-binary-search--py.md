
[Source - http://interactivepython.org](http://interactivepython.org/runestone/static/pythonds/SortSearch/TheBinarySearch.html "Permalink to 5.4. The Binary Search — Problem Solving with Algorithms and Data Structures")

# 5.4. The Binary Search — Problem Solving with Algorithms and Data Structures

It is possible to take greater advantage of the ordered list if we are clever with our comparisons. In the sequential search, when we compare against the first item, there are at most (n-1) more items to look through if the first item is not what we are looking for. Instead of searching the list in sequence, a **binary search** will start by examining the middle item. If that item is the one we are searching for, we are done. If it is not the correct item, we can use the ordered nature of the list to eliminate half of the remaining items. If the item we are searching for is greater than the middle item, we know that the entire lower half of the list as well as the middle item can be eliminated from further consideration. The item, if it is in the list, must be in the upper half.

We can then repeat the process with the upper half. Start at the middle item and compare it against what we are looking for. Again, we either find it or split the list in half, therefore eliminating another large part of our possible search space. [Figure 3][1] shows how this algorithm can quickly find the value 54. The complete function is shown in [CodeLens 3][2].

![../_images/binsearch.png][3]

Figure 3: Binary Search of an Ordered List of Integers

```python
def binarySearch(alist, item):
	    first = 0
	    last = len(alist)-1
	    found = False
	
	    while first<=last and not found:
	        midpoint = (first + last)//2
	        if alist[midpoint] == item:
	            found = True
	        else:
	            if item < alist[midpoint]:
	                last = midpoint-1
	            else:
	                first = midpoint+1
	
	    return found
	
	testlist = [0, 1, 2, 8, 13, 17, 19, 32, 42,]
	print(binarySearch(testlist, 3))
	print(binarySearch(testlist, 13))
```

Binary Search of an Ordered List (search3)

Before we move on to the analysis, we should note that this algorithm is a great example of a divide and conquer strategy. Divide and conquer means that we divide the problem into smaller pieces, solve the smaller pieces in some way, and then reassemble the whole problem to get the result. When we perform a binary search of a list, we first check the middle item. If the item we are searching for is less than the middle item, we can simply perform a binary search of the left half of the original list. Likewise, if the item is greater, we can perform a binary search of the right half. Either way, this is a recursive call to the binary search function passing a smaller list. [CodeLens 4][4] shows this recursive version.

```python
def binarySearch(alist, item):
	    if len(alist) == 0:
	        return False
	    else:
	        midpoint = len(alist)//2
	        if alist[midpoint]==item:
	          return True
	        else:
	          if item<alist[midpoint]:
	            return binarySearch(alist[:midpoint],item)
	          else:
	            return binarySearch(alist[midpoint+1:],item)
	
	testlist = [0, 1, 2, 8, 13, 17, 19, 32, 42,]
	print(binarySearch(testlist, 3))
	print(binarySearch(testlist, 13))
```
A Binary Search--Recursive Version (search4)

## 5.4.1. Analysis of Binary Search

To analyze the binary search algorithm, we need to recall that each comparison eliminates about half of the remaining items from consideration. What is the maximum number of comparisons this algorithm will require to check the entire list? If we start with _n_ items, about (frac{n}{2}) items will be left after the first comparison. After the second comparison, there will be about (frac{n}{4}). Then (frac{n}{8}), (frac{n}{16}), and so on. How many times can we split the list? [Table 3][5] helps us to see the answer.

**Table 3: Tabular Analysis for a Binary Search** 

| **Comparisons** | **Approximate Number of Items Left** |  
| --------------- | ------------------------------------ |  
| 1               | (frac {n}{2})                        |  
| 2               | (frac {n}{4})                        |  
| 3               | (frac {n}{8})                        |  
| ...             |                                      |  
| i               | (frac {n}{2^i})                      |  

When we split the list enough times, we end up with a list that has just one item. Either that is the item we are looking for or it is not. Either way, we are done. The number of comparisons necessary to get to this point is _i_ where (frac {n}{2^i} =1). Solving for _i_ gives us (i=log n). The maximum number of comparisons is logarithmic with respect to the number of items in the list. Therefore, the binary search is (O(log n)).

One additional analysis issue needs to be addressed. In the recursive solution shown above, the recursive call,

`binarySearch(alist[:midpoint],item)`

uses the slice operator to create the left half of the list that is then passed to the next invocation (similarly for the right half as well). The analysis that we did above assumed that the slice operator takes constant time. However, we know that the slice operator in Python is actually O(k). This means that the binary search using slice will not perform in strict logarithmic time. Luckily this can be remedied by passing the list along with the starting and ending indices. The indices can be calculated as we did in [Listing 3][2]. We leave this implementation as an exercise.

Even though a binary search is generally better than a sequential search, it is important to note that for small values of _n_, the additional cost of sorting is probably not worth it. In fact, we should always consider whether it is cost effective to take on the extra work of sorting to gain searching benefits. If we can sort once and then search many times, the cost of the sort is not so significant. However, for large lists, sorting even once can be so expensive that simply performing a sequential search from the start may be the best choice.

[1]: http://interactivepython.org#fig-binsearch
[2]: http://interactivepython.org#lst-binarysearchpy
[3]: http://interactivepython.org/runestone/static/pythonds/_images/binsearch.png
[4]: http://interactivepython.org#lst-recbinarysearch
[5]: http://interactivepython.org#tbl-binaryanalysis

  