#### Questions

>Out of the sorting algorithms introduced, or any others you have encountered, which is the quickest or most efficient in sorting a set of data and why?

A: Random quicksort is the quickest sorting algorithm that I have encountered before.  It's quick because it uses a randomized
divide and conquer approach.  Probabilistically, the expected running time is O(nlogn).  Standard linear, iterative methods run
in O(n^2), much slower.

>Why is Binary Search more efficient than Linear Search for most cases?

A: Binary search is quicker than linear search in most cases because it uses a divide and conquer approach, which is almost
always faster than linear, iterative methods.  Binary search is way better than linear search if the array or list is sorted because you can recursively split and trash either the left or right half at each recursive call narrowing down the desired element.  iterative approaches at worst require you to run through the entire length of the array or list.




#### Code

>Code an implementation of Bubble Sort and test it on an integer array of your choice.

````JS
let myArray = [5,8,0,-10,3,9,-5,12]
for (let i = myArray.length-2; i >= 0; i--) {
  for (let j = 0; j <= i; j++) {
    if (myArray[j] > myArray[j+1]) {
      let tempElement = myArray[j+1];
      myArray[j+1] = myArray[j];
      myArray[j] = tempElement;
    }
  }
}
myArray
````
