import React from 'react'
import moment from 'moment'
export const RecentFeed = (props) => {

  console.log(props.posts)

  return (
    <div className="blog">
      <div className="sidebar">
        <h3 className="sidebar-title">Your Projects</h3>
        <div className="sidebar-item recent-posts">
          {props.posts.map(data=>{
            return(
              <div className="post-item clearfix">
              <a href={`/projects/${data._id}`}><img src={data?.cover_pic?.url} alt="Cover pic" /></a>
              <h4>{data.hackathon_name}</h4>
              <time dateTime="2020-01-01">{moment(data?.upload_time).fromNow()}</time>
            </div>
            )
          })}
            
        </div>
      </div>
    </div>
  )
}
