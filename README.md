## Answer 1: Difference between var, let, and const
var – Function-scoped,it can be redeclared & updated.
let – Block-scoped,it cannot be redeclared, but can be updated.
const – Block-scoped,it cannot be redeclared or updated (value fixed), must be initialized.     

## 2: Difference between map(), forEach(), and filter()
forEach() – Runs a function on each item but does not return anything.
map() – Runs a function on each item and returns a new array of the results.
filter() – Returns a new array of only the elements that pass a condition.

## 3: Arrow functions in ES6
A shorter way to write functions using =>. It is useful for callbacks & retuen in the single line. Example: const add = (a, b) => a + b;

## 4: Destructuring assignment

It is a concept to extract values via variables from an array. 

Example: 
const numbers = [10, 20, 30];
const [a, b, c] = numbers;
console.log(a, b, c); // 10 20 30

here new variables extract the values from the array

## 5: Template literals vs string concatenation

Template literals (``): It can contains multiline string inside one syntex and also contain dynamic variables in the string.

example:
const message = ` Hi
Hello
i am omar
`;

tring concatenation (${ }): It is used to dynamically bring variables inside a string by calling the variable name

Example: 
const name = "Omar";
const text = `Hello, ${name}!`;


## 🔗 Submission
- **Live Link :** YOUR_DEPLOYED_URL_HERE  
- **GitHub Private Repository:** YOUR_REPO_URL_HERE  

---