import React from "react"
import Markdown from "react-markdown"
import { Link }  from "react-router-dom"
import postlist from "../posts.json"

const PostList = () => {
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    })
    return (
        <div className="postlist d-flex justify-content-center flex-wrap">
            {postlist.length && 
                postlist.map((post, i) => {
                    return (
                        <div key={i} className="post-card">
                             <div className="img-container">
                                {post.thumbnail && <img className="thumbnail" src={post.thumbnail} alt=""/> }
                                <h2 className="post-title">{post.title}</h2>
                            </div>
                            <small>Published on {post.date} by {post.author}</small>
                            <Markdown source={excerptList[i]} escapeHtml={false} />
                            <small><Link className="links" to={`/post/${post.id}`}>Read more</Link></small>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PostList