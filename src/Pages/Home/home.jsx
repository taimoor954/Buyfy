import React from 'react'
import { auth } from '../../Firebase/firebase';
import './home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className="homeLeft flex"><h1>home left</h1></div>
            <div className="homeRight flex"><h1>home right</h1></div>
        </div>
    )
}

export default Home
