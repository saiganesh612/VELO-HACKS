import React from 'react'
import moment from 'moment'

export const RecentFeed = (props) => {

  return (
    <div className="blog">
      <div className="sidebar">
        <h3 className="sidebar-title" style={{textAlign:"center"}}>Your Projects</h3>
        <div className="sidebar-item recent-posts">
          {!props.posts.length
            ? <p style={{textAlign:"center"}}> 
              <br/>
              <b>"We are drowning in information but starved for knowledge." </b>
              <br/><br/>
              Please <a href="/post-your-experience">share</a> your experiece with us
             </p>
            : props.posts.map((data, index) => {
              return (
                <div key={index} className="post-item clearfix">
                  <a href={`/projects/${data._id}`}><img src={data?.cover_pic?.url} alt="Cover pic" /></a>
                  <h4>{data.hackathon_name}</h4>
                  <time dateTime="2020-01-01">{moment(data?.upload_time).fromNow()}</time>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
