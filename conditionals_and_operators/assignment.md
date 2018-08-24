#### Questions

> What are the three types of conditional statements?

A: `if (condition) {}`, `else (condition) {}`, and `else if (condition) {}`

>What are four types of comparison operators and how you would use them?

A: `==`: Use the equality operator to compare two expressions (eg. `1 == 2` returns `false`).  JavaScript coerces both expressions into one of the two respective types if they're different. `!==`: Use the strict inequality operator to see if two expressions are strictly NOT equal (eg. `1 !== "1"` returns `true`).  Javascript does not coerce both
expressions in this case.  `>`: Use the greater than operator to see if the left expression is greater than the right expression (eg. `4>"2"` returns `true`).  Javascript coerces both expression into the same type.  `<=`: Use the less than or equal to operator to check if the left expression is less than or equal to the right expression (eg. `1<="1"`).  Javascript coerces both expressions into the same type.  



#### Code
(copy/pasted from editor)

> Create a variable called grade and set it to the grade you plan to receive
on this assignment. Then write an if statement that will check whether the
grade is equal to an A, B, C, D, or F and inform the user if they passed or
failed using console.log().

````JS
var grade="A"
if (grade === "A") {
  console.log("You passed!")
} else if (grade === "B") {
  console.log("You passed!")
} else if (grade === "C") {
  console.log("You passed!")
} else if (grade === "D") {
  console.log("You passed!")
} else {
  console.log("You failed!")
}
````
