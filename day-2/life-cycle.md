# React Component’s Lifecycle Methods

Each component in React has a lifecycle which you can monitor and manipulate during its three main phases: `Mounting`, `Updating`, `Unmounting`.

![](./life-cycle.png)

## Mounting

Mounting means putting elements into the DOM.

These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
  * `constructor(props)`
  * `static getDerivedStateFromProps(props, state)`
  * `render()`
  * `componentDidMount()`

#### constructor(props)

The `constructor()` method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.

The `constructor()` method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).

```
  class Header extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        favoritecolor: 'red',
      };
    }
    render() {
      return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      );
    }
  }

  ReactDOM.render(<Header />, document.getElementById('root'));
```

#### static getDerivedStateFromProps(props, state)

The `getDerivedStateFromProps()` method is called right before rendering the element(s) in the DOM.

This is the natural place to set the `state` object based on the initial `props`.

It takes `state` as an argument, and returns an object with changes to the state.

```
  class Header extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        favoritecolor: 'red',
      };
    }

    static getDerivedStateFromProps(props, state) {
      return {
        favoritecolor: props.favcol,
      };
    }

    render() {
      return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      );
    }
  }

  ReactDOM.render(<Header favcol='yellow' />, document.getElementById('root'));
```

#### render()

The render() method is required, and is the method that actual outputs HTML to the DOM.

#### componentDidMount()

The `componentDidMount()` method is called after the component is rendered.

This is where you run statements that requires that the component is already placed in the DOM.

```
  class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: 'red'};
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({favoritecolor: 'yellow'})
      }, 1000)
    }
    render() {
      return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      );
    }
  }

  ReactDOM.render(<Header />, document.getElementById('root'));
```

## Updating

The next phase in the lifecycle is when a component is updated.

A component is updated whenever there is a change in the component's state or props.

React has five built-in methods that gets called, in this order, when a component is updated:
  * `static getDerivedStateFromProps(props, state)`
  * `shouldComponentUpdate()`
  * `render()`
  * `getSnapshotBeforeUpdate(prevProps, prevState)`
  * `componentDidUpdate(prevProps, prevState, snapshot)`

##### static getDerivedStateFromProps(props, state)

Also at updates the `getDerivedStateFromProps()` method is called. This is the first method that is called when a component gets updated.

This is still the natural place to set the state object based on the initial props.

The example below has a button that changes the favorite color to blue, but since the getDerivedStateFromProps() method is called, which updates the state with the color from the favcol attribute, the favorite color is still rendered as yellow:

```
  class Header extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        favoritecolor: 'red',
      };
    }

    static getDerivedStateFromProps(props, state) {
      return {
        favoritecolor: props.favcol
      };
    }

    changeColor = () => {
      this.setState({favoritecolor: 'blue'});
    }

    render() {
      return (
        <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          <button type='button' onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }

  ReactDOM.render(<Header favcol='yellow'/>, document.getElementById('root'));
```

#### shouldComponentUpdate()

In the `shouldComponentUpdate()` method you can return a Boolean value that specifies whether React should continue with the rendering or not.

The default value is `true`.

```
  class Header extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        favoritecolor: 'red',
      };
    }

    shouldComponentUpdate() {
      return false;
    }

    changeColor = () => {
      this.setState({
        favoritecolor: 'blue',
      });
    }

    render() {
      return (
        <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          <button type='button' onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }

  ReactDOM.render(<Header />, document.getElementById('root'));
```

#### render()

The `render()` method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.

```
  class Header extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        favoritecolor: 'red',
      };
    }

    changeColor = () => {
      this.setState({
        favoritecolor: 'blue',
      });
    }

    render() {
      return (
        <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          <button type='button' onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }

  ReactDOM.render(<Header />, document.getElementById('root'));
```

#### getSnapshotBeforeUpdate()

In the `getSnapshotBeforeUpdate()` method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.

If the `getSnapshotBeforeUpdate()` method is present, you should also include the `componentDidUpdate()` method, otherwise you will get an error.

```
  class Header extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        favoritecolor: 'red',
      };
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({
          favoritecolor: 'yellow',
        })
      }, 1000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
      document.getElementById('div1').innerHTML = 'Before the update, the favorite was ' + prevState.favoritecolor;
    }

    componentDidUpdate() {
      document.getElementById('div2').innerHTML = 'The updated favorite is ' + this.state.favoritecolor;
    }

    render() {
      return (
        <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          <div id='div1'></div>
          <div id='div2'></div>
        </div>
      );
    }
  }

  ReactDOM.render(<Header />, document.getElementById('root'));
```

#### componentDidUpdate()

The `componentDidUpdate()` method is called after the component is updated in the DOM.

```
  class Header extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        favoritecolor: 'red',
      };
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({
          favoritecolor: 'yellow'
        });
      }, 1000)
    }

    componentDidUpdate() {
      document.getElementById('mydiv').innerHTML = 'The updated favorite is ' + this.state.favoritecolor;
    }

    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id='mydiv'></div>
        </div>
      );
    }
  }

  ReactDOM.render(<Header />, document.getElementById('root'));
```

# Unmounting

The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.

React has only one built-in method that gets called when a component is unmounted:
  * `componentWillUnmount()`

#### componentWillUnmount()

The `componentWillUnmount()` method is called when the component is about to be removed from the DOM.

```
  class Container extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        show: true
      };
    }

    delHeader = () => {
      this.setState({
        show: false
      });
    }

    render() {
      let myheader;

      if (this.state.show) {
        myheader = <Child />;
      };

      return (
        <div>
          {myheader}
          <button type='button' onClick={this.delHeader}>Delete Header</button>
        </div>
      );
    }
  }

  class Child extends React.Component {
    componentWillUnmount() {
      alert('The component named Header is about to be unmounted.');
    }

    render() {
      return (
        <h1>Hello World!</h1>
      );
    }
  }

  ReactDOM.render(<Container />, document.getElementById('root'));
```
