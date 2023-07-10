// Q.1 What are hooks in react? how to identify hooks?

// ans)Hooks enable functional components to have their own local state, perform side effects, and tap into the React lifecycle. They provide 
// a more straightforward and concise way to work with stateful logic and component composition.

//  Q)Explain useState Hook & what can you achieve with it?
// ans)The useState hook is a built-in hook in React that allows functional components to have their own local state. It provides a way to declare state variables and functions to update them, all within a functional component.
// const [state, setState] = useState(initialValue);


// Q)How to pass data from one component to another component?

// ans) by using prop drilling method we can easily pass one component to another component

// Q)What is the significance of the "key" prop in React lists, and why is it important to use it correctly?

// ans)The key prop in React lists is a special attribute used to uniquely identify each item in an array or iterable when rendering a list of components dynamically. It is essential to use the key prop correctly because it helps React efficiently update and re-render the list components, improving performance and avoiding unexpected behavior.

// Q) What is the significance of using "setState" instead of modifying state directly in React?

// In React, it is significant to use the setState method provided by the component's state management system instead of directly modifying the state object
// Triggering Component Re-rendering,Enforcing Immutability,State Batching and Performance Optimization

// Q).6 Explain the concept of React fragments and when you should use them.

// ans)React fragments are a feature introduced in React 16.2 that allow you to group a list of elements without introducing additional DOM nodes. Fragments provide a way to return multiple elements from a component without the need for a wrapper element.

// Prior to fragments, if you wanted to return multiple adjacent elements in a component, you had to wrap them in a container element, like a <div>. However, this could result in unnecessary and potentially invalid HTML structure.

// With fragments, you can avoid these wrapper elements. Fragments are denoted by a special syntax using angle brackets (<> and </>) or by using the <React.Fragment>

// Q) How do you handle conditional rendering in React?

// ans) we can handel conditional rendering in react by usingif-else Statements or Ternary Operators