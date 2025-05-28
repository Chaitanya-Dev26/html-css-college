# 📘 JavaScript Mastery: MCQs & Concepts Guide

> ✨ _Sharpen your JavaScript skills with these carefully curated **MCQs** and **conceptual nuggets** covering:_

👉 **DOM**, **Events**, **Math.random()**, **Variables**, **Functions**, and **More!**

---

## 🌐 DOM (Document Object Model)

1. **What does DOM stand for in JavaScript?**  
   ✅ a) **Document Object Model**

2. **Which method is used to select an element by its ID?**  
   ✅ c) **getElementById()**

3. **What does `document.querySelector(".box")` return?**  
   ✅ b) **The first element with class "box"**

4. **How do you change the text inside a paragraph with ID "message" to "Hello"?**  
   ✅ d) **document.getElementById("message").innerText = "Hello"**

5. **Why is innerHTML commonly used?**  
   ✅ c) **To get or set the HTML content of an element**

---

## 🎯 Events

1. **What is an event in JavaScript?**  
   ✅ b) **A user or browser action**

2. **Which of the following is a click event?**  
   ✅ b) **onclick**

3. **How do you attach a click event listener to an element with id `"btn"`?**  
   ✅ b) **document.getElementById("btn").addEventListener("click", function() {})**

4. **What does `preventDefault()` do in an event handler?**  
   ✅ b) **Stops default action like form submission**

5. **Which method is used to handle multiple events on the same element?**  
   ✅ c) **addEventListener()**

---

## 🎲 Math.random()

1. **What does `Math.random()` return?**  
   ✅ c) **A number between 0 and 1**

2. **Which code generates a random integer from 1 to 10?**  
   ✅ c) **Math.floor(Math.random() * 10) + 1**

3. **What is the range of values returned by `Math.random()`?**  
   ✅ c) **0 (inclusive) to 1 (exclusive)**

4. **Which function is used to round down numbers?**  
   ✅ b) **Math.floor()**

5. **What will `Math.floor(Math.random() * 5)` return?**  
   ✅ c) **0 to 4**

---

## 🧠 Variables

1. **Which of the following can declare variables in JavaScript?**  
   ✅ d) **All of the above** (`var`, `let`, `const`)

2. **Which keyword was introduced in ES6 to declare block-scoped variables?**  
   ✅ b) **let**

3. **Which keyword is preferred for declaring variables that can change?**  
   ✅ c) **let**

4. **What happens if you assign a value to a variable that hasn't been declared?**  
   ✅ b) **It becomes a global variable**

5. **Which keyword declares a constant variable?**  
   ✅ c) **const**

---

## 🔧 Functions

1. **What is a function in JavaScript?**  
   ✅ b) **A reusable block of code**

2. **How do you declare a function in JavaScript?**  
   ✅ a) **function sayHello() {}**

3. **How do you call a function named `sayHello`?**  
   ✅ c) **sayHello()**

4. **What does the `return` statement do in a function?**  
   ✅ c) **Returns a value**

5. **What is a parameter in a function?**  
   ✅ b) **A variable passed into a function**

---

## 🧩 Mixed Concepts

1. **What is the type of `"Hello"` in JavaScript?**  
   ✅ a) **string**

2. **What does `console.log()` do?**  
   ✅ c) **Outputs messages to the browser console**

3. **How do you write a comment in JavaScript?**  
   ✅ b) **// comment**

4. **Which is a valid function expression?**  
   ✅ b) **let add = function(x, y) { return x + y; }**

5. **What does `NaN` stand for?**  
   ✅ a) **Not a Number**

6. **Which function converts a string to an integer?**  
   ✅ a) **parseInt()**

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
These questions not only test your understanding but also help solidify key JavaScript concepts in your journey to becoming a frontend pro.

---
