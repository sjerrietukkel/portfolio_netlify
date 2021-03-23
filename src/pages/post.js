import React from "react"
import { Redirect } from "react-router-dom"
import Markdown from "react-markdown"
import Layout from "../components/Layout.js"
import postlist from "../posts.json"
import { PostContent, MetaBlock } from "./styled/Post"


const Post = (props) => {
    const validId = parseInt(props.match.params.id)
    if (!validId) {
        return <Redirect to="/404" />
    }
    const fetchedPost = {}
    let postExists = false
    postlist.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : "No title given"
            fetchedPost.date = post.date ? post.date : "No date given"
            fetchedPost.author = post.author ? post.author : "No author given"
            fetchedPost.content = post.content ? post.content : "No content given"
            fetchedPost.duration = post.duration ? post.duration : "No duration given"
            fetchedPost.description = post.description ? post.description : "No description given"
            fetchedPost.opdrachtgever = post.opdrachtgever ? post.opdrachtgever : "No opdrachtgever given"
            fetchedPost.mockup = post.mockup ? post.mockup : "No mockup given"
            fetchedPost.technology = post.technology ? post.technology : "No technology given"
            postExists = true
        }
    })
    if (postExists === false) {
        return <Redirect to="/404" />
    }
    return (
        <Layout>
            <div className="post d-flex  justify-content-center ">
                <div  className=" d-flex flex-column">
                    <MetaBlock className=" d-flex flex-column">
                        <h2>{fetchedPost.title}</h2>
                        <small>Published on {fetchedPost.date} by {fetchedPost.author}</small>
                        <img className="thumbnail" width={80} src={fetchedPost.mockup} alt="Mockup"/>
                        <small>{fetchedPost.opdrachtgever}</small>
                        <small>{fetchedPost.duration}</small>
                        <small>{fetchedPost.description}</small>
                        <small>Link / Github</small>
                    </MetaBlock>     
                    <PostContent>
                        <Markdown source={fetchedPost.content} escapeHtml={false} />
                    </PostContent>   
                </div>    
            </div>
        </Layout>
    )
}

export default Post