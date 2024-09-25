import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signout from "./pages/Signup";
import Profile from "./pages/Profile";

function App() {
  return <BrowserRouter>
  <Routes>  
    <Route path="/" element={<Home/>}/>
    <Route path="/sign-in" element={<Signin/>}/>
    <Route path="/sign-out" element={<Signup/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/profile" element={<Profile/>}/>


  </Routes>
  </BrowserRouter>
}

export default App
