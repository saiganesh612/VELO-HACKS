import React, { useState, useEffect } from 'react'
import Reply from '../../Components/Modal/Modal'
import axios from "axios"
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
            <div className="col-2">
                 profile bro
            </div>
            <div className="col-7 blog">
              <div className="blog-comments">
             
              <div className="reply-form">
              <h4 className="comments-count">POSTS</h4>
                <div id="comment-1" className="comment" >
                    <div className="d-flex">
                    <div className="comment-img"><img style={{width:"40px",borderRadius:"50%",marginTop:"5px",border:"2px solid grey"}} src="https://avatars.githubusercontent.com/u/92678481?v=4" alt="" /></div>
                    <div>
                        <h5>@Rehakoneru</h5>
                        <time dateTime="2020-01-01">2h ago</time>
                        <br/>
                        <div >
                        <p style={{textAlign:"left",maxWidth:"600px"}}>
                            wanted team members for 2 hackerthons
                            speacialise: front end
                            wanted team members for 2 hackerthons
                            speacialise: front end
                            wanted team members for 2 hackerthons
                            speacialise: front end
                        </p>
                        </div>
                    </div>
                    </div>
                    <br/>
                    
                </div>
                <br/>
                <form >
                    <div className="row">
                        <div className="col form-group">
                        <textarea style={{borderRadius:"30px",padding:"6px 25px"}} name="comment" className="form-control" id="comment" placeholder="Your Comment*"
                            onChange={(e) => setPost(e.target.value)} required>
                        </textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Post</button>
                    </form>
                <br/><br/>
                
              </div>
              <br />
              <div className="reply-form">
              <h4 className="comments-count">POSTS</h4>
                <div id="comment-1" className="comment" >
                    <div className="d-flex">
                    <div className="comment-img"><img style={{width:"40px",borderRadius:"50%",marginTop:"5px",border:"2px solid grey"}} src="https://avatars.githubusercontent.com/u/92678481?v=4" alt="" /></div>
                    <div>
                        <h5>@Rehakoneru</h5>
                        <time dateTime="2020-01-01">2h ago</time>
                        <br/>
                        <div >
                        <p style={{textAlign:"left",maxWidth:"600px"}}>
                            wanted team members for 2 hackerthons
                            speacialise: front end
                            wanted team members for 2 hackerthons
                            speacialise: front end
                            wanted team members for 2 hackerthons
                            speacialise: front end
                        </p>
                        </div>
                    </div>
                    </div>
                    <br/>
                    
                </div>
                <br/>
                <form >
                    <div className="row">
                        <div className="col form-group">
                        <textarea style={{borderRadius:"30px",padding:"6px 25px"}} name="comment" className="form-control" id="comment" placeholder="Your Comment*"
                            onChange={(e) => setPost(e.target.value)} required>
                        </textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Post</button>
                    </form>
                <br/><br/>
                
              </div> 
                </div>
            </div>
            <div className="col-2">

            </div>
        </div>
        </div>
    )
}

export default TeammatesFeed
