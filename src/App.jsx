import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import About from "./pages/About"

const App = () => {
  return <BrowserRouter>
  <Routes>
    <Route path="/sign-in" element={<Signin />} />
    <Route path="/sign-up" element={<Signup/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/" element={<Home />} />
  </Routes>
  </BrowserRouter>
}

export default App
