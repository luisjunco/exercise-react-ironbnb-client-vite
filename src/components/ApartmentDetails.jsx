import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

function ApartmentDetails() {

    const { apartmentId } = useParams();

    const [details, setDetails] = useState(null);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/apartments/${apartmentId}`)
            .then(response => {
                setDetails(response.data);
            })
            .catch(e => {
                console.log("error getting apartment details from the api...", e)
            })
    }, []);

    const renderDetails = () => {
        return (
            <>
                <h2>{details.title}</h2>
                <p>Price: {details.pricePerDay}</p>
                <img src={details.img} alt={details.title} />
            </>
        )
    }

    return (
        <main className="ApartmentDetails">
            <h1>ApartmentDetails</h1>

            {details === null
                ? <p>loading...</p>
                : renderDetails()
            }

            <p>
                <Link to="/apartments">Back</Link>
            </p>

        </main>
    );
}

export default ApartmentDetails;