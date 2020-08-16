import React from 'react'

import BlogItem from './BlogItem/BlogItem'

const BlogList = ({ posts }) => {



    let adminsysPosts = posts
        ? posts.filter(post => post.category === 'adminsys').map(post => {
            return <BlogItem post={post} />
        })
        : null

    if (adminsysPosts.length === 0) adminsysPosts = 'Sorry, no post found for system administration...'

    let cyberSecurityPosts = posts
        ? posts.filter(post => post.category === 'cybersecurity').map(post => {
            return <BlogItem post={post} />
        })
        : null

    if (cyberSecurityPosts.length === 0) cyberSecurityPosts = 'Sorry, no post found for Cyber security...'



    return <React.Fragment>
        <section id="blog" class="section blog all">

            <div class="section-head">
                <h3 class="section-title">Linux System Administration</h3>
                <span class="underline"></span>
            </div>

            <div class="section-list blog">

                {adminsysPosts}

            </div>

            <div class="section-head">
                <h3 class="section-title">Cyber security</h3>
                <span class="underline"></span>
            </div>

            <div class="section-list blog">

                {cyberSecurityPosts}

            </div>


        </section>


    </React.Fragment>
}

export default BlogList