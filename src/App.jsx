import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup"; // Corrected import name
import Profile from "./pages/Profile";
import About from './pages/About'; // Exact match for the casing of the file name
import Header from "./components/Header";


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page route */}
        <Route path="/sign-in" element={<Signin />} /> {/* Sign-in page route */}
        <Route path="/sign-up" element={<Signup />} /> {/* Sign-up page route */}
        <Route path="/about" element={<About />} /> {/* About page route */}
        <Route path="/profile" element={<Profile />} /> {/* Profile page route */}
      </Routes>
    </BrowserRouter>
  );
}


