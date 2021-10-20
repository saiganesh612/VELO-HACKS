import React, { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import axios from "axios"
import './Projects.css'
const Projects = () => {
    const [feed, setFeed] = useState([]);
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
    }, [error, isAuthenticated, user])

    useEffect(() => {
        axios.get("/get-feed").then(res => {
            const data = res.data.feed
            setFeed(data)
        }).catch(err => console.log(err.response.data))
    }, [])
    console.log('feed',feed)
    return (
        <div>
            <div class="container">
                <div className="row">
                    {feed.map(data=>{
                       return(
                    <div className="col">
                        <div class="cards" style={{textDecoration:"none"}}>
                        <div class="card-header">
                        <img src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" alt="rover" />
                        </div>
                        <div class="card-body">
                        <span class="tag tag-teal">{data.theme}</span>
                        <h4>
                           {data.hackathon_name} <span><a  style={{textDecoration:"none",fontSize:"13px"}} href={`/projects/${data._id}`}>-View more</a></span>
                        </h4>
                        {/* <span><b>Conducted on:</b> {data.date.substr(0,10)}</span> */}
                        {/* <span><b>Tech Stack:</b> {data.stack}</span> */}
                        <p>
                           {data.brief_desc}
                        </p>
                        <div class="user">
                            <img src={data.profileImage} alt="user" />
                            <div class="user-info">
                            <h5>@{data.username}</h5>
                            <small>2h ago</small>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                       )
                    })}   
                </div>
                </div>
            </div>
    )
}

export default Projects
