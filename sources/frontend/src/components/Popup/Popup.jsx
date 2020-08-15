import React, { useState, useEffect } from 'react'
import { Projects } from '../../containers'

const Popup = ({ project, setElement }) => {

    const showTech = project ?
        project.tech.map((tech, i) => <li key={i}>{tech.name}</li>)
        : null

    const appLink = project ?
        project
        : null

    console.log('apppppppppppp', appLink)

    return <React.Fragment>


        <div ref={el => setElement(el)} class="popup-modal">
            <span class="btn-close-modal">x</span>
            <div class="head">
                <div class="title">{project ? project.name : null}</div>
                <a href={project ? project.links.app : null} target="_blank" class="btn btn-project-show">Ouvrir</a>
            </div>
            <div class="content">
                <div class="images">
                    <img src={project ? project.imagepath : null} alt="" />
                </div>
                <div class="desc">
                    <div class="text">
                        Description: <br />
                        <p>{project ? project.desc : null}</p>
                    </div>
                    <div class="tech">
                        <ul>
                            {showTech}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <div class="links">
                    <a href={project ? project.links.repo : null} target="_blank"><img src="./images/icons/github.svg" alt="" /> Lien
                        du dépôt git</a>
                </div>
            </div>
        </div>

    </React.Fragment >

}

export default Popup