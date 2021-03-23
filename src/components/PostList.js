import React from "react"
// import Markdown from "react-markdown"
import { Link }  from "react-router-dom"
import postlist from "../posts.json"
import { Postcard, PostDescription } from "./styled/Postcard"

const PostList = () => {
    // const excerptList = postlist.map(post => {
    //     return post.content.split(" ").slice(0, 20).join(" ") + "..."
    // })
    return (
        <div className="postlist d-flex justify-content-center flex-wrap">
            {postlist.length && 
                postlist.map((post, i) => {
                    return (
                        <Postcard key={i} className="post-card d-flex flex-row">
                             <div className="img-container">
                                {post.thumbnail && <img className="thumbnail" src={post.thumbnail} alt=""/> }
                            </div>
                            {/* <small>Published on {post.date} by {post.author}</small> */}
                            {/* <Markdown source={excerptList[i]} escapeHtml={false} /> */}
                            <div className="d-flex flex-column">
                                <h2 className="post-title">{post.title}</h2>
                                <div>
                                    <small>{post.opdrachtgever}</small>
                                    <small> | </small>
                                    <small>{post.duration}</small>
                                </div>    
                                <PostDescription>{post.description}</PostDescription>
                                <small><Link className="links" to={`/post/${post.id}`}>Read more</Link></small>
                            </div>
                        </Postcard>
                    )
                })
            }
        </div>
    )
}

export default PostList