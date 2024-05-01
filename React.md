# React
React is a JavaScript library for building user interfaces based on components. It is developed by Facebook.

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

### Conditional rendering
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

## Props
Props are like function arguments in JavaScript *and* attributes in HTML.

Note: react props are read-only. You will get a runtime error if you try changing their value.

```js
const myElement = <Car brand="Ford" />;

function Car(props) {
    return <h1>I am a { props.brand }!</h2>;
}
```

### Pass data
Props are how to pass data from one component to another.
```js
function Car(props) {
    return <h2>I am a { props.brand }!</h2>
}

function Garage() {
    const carName = 'Ford'; // specify car name
    return (
        <>
            <h1>Who lives in my garage?</h1>

            <!--create Car and pass in car name-->
            <Car brand={ carName } />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
```

## Events
React has the sam events as HTML: click, change, mouseover, etc.

React event handlers are written in braces. The events are camel case (unlike HTML).

```html
<!-- React syntax-->
<button onClick={debug}>Click to debug</button>

<!--HTML syntax-->
<button onnclick="debug()">Click to debug</button>
```

### Example

```js
function Football() {
    // create debug function
    const debug = () => {
        alert('You clicked debug');
    }

    return (
        <button onClick={debug}>Click to debug</button>
    );
}
```

## Hooks
Functions beginning with `use` are called *Hooks*. For example, `useState` is a built-in provided by React. Hooks are more restrictive than other functions:
- Hooks can only be called inside React function components
- Hooks can only be called at the top level of a component
- Hooks cannot be conditional

### `useState`
The `useState` hook allows tracking state in a function component. "State" refers to data or properties which require tracking for an application.

```js
import { useState } form "react";

function FavoriteColor() {
    // initialize state returns two values:
    // 1. current state
    // 2. a function which updates state
    const initialValue = ''; // empty string by default
    const [currentColor, setColorFcn] = useState(initialValue);

    // read state
    return <h1>Current color is {color}</h1>
}
```
To update state, use the returned callback (do not set directly the new state, ex: `color = 'red'`:
```js
function FavoriteColor() {
    // use setColor function to update state
    const [color, setColorFcn] = useState("red");

    return (
        <>
            <!-- change state to blue using setColorFcn-->
            <button type="button" onClick={() => setColorFcn("blue")}>
                Blue
            </button>
        </>
    )
}
```

### Other common hooks
- [useEffect](https://www.w3schools.com/react/react_useeffect.asp): perform side effects on components
- [useContext](https://www.w3schools.com/react/react_usecontext.asp): manage state globally
- [useRef](https://www.w3schools.com/react/react_useref.asp): persist value between renders
- [useCallback](https://www.w3schools.com/react/react_usecallback.asp): returns memoized callback
- [useMemo](https://www.w3schools.com/react/react_usememo.asp): returns a memoized value

## Lists
```js
function Car(props) {
    return <li>I am a { props.brand }</li>;
}

// uses 'cars.map' to create array of cars (and html)
function Garage() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <ul>
                {cars.map((car) => <Car brand={car} />)}
            </ul>
        </>
    );
}
```

## Memo
`memo` will skip rendering a component if its `props` have not changed.

```js
import { memo } from "react";

const Todos = ({ todos }) => {
    console.log("child render");
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
        </>
    );
};

// export using memo
export default memo(Todos);
```
