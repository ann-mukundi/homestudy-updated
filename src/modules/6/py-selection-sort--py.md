
[Source - http://interactivepython.org](http://interactivepython.org/runestone/static/pythonds/SortSearch/TheSelectionSort.html "Permalink to 5.8. The Selection Sort — Problem Solving with Algorithms and Data Structures")

# 5.8. The Selection Sort — Problem Solving with Algorithms and Data Structures

The **selection sort** improves on the bubble sort by making only one exchange for every pass through the list. In order to do this, a selection sort looks for the largest value as it makes a pass and, after completing the pass, places it in the proper location. As with a bubble sort, after the first pass, the largest item is in the correct place. After the second pass, the next largest is in place. This process continues and requires (n-1) passes to sort _n_ items, since the final item must be in place after the ((n-1)) st pass.

[Figure 3][1] shows the entire sorting process. On each pass, the largest remaining item is selected and then placed in its proper location. The first pass places 93, the second pass places 77, the third places 55, and so on. The function is shown in [ActiveCode 1][2].

![../_images/selectionsortnew.png][3]

Figure 3: `selectionSort`

```python
def selectionSort(alist):
   for fillslot in range(len(alist)-1,0,-1):
       positionOfMax=0
       for location in range(1,fillslot+1):
           if alist[location]>alist[positionOfMax]:
               positionOfMax = location

       temp = alist[fillslot]
       alist[fillslot] = alist[positionOfMax]
       alist[positionOfMax] = temp

alist = [54,26,93,17,77,31,44,55,20]
selectionSort(alist)
print(alist)
```


[1]: http://interactivepython.org#fig-selectionsort
[2]: http://interactivepython.org#lst-selectionsortcode
[3]: http://interactivepython.org/runestone/static/pythonds/_images/selectionsortnew.png
[4]: http://interactivepython.org/TheBubbleSort.html
[5]: http://interactivepython.org/TheInsertionSort.html

  