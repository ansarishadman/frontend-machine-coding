import React, { useState, useEffect } from 'react';

const App = () => {
  const [todos, setTodos] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("todos") || "[]")
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const handleChange = (event) => {
    const value = event.currentTarget.value.trim();
    if (event.key == "Enter" && value != "") {
      setTodos([...todos, value]);
      event.currentTarget.value = ""
    }
  }

  const handleClick = () => {
        localStorage.removeItem("todos");
        setTodos([])
      }

  return (
    <div style={{display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", height: "100vh", gap: "20px"}}>
      Enter value: <input type="text" onKeyDown={handleChange} />
      <ul>
        {todos.map((value, idx) => {
          return <li key="idx">{value}</li>
        })}
      </ul>
      <button onClick={handleClick}>Clear Data</button>
    </div>
  )
}

export default App