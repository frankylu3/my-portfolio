import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Hobbies from "./pages/hobbies";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </>
  );
}
