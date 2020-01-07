import { ADD_TODO, REMOVE_TODO, TGL_TODO, FLTR_TODO } from "./actionTypes";

export const initialState = {
  todos: [
    {
      id: 1,
      todo: "sdf",
      completed: true
    },
    {
      id: 2,
      todo: "sdfsdf",
      completed: false
    }
  ],
  filterTodo: null,
  initializeId: 3
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: state.initializeId++, todo: action.payload, completed: false }
        ]
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: [...state.todos].filter(x => x.todo !== action.payload)
      };
    case TGL_TODO:
      state.todos.forEach(x => {
        if (x.id === Number(action.payload)) {
          x.completed = !x.completed;
          console.log(x.completed);
        }
      });
      return {
        ...state,
        todos: [...state.todos]
      };
    case FLTR_TODO:
      return {
        ...state,
        filterTodo: action.payload
      };
    default:
      return state;
  }
}
