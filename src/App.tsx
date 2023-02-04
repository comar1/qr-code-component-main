import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="card">
        <div>
          <img src="/images/image-qr-code.png" alt="qr-code" />
        </div>
        <div className="content">
          <div className="card-title">Improve your front-end skills by building projects</div>
          <div className="card-description">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</div>
        </div>
      </div>
    </div>
  )
}

export default App
