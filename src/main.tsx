import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Main from './pages/Main/index.tsx'
import About from './pages/About/index.tsx'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import Products from './pages/Products/index.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  </Provider>

)
