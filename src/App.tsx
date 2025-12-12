import { Routes, Route, Navigate } from "react-router-dom"
import './App.css'
import Layout from "./layouts/Layout"
import Home from "./pages/home/Home"
import Recognize from "./pages/recognize/Recognize"
import Empathy from "./pages/empathy/Empathy"
import Mypage from "./pages/mypage/Mypage"
import Voice from "./pages/express/voice/Voice"
import Expression from "./pages/express/expression/Expression"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route path="mypage" element={<Mypage />} />
          <Route index element={<Home />} />
          <Route path="emotion/*">
            <Route path="recognize" element={<Recognize />} />
            <Route path="empathy" element={<Empathy />} />
          </Route>
          <Route path="express/*">
            <Route path="voice" element={<Voice />} />
            <Route path="expression" element={<Expression />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}

export default App
