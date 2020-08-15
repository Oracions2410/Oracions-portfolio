import React, { useEffect } from 'react'

const ProjectItem = ({ project, selected }) => {


    if (!project) {
        return 'Loading...'
    }

    //console.log('data', project)

    return <React.Fragment>

        <div onClick={() => selected(project)} class="section-list-item project">
            <div class="image">
                <img src={project.imagepath} alt="" />
            </div>

            <div class="desc">
                <h4 class="project-name">{project.name}</h4>
                <h6 class="project-desc">{project.desc}</h6>
            </div>

        </div>

    </React.Fragment>
}

export default ProjectItem