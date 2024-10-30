import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({ text,link,btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-x1 text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">       
            {btnText}
            <img src={arrow} className="w-8 h-5 object-contain"/>
        </Link>
    </div>
)


const renderContent = {
   1:(
    <h1 className = "sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
    Hi, I am <span className='font-semibold'>Chee Kai Jian</span> 👋
    <br/>
    A CS student from APU
    </h1>
   ),
   2:(
    <InfoBox
        text="Worked on some projects and picked up many skills along the way!"
        link="/about"
        btnText="Learn more"
    />
   ),
   3:(
    <InfoBox
        text="Visit some of my projects"
        link="/projects"
        btnText="Visit my portfolio"
    />
   ),
   4:(
    <InfoBox
        text="Currently searching for an internship"
        link="/contact"
        btnText="Let's talk"
    />
   ),
}


const HomeInfo = ({ CurrentStage }) => {
  return renderContent[CurrentStage] || null;
}

export default HomeInfo