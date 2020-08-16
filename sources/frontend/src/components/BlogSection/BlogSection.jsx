import React from 'react'
import { Link } from 'react-router-dom'
import marked from 'marked'

const BlogSection = ({ posts }) => {

    console.log(posts)

    const showPosts = posts ?
        posts.map(post => {
            return <div class="section-list-item">

                <div class="image">
                    <img src={post.image} alt="" />
                </div>

                <div class="text">
                    <h4>{post.title}</h4>
                    <span><img src="./images/icons/date.svg" alt="" />{post.created_at}</span>
                    <p>{post.intro.substring(0, 200) + '...'}</p>
                </div>
                <Link to={`/blog/posts/${post._id}`} class="btn btn-blog">Learn more <img
                    src="./images/icons/arrow-white.svg" alt="" /></Link>

            </div>
        })
        : null

    return <React.Fragment>

        <section id="blog" class="section blog">

            <div class="section-head">
                <h3 class="section-title">Blog</h3>
                <span class="underline"></span>
            </div>

            <div class="section-list blog">

                {showPosts}

                {/* 
                <div class="section-list-item">

                    <div class="image">
                        <img src="./images/blog.svg" alt="" />
                    </div>

                    <div class="text">
                        <h4>Bien débuter en Programmation</h4>
                        <span><img src="./images/icons/date.svg" alt="" /> April 29 2020</span>
                        <p>La programmation informatique est un des plus vaste domaine qui a connue une très grande
                extension ces dernière...</p>
                    </div>
                    <Link to='/blog/posts/43' class="btn btn-blog">En savoir plus <img
                        src="./images/icons/arrow-white.svg" alt="" /></Link>

                </div>
               */}


            </div>


            <Link class="btn more" to="/blog">More posts <img src="./images/icons/black-arrow.svg" alt="" /></Link>


        </section>

    </React.Fragment>
}

export default BlogSection