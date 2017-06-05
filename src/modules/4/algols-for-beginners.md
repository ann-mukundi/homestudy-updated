
[Source - https://medium.com/yay-its-erica](https://medium.com/yay-its-erica/algorithms-for-beginners-bubble-sort-insertion-sort-merge-sort-29bd5506cc48 "Permalink to Algorithms for Beginners — Bubble Sort, Insertion Sort, Merge Sort")

# Algorithms for Beginners — Bubble Sort, Insertion Sort, Merge Sort

![][1]

Image Credit: memegenerator.net

As a new iOS developer, I am quickly learning the importance of honing my white-boarding skills (especially this week as we prepare for our visit to [ustwo][2]). White-boarding is the act of solving algorithmic problem on an actual "white-board" (think smelly dry-erase markers). This practice allows employers to assess your ability to think critically through algorithms._ Wait, what's an algorithm? _An algorithm is a list of steps (a procedure) that you want you use to execute to accomplish a goal (solve a problem). As developers, we write algorithms everyday!

In computer science, there are many data structures and algorithms to familiarize oneself with. let's focus on three _classic_ algorithms for now: **bubble sort**, **insertion sort**, and **merge sort**.

Here are some images that briefly illustrate how each algorithm works:

**Bubble Sort**

![][3]

Bubble Sort: compare two elements at time and swap if the 2nd element is larger than the first.

Bubble sort is considered the simplest sorting algorithm. It goes through an entire array and compares each neighboring number. It then swaps the numbers and keeps doing this until the list is in ascending order. Bubble sort is _time consuming_ but doesn't consume a lot of resources (_low space complexity_).

![][4]

Bubble Sort in Swift 3

Above, the **bubbleSort()** function iterates over the array in two for loops and compares the values of two items in the array at a time. It swaps the larger value the place of the smaller value and continues to do so in the loop until the "left" value is no longer greater than the "right" value (the array is fully sorted).

![][5]

The return of Bubble Sort

**Insertion Sort**

![][6]

Insertion Sort: Take a number from an array, put it into a new array in a sorted way.

Insertion sort involves going through a pile, taking one item, comparing it to the first, swapping places if one item is larger than another and continuing this process until the minimum item is in the correct location. Much like bubble sort, insertion sort is time-consuming but has a low space complexity (doesn't consume a lot of resources).

![][7]

Insertion Sort in Swift 3

Above, the **insertionSort()** function iterates over the array and compares two items at a time. It swaps the items if one is larger than the other and continues to iterate _left_, comparing and swapping until the minimum is at the front of the array. Notice how I used **inout**! Thanks, [Joanna Huang][8] for the tip!

![][9]

The return from Insertion Sort. Personally, this was my least favorite.

**Merge Sort**

![][10]

Merge Sort: Break an array into a smaller arrays (arrays of 1 element), then merge the arrays together while sorting them.

Merge sort is the most time consuming! Imagine having to take a deck of cards, split it in two halves and continue splitting those piles in halves, and halves again until all you have is 52 piles of 1 card. UGH. Then, you regroup the piles in pairs again but this time, sort them in ascending order. Merge sort is "bad" in terms of time complexity and "fair" in terms of space complexity.

![][11]

Merge Sort in Swift 3.

Above, two functions are used to merge sort. The function **mergeAndSort()** takes an array, splits it into two arrays (a left array and a right array) and then uses these two arrays as inputs into the **merge()** function, which in turn takes the two arrays and compares the values of the first indices of each array, adding each _lesser_ value into a new array. In the end, an ordered array is returned when combining both now-sorted arrays.

![][12]

This merge sort took a lot longer than insertion sort and bubble sort.

I hope this post gives you a basic overview of some of the most widely known sort algorithms and that you will start exploring more on your own.

**Resources:**

[Sorting Algorithms Animated][13]

[Big-O Algorithm Cheat Sheet][14]

[1]: https://cdn-images-1.medium.com/max/800/1*bPHK3V9y1EZnr6z5ZiIncQ.jpeg
[2]: https://medium.com/@ustwo
[3]: https://cdn-images-1.medium.com/max/800/1*1MiLjMYgr2r2fDORCJn89w.gif
[4]: https://cdn-images-1.medium.com/max/800/1*gFt3RIhlvQZJFTk1SZ-zGw.png
[5]: https://cdn-images-1.medium.com/max/800/1*Nl-EbQDYpCx32u-Fzko3Xw.png
[6]: https://cdn-images-1.medium.com/max/800/1*krA0OFxEDgi8hVHJffCi4w.gif
[7]: https://cdn-images-1.medium.com/max/800/1*Ba_Fp0wWtOO0_lTYc084kw.png
[8]: https://medium.com/@joannathhuang
[9]: https://cdn-images-1.medium.com/max/800/1*xVDuGPTmh2klblmKysKfOQ.png
[10]: https://cdn-images-1.medium.com/max/800/1*bmfRxyIQZEK0Iu5T6YV1sw.gif
[11]: https://cdn-images-1.medium.com/max/800/1*-Dzz2iGxsIMwrPBWDQt6OQ.png
[12]: https://cdn-images-1.medium.com/max/800/1*iQip9-BWjJlSEUOu9Tjy2Q.png
[13]: https://www.toptal.com/developers/sorting-algorithms/
[14]: http://bigocheatsheet.com/

  