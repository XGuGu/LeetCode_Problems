Java:

Q1. What is OOP ?

A1: It is a programming language model. Programmers are organized around data or objects rather than functions and logic.  And the object has its unique attributes and behavior.
Benefits : reusable code, scalable object, and efficient code.

Q2: Principles of OOP?
A2:
      1 Encapsulation: 一个class的属性可以是private，其他的object不能make change，只能调用public function or methods。这种 data hiding provides greater security and avoid unintended data corruption
       2 Abstraction: means using simple things to represents complexity.
       3 Inheritance:  the subclass can have the attributes of the main class, allowing developers to reuse a common logic. Reduce development time.
       4 Polymorphism: …….

Q3: What is overloading and overriding?
A3: Overloading occurs when two or more methods in one class have the same method name but different parameters. Overriding means having two methods with the same method name and parameters. One of the methods is in the parent class and the other is in the child class.

Q4: What is Multiple inheritance?
A4: Multiple Inheritance is a feature of object oriented concept, where a class can inherit properties of more than one parent class. Java does not support multiple inheritance.

Q5: What is Class?
A5: It is a template to create object, and define object data types and methods.
1.	Modifiers : A class can be public or has default access.
2.	Class name: The name should begin with a initial letter (capitalized by convention).
3.	Superclass(if any): The name of the class’s parent (superclass), if any, preceded by the keyword extends. A class can only extend (subclass) one parent.
4.	Interfaces(if any): A comma-separated list of interfaces implemented by the class, if any, preceded by the keyword implements. A class can implement more than one interface.
5.	Body: The class body surrounded by braces, { }.

Q6: What is Polymorphism?
A6: Polymorphism is the ability of an object to take on many forms. The most common use of polymorphism in OOP occurs when a parent class's reference is used to refer to a child class object.

Q7: What is interface?
A7: Like a class, an interface can have methods and variables, but the methods declared in interface are by default abstract (only method signature, no body).
•	Interfaces specify what a class must do and not how. It is the blueprint of the class.
•	An Interface is about capabilities like a Player may be an interface and any class implementing Player must be able to (or must implement) move(). So it specifies a set of methods that the class has to implement.
•	If a class implements an interface and does not provide method bodies for all functions specified in the interface, then class must be declared abstract.
•	A Java library example is,Comparator interface. If a class implements this interface, then it can be used to sort a collection.

interface Vehicle
class Bicycle implements Vehicle


abstract class Base
class Derived extends Base



Q8: What is static ?
Q8: static is a non-access modifier in Java. When a member is declared static, it can be accessed before any objects of its class are created, and without reference to any object.
      Static variables: When a variable is declared as static, then a single copy of variable is created and shared among all objects at class level. Static variables are, essentially, global variables. All instances of the class share the same static variable.
       Static methods: When a method is declared with static keyword, it is known as static method. The most common example of a static method is main( ) method.


Q9:Difference between abstract class  and interface ?
A9:
1.	Type of methods: Interface can have only abstract methods. Abstract class can have abstract and non-abstract methods. From Java 8, it can have default and static methods also.
2.	Final Variables: Variables declared in a Java interface are by default final. An abstract class may contain non-final variables.
3.	Type of variables: Abstract class can have final, non-final, static and non-static variables. Interface has only static and final variables.
4.	Implementation: Abstract class can provide the implementation of interface. Interface can’t provide the implementation of abstract class.
5.	Inheritance vs Abstraction: A Java interface can be implemented using keyword “implements” and abstract class can be extended using keyword “extends”.
6.	Multiple implementation: An interface can extend another Java interface only, an abstract class can extend another Java class and implement multiple Java interfaces.
7.	Accessibility of Data Members: Members of a Java interface are public by default. A Java abstract class can have class members like private, protected, etc.


Q10: What is final, finally and finalize ?
A10:
	final:
var: If we declare any variable as final, we can’t modify its contents since it is final, and if we modify it then we get Compile Time Error.
		Method: The method cannot be overridden by a subclass. Whenever we declare any method as final, then it means that we can’t override that method.
		Class: The class cannot be subclassed. Whenever we declare any class as final, it means that we can’t extend that class or that class can’t be extended or we can’t make subclass of that class.
	finally:
The finally keyword is used in association with a try/catch blockand guarantees that a section of code will be executed, even if an exception is thrown. The finally block will be executed after the try and catch blocks, but before control transfers          back to its origin.
	finalize:
It is a method that the Garbage Collector always calls just before the deletion/destroying the object which is eligible for Garbage Collection, so as to perform clean-up activity.


Q11: What is Thread safe?
A11:

Q12: what primitive types of java is not thread safe?
A12:

Q13: What is garbage collection ?
A13:  Main objective of Garbage Collector is to free heap memory by destroying unreachable objects.


Q14: Difference between Hashtable and Hashmap ?
A14: There are several differences between HashMap andHashtable in Java: Hashtable is synchronized, whereas HashMap is not. This makes HashMapbetter for non-threaded applications, as unsynchronized Objects typically perform better than synchronized ones. Hashtable does not allow null keys or values.


SQL:



JS：
1.	Prototype interitance: All JavaScript objects have a prototype property, that is a reference to another object. When a property is accessed on an object and if the property is not found on that object, the JavaScript engine looks at the object's prototype, and the prototype's prototype and so on, until it finds the property defined on one of the prototypes or until it reaches the end of the prototype chain.


2.	Undefined, null ?
Var foo; // undefined
Var foo = null; // null 需要被明确赋值为 null


3.	Closure？
A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.
4.	anonymous functions?
Usually used in callbacks
setTimeout(function() {
  console.log('Hello world!');
}, 1000);
Arguments is a function
const arr = [1, 2, 3];
const double = arr.map(function(el) {
  return el * 2;
});

5.	Native objects and Host objects
Native objects are objects that are part of the JavaScript language: like  String , Math, Object, Function
Host objects are provided by the environment: like window, ..

6.	Var, let, const
Var is function scoped, let is block scoped.  A variable declared with var is defined throughout the program as compare to let.
Const is block scoped. Const can not be updated or re-declared.

7.	Hoisting
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

8.	Ajax:
A technique used in order to send and retrieve data in background without refreshing a page.  Send request and receive JSON data

React:
        1.  What is State ?
	State is a data structure that starts with a default value when a component mounts, it can be mutated.
          State is similar to props, but it is private and fully controlled by the component. State is essentially an object that holds data and determines how the component renders and behaves.


        2. What is Props ?
	Props are a components configuration. They are received from above and immutable.

        3.  where in a React component should you make an AJAX call ?
             ComponentDidMount is where we make an ajax call. It will be executed when the component “mounts” for the first time. And it will only execute once during the component’s life.

  4. What are controlled components ?
           The component containing the form will keep track of the value of the input in it's state and will re-render the component each time the callback function e.g. onChange is fired as the state will be updated.

       5.  Why is it advised to pass a callback function to setState as opposed to an object ?
           Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.

       6.  What is the purpose of super(props) ?
            A child class constructor cannot make use of this until super() has been called. The reason for passing props to super() is to enable you to access this.props in the constructor.

       7. What is redux ?
           The basic idea of redux is that the entire application state is kept in a single store. The store is simply a javascript object. The only way to change the state is by sending actions from your application and then writing reducers for these actions that modify the state. The entire state transition is kept inside reducers and should not have any side-effects.
      8. What is redux Thunk used for ?
       Redux thunk is middleware that allows you to write action creators that return a function instead of an action. The thunk can then be used to delay the dispatch of an action if a certain condition is met. This allows you to handle the asynchronous          dispatching of actions.

      9. What is an action ?
Actions are plain javascript objects. They must have a type indicating the type of action being performed. In essence, actions are payloads of information that send data from your application to your store.


      10. What is a reducer ?
 	A reducer is simply a pure function that takes the previous state and an action, and returns the next state.

       11. What is a Store in redux ?
	The store is a javascript object that holds application state. Along with this it also has the following responsibilities:
•	Allows access to state via getState();
•	Allows state to be updated via dispatch(action);
•	Registers listeners via subscribe(listener);
•	Handles unregistering of listeners via the function returned by subscribe(listener).















JSP 是什么？
HTML 5 validation 是什么？

HTML5 新feature，audio，video怎么用， new APIs 是什么

Local Stroage 作用？

Difference between GET and POST

Common method GET POST PUT DELETE

Difference between observable and promise:
Promises: return a single value, not cancellable, more readable code with try/catch and async/await

Observales: work with multiple values over time, cancelable……..

Observables are lazy, subscribe 处理后端发送过来的实时数据， if you don’t subscribe nothing is going to happen. It s good to know that when

Design pattern:

Angular Service 特征 singleton, prototype

Angular component lifecycle

Ngonchange()
….
Ngoninit()


Router

Node is an open source platform
Npm is the largest ecosystem of open source libraries in the world.
Node is the server side operating environment for JavaScript

NodeJs  MongoDB, no Oracle

Node Event Driven

Node js  error handle
1. throw an exception
2. error object passed to the callback function, by the callback function is responsible for handling errors
3. Use try catch to catch the exception

Assertion
For the test : assert, expect, should (unit testing)
Assert.equal(event.detail.item, ‘(item)’)


Process and thread
One process can have mutli thread

Event loop: (event driven question)
….see cheat sheet

CommonJS a set of standards Moudels

NPM is package management

Spring 原理
Hibernate..












HTML：
什么是document markup？？

Css external internal inline 这三种在实际应用中是什么样的？
