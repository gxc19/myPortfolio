import React from  "react"
import '../styles/Home.css'
import Title from './Title'
import Background from './Background'


const Home = () => {
    return (
        <div className="home">
            <Title/>
            <Background/>
        </div>
    )
}

export default Home;