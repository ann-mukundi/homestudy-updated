
[Source - http://adrianmejia.com](http://adrianmejia.com/blog/2011/12/22/learning-algorithms-from-scratch-algorithms-for-dummies/ "Permalink to Learning Algorithms from Scratch / Algorithms for Dummies")

# Learning Algorithms from Scratch / Algorithms for Dummies

When you are programming you face challenges all the way. Getting the problems solved is just the tip of the iceberg, getting it done efficiently is the rest.

* * *

**Update**

Graphs are gone in this post. I re-made this post and added more information and images. Checkout it out at: 

* * *

**Why should you care for efficiency?**

Solutions to the same problem might take years with certain algorithm, and just minutes using efficient algorithms. For instance, if you have applications that are used for thousands of people over internet, every fraction of second counts. Therefore, efficient algorithms is a must.

**How I do my algorithms more efficient?**

To improve something you first need to know the actual state. In this case you need to measure the actual effectiveness of your algorithm in other to improve it. It's very common to use running time analysis to measure the speed of algorithms independently from the hardware used (old pc, supercomputer it doesn't matter). 

**Run-time analysis**

A common way to analyze the algorithms is using the big-O notation. The good thing about this notation is that is independent from the computer used to run the algorithm. You know that if you use a very slow computer (e.g. pentium I) v.s. a supercomputer use in NASA, the latter will run the program much faster. Big-O notation abstract the hardware and just focus in the algorithm per se. The only variable in the big-O notation gives the relative time needed to process an algorithm in function of the input n. Let's clarify this with an example.

**Ex.1** \- You want to sort an array A of n integers. 

Depending in the algorithm used to do that you may have:

* **selection** sort has a running time of O(n^2);
* **merge sort** –> O(n log n)

Right now, it doesn't matter if are not familiar with these algorithms (we will cover this the next lessons), the point here is that we have n integer and big-O notations give us a mathematical expression that is in function of the input n. If you [plot in a graph n^2 and n log n][1]. You'll see that n^2 grows much faster than n log(n). That means that the algorithm n^2 will take longer than n*log(n) to process as the size of the array n increases.

**Common order of Growth**

To give you an idea of the common order of growth of runtime expressions. Take a look at the following graph and table. The slower the function growth the better is the algorithm. In order from better performance to worst is:

1 – log n – n – n log n – n^2 – n^3 – 2^n – n! …

**Approximate growth rate from code.**

There are a whole theory and math behind the Big-O notation and other notations related. At this time, just take a look of the typical code and its growth order.

**Cases (the good, the bad, and the ugly)**

Remember that n is the number of elements in the input. All this runtime growth rate are in function of the input elements. There is another important thing to consider about the input elements: the order! The order of the input elements matters, and that's why algorithms are analyzed in 3 different cases:

1. Worst-case performance: the input is distributed as worst as it could be for an algorithm.   
2. Average-case scenario: approximation of the most common arrange of inputs.
3. Best-case scenario: most favorable distribution of the inputs.
4. One more: Space. this is how much space the algorithm cosume to execute. 

 

[1]: http://fooplot.com/index.php?&type0=0&type1=0&type2=0&type3=0&type4=0&y0=x%5E2&y1=x*log%28x%29&y2=&y3=&y4=&r0=&r1=&r2=&r3=&r4=&px0=&px1=&px2=&px3=&px4=&py0=&py1=&py2=&py3=&py4=&smin0=0&smin1=0&smin2=0&smin3=0&smin4=0&smax0=2pi&smax1=2pi&smax2=2pi&smax3=2pi&smax4=2pi&thetamin0=0&thetamin1=0&thetamin2=0&thetamin3=0&thetamin4=0&thetamax0=2pi&thetamax1=2pi&thetamax2=2pi&thetamax3=2pi&thetamax4=2pi&ipw=0&ixmin=-5&ixmax=5&iymin=-3&iymax=3&igx=1&igy=1&igl=1&igs=0&iax=1&ila=1&xmin=-5&xmax=5&ymin=-3&ymax=3

  