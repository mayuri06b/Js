# JavaScript Scope, Patterns, and Inheritance – Explained Briefly

---

## 🧠 Scope & Hoisting

### Types of Scope
- **Global Scope**: Defined outside any function (window-level).
- **Lexical Scope**: Determined by code structure; functions and objects define lexical scopes.
- **Non-Lexical Scope**: Found in blocks like `if`, `for` (not true scopes in older JS versions).

### Hoisting
- Variables declared with `var` are "hoisted" (moved to the top of their scope).
- **Hoisting in non-lexical blocks** (e.g., inside `if`) leads to confusing behavior.
- `let` and `const` are **not hoisted** in the same way, making them safer.

---

## 🧩 Function Declarations

### Two Ways to Declare Functions
1. **Function Declaration**
   - Hoisted (can be called before it's defined).
   - Not preferred for clarity.

2. **Function Expression**
   - Not hoisted.
   - Can be anonymous or named.
   - Safer and more controlled.

---

## 🔍 Scope Chain

- JS searches from **inner to outer scope** to find a variable.
- **Scope Chain Augmentation (SCA)**: Order in which scopes are searched.
- First in the chain: **Activation Object** (local variables of a function).
- Last: **Global Scope** (`window`).

---

## 🧱 Primitive vs Reference Types

### Primitive Types
- `number`, `string`, `boolean`, etc.
- Passed by **value**.
- **Cannot be extended** (no methods or custom properties).
- Stored in **stack memory**.

### Reference Types
- `objects`, `arrays`, `functions`.
- Passed by **reference** (share memory).
- Can store extra data and methods.
- Stored in **heap memory**.

---

## 📦 Object Creation Patterns

### 1. Factory Pattern
- A function returns a new object with private and public properties.
- Good for encapsulation.
- ❌ Disadvantage: **Duplicates methods** for every object → inefficient memory usage.

### 2. Constructor Pattern
- Uses `this` and `new` keyword to create objects.
- Properties are assigned using `this`.
- ❌ Disadvantage: Methods still get duplicated for every instance.

### 3. Prototype Pattern
- Methods are placed on `.prototype` to avoid duplication.
- Shared across instances (uses dynamic reference).
- Use `new` to create instances.
- ❌ Disadvantage: Don’t put reference types in prototype (shared across all objects!).

### 4. Constructor + Prototype (Best Practice)
- Combine constructor (for properties) and prototype (for methods).
- Used in **ES5 class emulation**.
- Keeps memory usage optimal.

---

## 🔗 Prototype Chaining (Inheritance)

- Link one prototype to another: `Child.prototype = new Parent();`
- Enables method inheritance.
- Example: `instance instanceof Parent` → `true`
- ❌ Problem: Reference-type properties are shared across all instances.

### Fix: Assign prototype **before** setting new properties or chaining.

---

## 🔧 Constructor Stealing (a.k.a. Constructor Borrowing)
- Solves the reference-sharing problem.
- Use `Parent.call(this)` inside child constructor.
- Each instance gets its own reference-type property.
- ❌ Limitation: Only properties are inherited, **not methods**.

---

## 🔀 Combination Inheritance

- Combines:
  - **Constructor Stealing** for instance-specific properties.
  - **Prototype Chaining** for shared methods.
- Ensures methods are shared and data is private.
- ❌ Drawback: **Parent constructor is called twice.**

---

## 🚀 ES6 Classes & Modern JS

### let vs var
- `let`/`const` = **block-scoped**, safe.
- `var` = **function-scoped**, can leak to global scope.

### const
- Use `const` to prevent reassignment (protect identifiers).

### Silent Overwrite
- JS allows overwriting variables silently (no warning).

### Modules
- Use `export` and `import` to share code between files.
- Modules must be run with a **server (e.g., Live Server)**.
- Imported functions are accessible in the `window` scope (depending on setup).

### Arrow Functions
- Do **not** have their own `this`; they inherit from their lexical scope.
- Great for callbacks and methods where you want `this` to refer to the parent.
