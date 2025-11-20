import { Routes, Route } from "react-router-dom"
import './App.css'
import Layout from "./layouts/Layout"
import Home from "./pages/home"
import Interpret from "./pages/interpret"
import BlobCursorLayout from "./layouts/BlobCursorLayout"

function App() {

  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="emotion/*" element={<BlobCursorLayout />}>
          <Route path="interpret" element={<Interpret />} />
          <Route path="empathy" element={<></>} />
        </Route>
        <Route path="express/*" element={<BlobCursorLayout />}>
          <Route path="voice" element={<></>} />
          <Route path="expression" element={<></>} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
