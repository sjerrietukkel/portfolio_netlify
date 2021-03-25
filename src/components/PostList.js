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
                        <Postcard key={i} className="post-card d-flex flex-row py-8">
                             <div className="img-container">
                                {post.thumbnail && <img className="thumbnail" src={post.thumbnail} alt=""/> }
                            </div>
                            {/* <small>Published on {post.date} by {post.author}</small> */}
                            {/* <Markdown source={excerptList[i]} escapeHtml={false} /> */}
                            <div className="d-flex flex-column my-4">
                                <h2 className="post-title">{post.title}</h2>
                                {/* <div>
                                    <small>{post.opdrachtgever}</small>
                                    <small> | </small>
                                    <small>{post.duration}</small>
                                </div>     */}
                                <ul>
                                    <li>
                                        <PostDescription> {post.dot1}</PostDescription>
                                    </li>
                                    <li>
                                        <PostDescription> {post.dot2}</PostDescription>
                                    </li>
                                    <li>
                                        <PostDescription> {post.dot3}</PostDescription>
                                    </li>
                                </ul>
                                <h4 className="button-link"><Link className="links" to={`/post/${post.id}`}>Read more</Link></h4>
                            </div>
                        </Postcard>
                    )
                })
            }
        </div>
    )
}

export default PostList