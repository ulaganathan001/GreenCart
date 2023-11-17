import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Homepage from "./Homepage";

const Home = () => {
    const usenavigate = useNavigate();
    const [customerlist, listupdate] = useState(null);
   
    useEffect(() => {
       

    }, []);

    return (
        <>
            <Homepage></Homepage>
        </>
    );
}

export default Home;