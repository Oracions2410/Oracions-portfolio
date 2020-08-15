import React from 'react'
import { Link } from 'react-router-dom'

const BlogSection = () => {
    return <React.Fragment>


        <section id="blog" class="section blog">

            <div class="section-head">
                <h3 class="section-title">Blog</h3>
                <span class="underline"></span>
            </div>

            <div class="section-list blog">

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
                    <a href="./post.html" class="btn btn-blog">En savoir plus <img
                        src="./images/icons/arrow-white.svg" alt="" /></a>

                </div>





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
                    <a href="./post.html" class="btn btn-blog">En savoir plus <img
                        src="./images/icons/arrow-white.svg" alt="" /></a>

                </div>





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
                    <a href="./post.html" class="btn btn-blog">En savoir plus <img
                        src="./images/icons/arrow-white.svg" alt="" /></a>
                </div>



            </div>


            <Link class="btn more" to="/blog"> more <img src="./images/icons/black-arrow.svg" alt="" /></Link>


        </section>

    </React.Fragment>
}

export default BlogSection