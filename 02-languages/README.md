# Master Front End IX - Laboratory - Module 2 - Languages

## Intro

In the repository of the module [02-languages](https://github.com/ortiztena/master-frontend-lemoncode/tree/master/02-languages) you have statements of exercises to practice. For the delivery of the laboratory, we present you the following ones:

## Exercises

### 1. Array operations

#### Head

It implements a head function (immutable), such that, given an array as input it extracts and returns its first element. It uses destructuring.

    const head = (/* array */) => {}; // Implementation here.

#### Tail

It implements a tail function, such that, given an array as input, it returns all but the first element. It uses a rest operator.

    const tail = (/* array */) => {}; // Implementation here.

#### Init

It implements an init function (immutable), such that, given an array as input it returns all elements except the last one. It uses the methods offered by Array.prototype.

    const init = (/* array */) => {}; // Implementation here.

#### Last

It implements a last function (immutable), such that, given an array as input it returns the last element.

    const last = (/* array */) => {}; // Implementation here.

## 2. Concat

It implements a concat function (immutable) such that, given 2 arrays as input, it returns the concatenation of both. It uses rest / spread operators.

    const concat = (a, b) => {}; // Implementation here.

### Optional

It implements a version of the previous exercise where multiple input arrays (more than 2) are accepted.

## 3. Clone Merge

#### Clone

Implements a clone function that, from a source input object, returns a new object with the source properties:

    function clone(source) {
    // Implementation here.
    }

#### Merge

It implements a merge function that, given two input objects source and target, returns a new object with all the properties of target and source, and in case of properties with the same name, source overwrites target.

For example, given these 2 objects:

    const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
    const b = { name: "Luisa", age: 31, married: true };
the result of mixing a over b would be:

    merge(a, b); // { name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
    TIP: You can use the "clone" function in section A.

    function merge(source, target) {
    // Implementation here.
    }

## 4. Read Books

Create an isBookRead function that receives a list of books and a title and returns whether or not the book has been read. A book is an object with a title as a string and isRead as a boolean. If the book does not exist return false TIP: There is an Array.prototype method that will help you search according to a pattern.

    function isBookRead(books, titleToSearch) {
    // Implementation here
    }

Example

    const books = [
    { title: "Harry Potter and the Philosopher's Stone", isRead: true },
    { title: "Song of ice and fire", isRead: false },
    { title: "Devastation", isRead: true },
    ];

    console.log(isBookRead(books, "Devastation")); // true
    console.log(isBookRead(books, "Song of Ice and Fire")); // false
    console.log(isBookRead(books, "The Pillars of the Earth")); // false

### Optional

> Use Typescript to add the appropriate types.

## 5. Slot Machine

The objective of this exercise is to create a slot machine using classes where every time we play we insert a coin. Each slot machine (instance) will have a coin counter that will automatically increase as we play.

When the play method is called the number of coins should be increased automatically and it should generate three random booleans that will represent the state of the 3 roulettes. The user will have won in case the three booleans are true, and therefore the message must be shown by the console:

    "Congratulations! You won <number of coins> coins!

and restart the stored coins, since we have achieved them and they have left the machine. If not, you will have to show another message:

    "Good luck next time!!".

### Example

    class SlothMachine {
    /* ... */
    }

    const machine1 = new SlothMachine();
    machine1.play(); // "Good luck next time!
    machine1.play(); // "Good luck next time!
    machine1.play(); // "Congratulations! You won 3 coins!!"
    machine1.play(); // "Good luck next time!!"
    machine1.play(); // "Congratulations! You won 2 coins!!"