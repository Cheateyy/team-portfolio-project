import React from "react";
import { Link } from 'react-router-dom'
import { memberData } from './memberData'
import './MemberPage.css'

//im adding a comment maybe that would allow a pull request <(o_o)>


import profileImage from '../../assets/badis.jpg';
import backSvg from '../../assets/back.png';
import fillImg from '../../assets/Fill.png'

function BadisPage() {
  return (
    <div className="memberPage">



      <div className="right-side">
        <div className="upper-right">
          <h1 id="member-name">I'm {memberData.name}</h1>
          <p id="member-bio">{memberData.bio}</p>
        </div>
        <div className="lower-right">
          <div className="skillsContainer">
            <h1>Skills</h1>
            {memberData.skills.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))}
          </div>
          <div className="contactContainer">
            <div className="upper-contact">
              <p>GIT</p>
              <p id="vertical">HUB</p>
            </div>
            <div className="github-link">
              <img src={fillImg} alt="fillImg" />
              <a href={memberData.github}>My Github Profile Link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BadisPage;