import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sapa from "./Sapa";
import Counter from "./Counter";
import ToDoList from './ToDoList';

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <h1>Belajar React</h1>
    <Sapa nama="Andi" />
    <Sapa nama="Siti" />
    <h1>App React Pertama 🎉</h1>
      <Counter />
    <h1>Belajar React 🚀</h1>
      <ToDoList />
  </div>
  )
}

export default App
