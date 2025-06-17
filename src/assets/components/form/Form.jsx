import {useState} from "react"
import './Form.css'

function Form() {
    const [formData, setFormData] = useState({
        titel: "",
        subtitel: "",
        auteur: "",
        bericht: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Titel:
                    <input
                        type="text"
                        name="titel"
                        value={formData.titel}
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
                        name="subtitel"
                        value={formData.subtitel}
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
                        name="auteur"
                        value={formData.auteur}
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
                        name="bericht"
                        value={formData.bericht}
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