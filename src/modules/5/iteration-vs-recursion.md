
[Source - http://www2.hawaii.edu](http://www2.hawaii.edu/~tp_200/lectureNotes/recursion.htm "Permalink to Recursion Vs. Iteration")

# Recursion Vs. Iteration

** **

A recursive method is a method that calls itself either directly or indirectly

There are two key requirements to make sure that the recursion is successful:

* Every recursive call must simplify the computation in some way.
* There must be special cases to handle the simplest computations.

**Iteration Vs. Recursion**

* If a recursive method is called with a base case, the method returns a result. If a method is called with a more complex problem, the method divides the problem into two or more conceptual pieces: a piece that the method knows how to do and a slightly smaller version of the original problem. Because this new problem looks like the original problem, the method launches a recursive call to work on the smaller problem.
* For recursion to terminate, each time the recursion method calls itself with a slightly simpler version of the original problem, the sequence of smaller and smaller problems must converge on the base case. When the method recognizes the base case, the result is returned to the previous method call and a sequence of returns ensures all the way up the line until the original call of the method eventually returns the final result.
* Both iteration and recursion are based on a control structure: Iteration uses a repetition structure; recursion uses a selection structure.
* Both iteration and recursion involve repetition: Iteration explicitly uses a repetition structure; recursion achieves repetition through repeated method calls.
* Iteration and recursion each involve a termination test: Iteration terminates when the loop-continuation condition fails; recursion terminates when a base case is recognized.
* Iteration and recursion can occur infinitely: An infinite loop occurs with iteration if the loop-continuation test never becomes false; infinite recursion occurs if the recursion step does not reduce the problem in a manner that converges on the base case.
* Recursion repeatedly invokes the mechanism, and consequently the overhead, of method calls. This can be expensive in both processor time and memory space.

  