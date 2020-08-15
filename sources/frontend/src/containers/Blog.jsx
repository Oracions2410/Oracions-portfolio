import React from 'react'

import { BlogList } from '../components'

const Blog = () => {
    return <React.Fragment>



        <div class="container">








            <section id="blog" class="section blog all">

                <div class="section-head">
                    <h3 class="section-title">Administration Système</h3>
                    <span class="underline"></span>
                </div>

                <div class="section-list blog">

                    <BlogList />

                </div>


            </section>





        </div>



    </React.Fragment>
}

export default Blog