import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

import "./CreateApartment.css";

function CreateApartment() {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [imageURL, setImageURL] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newApartment = {
            img: imageURL,
            title: title,
            pricePerDay: price
        }

        axios.post(`${import.meta.env.VITE_API_URL}/apartments`, newApartment)
            .then(response => {
                navigate("/apartments");
            })
            .catch(e => {
                console.log("error creating new apartment...", e);
            })
    }

    return (
        <main className="CreateApartment">
            <h1>Create a new Apartment</h1>
            <form onSubmit={handleSubmit}>

                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        required={true}
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </label>


                <label>
                    Price:
                    <input
                        type="number"
                        min={1}
                        max={999}
                        name="price"
                        required={true}
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }}
                    />
                </label>


                <label>
                    Image URL:
                    <input
                        type="text"
                        name="imageURL"
                        required={true}
                        value={imageURL}
                        onChange={(e) => { setImageURL(e.target.value) }}
                    />
                </label>

                <button>Create</button>
            </form>
        </main>
    )
}

export default CreateApartment;