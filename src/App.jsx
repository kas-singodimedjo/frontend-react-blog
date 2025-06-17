import './App.css'
import logo from './assets/logo-white.png'
import {Routes, Route, NavLink, Navigate} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import NewPost from "./pages/newpost/NewPost.jsx";
import Posts from "./pages/posts/Posts.jsx";
import Error from "./pages/404/Error.jsx";
import Nav from "./assets/components/nav/Nav.jsx";
import Overview from "./pages/overview/Overview.jsx";


function App() {
    return (
        <>
            <Nav />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/posts/:id" element={<Posts />}/>
            <Route path="/overview" element={<Overview />}/>
            <Route path="/newpost" element={<NewPost />}/>
            <Route path="error" element={<Error />}/>
        </Routes>
        </>
    )
}

export default App
