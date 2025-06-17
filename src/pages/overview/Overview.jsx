import './Overview.css'
import posts from '/src/constants/data.json';
import { Link } from 'react-router-dom';

function Overview() {
    const blogposts = posts;
    const even = "even";
    const uneven = "uneven"
    return (
        blogposts.map((post) => <div key={post.id} className={`blogpost ${post.id%2===0 ? even : uneven}`}>
            <h2><Link to={`/posts/${post.id}`}>{post.title} - ({post.author})</Link></h2>
            <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
        </div>)
    )
}

export default Overview