#### Questions

>What type of variable name casing do you use in JavaScript? (think of snakes or camels)

A: camelCase

>If you want to create a variable called mentor and set its value equal to the name of your mentor, how would you do that?

A: `var mentor = "Michael";`

> How would you then log the value of mentor to the console?

A: `console.log(mentor)`

> Describe the difference between let, var, and const.

A: Use `const` to declare variable that won't change.  Use `let` to declare variables that can change (via reassignment) when you want them in scope only within a certain block of code (`{}`).  Use `var` to declare variables that can change when you want them either to have global scope (define outside of the function or local scope within a function (define anywhere within a function).



#### Code
(copy/pasted from editor)

> Using var, let and const create 3 variables that will hold your name, state, and hair color.

````
var name = "Benjamin";
let state = "New York";
const hairColor = "brown";
````
