import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  { messages } from "./fixtures/message";
import { Message } from "./components/Message/Message";
import { BlogCard } from './components/BlogCard/BlogCard';
import { blogPosts } from './fixtures/blog';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    
    <div>
      {messages.map((msg) => (
        <Message key={msg.id} message={msg} />
      ))}
    </div>
  
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div style={{ padding: '20px', backgroundColor: '#16181d', minHeight: '100vh' }}>
      {blogPosts.map((item) => (
        <BlogCard key={item.id} post={item} />
      ))}
    </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
