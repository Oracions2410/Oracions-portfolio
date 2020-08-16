import React from 'react'
import { Services, Tech, AboutMe, ProjectsSection, BlogSection, Contact, Partenaires } from '../components'

const Home = ({ projects, select, posts }) => {

    return <React.Fragment>
        <div className="container">
            <Services />
            <Tech />
            <AboutMe />
            <ProjectsSection projects={projects} select={select} />
            <BlogSection posts={posts} />

        </div>

        <div class="motif">
            <img src="./images/motif.svg" alt="" />
        </div>


        <div class="white">
            <div class="container">


                <Contact />

                <Partenaires />

            </div>
        </div>

    </React.Fragment>
}

export default Home