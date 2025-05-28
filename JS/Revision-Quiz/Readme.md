# 📘 JavaScript Mastery: MCQs & Concepts Guide

> ✨ _Sharpen your JavaScript skills with these carefully curated **MCQs** and **conceptual nuggets** covering:_

👉 **DOM**, **Events**, **Math.random()**, **Variables**, **Functions**, and **More!**

---

## 🌐 DOM (Document Object Model)

1. **What does DOM stand for in JavaScript?**  
   ✅ a) Document Object Model  
   🔗 [MDN Docs – DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

2. **Which method is used to select an element by its ID?**  
   ✅ c) getElementById()  
   🔗 [MDN – getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

3. **What does `document.querySelector(".box")` return?**  
   ✅ b) The first element with class "box"  
   🔗 [MDN – querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

4. **How do you change the text inside a paragraph with ID "message" to "Hello"?**  
   ✅ d) `document.getElementById("message").innerText = "Hello"`  
   🔗 [MDN – innerText](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)

5. **Why is innerHTML commonly used?**  
   ✅ c) To get or set the HTML content of an element  
   🔗 [MDN – innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

---

## 🎯 Events

1. **What is an event in JavaScript?**  
   ✅ b) A user or browser action  
   🔗 [MDN – Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

2. **Which of the following is a click event?**  
   ✅ b) onclick  
   🔗 [MDN – onclick](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick)

3. **How do you attach a click event listener to an element with id `"btn"`?**  
   ✅ b) `document.getElementById("btn").addEventListener("click", function() {})`  
   🔗 [MDN – addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

4. **What does `preventDefault()` do in an event handler?**  
   ✅ b) Stops default action like form submission  
   🔗 [MDN – preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

5. **Which method is used to handle multiple events on the same element?**  
   ✅ c) addEventListener()  
   🔗 [MDN – EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

---

## 🎲 Math.random()

1. **What does `Math.random()` return?**  
   ✅ c) A number between 0 and 1  
   🔗 [MDN – Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

2. **Which code generates a random integer from 1 to 10?**  
   ✅ c) `Math.floor(Math.random() * 10) + 1`  
   🔗 [MDN – Random Integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values)

3. **What is the range of values returned by `Math.random()`?**  
   ✅ c) 0 (inclusive) to 1 (exclusive)  
   🔗 [MDN – Range](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

4. **Which function is used to round down numbers?**  
   ✅ b) Math.floor()  
   🔗 [MDN – Math.floor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)

5. **What will `Math.floor(Math.random() * 5)` return?**  
   ✅ c) 0 to 4  
   🔗 [MDN – Floor Example](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values)

---

## 🧠 Variables

1. **Which of the following can declare variables in JavaScript?**  
   ✅ d) All of the above  
   🔗 [MDN – var, let, const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)

2. **Which keyword was introduced in ES6 to declare block-scoped variables?**  
   ✅ b) let  
   🔗 [MDN – let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

3. **Which keyword is preferred for declaring variables that can change?**  
   ✅ c) let  
   🔗 [MDN – let usage](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

4. **What happens if you assign a value to a variable that hasn't been declared?**  
   ✅ b) It becomes a global variable  
   🔗 [MDN – Undeclared Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Undeclared_variable)

5. **Which keyword declares a constant variable?**  
   ✅ c) const  
   🔗 [MDN – const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

---

## 🔧 Functions

1. **What is a function in JavaScript?**  
   ✅ b) A reusable block of code  
   🔗 [MDN – Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

2. **How do you declare a function in JavaScript?**  
   ✅ a) `function sayHello() {}`  
   🔗 [MDN – Function Declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)

3. **How do you call a function named `sayHello`?**  
   ✅ c) `sayHello()`  
   🔗 [MDN – Calling Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#calling_functions)

4. **What does the `return` statement do in a function?**  
   ✅ c) Returns a value  
   🔗 [MDN – return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)

5. **What is a parameter in a function?**  
   ✅ b) A variable passed into a function  
   🔗 [MDN – Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_parameters)

---

## 🧩 Mixed Concepts

1. **What is the type of `"Hello"` in JavaScript?**  
   ✅ a) string  
   🔗 [MDN – Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

2. **What does `console.log()` do?**  
   ✅ c) Outputs messages to the browser console  
   🔗 [MDN – console.log](https://developer.mozilla.org/en-US/docs/Web/API/console/log)

3. **How do you write a comment in JavaScript?**  
   ✅ b) `// comment`  
   🔗 [MDN – Comments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#comments)

4. **Which is a valid function expression?**  
   ✅ b) `let add = function(x, y) { return x + y; }`  
   🔗 [MDN – Function Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)

5. **What does `NaN` stand for?**  
   ✅ a) Not a Number  
   🔗 [MDN – NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)

6. **Which function converts a string to an integer?**  
   ✅ a) parseInt()  
   🔗 [MDN – parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

---

## 💡 Bonus: Conceptual Questions

1. **Why is using `let` safer than `var`?**  
   🔹 `let` is block-scoped and avoids hoisting issues that can lead to bugs when using `var`.

2. **What is the main benefit of separating JavaScript from HTML?**  
   🔹 It improves **maintainability**, **readability**, and follows **best practices** (separation of concerns).

3. **Why is `Math.random()` useful in games or UI effects?**  
   🔹 It adds **randomness** to create dynamic elements like animations, enemy spawns, or colors.

4. **What happens if two event listeners are attached to the same element?**  
   🔹 Both will run **in order**, unless one calls `stopPropagation()` or `preventDefault()`.

5. **Why should we use functions to organize code?**  
   🔹 Functions enable **reuse**, **modularity**, and make code easier to **test** and **maintain**.

---

## 🧪 Optional: Practical Understanding

1. **Why does `Math.floor(Math.random() * 10)` only go up to 9?**  
   🔹 Because `Math.random()` never returns 1 — the highest value is just under 10, which floors to 9.

2. **What does `addEventListener("click", function(){...})` do?**  
   🔹 It listens for **click events** and triggers the provided function whenever clicked.

3. **Why is it helpful to give buttons IDs or classes in the DOM?**  
   🔹 It allows easy selection for **JavaScript manipulation** and **CSS styling**.

4. **Can you assign a function to a variable in JavaScript? Why?**  
   🔹 Yes, because **functions are first-class citizens** — they can be stored, passed, and returned.

5. **What’s the difference between a function declaration and expression?**  
   🔹 **Declarations are hoisted**, meaning they can be used before they're defined. Expressions are not.

---

✅ **Keep Practicing!**  
