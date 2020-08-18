import React, { useState, useEffect } from 'react'

import { ProjectsList } from '../components'

const Projects = ({ select, projects }) => {

    const designProjects = projects
        ? projects.filter(project => project.category === 'design')
        : null

    const templateProjects = projects
        ? projects.filter(project => project.category === 'template')
        : null

    const frontendProjects = projects
        ? projects.filter(project => project.category === 'frontend')
        : null

    const backendProjects = projects
        ? projects.filter(project => project.category === 'backend')
        : null

    const completeProjects = projects
        ? projects.filter(project => project.category === 'app')
        : null



    return <React.Fragment>



        <div class="container">


            <section class="section projects all">

                <h1 class="p-title">Tous les projets réalisés</h1>


                <div class="section-head">
                    <h3 class="section-title">Web Design</h3>
                    <span class="underline"></span>
                </div>

                <ProjectsList projects={designProjects} selected={select} />



                <div class="section-head">
                    <h3 class="section-title">Template integration</h3>
                    <span class="underline"></span>
                </div>

                <ProjectsList projects={templateProjects} selected={select} />




                <div class="section-head">
                    <h3 class="section-title">API Integration in Frontend</h3>
                    <span class="underline"></span>
                </div>


                <ProjectsList projects={frontendProjects} selected={select} />



                <div class="section-head">
                    <h3 class="section-title">Backend and API building</h3>
                    <span class="underline"></span>
                </div>

                <ProjectsList projects={backendProjects} selected={select} />
                <div class="section-head">
                    <h3 class="section-title">Complete project (Frontend + Backend)</h3>
                    <span class="underline"></span>
                </div>

                <ProjectsList projects={completeProjects} selected={select} />



            </section>




        </div>



    </React.Fragment>
}

export default Projects