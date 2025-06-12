import './App.css'
import logo from './assets/logo-white.png'
import { Routes, Route, NavLink} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import NewPost from "./pages/newpost/NewPost.jsx";
import Overview from "./pages/overview/Overview.jsx";
import Error from "./pages/404/Error.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/overview" element={<Overview />}/>
            <Route path="/newpost" element={<NewPost />}/>
            <Route path="error" element={<Error />}/>
        </Routes>
    )
}

export default App
