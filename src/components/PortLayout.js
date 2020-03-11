import React from 'react'
import Projects from './Projects'

const PortLayout = (props) => {
    return (
        <div className="port-layout">
            {props.projectInfo.map((project) => {
                return <Projects projectInfo={project}/>
            })}
        </div>
    );
}
 
export default PortLayout;