import { useState } from 'react'
import Calculator from './Calculator'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Peter Scientific Calculator</h1>
        <p>Professional calculator for all your mathematical needs</p>
      </header>
      <main>
        <Calculator />
      </main>
    </div>
  )
}

export default App
