// Day 14: Classes
// Tasks/Activities:

// Activity 1: Class Definition
// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  greeting() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person1 = new Person('John Doe', 30);
console.log(person1.greeting());

// Task 2: Add a method to the Person class that updates the age property and logs the updated age.
class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  greeting() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  updateAge(newAge) {
      this.age = newAge;
      console.log(`Updated age is ${this.age}`);
  }
}

const person2 = new Person('Jane Doe', 25);
person2.updateAge(26);

// Activity 2: Class Inheritance
// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
class Student extends Person {
  constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
  }

  getStudentId() {
      return `Student ID: ${this.studentId}`;
  }
}

const student1 = new Student('Alice', 20, 'S12345');
console.log(student1.getStudentId());


// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
class Student extends Person {
  constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
  }

  getStudentId() {
      return `Student ID: ${this.studentId}`;
  }

  greeting() {
      return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }
}

const student2 = new Student('Bob', 22, 'S67890');
console.log(student2.greeting());

// Activity 3: Static Methods and Properties
// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  greeting() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  static genericGreeting() {
      return 'Hello, everyone!';
  }
}

console.log(Person.genericGreeting());

// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
class Student extends Person {
  static count = 0;

  constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
      Student.count++;
  }

  getStudentId() {
      return `Student ID: ${this.studentId}`;
  }

  greeting() {
      return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }

  static getTotalStudents() {
      return `Total number of students: ${Student.count}`;
  }
}

const student3 = new Student('Charlie', 21, 'S23456');
const student4 = new Student('David', 23, 'S34567');

console.log(Student.getTotalStudents());

// Activity 4: Getters and Setters
// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
class Person {
  constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
  }

  get fullName() {
      return `${this.firstName} ${this.lastName}`;
  }

  greeting() {
      return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
  }
}

const person3 = new Person('Eve', 'Smith', 28);
console.log(person3.fullName);

// Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
class Person {
  constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
  }

  get fullName() {
      return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
      const [firstName, lastName] = name.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
  }

  greeting() {
      return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
  }
}

const person4 = new Person('Fiona', 'Brown', 27);
person4.fullName = 'Gina White';
console.log(person4.fullName);

// Activity 5: Private Fields (Optional)
// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account {
  #balance;

  constructor(initialBalance) {
      this.#balance = initialBalance;
  }

  deposit(amount) {
      if (amount > 0) {
          this.#balance += amount;
          console.log(`Deposited: $${amount}`);
      } else {
          console.log('Deposit amount must be positive');
      }
  }

  withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
          this.#balance -= amount;
          console.log(`Withdrew: $${amount}`);
      } else {
          console.log('Invalid withdrawal amount');
      }
  }

  getBalance() {
      return this.#balance;
  }
}

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
const myAccount = new Account(1000);

myAccount.deposit(500);
console.log(`Balance: $${myAccount.getBalance()}`);

myAccount.withdraw(200);
console.log(`Balance: $${myAccount.getBalance()}`);

myAccount.withdraw(1500); // Should show an error message
console.log(`Balance: $${myAccount.getBalance()}`);

// Feature Request:
// Basic Class Script: Write a script that defines a Person class with properties and methods, creates instances, and logs messages.
// Class Inheritance Script: Create a script that defines a Student class extending Person, overrides methods, and logs the results.
// Static Methods and Properties Script: Write a script that demonstrates static methods and properties in classes.
// Getters and Setters Script: Create a script that uses getters and setters in a class.
// Private Fields Script: Write a script that defines a class with private fields and methods to manipulate these fields (optional).

// Achievement:
// By the end of these activities, students will:
// Define and use classes with properties and methods.
// Implement inheritance to extend classes.
// Utilize static methods and properties.
// Apply getters and setters for encapsulation.
// Understand and use private fields in classes (optional).