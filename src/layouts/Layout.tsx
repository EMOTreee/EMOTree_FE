import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import BlobCursorLayout from "./BlobCursorLayout";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className={`w-screen h-screen`}>
        <BlobCursorLayout/>
        <Outlet />
      </main>
    </div>
  )
}