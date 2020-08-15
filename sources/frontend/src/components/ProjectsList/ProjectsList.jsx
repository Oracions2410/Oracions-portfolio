import React, { useState, useEffect } from 'react'

import ProjectItem from './ProjectItem/ProjectItem'

const ProjectsList = ({ projects, selected }) => {



    if (projects.length === 0) {
        return <p>Loading....</p>
    }

    const showProjects = projects.map(p => {
        return <ProjectItem key={p._id} project={p} selected={selected} />
    })

    return <React.Fragment>

        <div class="section-list projects">

            {showProjects}

        </div>




    </React.Fragment>
}

export default ProjectsList