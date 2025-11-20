import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}