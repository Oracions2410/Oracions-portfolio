import React from 'react'
import { Route } from 'react-router-dom'

import { BlogList, Post } from '../components'

const Blog = ({ posts }) => {
    return <React.Fragment>


        <div class="container">

            <Route path='/blog/posts/:id' component={Post} />
            <Route exact path='/blog' render={() => <BlogList posts={posts} />} />


        </div>



    </React.Fragment>
}

export default Blog