import { Routes, Route } from "react-router-dom"
import './App.css'
import Layout from "./layouts/Layout"
import Home from "./pages/home"

function App() {

  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route index element={<Home/> } />
        <Route path="api" element={<div>Home Page</div>} />
      </Route>
    </Routes>
  )
}

export default App
