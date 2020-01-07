import React from "react";
import { connect } from "react-redux";
import { removeTodo, toggleTodo } from "./globalstate/actions";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  removeTodo = event => {
    this.props.removeTodo(event.target.getAttribute("data-target"));
  };

  toggleTodo = e => {
    this.props.toggleTodo(e.target.getAttribute("id"));
  };

  render() {
    var filteredList = this.props.todoList.filter(todo => {
      if (
        this.props.filterTodo === "true" ||
        this.props.filterTodo === "false"
      ) {
        return String(todo.completed) === this.props.filterTodo;
      } else {
        return this.props.todoList;
      }
    });

    return filteredList.map(t => {
      return (
        <React.Fragment key={t.id}>
          <li
            id={t.id}
            onClick={this.toggleTodo}
            className={t.completed ? "strike-through" : ""}
          >
            {t.todo}
          </li>
        </React.Fragment>
      );
    });
  }
}

const mapStateToProps = state => ({
  todoList: state.todos,
  filterTodo: state.filterTodo
});

export default connect(
  mapStateToProps,
  { removeTodo, toggleTodo }
)(Todo);
