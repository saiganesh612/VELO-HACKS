import React, { useState, useEffect } from 'react'
import axios from "axios"

const TeammatesFeed = () => {
    const [teamFeed, setTeamFeed] = useState([]);

    useEffect(() => {
        axios.get("/get-team-feed").then(res => {
            setTeamFeed(res.data.feed)
        }).catch(err => {
            console.log(err.response)
        })
    }, [])

    return (
        <div>
            TEAM MATES FEED HERE
        </div>
    )
}

export default TeammatesFeed
