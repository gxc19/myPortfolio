import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'

const Projects = (props) => {

    const [isFlipped, setIsFlipped] = useState(false)
    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div>
                <img className="project-image" src={props.projectInfo.image} alt="" onClick={handleClick}/>
            </div>

            <div className="backCard">
                <h1 className="pTitle">{props.projectInfo.title}</h1>
                <div className="project-image2" onClick={handleClick}></div>
                <a className="pLink" href={props.projectInfo.link}>Link to Project</a>
            </div>
        </ReactCardFlip>
    );
}
 
export default Projects;