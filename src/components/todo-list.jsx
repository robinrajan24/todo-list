import { useState } from "react";
import { Trash2, CheckCircle, Circle } from "lucide-react";

const TodoList = () => {
  const [todos, setTodes] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodes([
        ...todos,
        {
          id: Date.now(),
          text: inputValue,
          completed: false,
        },
      ]);
      setInputValue("");
    }
  };

  const toggleTodo = (id) => {
    setTodes(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (e, id) => {
    e.stopPropagation();
    setTodes(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Todo List
        </h1>
        <div className="flex mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-grow p-3 border-2 border-blue-300 rounded-l-lg focus:outline-none focus-ring-2 focus-ring-blue-500"
            placeholder="What needs to be done?"
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600 transition-color"
          >
            Add
          </button>
        </div>

        {todos.length === 0 ? (
          <div className="text-center text-gray-500 italic">
            {" "}
            No todos yet. Add a task above!{" "}
          </div>
        ) : (
          <ul className="space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                style={{
                  backgroundColor: todo.completed ? "#e7fdee" : "#F9FAFB", // Green background if completed, light gray otherwise
                  textDecoration: todo.completed ? "line-through" : "none", // Line-through if completed
                  color: todo.completed ? "#A0AEC0" : "#2D3748", // Gray text if completed
                }}
                className="flex items-center justify-between p-3 rounded-lg transition-all duration-200 hover:bg-gray-100"
              >
                <div
                  className="flex items-center cursor-pointer flex-grow"
                  onClick={() => toggleTodo(todo.id)}
                >
                  {todo.completed ? (
                    <CheckCircle className="mr-3 text-green-500" />
                  ) : (
                    <Circle className="mr-3 text-gray-300" />
                  )}
                  <span>{todo.text} </span>
                  <button
                    onClick={(e) => deleteTodo(e, todo.id)} // Pass event to stop propagation
                    className="text-red-500 hover:text-red-700 transition-color ml-auto cursor-pointer "
                  >
                    <Trash2 size={20}></Trash2>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoList;
