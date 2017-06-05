
[Source - http://python-textbok.readthedocs.io](http://python-textbok.readthedocs.io/en/latest/Sorting_and_Searching_Algorithms.html "Permalink to Sorting, searching and algorithm analysis — Object-Oriented Programming in Python 1 documentation")

# Sorting, searching and algorithm analysis — Object-Oriented Programming in Python 1 documentation

## Introduction

We have learned that in order to write a computer program which performs some task we must construct a suitable algorithm. However, whatever algorithm we construct is unlikely to be unique – there are likely to be many possible algorithms which can perform the same task. Are some of these algorithms in some sense better than others? Algorithm analysis is the study of this question.

In this chapter we will analyse four algorithms; two for each of the following common tasks:

* _sorting_: ordering a list of values
* _searching_: finding the position of a value within a list

Algorithm analysis should begin with a clear statement of the task to be performed. This allows us both to check that the algorithm is correct and to ensure that the algorithms we are comparing perform the same task.

Although there are many ways that algorithms can be compared, we will focus on two that are of primary importance to many data processing algorithms:

* _time complexity_: how the number of steps required depends on the size of the input
* _space complexity_: how the amount of extra memory or storage required depends on the size of the input

Note

Common sorting and searching algorithms are widely implemented and already available for most programming languages. You will seldom have to implement them yourself outside of the exercises in these notes. It is nevertheless important for you to understand these basic algorithms, because you are likely to use them within your own programs – their space and time complexity will thus affect that of your own algorithms. Should you need to select a specific sorting or searching algorithm to fit a particular task, you will require a good understanding of the available options.

## Sorting algorithms

The sorting of a list of values is a common computational task which has been studied extensively. The classic description of the task is as follows:

&gt; Given a _list of values_ and a function that _compares two values_, order the values in the list from smallest to largest.

The values might be integers, or strings or even other kinds of objects. We will examine two algorithms:

* _Selection sort_, which relies on repeated _selection_ of the next smallest item
* _Merge sort_, which relies on repeated _merging_ of sections of the list that are already sorted

Other well-known algorithms for sorting lists are _insertion sort_, _bubble sort_, _heap sort_, _quicksort_ and _shell sort_.

There are also various algorithms which perform the sorting task for restricted kinds of values, for example:

* _Counting sort_, which relies on the values belonging to a small set of items
* _Bucket sort_, which relies on the ability to map each value to one of a small set of items
* _Radix sort_, which relies on the values being sequences of digits

If we restrict the task, we can enlarge the set of algorithms that can perform it. Among these new algorithms may be ones that have desirable properties. For example, _Radix sort_ uses fewer steps than any generic sorting algorithm.

### Selection sort

To order a given list using selection sort, we repeatedly select the smallest remaining element and move it to the end of a growing sorted list.

To illustrate selection sort, let us examine how it operates on a small list of four elements:

![None][1]

Initially the entire list is unsorted. We will use the front of the list to hold the sorted items – to avoid using extra storage space – but at the start this sorted list is empty.

First we must find the smallest element in the unsorted portion of the list. We take the first element of the unsorted list as a candidate and compare it to each of the following elements in turn, replacing our candidate with any element found to be smaller. This requires 3 comparisons and we find that element 1.5 at position 2 is smallest.

Now we will swap the first element of our unordered list with the smallest element. This becomes the start of our ordered list:

![None][2]

We now repeat our previous steps, determining that 2.7 is the smallest remaining element and swapping it with 3.8 – the first element of the current unordered section – to get:

![None][3]

Finally, we determine that 3.8 is the smallest of the remaining unordered elements and swap it with 7.2:

![None][4]

The table below shows the number of operations of each type used in sorting our example list:

| Sorted List Length | Comparisons | Swaps | Assign smallest candidate |  
| ------------------ | ----------- | ----- | ------------------------- |  
| 0 -&gt; 1             | 3           | 1     | 3                         |  
| 1 -&gt; 2             | 2           | 1     | 2                         |  
| 2 -&gt; 3             | 1           | 1     | 2                         |  
| **Total**          | **6**       | **3** | **7**                     |  

Note that the number of _comparisons_ and the number of _swaps_ are independent of the contents of the list (this is true for selection sort but not necessarily for other sorting algorithms) while the number of times we have to assign a new value to the smallest candidate depends on the contents of the list.

More generally, the algorithm for selection sort is as follows:

1. Divide the list to be sorted into a sorted portion at the front (initially empty) and an unsorted portion at the end (initially the whole list).
2. Find the smallest element in the unsorted list:

&gt; 1. Select the first element of the unsorted list as the initial candidate.
&gt; 2. Compare the candidate to each element of the unsorted list in turn, replacing the candidate with the current element if the current element is smaller.
&gt; 3. Once the end of the unsorted list is reached, the candidate is the smallest element.

3. Swap the smallest element found in the previous step with the first element in the unsorted list, thus extending the sorted list by one element.
4. Repeat the steps 2 and 3 above until only one element remains in the unsorted list.

Note

The _Selection sort_ algorithm as described here has two properties which are often desirable in sorting algorithms.

The first is that the algorithm is _in-place_. This means that it uses essentially no extra storage beyond that required for the input (the unsorted list in this case). A little extra storage may be used (for example, a temporary variable to hold the candidate for the smallest element). The important property is that the extra storage required should not increase as the size of the input increases.

The second is that the sorting algorithm is _stable_. This means that two elements which are equal retain their initial relative ordering. This becomes important if there is additional information attached to the values being sorted (for example, if we are sorting a list of people using a comparison function that compares their dates of birth). Stable sorting algorithms ensure that sorting an already sorted list leaves the order of the list unchanged, even in the presence of elements that are treated as equal by the comparison.

### Exercise 1

Complete the following code which will perform a selection sort in Python. "..." denotes missing code that should be filled in:
    
    
    def selection_sort(items):
        """Sorts a list of items into ascending order using the
           selection sort algoright.
           """
        for step in range(len(items)):
            # Find the location of the smallest element in
            # items[step:].
            location_of_smallest = step
            for location in range(step, len(items)):
                # TODO: determine location of smallest
                ...
            # TODO: Exchange items[step] with items[location_of_smallest]
            ...
    

### Exercise 2

Earlier in this section we counted the number of _comparisons_, _swaps_ and _assignments_ used in our example.

1. How many swaps are performed when we apply selection sort to a list of N items?
2. How many comparisons are performed when we apply selection sort to a list of N items?
    1. How many comparisons are performed to find the smallest element when the unsorted portion of the list has M items?
    2. Sum over all the values of M encountered when sorting the list of length N to find the total number of comparisons.
3. The number of assignments (to the candidate smallest number) performed during the search for a smallest element is at most one more than the number of comparisons. Use this to find an upper limit on the total number of assignments performed while sorting a list of length N.
4. Use the results of the previous question to find an upper bound on the total number of operations (swaps, comparisons and assignments) performed. Which term in the number of operations will dominate for large lists?

### Merge sort

When we use merge sort to order a list, we repeatedly merge sorted sub-sections of the list – starting from sub-sections consisting of a single item each.

We will see shortly that merge sort requires significantly fewer operations than selection sort.

Let us start once more with our small list of four elements:

![None][5]

First we will merge the two sections on the left into the temporary storage. Imagine the two sections as two sorted piles of cards – we will merge the two piles by repeatedly taking the smaller of the top two cards and placing it at the end of the merged list in the temporary storage. Once one of the two piles is empty, the remaining items in the other pile can just be placed on the end of the merged list:

![None][6]

Next we copy the merged list from the temporary storage back into the portion of the list originally occupied by the merged subsections:

![None][7]

We repeat the procedure to merge the second pair of sorted sub-sections:

![None][8]

Having reached the end of the original list, we now return to the start of the list and begin to merge sorted sub-sections again. We repeat this until the entire list is a single sorted sub-section. In our example, this requires just one more merge:

![None][9]

Notice how the size of the sorted sections of the list doubles after every iteration of merges. After M steps the size of the sorted sections is 2M. Once 2M is greater than N, the entire list is sorted. Thus, for a list of size N, we need M equals log2N interations to sort the list.

Each iteration of merges requires a complete pass through the list and each element is copied twice – once into the temporary storage and once back into the original list. As long as there are items left in both sub-sections in each pair, each copy into the temporary list also requires a comparison to pick which item to copy. Once one of the lists runs out, no comparisons are needed. Thus each pass requires 2N copies and roughly N comparisons (and certainly no more than N).

The total number of operations required for our merge sort algorithm is the product of the number of operations in each pass and the number of passes – i.e. 2Nlog2N copies and roughly Nlog2N comparisons.

The algorithm for merge sort may be written as this list of steps:

1. Create a temporary storage list which is the same size as the list to be sorted.
2. Start by treating each element of the list as a sorted one-element sub-section of the original list.
3. Move through all the sorted sub-sections, merging adjacent pairs as follows:
    1. Use two variables to point to the indices of the smallest uncopied items in the two sorted sub-sections, and a third variable to point to the index of the start of the temporary storage.
    2. Copy the smaller of the two indexed items into the indicated position in the temporary storage. Increment the index of the sub-section from which the item was copied, and the index into temporary storage.
    3. If all the items in one sub-section have been copied, copy the items remaining in the other sub-section to the back of the list in temporary storage. Otherwise return to step 3 ii.
    4. Copy the sorted list in temporary storage back over the section of the original list which was occupied by the two sub-sections that have just been merged.
4. If only a single sorted sub-section remains, the entire list is sorted and we are done. Otherwise return to the start of step 3.

### Exercise 3

Write a Python function that implements merge sort. It may help to write a separate function which performs merges and call it from within your merge sort implementation.

### Python's sorting algorithm

Python's default sorting algorithm, which is used by the built-in `sorted` function as well as the `sort` method of list objects, is called _Timsort_. It's an algorithm developed by Tim Peters in 2002 for use in Python. Timsort is a modified version of merge sort which uses insertion sort to arrange the list of items into conveniently mergeable sections.

Note

Tim Peters is also credited as the author of _The Zen of Python_ – an attempt to summarise the early Python community's ethos in a short series of koans. You can read it by typing `import this` into the Python console.

## Searching algorithms

Searching is also a common and well-studied task. This task can be described formally as follows:

&gt; Given a _list of values_, a function that _compares two values_ and a _desired value_, find the position of the desired value in the list.

We will look at two algorithms that perform this task:

* _linear search_, which simply checks the values in sequence until the desired value is found
* _binary search_, which requires a sorted input list, and checks for the value in the middle of the list, repeatedly discarding the half of the list which contains values which are definitely either all larger or all smaller than the desired value

There are numerous other searching techniques. Often they rely on the construction of more complex data structures to facilitate repeated searching. Examples of such structures are _hash tables_ (such as Python's dictionaries) and _prefix trees_. Inexact searches that find elements similar to the one being searched for are also an important topic.

### Linear search

Linear search is the most basic kind of search method. It involves checking each element of the list in turn, until the desired element is found.

For example, suppose that we want to find the number 3.8 in the following list:

![None][10]

We start with the first element, and perform a comparison to see if its value is the value that we want. In this case, 1.5 is not equal to 3.8, so we move onto the next element:

![None][11]

We perform another comparison, and see that 2.7 is also not equal to 3.8, so we move onto the next element:

![None][12]

We perform another comparison and determine that we have found the correct element. Now we can end the search and return the position of the element (index 2).

We had to use a total of 3 comparisons when searching through this list of 4 elements. How many comparisons we need to perform depends on the total length of the list, but also whether the element we are looking for is near the beginning or near the end of the list. In the worst-case scenario, if our element is the last element of the list, we will have to search through the entire list to find it.

If we search the same list many times, assuming that all elements are equally likely to be searched for, we will on average have to search through half of the list each time. The cost (in comparisons) of performing linear search thus scales linearly with the length of the list.

### Exercise 4

1. Write a function which implements linear search. It should take a list and an element as a parameter, and return the position of the element in the list. If the element is not in the list, the function should raise an exception. If the element is in the list multiple times, the function should return the first position.

### Binary search

Binary search is a more efficient search algorithm which relies on the elements in the list being sorted. We apply the same search process to progressively smaller sub-lists of the original list, starting with the whole list and approximately halving the search area every time.

We first check the _middle_ element in the list.

* If it is the value we want, we can stop.
* If it is _higher_ than the value we want, we repeat the search process with the portion of the list _before_ the middle element.
* If it is _lower_ than the value we want, we repeat the search process with the portion of the list _after_ the middle element.

For example, suppose that we want to find the value 3.8 in the following list of 7 elements:

![None][13]

First we compare the element in the middle of the list to our value. 7.2 is _bigger_ than 3.8, so we need to check the first half of the list next.

![None][14]

Now the first half of the list is our new list to search. We compare the element in the middle of this list to our value. 2.7 is _smaller_ than 3.8, so we need to search the _second half_ of this sublist next.

![None][15]

The second half of the last sub-list is just a single element, which is also the middle element. We compare this element to our value, and it is the element that we want.

We have performed 3 comparisons in total when searching this list of 7 items. The number of comparisons we need to perform scales with the size of the list, but much more slowly than for linear search – if we are searching a list of length N, the maximum number of comparisons that we will have to perform is log2N.

### Exercise 5

1. Write a function which implements binary search. You may assume that the input list will be sorted. Hint: this function is often written recursively.

## Algorithm complexity and Big O notation

We commonly express the cost of an algorithm as a function of the number N of elements that the algorithm acts on. The function gives us an estimate of the number of operations we have to perform in order to use the algorithm on N elements – it thus allows us to predict how the number of required operations will increase as N increases. We use a function which is an _approximation_ of the exact function – we simplify it as much as possible, so that only the most important information is preserved.

For example, we know that when we use linear search on a list of N elements, on average we will have to search through half of the list before we find our item – so the number of operations we will have to perform is N/2. However, the most important thing is that the algorithm scales _linearly_ – as N increases, the cost of the algorithm increases in proportion to N, not N2 or N3. The constant factor of 1/2 is insignificant compared to the very large differences in cost between – for example – N and N2, so we leave it out when we describe the cost of the algorithm.

We thus write the cost of the linear search algorithm as O(N) – we say that the cost is _on the order of N_, or just _order N_. We call this notation _big O notation_, because it uses the capital O symbol (for _order_).

We have dropped the constant factor 1/2. We would also drop any lower-order terms from an expression with multiple terms – for example, O(N3 \+ N2) would be simplified to O(N3).

In the example above we calculated the _average_ cost of the algorithm, which is also known as the _expected_ cost, but it can also be useful to calculate the _best case_ and _worst case_ costs. Here are the best case, expected and worst case costs for the sorting and searching algorithms we have discussed so far:

| Algorithm      | Best case  | Expected   | Worst case |  
| -------------- | ---------- | ---------- | ---------- |  
| Selection sort | O(N2)      | O(N2)      | O(N2)      |  
| Merge sort     | O(N log N) | O(N log N) | O(N log N) |  
| Linear search  | O(1)       | O(N)       | O(N)       |  
| Binary search  | O(1)       | O(log N)   | O(log N)   |  

What does O(1) mean? It means that the cost of an algorithm is _constant_, no matter what the value of N is. For both these search algorithms, the best case scenario happens when the first element to be tested is the correct element – then we only have to perform a single operation to find it.

In the previous table, big O notation has been used to describe the _time complexity_ of algorithms. It can also be used to describe their _space complexity_ – in which case the cost function represents the number of units of space required for storage rather than the required number of operations. Here are the space complexities of the algorithms above (for the worst case, and excluding the space required to store the input):

| Algorithm      | Space complexity |  
| -------------- | ---------------- |  
| Selection sort | O(1)             |  
| Merge sort     | O(N)             |  
| Linear search  | O(1)             |  
| Binary search  | O(1)             |  

None of these algorithms require a significant amount of storage space in addition to that used by the input list, except for the merge sort – which, as we saw in a previous section, requires temporary storage which is the same size as the input (and thus scales linearly with the input size).

Note

The Python wiki has a [summary][16] of the time complexities of common operations on collections. You may also wish to investigate the `collections` module, which provides additional collection classes which are optimised for particular tasks.

Note

_Computational complexity theory_ studies the inherent complexity of _tasks_ themselves. Sometimes it is possible to prove that _any_ algorithm that can perform a given task will require some minimum number of steps or amount of extra storage. For example, it can be shown that, given a list of arbitrary objects and only a comparison function with which to compare them, no sorting algorithm can use fewer than O(N log N) comparisons.

### Exercise 6

1. We can see from the comparison tables above that binary search is more efficient than linear search. Why would we ever use linear search? Hint: what property must a list have for us to be able to use a binary search on it?
2. Suppose that each of the following functions shows the average number of operations required to perform some algorithm on a list of length N. Give the big O notation for the time complexity of each algorithm:
    1. 4N2 \+ 2N + 2
    2. N + log N
    3. N log N
    4. 3

[1]: http://python-textbok.readthedocs.io/en/latest/_images/blockdiag-1e61cab6fdf1866858dd67cf79da0de4bbe32f0e.png
[2]: http://python-textbok.readthedocs.io/en/latest/_images/blockdiag-59cc273248938d32529988e9189d103c67c86bbc.png
[3]: http://python-textbok.readthedocs.io/en/latest/_images/blockdiag-0116a491a5344b5d46426992b649ea3672194ba8.png
[4]: http://python-textbok.readthedocs.io/en/latest/_images/blockdiag-1c7238b5b91f6a1f6c062e4baf72a740f748467d.png
[5]: http://python-textbok.readthedocs.io/en/latest/_images/blockdiag-5876e48223e11f2794cd3eef4bdb15b7801257e5.png
[6]: http://python-textbok.readthedocs.io/en/latest/_images/blockdiag-2a9dd1c908f4298af71490b50427cd09c2df1d0c.png
[7]: http://python-textbok.readthedocs.io/en/latest/_images/blockdiag-e8d61b77697d4e523ab685e0c59f54fad9436364.png
[8]: http://python-textbok.readthedocs.io/en/latest/_images/blockdiag-7c94df02d807b933f2b88d072b28b002fbe088f7.png
[9]: http://python-textbok.readthedocs.io/en/latest/_images/blockdiag-96406ae476a529c96ba95828cb8afd6b3654cf58.png
[10]: http://python-textbok.readthedocs.io/en/latest/_images/blockdiag-f89c0ad9fad40f3a5f55d040b2ea2ee966441749.png
[11]: http://python-textbok.readthedocs.io/en/latest/_images/blockdiag-c89fc2a0f6ac9dc31c4733e1ba9612095141c63e.png
[12]: http://python-textbok.readthedocs.io/en/latest/_images/blockdiag-711dbad019be24cc93ec7d4eafe67ce96c832ad0.png
[13]: http://python-textbok.readthedocs.io/en/latest/_images/blockdiag-4acf3dfa13eb2575d6b0266d1a4807f2f076489b.png
[14]: http://python-textbok.readthedocs.io/en/latest/_images/blockdiag-7bfbf9c517ad62063d12e33e1edc23fc50f11314.png
[15]: http://python-textbok.readthedocs.io/en/latest/_images/blockdiag-f464decd28391aa6bbd0c9af610f0564f85b4e95.png
[16]: http://wiki.python.org/moin/TimeComplexity

  