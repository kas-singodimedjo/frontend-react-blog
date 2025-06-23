import {useState} from "react"
import './Form.css'
import axios from "axios";
import datum from "../../helper/datum.js";

function Form() {
    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        author: "",
        content: "",
        created: "",
        readTime: "",
        comments: 0,
        shares: 0,

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value,
        }));
        console.log(formData)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        newPost(formData);
        console.log(formData);
    };
    async function newPost(formData) {
        try {
            const results = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts', {
                    "title": formData.title,
                    "subtitle": formData.subtitle,
                    "content": formData.content,
                    "author": formData.author,
                    "created": datum,
                    "readTime": formData.content.split(" ").length/100,
                    "comments": 0,
                    "shares": 0 }
            ,{
                headers:
                    {
                        'novi-education-project-id': 'c3febb8a-1e6f-4661-b991-14584ed3e91b'
                    }
            });
            console.log(results);
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Titel:
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Subtitel:
                    <input
                        type="text"
                        name="subtitle"
                        value={formData.subtitle}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Auteur:
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Bericht:
                    <br/>
                    <textarea
                        rows="10"
                        cols="30"
                        name="content"
                        value={formData.content}
                        minLength="300"
                        maxLength="2000"
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button type="submit">Versturen</button>
        </form>
        </>
    );
}


export default Form