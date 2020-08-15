import React from 'react'
import { Link } from 'react-router-dom'

const BlogItem = () => {
    return <React.Fragment>


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
            <Link to='' class="btn btn-blog">En savoir plus <img
                src="./images/icons/arrow-white.svg" alt="" /></Link>

        </div>


    </React.Fragment>
}

export default BlogItem