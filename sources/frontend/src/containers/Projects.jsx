import React, { useState, useEffect } from 'react'

import { ProjectsList } from '../components'

const Projects = ({ select, projects }) => {

    return <React.Fragment>



        <div class="container">


            <section class="section projects all">

                <h1 class="p-title">Tous les projets réalisés</h1>


                <div class="section-head">
                    <h3 class="section-title">Template integration</h3>
                    <span class="underline"></span>
                </div>

                <ProjectsList projects={projects} selected={select} />









                <div class="section-head">
                    <h3 class="section-title">Template integration</h3>
                    <span class="underline"></span>
                </div>

                <ProjectsList projects={projects} selected={select} />




                <div class="section-head">
                    <h3 class="section-title">API Integration</h3>
                    <span class="underline"></span>
                </div>


                <ProjectsList projects={projects} selected={select} />



                <div class="section-head">
                    <h3 class="section-title">Backend and API building</h3>
                    <span class="underline"></span>
                </div>

                <ProjectsList projects={projects} selected={select} />



            </section>




        </div>



    </React.Fragment>
}

export default Projects