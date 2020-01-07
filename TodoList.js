import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { removeTodo, toggleTodo } from "./globalstate/actions";

class TodoList extends React.Component {
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

    return (
      <React.Fragment>
        <div className="d-flex">
          <div>
            <b>Todo List</b>
          </div>
          <div>{filteredList.length} results found</div>
        </div>
        <ul>
          <Todo />
        </ul>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  todoList: state.todos,
  filterTodo: state.filterTodo
});

export default connect(
  mapStateToProps,
  { removeTodo, toggleTodo }
)(TodoList);
// export default TodoList;
