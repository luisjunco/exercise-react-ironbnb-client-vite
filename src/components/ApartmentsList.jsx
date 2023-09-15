import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ApartmentsList() {

    const [apartments, setApartments] = useState(null);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/apartments`)
            .then(response => {
                setApartments(response.data);
            })
            .catch(e => {
                console.log("error getting apartments from the api...", e)
            })
    }, []);

    return (
        <>
            <h1>List of Apartments:</h1>
            {apartments && apartments.map((element) => {
                return (
                    <div key={element._id} className="apartment-summary">
                        <h3>{element.title}</h3>
                        <img src={element.img} alt={element.title} />
                        <p>Price: {element.pricePerDay}</p>
                    </div>
                )
            })}
        </>
    )
}

export default ApartmentsList;