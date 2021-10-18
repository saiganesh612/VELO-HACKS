import React, { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import axios from "axios"

const Projects = () => {
    const [feed, setFeed] = useState([]);
    const { isAuthenticated, user, error, getAccessTokenSilently } = useAuth0();

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
    }, [user])

    useEffect(() => {

        const x = async () => {
            // const token = await getAccessTokenSilently()
            axios({
                method: "GET",
                url: "/get-feed",
                // headers: {
                //     "authorization": `Bearer ${token}`
                // }
            }).then(res => {
                const data = res.data.feed
                setFeed(data)
            }).catch(err => {
                console.log(err.response)
            })
        }
        x()
    }, [])

    return (
        <div>
            PROJECTS HERE
        </div>
    )
}

export default Projects
