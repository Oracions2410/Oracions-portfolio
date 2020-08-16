import React from 'react'
import { Link } from 'react-router-dom'

const BlogItem = ({ post }) => {

    if (!post) {
        return 'Loading...'
    }


    return <React.Fragment>


        <div class="section-list-item">

            <div class="image">
                <img src="./images/blog.svg" alt="" />
            </div>

            <div class="text">
                <h4>{post.title}</h4>
                <span><img src="./images/icons/date.svg" alt="" /> {post.created_at}</span>
                <p>{post.intro.substring(0, 200) + '...'}</p>
            </div>
            <Link to={`/blog/posts/${post._id}`} class="btn btn-blog">Lean more <img
                src="./images/icons/arrow-white.svg" alt="" /></Link>

        </div>


    </React.Fragment>
}

export default BlogItem