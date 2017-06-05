
[Source - http://blog.benoitvallon.com](http://blog.benoitvallon.com/sorting-algorithms-in-javascript/sorting-algorithms-in-javascript-all-the-code/ "Permalink to Sorting algorithms in JavaScript, all the code")

# Sorting algorithms in JavaScript, all the code

The [#sorting-algorithms series][1] is a collection of posts about reimplemented sorting algorithms in JavaScript.

If you are not familiar with sorting algorithms, a quick introduction and the full list of reimplemented sorting algorithms can be found in the [introduction post of the series on sorting algorithms in JavaScript][2].

If you feel comfortable with the concept of each sorting algorithm and only want to see the code, have a look at the summary post of the series. It removes all explanations and contains only the [JavaScript code for all sorting algorithms][3] discussed in the series.

## Get the code on Github

Of course, all the code can also be found on Github in the repository [sorting-algorithms-in-javascript][4].

## A good way to compare all of them

Unlike the [data structures][5], all [sorting algorithms][2] have the same goal and they can all take the same input data. So, for every sorting algorithms of the series, we are going sort an `array` of 10 numbers from 1 to 10.

By doing so we will be able to compare the different sorting algorithms more easily. Sorting algorithms are very sensitive to the input data so we will also try different input data to see how they affect the performances.

## Bubble sort
More details about [the Bubble sort algorithm][6].

### Clean version
    
    
    // array to sort
    var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
    
    // swap function helper
    function swap(array, i, j) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    
    // be careful: this is a very basic implementation which is nice to understand the deep principle of bubble sort (going through all comparisons) but it can be greatly improved for performances
    function bubbleSortBasic(array) {
      for(var i = 0; i &lt; array.length; i++) {
        for(var j = 1; j &lt; array.length; j++) {
          if(array[j - 1] &gt; array[j]) {
            swap(array, j - 1, j);
          }
        }
      }
      return array;
    }
    
    console.log(bubbleSortBasic(array.slice())); // =&gt; [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    
    // correct implementation: this is the usual implementation of the bubble sort algorithm. Some loops execution are avoided if not they are not needed
    function bubbleSort(array) {
      var swapped;
      do {
        swapped = false;
        for(var i = 0; i &lt; array.length; i++) {
          if(array[i] &amp;&amp; array[i + 1] &amp;&amp; array[i] &gt; array[i + 1]) {
            swap(array, i, i + 1);
            swapped = true;
          }
        }
      } while(swapped);
      return array;
    }
    
    console.log(bubbleSort(array.slice())); // =&gt; [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    

### Version with counters
    
    
    // sample of arrays to sort
    var arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
    var arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    
    // swap function helper
    function swap(array, i, j) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    
    // be careful: this is a very basic implementation which is nice to understand the deep principle of bubble sort (going through all comparisons) but it can be greatly improved for performances
    function bubbleSortBasic(array) {
      var countOuter = 0;
      var countInner = 0;
      var countSwap = 0;
    
      for(var i = 0; i &lt; array.length; i++) {
        countOuter++;
        for(var j = 1; j &lt; array.length; j++) {
          countInner++;
          if(array[j - 1] &gt; array[j]) {
            countSwap++;
            swap(array, j - 1, j);
          }
        }
      }
    
      console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
      return array;
    }
    
    bubbleSortBasic(arrayRandom.slice()); // =&gt; outer: 10 inner: 90 swap: 21
    bubbleSortBasic(arrayOrdered.slice()); // =&gt; outer: 10 inner: 90 swap: 0
    bubbleSortBasic(arrayReversed.slice()); // =&gt; outer: 10 inner: 90 swap: 45
    
    // correct implementation: this is the usual implementation of the bubble sort algorithm. Some loops execution are avoided if not they are not needed
    function bubbleSort(array) {
      var countOuter = 0;
      var countInner = 0;
      var countSwap = 0;
    
      var swapped;
      do {
        countOuter++;
        swapped = false;
        for(var i = 0; i &lt; array.length; i++) {
          countInner++;
          if(array[i] &amp;&amp; array[i + 1] &amp;&amp; array[i] &gt; array[i + 1]) {
            countSwap++;
            swap(array, i, i + 1);
            swapped = true;
          }
        }
      } while(swapped);
    
      console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
      return array;
    }
    
    bubbleSort(arrayRandom.slice()); // =&gt; outer: 9 inner: 90 swap: 21
    bubbleSort(arrayOrdered.slice()); // =&gt; outer: 1 inner: 10 swap: 0
    bubbleSort(arrayReversed.slice()); // =&gt; outer: 10 inner: 100 swap: 45
    

## Selection sort
More details about [the Selection sort algorithm][7].

### Clean version
    
    
    // array to sort
    var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
    
    // swap function helper
    function swap(array, i, j) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    
    function selectionSort(array) {
      for(var i = 0; i &lt; array.length; i++) {
        var min = i;
        for(var j = i + 1; j &lt; array.length; j++) {
          if(array[j] &lt; array[min]) {
            min = j;
          }
        }
        if(i !== min) {
          swap(array, i, min);
        }
      }
      return array;
    }
    
    console.log(selectionSort(array)); // =&gt; [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    

### Version with counters
    
    
    // sample of arrays to sort
    var arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
    var arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    
    // swap function helper
    function swap(array, i, j) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    
    function selectionSort(array) {
      var countOuter = 0;
      var countInner = 0;
      var countSwap = 0;
    
      for(var i = 0; i &lt; array.length; i++) {
        countOuter++;
        var min = i;
        for(var j = i + 1; j &lt; array.length; j++) {
          countInner++;
          if(array[j] &lt; array[min]) {
            min = j;
          }
        }
        if(i !== min) {
          countSwap++;
          swap(array, i, min);
        }
      }
    
      console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
      return array;
    }
    
    selectionSort(arrayRandom.slice()); // =&gt; outer: 10 inner: 45 swap: 5
    selectionSort(arrayOrdered.slice()); // =&gt; outer: 10 inner: 45 swap: 0
    selectionSort(arrayReversed.slice()); // =&gt; outer: 10 inner: 45 swap: 5
    

## Insertion sort
More details about [the Insertion sort algorithm][8].

### Clean version
    
    
    // array to sort
    var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
    
    function insertionSort(array) {
      for(var i = 0; i &lt; array.length; i++) {
        var temp = array[i];
        var j = i - 1;
        while (j &gt;= 0 &amp;&amp; array[j] &gt; temp) {
          array[j + 1] = array[j];
          j--;
        }
        array[j + 1] = temp;
      }
      return array;
    }
    
    console.log(insertionSort(array)); // =&gt; [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    

### Version with counters
    
    
    // sample of arrays to sort
    var arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
    var arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    
    function insertionSort(array) {
      var countOuter = 0;
      var countInner = 0;
      var countSwap = 0;
    
      for(var i = 0; i &lt; array.length; i++) {
        countOuter++;
        var temp = array[i];
        var j = i - 1;
        while (j &gt;= 0 &amp;&amp; array[j] &gt; temp) {
          countInner++;
          countSwap++;
          array[j + 1] = array[j];
          j--;
        }
        array[j + 1] = temp;
      }
    
      console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
      return array;
    }
    
    insertionSort(arrayRandom.slice()); // =&gt; outer: 10 inner: 21 swap: 21
    insertionSort(arrayOrdered.slice()); // =&gt; outer: 10 inner: 0 swap: 0
    insertionSort(arrayReversed.slice()); // =&gt; outer: 10 inner: 45 swap: 45
    

## Shellsort
More details about [the Shellsort algorithm][9].

### Clean version
    
    
    // array to sort
    var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
    
    // gaps
    var gaps = [701, 301, 132, 57, 23, 10, 4, 1];
    
    function shellsort(array) {
      for(var g = 0; g &lt; gaps.length; g++) {
        var gap = gaps[g];
        for(var i = gap; i &lt; array.length; i++) {
          var temp = array[i];
          for(var j = i; j &gt;= gap &amp;&amp; array[j - gap] &gt; temp; j -= gap) {
            array[j] = array[j - gap];
          }
          array[j] = temp;
        }
      }
      return array;
    }
    
    console.log(shellsort(array)); // =&gt; [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    

### Version with counters
    
    
    // sample of arrays to sort
    var arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
    var arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    
    // gaps
    var gaps = [701, 301, 132, 57, 23, 10, 4, 1];
    
    function shellsort(array) {
      var countOuter = 0;
      var countInner = 0;
      var countSwap = 0;
    
      for(var g = 0; g &lt; gaps.length; g++) {
        var gap = gaps[g];
        for(var i = gap; i &lt; array.length; i++) {
          countOuter++;
          var temp = array[i];
          for(var j = i; j &gt;= gap &amp;&amp; array[j - gap] &gt; temp; j -= gap) {
            countInner++;
            countSwap++;
            array[j] = array[j - gap];
          }
          array[j] = temp;
        }
      }
      console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
      return array;
    }
    
    shellsort(arrayRandom.slice()); // =&gt; outer: 15 inner: 11 swap: 11
    shellsort(arrayOrdered.slice()); // =&gt; outer: 15 inner: 0 swap: 0
    shellsort(arrayReversed.slice()); // =&gt; outer: 15 inner: 13 swap: 13
    

## Merge sort
More details about [the Merge sort algorithm][10].

### Clean version
    
    
    // array to sort
    var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
    
    // top-down implementation
    function mergeSortTopDown(array) {
      if(array.length &lt; 2) {
        return array;
      }
    
      var middle = Math.floor(array.length / 2);
      var left = array.slice(0, middle);
      var right = array.slice(middle);
    
      return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
    }
    function mergeTopDown(left, right) {
      var array = [];
    
      while(left.length &amp;&amp; right.length) {
        if(left[0] &lt; right[0]) {
          array.push(left.shift());
        } else {
          array.push(right.shift());
        }
      }
      return array.concat(left.slice()).concat(right.slice());
    }
    
    console.log(mergeSortTopDown(array.slice())); // =&gt; [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    
    // bottom-up implementation
    function mergeSortBottomUp(array) {
      var step = 1;
      while (step &lt; array.length) {
        var left = 0;
        while (left + step &lt; array.length) {
          mergeBottomUp(array, left, step);
          left += step * 2;
        }
        step *= 2;
      }
      return array;
    }
    function mergeBottomUp(array, left, step) {
      var right = left + step;
      var end = Math.min(left + step * 2 - 1, array.length - 1);
      var leftMoving = left;
      var rightMoving = right;
      var temp = [];
    
      for (var i = left; i &lt;= end; i++) {
        if ((array[leftMoving] &lt;= array[rightMoving] || rightMoving &gt; end) &amp;&amp;
            leftMoving &lt; right) {
          temp[i] = array[leftMoving];
          leftMoving++;
        } else {
          temp[i] = array[rightMoving];
          rightMoving++;
        }
      }
    
      for (var j = left; j &lt;= end; j++) {
        array[j] = temp[j];
      }
    }
    
    console.log(mergeSortBottomUp(array.slice())); // =&gt; [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    

### Version with counters
    
    
    // sample of arrays to sort
    var arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
    var arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    
    var countOuter = 0;
    var countInner = 0;
    var countSwap = 0;
    
    function resetCounters() {
      countOuter = 0;
      countInner = 0;
      countSwap = 0;
    }
    
    // top-down implementation
    function mergeSortTopDown(array) {
      countOuter++;
      if(array.length &lt; 2) {
        return array;
      }
    
      var middle = Math.floor(array.length / 2);
      var left = array.slice(0, middle);
      var right = array.slice(middle);
    
      return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
    }
    
    function mergeTopDown(left, right) {
      var array = [];
    
      while(left.length &amp;&amp; right.length) {
        countInner++;
        if(left[0] &lt; right[0]) {
          array.push(left.shift());
        } else {
          array.push(right.shift());
        }
      }
      return array.concat(left.slice()).concat(right.slice());
    }
    
    mergeSortTopDown(arrayRandom.slice()); // =&gt; outer: 19 inner: 24 swap: 0
    console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
    resetCounters();
    
    mergeSortTopDown(arrayOrdered.slice()); // =&gt; outer: 19 inner: 15 swap: 0
    console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
    resetCounters();
    
    mergeSortTopDown(arrayReversed.slice()); // =&gt; outer: 19 inner: 19 swap: 0
    console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
    resetCounters();
    
    // bottom-up implementation
    function mergeSortBottomUp(array) {
      var step = 1;
      while (step &lt; array.length) {
        countOuter++;
        var left = 0;
        while (left + step &lt; array.length) {
          countInner++;
          mergeBottomUp(array, left, step);
          left += step * 2;
        }
        step *= 2;
      }
      return array;
    }
    function mergeBottomUp(array, left, step) {
      var right = left + step;
      var end = Math.min(left + step * 2 - 1, array.length - 1);
      var leftMoving = left;
      var rightMoving = right;
      var temp = [];
    
      for (var i = left; i &lt;= end; i++) {
        if ((array[leftMoving] &lt;= array[rightMoving] || rightMoving &gt; end) &amp;&amp;
            leftMoving &lt; right) {
          temp[i] = array[leftMoving];
          leftMoving++;
        } else {
          temp[i] = array[rightMoving];
          rightMoving++;
        }
      }
    
      for (var j = left; j &lt;= end; j++) {
        countSwap++;
        array[j] = temp[j];
      }
    }
    
    mergeSortBottomUp(arrayRandom.slice()); // =&gt; outer: 4 inner: 9 swap: 36
    console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
    resetCounters();
    
    mergeSortBottomUp(arrayOrdered.slice()); // =&gt; outer: 4 inner: 9 swap: 36
    console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
    resetCounters();
    
    mergeSortBottomUp(arrayReversed.slice()); // =&gt; outer: 4 inner: 9 swap: 36
    console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
    resetCounters();
    

## Quicksort
More details about [the Quicksort algorithm][11].

### Clean version
    
    
    // array to sort
    var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
    
    // basic implementation (pivot is the first element of the array)
    function quicksortBasic(array) {
      if(array.length &lt; 2) {
        return array;
      }
    
      var pivot = array[0];
      var lesser = [];
      var greater = [];
    
      for(var i = 1; i &lt; array.length; i++) {
        if(array[i] &lt; pivot) {
          lesser.push(array[i]);
        } else {
          greater.push(array[i]);
        }
      }
    
      return quicksortBasic(lesser).concat(pivot, quicksortBasic(greater));
    }
    
    console.log(quicksortBasic(array.slice())); // =&gt; [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    
    // swap function helper
    function swap(array, i, j) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    
    // classic implementation (with Hoare or Lomuto partition scheme, you can comment either one method or the other to see the difference)
    function quicksort(array, left, right) {
      left = left || 0;
      right = right || array.length - 1;
    
      // var pivot = partitionLomuto(array, left, right); // you can play with both partition
      var pivot = partitionHoare(array, left, right); // you can play with both partition
    
      if(left &lt; pivot - 1) {
        quicksort(array, left, pivot - 1);
      }
      if(right &gt; pivot) {
        quicksort(array, pivot, right);
      }
      return array;
    }
    // Lomuto partition scheme, it is less efficient than the Hoare partition scheme
    function partitionLomuto(array, left, right) {
      var pivot = right;
      var i = left;
    
      for(var j = left; j &lt; right; j++) {
        if(array[j] &lt;= array[pivot]) {
          swap(array, i , j);
          i = i + 1;
        }
      }
      swap(array, i, j);
      return i;
    }
    // Hoare partition scheme, it is more efficient than the Lomuto partition scheme because it does three times fewer swaps on average
    function partitionHoare(array, left, right) {
      var pivot = Math.floor((left + right) / 2 );
    
      while(left &lt;= right) {
        while(array[left] &lt; array[pivot]) {
          left++;
        }
        while(array[right] &gt; array[pivot]) {
          right--;
        }
        if(left &lt;= right) {
          swap(array, left, right);
          left++;
          right--;
        }
      }
      return left;
    }
    
    console.log(quicksort(array.slice())); // =&gt; [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    

### Version with counters
    
    
    // sample of arrays to sort
    var arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
    var arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    
    var countOuter = 0;
    var countInner = 0;
    var countSwap = 0;
    
    function resetCounters() {
      countOuter = 0;
      countInner = 0;
      countSwap = 0;
    }
    
    // basic implementation (pivot is the first element of the array)
    function quicksortBasic(array) {
      countOuter++;
      if(array.length &lt; 2) {
        return array;
      }
    
      var pivot = array[0];
      var lesser = [];
      var greater = [];
    
      for(var i = 1; i &lt; array.length; i++) {
        countInner++;
        if(array[i] &lt; pivot) {
          lesser.push(array[i]);
        } else {
          greater.push(array[i]);
        }
      }
    
      return quicksortBasic(lesser).concat(pivot, quicksortBasic(greater));
    }
    
    quicksortBasic(arrayRandom.slice()); // =&gt; outer: 13 inner: 25 swap: 0
    console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
    resetCounters();
    
    quicksortBasic(arrayOrdered.slice()); // =&gt; outer: 19 inner: 45 swap: 0
    console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
    resetCounters();
    
    quicksortBasic(arrayReversed.slice()); // =&gt; outer: 19 inner: 45 swap: 0
    console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
    resetCounters();
    
    // swap function helper
    function swap(array, i, j) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    
    // classic implementation (with Hoare or Lomuto partition scheme, you can comment either one method or the other to see the difference)
    function quicksort(array, left, right) {
      countOuter++;
      left = left || 0;
      right = right || array.length - 1;
    
      // var pivot = partitionLomuto(array, left, right); // you can play with both partition
      var pivot = partitionHoare(array, left, right); // you can play with both partition
    
      if(left &lt; pivot - 1) {
        quicksort(array, left, pivot - 1);
      }
      if(right &gt; pivot) {
        quicksort(array, pivot, right);
      }
      return array;
    }
    // Lomuto partition scheme, it is less efficient than the Hoare partition scheme
    function partitionLomuto(array, left, right) {
      var pivot = right;
      var i = left;
    
      for(var j = left; j &lt; right; j++) {
        countInner++;
        if(array[j] &lt;= array[pivot]) {
          countSwap++;
          swap(array, i , j);
          i = i + 1;
        }
      }
      countSwap++;
      swap(array, i, j);
      return i;
    }
    // Hoare partition scheme, it is more efficient than the Lomuto partition scheme because it does three times fewer swaps on average
    function partitionHoare(array, left, right) {
      var pivot = Math.floor((left + right) / 2 );
    
      while(left &lt;= right) {
        countInner++;
        while(array[left] &lt; array[pivot]) {
          left++;
        }
        while(array[right] &gt; array[pivot]) {
          right--;
        }
        if(left &lt;= right) {
          countSwap++;
          swap(array, left, right);
          left++;
          right--;
        }
      }
      return left;
    }
    
    quicksort(arrayRandom.slice());
    // =&gt; Hoare: outer: 9 inner: 12 swap: 12 - Lomuto: outer: 10 inner: 35 swap: 28
    console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
    resetCounters();
    
    quicksort(arrayOrdered.slice());
    // =&gt; Hoare: outer: 9 inner: 9 swap: 9 - Lomuto: outer: 9 inner: 45 swap: 54
    console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
    resetCounters();
    
    quicksort(arrayReversed.slice());
    // =&gt; Hoare: outer: 9 inner: 13 swap: 13 - Lomuto: outer: 10 inner: 54 swap: 39
    console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
    resetCounters();
    


Please enable JavaScript to view the [comments powered by Disqus.][12]

[1]: http://blog.benoitvallon.com/category/sorting-algorithms-in-javascript
[2]: http://blog.benoitvallon.com/sorting-algorithms-in-javascript/sorting-algorithms-in-javascript
[3]: http://blog.benoitvallon.com/sorting-algorithms-in-javascript/sorting-algorithms-in-javascript-all-the-code
[4]: https://github.com/benoitvallon/computer-science-in-javascript/tree/master/sorting-algorithms-in-javascript
[5]: http://blog.benoitvallon.com/data-structures-in-javascript/data-structures-in-javascript/
[6]: http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-bubble-sort-algorithm
[7]: http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-selection-sort-algorithm
[8]: http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-insertion-sort-algorithm
[9]: http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-shellsort-algorithm
[10]: http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-merge-sort-algorithm
[11]: http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-quicksort-algorithm
[12]: https://disqus.com/?ref_noscript

  