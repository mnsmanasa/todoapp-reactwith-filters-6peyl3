import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Hello from "./Hello";
import TodoApp from "./TodoApp";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import reducer from "./globalstate/reducer";
import FilterTodo from "./FilterTodo";
import "./style.css";

const store = createStore(reducer);

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <Provider store={store}>
        <TodoApp />
        <AddTodo />
        <br />
        <FilterTodo />
        <br />
        <br />
        <TodoList />
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
