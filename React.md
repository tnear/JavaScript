# React
React is a JavaScript library for building UIs based on components. It is developed by Facebook.

https://www.w3schools.com/REACT/DEFAULT.ASP

## Virtual DOM
Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory where it does all the necessary manipulating before making changes to the browser DOM.

React detects what changes have been made and only changes those in the DOM.

## Hello, World!
```js
import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
    return <h1>Hello, World!</h1>;
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Hello />);
```

## JSX (JavaScript XML)
JSX is a JavaScript extension that allows creating DOM trees using an XML-like syntax. It was initially created for use with React.

### Example
```js
const App = () => {
    return (
        <div>
            <p>Header</p>
            <p>Content</p>
            <p>Footer</p>
        </div>
    ); 
}
```

### Curly braces
Curly braces let you return to JavaScript from within JSX so that you can embed a variable value.

```js
return (
    <h1>
        {user.name}
    </h1>
);
```

Conditional rendering:
```js
<div>
    {isLoggedIn ? (
        <AdminPanel />
    ) : (
        <LoginForm />
    )}
</div>
```

## Creating a component
https://react.dev/learn

Create a component:
```js
function MyButton() {
    return (
        <button>I'm a button</button>
    );
}
```

Nest `MyButton` in another component. Note that `MyButton` begins with a capital letter while HTML tags must be lowercase:
```js
export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    );
}
```

## Hooks
Functions beginning with `use` are called *Hooks*. For example, `useState` is a built-in provided by React. Hooks are more restrictive than other functions. You can only call Hooks at the top of your components (or other Hooks). If you want to use useState in a condition or a loop, extract a new component and put it there.
