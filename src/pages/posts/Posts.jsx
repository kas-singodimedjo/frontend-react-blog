import {Link, useParams} from "react-router-dom";
import Datum from "../../assets/helper/datum.js";

function Posts( { posts }) {

    const { id } = useParams();
    const post = posts.find(post => String(post.id) === String(id));
    if (post) {return (
        <>
            <div className="blogpost">
                <h2>{post.title} ({post.readTime} minutes)</h2>
                <p className="blogpostinfo">post#{post.id}</p>
                <p>Geschreven door {post.author} op {Datum(post.created)}</p>
                <p>{post.content}</p>
                <p>comments: {post.comments} - shares: {post.shares}</p>
                <p><Link to="/overview" className="blogpostinfo">Terug naar de overzichtspagina</Link></p>
            </div>
        </>
    )
    } else { return (
    <h1>Er is iets mis gegaan...</h1>
)}}
export default Posts;