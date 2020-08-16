import React from 'react'
import { Link } from 'react-router-dom'

import { ProjectsList } from '..'

const ProjectsSection = ({ projects, select }) => {
    return <React.Fragment>


        <section id="my-work" class="section projects">

            <div class="section-head">
                <h3 class="section-title">Achievements</h3>
                <span class="underline"></span>
            </div>
            <div class="section-list projects">
                <ProjectsList projects={projects} selected={select} />
            </div>

            <Link to='/projects' class="btn more"> more <img src="./images/icons/black-arrow.svg" alt="" /></Link>

        </section>


    </React.Fragment>
}

export default ProjectsSection