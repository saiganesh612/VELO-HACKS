import React from 'react'

export const RecentFeed = (props) => {

  console.log(props.posts)

  return (
    <div className="blog">
      <div className="sidebar">
        <h3 className="sidebar-title">Recent Posts</h3>
        <div className="sidebar-item recent-posts">
          <div className="post-item clearfix">
            <img src="" alt="" />
            <h4><a href="blog-single.html">Nihil blanditiis at in nihil autem</a></h4>
            <time dateTime="2020-01-01">Jan 1, 2020</time>
          </div>

          <div className="post-item clearfix">
            <img src="" alt="" />
            <h4><a href="blog-single.html">Quidem autem et impedit</a></h4>
            <time dateTime="2020-01-01">Jan 1, 2020</time>
          </div>

          <div className="post-item clearfix">
            <img src="" alt="" />
            <h4><a href="blog-single.html">Id quia et et ut maxime similique occaecati ut</a></h4>
            <time dateTime="2020-01-01">Jan 1, 2020</time>
          </div>

          <div className="post-item clearfix">
            <img src="" alt="" />
            <h4><a href="blog-single.html">Laborum corporis quo dara net para</a></h4>
            <time dateTime="2020-01-01">Jan 1, 2020</time>
          </div>

          <div className="post-item clearfix">
            <img src="" alt="" />
            <h4><a href="blog-single.html">Et dolores corrupti quae illo quod dolor</a></h4>
            <time dateTime="2020-01-01">Jan 1, 2020</time>
          </div>

        </div>
      </div>
    </div>
  )
}
