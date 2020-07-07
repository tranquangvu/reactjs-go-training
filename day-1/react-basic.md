# React Basic knowledge

In this post, We will learn about react component, jsx template, props, state, event handler.

These are most basic knowledge you need to know about react.


## Installation

Add `index.html` file with content:
```
  <html>
    <head>
      <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
      <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
      <style>
        body {
          background: pink;
        }
      </style>
    </head>
    <body>
      <div id="root"></div>
      <script type="text/babel">
        /*
          REACT CODE HERE
        */
      </script>
    </body>
  </html>
```

Things use should know:
* [Babel](https://babeljs.io/): Complier for next generation JavaScript
* The `div` with id `root` is the entry of our react app, where app will render.

## Components

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.

Let's create a simple component:

```
  class App extends React.Component {
    render() {
      return (
        <h1>Hello world!</h1>
      );
    }
  }
```

Each component must have `render` method. Inside `render` method, you will return elements you want React to draw on the page.

Next, render `App` component to the screen.

```
  ReactDOM.render(
    <App />,
    document.getElementById("root")
  );
```

Reload your html file and `Hello world!` to React.

![](https://drive.google.com/uc?export=view&id=1NjEduwc4ZirpxghQUZHWcNUwvy-h6kUo)

## Composing Components

Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail.

For example, we can create `Hello` component and render 2 `Hello` components in `App` component.

```
  class Welcome extends React.Component {
    render() {
      return (
        <h1>Hello world!</h1>
      );
    };
  }

  class App extends React.Component {
    render() {
      return (
        <div>
          <Welcome />
          <Welcome />
        </div>
      );
    }
  }
```

Reload your html file, you will see 2 `Hello world!` messages in screen.

## Props

Basically, props is arbitrary inputs of component. Props is read-only, component must never modify its own props.

Prop's value can be any type of data: String, Number, Boolean, Undefined, Null, Object, Array, Function, ...

Try to add `props` to `Welcome` component:
```
  class Welcome extends React.Component {
    render() {
      const { name } = this.props;

      return (
        <h1>Hello {name}! Welcome to the world</h1>
      );
    };
  }
```
```
  class App extends React.Component {
    render() {
      return (
        <div>
          <Welcome name="Ben" />
          <Welcome name="Meow" />
        </div>
      );
    }
  }
```

In `App` component, we pass a prop named `name` to `Welcome` component. After that, inside `Welcome` component we can get `name` prop's value from `this.props` object.

The result screen should be look like this.

![](https://drive.google.com/uc?export=view&id=16fRvD4SnYm6lydRu6_FPHwXXYxFcD5Us)

## States

The other way of storing data in React is in the component’s state. And unlike props — which can’t be changed directly by the component, the state can.

So if you want the data in your app to change — for example, based on user interactions — it must be stored in a component’s state somewhere in the app.

#### Initializing state

To initialize the state, simply set `this.state` in the `constructor` method of the class. After Initializing, can get state value anywhere in component by `this.state`.

Add `lifeCount` state to `Welcome` component:
```
  class Welcome extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        likeCount: 0
      };
    }

    render() {
      const { name } = this.props;
      const { likeCount } = this.state;

      return (
        <div>
          <h1>Hello {name}! Welcome to the world</h1>
          <button>Like</button> Like count: { likeCount }
        </div>
      );
    };
  }
```

#### Changing state

To modify the state, simply call `this.setState`, passing in the new state object as the argument.

Keep in mind, by default everytime the state is changed, component will rerender by calling `render` method again.

```
  class Welcome extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        likeCount: 0
      };
    }

    increaseLikeCount = () => {
      const { likeCount } = this.state;

      this.setState({
        likeCount: likeCount + 1,
      });
    }

    render() {
      const { name } = this.props;
      const { likeCount } = this.state;

      return (
        <div>
          <h1>Hello {name}! Welcome to the world</h1>
          <button onClick={this.increaseLikeCount}>Like</button> Like count: { likeCount }
        </div>
      );
    };
  }
```

Reload web browser, click on like button to see the result :)))

Congrats! You now have a very basic understanding of the most important concepts in React.
