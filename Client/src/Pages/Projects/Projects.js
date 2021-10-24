import React, { useState, useEffect } from 'react'
import axios from "axios"
import './Projects.css'
import moment from "moment"

const Projects = () => {
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        axios.get("/get-feed").then(res => {
            const data = res.data.feed
            setFeed(data)
        }).catch(err => console.log(err.response.data))
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row">
                    {feed.map((data, index) => {
                        return (
                            <div className="col" key={index}>
                                <div className="cards" style={{ textDecoration: "none" }}>
                                    <div className="card-header">
                                        <img src={data.cover_pic.url} alt="profile" />
                                    </div>
                                    <div className="card-body">
                                        <span className="tag tag-teal">{data.theme}</span>
                                        <h4>
                                            {data.hackathon_name} <span><a style={{ textDecoration: "none", fontSize: "13px" }} href={`/projects/${data._id}`}>-View more</a></span>
                                        </h4>
                                        {/* <span><b>Conducted on:</b> {data.date.substr(0,10)}</span> */}
                                        {/* <span><b>Tech Stack:</b> {data.stack}</span> */}
                                        <p>{data.brief_desc}</p>
                                        <div className="user">
                                            <img src={data.profileImage} alt="user" />
                                            <div className="user-info">
                                                <h5>@{data.username}</h5>
                                                <small>{moment(data.upload_time).fromNow()}</small>
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
