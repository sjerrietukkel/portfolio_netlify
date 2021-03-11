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
                        <h2>Screenshot Mockup</h2>
                        <small>Opdrachtgever</small>
                        <small>Duration</small>
                        <small>Technologie/Technieken</small>
                        <small>Design Challenge / Casus</small>
                        <small>Datum</small>
                        <small>Link / Github</small>
                    </MetaBlock>     
                    <PostContent>
                        <Markdown source={fetchedPost.content} escapeHtml={false} />
                        <Markdown source={fetchedPost.content} escapeHtml={false} />
                        <Markdown source={fetchedPost.content} escapeHtml={false} />
                        <Markdown source={fetchedPost.content} escapeHtml={false} />
                        <Markdown source={fetchedPost.content} escapeHtml={false} />
                        <Markdown source={fetchedPost.content} escapeHtml={false} />
                    </PostContent>   
                </div>    
            </div>
        </Layout>
    )
}

export default Post