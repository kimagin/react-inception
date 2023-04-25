import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyButton from './components/MyComponent'
import './App.css'

function App() {
  return (
    <>
      <h1>Are you a button?</h1>
      <MyButton message="Hello my React friends..."></MyButton>
    </>
  )
}

export default App
