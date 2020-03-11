import React from 'react'

const Projects = (props) => {
    return (
        <div>
            <img className="project-image" src={props.projectInfo.image}/>
        </div>
    );
}
 
export default Projects;