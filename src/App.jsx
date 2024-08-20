import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  TipTap from './editor/textEdit.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
      <header className='App-header'>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
          <h1>hello cms</h1>
          <TipTap />
          </header>
      </div>
  )
}

export default App
