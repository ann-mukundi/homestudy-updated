
[Source - http://danishmujeeb.com](http://danishmujeeb.com/blog/2014/01/basic-sorting-algorithms-implemented-in-python/ "Permalink to Basic Sorting Algorithms Implemented In Python – Danish Mujeeb")

# Basic Sorting Algorithms Implemented In Python – Danish Mujeeb

This post includes Python based implementation of some of the classic basic sorting algorithms. Although Python already includes the excellent [Timsort][1] algorithm implementation, this was done more as an academic exercise to not forget the basic principles of sorting.

## Setup and Driver Program

Each sorting algorithm is implemented as a Python function, which will sort the list in-place. I used the following piece of code to test all the algorithms.

```python
import random
 
random_items = [random.randint(-50, 100) for c in range(32)]
 
print 'Before: ', random_items
insertion_sort(random_items)
print 'After : ', random_items
```

## Bubble Sort


Bubble sort is one of the most basic sorting algorithm that is the simplest to understand. It's basic idea is to bubble up the largest(or smallest), then the 2nd largest and the the 3rd and so on to the end of the list. Each bubble up takes a full sweep through the list.

```python
def bubble_sort(items):
        """ Implementation of bubble sort """
        for i in range(len(items)):
                for j in range(len(items)-1-i):
                        if items[j] &gt; items[j+1]:
                                items[j], items[j+1] = items[j+1], items[j]    

```

## Insertion Sort

Insertion sort works by taking elements from the unsorted list and inserting them at the right place in a new sorted list. The sorted list is empty in the beginning. Since the total number of elements in the new and old list stays the same, we can use the same list to represent the sorted and the unsorted sections.

```python
def insertion_sort(items):
        """ Implementation of insertion sort """
        for i in range(1, len(items)):
                j = i
                while j &gt; 0 and items[j] &lt; items[j-1]:
                        items[j], items[j-1] = items[j-1], items[j]
                        j -= 1
```



## Merge Sort


Merge sort works by subdividing the the list into two sub-lists, sorting them using Merge sort and then merging them back up. As the recursive call is made to subdivide each list into a sublist, they will eventually reach the size of 1, which is technically a sorted list.

```python
def merge_sort(items):
        """ Implementation of mergesort """
        if len(items) &gt; 1:

                mid = len(items) / 2        # Determine the midpoint and split
                left = items[0:mid]
                right = items[mid:]

                merge_sort(left)            # Sort left list in-place
                merge_sort(right)           # Sort right list in-place

                l, r = 0, 0
                for i in range(len(items)):     # Merging the left and right list

                        lval = left[l] if l &lt; len(left) else None
                        rval = right[r] if r &lt; len(right) else None

                        if (lval and rval and lval &lt; rval) or rval is None:
                                items[i] = lval
                                l += 1
                        elif (lval and rval and lval &gt;= rval) or lval is None:
                                items[i] = rval
                                r += 1
                        else:
                                raise Exception('Could not merge, sub arrays sizes do not match the main array')

```



## Quick Sort

http://en.wikipedia.org/wiki/Quicksort

Quick sort works by first selecting a pivot element from the list. It then creates two lists, one containing elements less than the pivot and the other containing elements higher than the pivot. It then sorts the two lists and join them with the pivot in between. Just like the Merge sort, when the lists are subdivided to lists of size 1, they are considered as already sorted.

```python
def quick_sort(items):
        """ Implementation of quick sort """
        if len(items) &gt; 1:
                pivot_index = len(items) / 2
                smaller_items = []
                larger_items = []

                for i, val in enumerate(items):
                        if i != pivot_index:
                                if val &lt; items[pivot_index]:
                                        smaller_items.append(val)
                                else:
                                        larger_items.append(val)

                quick_sort(smaller_items)
                quick_sort(larger_items)
                items[:] = smaller_items + [items[pivot_index]] + larger_items

```

## Heap Sort


This implementation uses the built in heap data structures in Python. To truly understand haepsort, one must implement the `heapify()` function themselves. This is certainly one obvious area of improvement in this implementation.

```python
import heapq

def heap_sort(items):
        """ Implementation of heap sort """
        heapq.heapify(items)
        items[:] = [heapq.heappop(items) for i in range(len(items))]

```

