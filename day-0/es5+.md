# ES5+ cheatsheet

## let vs var

###### Variable scopes

- The var variables belong to the global scope or local scope if they are declared inside a function.
- The let variables are blocked scopes.

```
  function foo() {
    if (true) {
      var x = 1
    }
    console.log(x); // 1
  }

  function foo() {
    if (true) {
      let x = 1
    }
    console.log(x); // throw error: `Uncaught ReferenceError: x is not defined`
  }
```

```
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
  // Print out `5` five times

  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
  // Print out:
  // 0
  // 1
  // 2
  // 3
  // 4
```

###### Creating global properties

- The global var variables are added to the global object as properties. The global object is window on the web browser and global on Node.js.

```
  var counter = 0;
  console.log(window.counter); //  0
```

- However, the let variables are not added to the global object:

```
  let counter = 0;
  console.log(window.counter); // undefined
```

###### Redeclaration

- The var keyword allows you to redeclare a variable without any issue.

```
  function foo() {
    var x = 10;
    var x = 5;

    console.log(x);
  }
```

- If you redeclare a variable with the let keyword, you will get an error

```
  function foo() {
    let x = 10;
    let x = 5; // Identifier 'x' has already been declared

    console.log(x);
  }
```

## const
ES6 provides a new way of declaring a constant by using the const keyword. The const keyword creates a read-only reference to a value. The const keyword works like the let keyword. But the const keyword creates block-scoped variables whose values can’t be reassigned.

```
  const RATE = 1.0;
  RATE = 2.0; // Uncaught TypeError: Assignment to constant variable.
```

###### const for object, array

The `const` keyword ensures that the variable it creates is read-only. It doesn’t mean that the actual value to which the `const` variable reference is immutable.

See the following example:

```
  const person = { age: 20 };
  person.age = 30; // OK

  person = {}; // Uncaught TypeError: Assignment to constant variable.
```

```
  const colors = ['red'];
  colors[1] = 'green'; // OK

  colors = []; // Uncaught TypeError: Assignment to constant variable.
```

## Default function parameters

```
  function say(message = 'Hi') {
    console.log(message);
  }

  say(); // 'Hi'
  say(undefined); // 'Hi'
  say(null); // null
  say('Hello'); // 'Hello'
```

## Rest function parameters

```
  function foo(a, b, ...others) {
    console.log(a);
    console.log(b);
    console.log(others);
  }

  foo(1, 2, 3, 4, 5, 6);
  // Output:
  // 1
  // 2
  // [3, 4, 5, 6]
```

## Rest operator

###### Array:

- Constructing array literal

```
  let initialChars = ['a', 'b'];
  let chars = [...initialChars, 'c', 'd'];
  let chazs = ['c', 'd', ...initialChars];

  console.log(chars); // ['a', 'b', 'c', 'd'];
  console.log(chazs); // ['c', 'd', 'a', 'b'];
```

- Concatenating arrays

```
  let numbers = [1, 2];
  let moreNumbers = [3, 4];
  let allNumbers = [...numbers, ...moreNumbers];

  console.log(allNumbers); // [1, 2, 3, 4]
```

- Clone arrays

```
  let scores = [80, 70, 90];
  let copiedScores = [...scores];
  console.log(copiedScores); // [80, 70, 90]
```

###### Object

- Constructing object literal

```
  let info = { name: 'Tran Quang Vu', age: 26 };
  let goInfo = { ...info, company: 'GO', name: 'Ben' };
  let fwInfo = { company: 'Futureworkz', name: 'Bentran', ...info }

  console.log(goInfo); // { name: 'Ben', age: 26, company: 'GO' }
  console.log(fwInfo); // { company: 'Futureworkz', name: 'Tran Quang Vu', age: 26 }
```

- Merge objects

```
  let info = { name: 'Ben' };
  let extraInfo = { age: 26, email: 'ben@goldenowl.asia' };
  let allInfo = { ...info, ...extraInfo };

  console.log(allInfo); // { name: 'Ben', age: 26, email: 'ben@goldenowl.asia' }
```

- Clone object:

```
  let info = { name: 'Ben' };
  let copiedInfo = { ...info };
```

## Object Literal Syntax

Object property initializer shorthand

```
  function newEmployee(name, age) {
    return {
      name,
      age,
    }
  }
  let employee = newEmployee('Ben', 26);
  console.log(employee); // { name: 'Ben', age: 26 }
```

Computed property name

```
  function newEmployeeWithKeyPrefix(name, age, prefix = 'employee') {
    return {
      [`${prefix}Name`]: name,
      [`${prefix}Age`]: age,
    }
  }
  let employee = newEmployeeWithKeyPrefix('Ben', 26);
  console.log(employee); // { employeeName: 'Ben', employeeAge: 26 }
```

## String interpolation

```
  function sayHi(to) {
    console.log(`Hi ${to}, nice to meet you`);
  }

  sayHi('Ben') // Hi Ben, nice to meet you
```

## Destructuring

###### Array

```
  function getScores() {
    return [80, 90, 100];
  }

  let [s1, s2, s3, s4, s5 = 0] = getScores();

  console.log(s1); // 80
  console.log(s2); // 90
  console.log(s3); // 100
  console.log(s4); // undefined
  console.log(s5); // 0

  let [x, ...others] = getScores();
  console.log(x); // 80
  console.log(others); // [90, 100];
```

###### Object

```
  let info = {
    firstName: 'Tran',
    lastName: 'Ben',
  };

  let { firstName, lastName } = info;

  console.log(firstName); // 'Tran'
  console.log(lastName); // 'Ben'

  // default value
  let { firstName, lastName, age, company = 'GO' } = info;

  console.log(age); // undefined
  console.log(company); // GO

  // rename
  let { firstName: fname, lastName: lname } = info;
  console.log(fname); // 'Tran'
  console.log(lname); // 'Ben'
```

## Arrow function

```
  function add(x,y) {
    return x + y;
  }

  const add = (x, y) => {
    return x + y;
  }

  // Inline style
  let add = (x, y) => x + y;

  let arr = [1, 2, 3, 4];
  const plusOne = (items) => items.map(item => item + 1);

  console.log(plusOne[arr]); // [2, 3, 4, 5]

  // Destructuring object params
  let users = [
    { name: 'Ben', age: 26 },
    { name: 'Max', age: 30 },
    { name: 'Peter', age: 26 },
  ];
  const getUserNames = (users) => users.map(({ name }) => name);

  const userNames = getUserNames(users)
  console.log(userNames); // ['Ben', 'Max', 'Peter']

  // Destructuring array params
  let info = {
    name: 'Ben',
    age: 26,
  };
  const convertInfoToText = (info) => Object.entries(info)
    .map(([key, value]) => `${key}: ${value}`)
    .join(' - ');
  const textInfo = convertInfoToText(info);

  console.log(convertInfoToText); // 'name: Ben - age: 26'
```

## Promise

In JavaScript, a promise is an object that returns a value which you hope to receive in the future, but not now.
Because the value will be returned by the promise in the future, the promise is very well-suited for handling asynchronous operations.

```
  const learnReact = () => {
    return new Promise((resolve, reject) => {
      // throw new Error('Course closed');
      const hardWorking = Math.random() > 0.5;

      if (hardWorking) {
        resolve('Yeah! You have completed react tutorial');
      } else {
        reject('Not hard working');
      }
    });
  }
  learnReact()
    .then(message => {
      console.log(message);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      console.log('Registered react tutorial');
    });

  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
      console.log('Response JSON', json);
    });
```

- Promise all

```
  const todo1Fetch = fetch('https://jsonplaceholder.typicode.com/todos/1');
  const todo2Fetch = fetch('https://jsonplaceholder.typicode.com/todos/2');
  const failPromise = new Promise((resolve, reject) => {
    reject('Fail');
  });

  Promise.all([todo1Fetch, todo2Fetch])
    .then(values => {
      console.log('Response JSON todo1', values[0]); // todo1Fetch result
      console.log('Response JSON todo2', values[1]); // todo2Fetch result
    })
    .catch((error) => {
      console.log(error);
    });

  // It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.
  Promise.all([todo1Fetch, failPromise, todo2Fetch])
    .then(values => {
      console.log('Response JSON todo1', values[0]); // todo1Fetch result
      console.log('Response JSON todo2', values[1]); // todo2Fetch result
    })
    .catch((error) => {
      console.log(error);
    });

  // Returns a promise that resolves after all of the given promises have either fulfilled or rejected,
  // with an array of objects that each describes the outcome of each promise.
  Promise.allSettled([todo1Fetch, failPromise, todo2Fetch])
    .then(results => {
      console.log(results);
    });
```

## async/await

```
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const responseJSON = await response.json();

    console.log(responseJSON);
  } catch(error) {
    console.log(error);
  }

  // await in function
  async function fetchAllTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const responseJSON = await response.json();

    return responseJSON;
  }

  const fetchAllTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const responseJSON = await response.json();

    return responseJSON;
  }

  // async can only called with await
  const allTodos = await fetchAllTodos();
  console.log(allTodos);
```

## Class

```
  /**
  * Shape class.
  *
  * @constructor
  * @param {String} id - The id.
  * @param {Number} x  - The x coordinate.
  * @param {Number} y  - The y coordinate.
  */
  class Shape {
    constructor(id, x, y) {
      // constructor syntactic sugar
      this.id = id;
      this.setLocation(x, y);
    }

    /**
    * Set shape location.
    *
    * @param {Number} - The x coordinate.
    * @param {Number} - The y coordinate.
    */
    setLocation(x, y) {
      // prototype function
      this.x = x;
      this.y = y;
    }

    /**
    * Get shape location.
    *
    * @return {Object}
    */
    getLocation() {
      return {
        x: this.x,
        y: this.y
      };
    }

    /**
    * Get shape description.
    *
    * @return {String}
    */
    toString() {
      return `Shape("${this.id}")`;
    }
  }

  /**
  * Circle class.
  *
  * @constructor
  * @param {String} id     - The id.
  * @param {Number} x      - The x coordinate.
  * @param {Number} y      - The y coordinate.
  * @param {Number} radius - The radius.
  */
  class Circle extends Shape {
    constructor(id, x, y, radius) {
      super(id, x, y); // call Shape's constructor via super
      this.radius = radius;
    }

    /**
    * Get circle description.
    *
    * @return {String}
    */
    toString() {
      // override Shape's toString
      return `Circle > ${super.toString()}`; // call `super` instead of `this` to access parent
    }
  }

  // test the classes
  var myCircle = new Circle('mycircleid', 100, 200, 50); // create new instance
  console.log(myCircle.toString()); // Circle > Shape("mycircleid")
  console.log(myCircle.getLocation()); // { x: 100, y: 200 }
```
