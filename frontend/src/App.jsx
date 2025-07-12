import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [backendMessage, setBackendMessage] = useState('')

  const fetchBackendData = async () => {
    try {
      const response = await fetch('/api/test')
      const data = await response.text()
      setBackendMessage(data)
    } catch (error) {
      console.error('Error fetching from backend:', error)
      setBackendMessage('Error fetching data from backend.')
    }
  }

  return (
    <div className="App">
      <h1>Ikaizen Frontend</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          This is the React frontend.
        </p>
        <button onClick={fetchBackendData}>
          Fetch Backend Data
        </button>
        {backendMessage && <p>Backend says: {backendMessage}</p>}
      </div>
    </div>
  )
}

export default App
