import './Overview.css'
import { Link } from 'react-router-dom';
import {useEffect} from "react";

function Overview( {posts, fetchPosts } ) {
    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);
    const blogposts = posts;
        if (posts.length > 0) { return(
            blogposts.map((post) => <div key={post.id} className={`blogpost`}>
                <h2><Link to={`/posts/${post.id}`}>{post.title} - ({post.author})</Link></h2>
                <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
            </div>));
        } else { return (
            <h1>Er is iets mis gegaan...</h1>
        )}
}

export default Overview