import React, { useState, useEffect } from 'react'
import Reply from '../../Components/Modal/Modal'
import moment from 'moment'
import axios from "axios"
import Profile from './Profile'
import  {RecentFeed}  from './RecentFeed'
import '../DetailedProject/styles.css'

const TeammatesFeed = () => {
    const [teamFeed, setTeamFeed] = useState([]);
    const [post,setPost] = useState("");
    useEffect(() => {
        axios.get("/get-team-feed").then(res => {
            setTeamFeed(res.data.feed)
        }).catch(err => {
            console.log(err.response)
        })
    }, [])
    console.log('data',teamFeed)
    return (
        <div className="container">
        <div className="row">
            <div className="col-4 "  style={{marginTop:"4pc"}}>
                <Profile/>
                <br/>
                <RecentFeed/>
            </div>
            <div className="col-7 blog">
                {teamFeed?.map(data=>{
                    return(
                        <div className="blog-comments">
                            <div className="reply-form">
                                <div id="comment-1" className="comment" >
                                <p style={{textAlign:"right"}}>Close issue</p>
                                    <div className="d-flex">
                                
                                    <div className="comment-img"><img style={{width:"40px",borderRadius:"50%",marginTop:"5px",border:"2px solid grey"}} src="https://avatars.githubusercontent.com/u/92678481?v=4" alt="" /></div>
                                    <div>
                                    <a href={data.linkedin}>
                                    <h5>@{data.username} 

                                    <span style={{color:"black",fontSize:"15px",fontWeight:"lighter",padding:"5px"}}>  
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                                    </svg></span>
                                    </h5>
                                    </a>
                                        <time dateTime="2020-01-01">{moment(data.date).fromNow()}</time>
                                        <br/>
                                        <div >
                                        <p style={{textAlign:"left",maxWidth:"600px"}}>

                                            We wanted a team member to participate in  <b>{data.hackathon_name}</b> which is organised by  <b>{data.organiser}</b> on <b>{data.date.substr(0,10)}</b>.
                                            We want to develop on a <b>{data.theme}</b> project using <b>{data.stack}</b>
                                          
                                            <br/> <br/>
                                            <h4>Requirement</h4>
                                            {data.requirement}
                                        </p>
                                        </div>
                                    </div>
                                    </div>
                                    <br/>
                                    
                                </div>
                                <br/>   
                            </div> 
                        </div>
                    )
                })}
              
            </div>    
        </div>
        </div>
    )
}

export default TeammatesFeed
