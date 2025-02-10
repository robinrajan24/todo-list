const TodoList = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Todo List
        </h1>
        <div className="flex mb-6">
          <input
            type="text"
            className="flex-grow p-3 border-2 border-blue-300 rounded-l-lg focus:outline-none focus-ring-2 focus-ring-blue-500"
            placeholder="What needs to be done?"
          />
          <button className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600 transition-color">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
