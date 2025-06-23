import './App.css'
import logo from './assets/logo-white.png'
import {Routes, Route, NavLink, Navigate} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import NewPost from "./pages/newpost/NewPost.jsx";
import Posts from "./pages/posts/Posts.jsx";
import Error from "./pages/404/Error.jsx";
import Nav from "./assets/components/nav/Nav.jsx";
import Overview from "./pages/overview/Overview.jsx";
import {useEffect, useState} from "react";
import axios from "axios";




function App() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchPosts()
    }, []);
    async function fetchPosts() {
        try {
            const response = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts', {
                headers: {
                    'novi-education-project-id': 'c3febb8a-1e6f-4661-b991-14584ed3e91b'
                }
            }
            );
            setPosts(response.data);
        } catch(error) {
            console.log(error)
        }}

    return (
        <>
            <Nav />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/posts/:id" element={<Posts posts={posts} />}/>
            <Route path="/overview" element={<Overview posts={posts} fetchPosts={fetchPosts} />}/>
            <Route path="/newpost" element={<NewPost />}/>
            <Route path="error" element={<Error />}/>
        </Routes>
        </>
    )
}

export default App
