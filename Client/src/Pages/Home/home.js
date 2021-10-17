import React, { useEffect } from "react";
import Navbarr from "../../Components/navbar/navbar"
import { useAuth0 } from "@auth0/auth0-react"
import axios from "axios"

const Home = () => {
    const { isAuthenticated, user, error } = useAuth0();

    useEffect(() => {
        if (error) {
            alert(error.error_description)
            window.location.search = ""
        }
        else if (isAuthenticated && user) {
            axios.post("/update-user-details", { user })
                .then((res) => console.log(res.data.message))
                .catch(err => console.log(err.response))
        }
    })

    return <Navbarr />
}

export default Home;
