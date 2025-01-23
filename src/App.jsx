import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.css";



function App() {
  const [todos, setTodos] = useState([]); // store todoitems
  const [input, setInput] = useState(""); // store current text input

  const addTodo = () => {
    if (input.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: input, completed: false }, //Lägg till ny uppgift
      ]);
      setInput(""); // Rensa input fältet
    }
  };

    // Ta bort en uppgift
    const deleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };



  return (
    <>
      <div className="flex justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div>
        <h1 className="text-white">REACT TO DO LIST</h1>
        <div>
          <input
            className="bg-white rounded p-2"
            type="text"
            placeholder="Add a new todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
          className="rounded m-4 text-gray-500"
          onClick={addTodo}>Add</button>
        </div>

        {/* skapar en lista av uppgifter, baserat på en array som heter todos som är kopplat till input */}
        <ul className=" pt-4">
          {todos.map((todo) => (
            <li key={todo.id} className=" text-red-500 text-3xl p-2 flex items-center justify-between">

              <input
              
                type="checkbox"

                checked={todo.completed} // Checkboxens status (kryssad eller inte) styrs av egenskapen completed i varje todo-objekt.
                onChange={() =>
                  setTodos(
                    todos.map((t) =>
                      t.id === todo.id
                        ? { ...t, completed: !t.completed }
                        : t
                    )
                  )
                }
              />
              <span 
                className={`ml-10 ${todo.completed ? "line-through" : "text-white"}`}
              >
                {todo.text}
              </span>

              <div className="pl-10"></div>

              {/* Delete button */}
              <button
              className="text-gray-500 rounded pr-10"
                onClick={() =>
                  setTodos(todos.filter((t) => t.id !== todo.id))
                }
                
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
