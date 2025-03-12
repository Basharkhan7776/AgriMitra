import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Dashboard from "@/pages/Dashboard";
import NotFound from "@/pages/NotFound";
import Community from "@/pages/Community";
import Marketplace from "@/pages/Marketplace";
import Blogs from "@/pages/Blogs"
import GovSchemes from "@/pages/GovSchemes";
import Insurance from "@/pages/Insurance";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/community" element={<Community />}>
          <Route index path="blogs" element={<Blogs />} />
          <Route path="government-schemes" element={<GovSchemes />} />
          <Route path="insurance" element={<Insurance />} />
        </Route>
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
