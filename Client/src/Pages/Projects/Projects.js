import React, { useState, useEffect } from 'react'
import axios from "axios"

const Projects = () => {
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        axios.get("/get-feed").then(res => {
            const data = res.data.feed
            setFeed(data)
        }).catch(err => {
            console.log(err)
        })
    })

    return (
        <div>
            PROJECTS HERE
        </div>
    )
}

export default Projects
