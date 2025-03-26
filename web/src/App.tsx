import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "@/context/AuthContext";
import RequireAuth from "@/components/RequireAuth";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Dashboard from "@/pages/Dashboard";
import NotFound from "@/pages/NotFound";
import Community from "@/pages/Community";
import Marketplace from "@/pages/Marketplace";
import Blogs from "@/pages/Blogs";
import GovSchemes from "@/pages/GovSchemes";
import Insurance from "@/pages/Insurance";
import Setup from "@/pages/Setup";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/setup"
            element={
              <RequireAuth>
                <Setup />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/community"
            element={
              <RequireAuth>
                <Community />
              </RequireAuth>
            }
          >
            <Route path="blogs" element={<Blogs />} />
            <Route path="government-schemes" element={<GovSchemes />} />
            <Route path="insurance" element={<Insurance />} />
          </Route>
          <Route
            path="/marketplace"
            element={
              <RequireAuth>
                <Marketplace />
              </RequireAuth>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
