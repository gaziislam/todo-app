import React from "react";
// Import Components
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  console.log(todos);
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {todos.map((todo) => (
            <Todo
              setTodos={setTodos}
              todos={todos}
              key={todo.id}
              todo={todo}
              text={todo.text}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
