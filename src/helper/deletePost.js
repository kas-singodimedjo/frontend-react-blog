import axios from "axios";

const deletePost = async (id) => {
    try {
        await axios.delete(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/${id}`, {
            headers:
                {
                    'novi-education-project-id': 'c3febb8a-1e6f-4661-b991-14584ed3e91b'
                }
        });
    }
    catch (error) {
        console.log(error);
    }
}

export default deletePost;