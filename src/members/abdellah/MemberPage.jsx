import React from "react";
import { memberData } from './memberData'
import { Link } from 'react-router-dom'
import './MemberPage.css'

import backSvg from '../../assets/back.png';
import fillImg from '../../assets/Fill.png'

export default function AbdellahPage() {
  return (
    <div className="memberPage">

      <div className="left-side">
        <Link to="/">
          <button className="goback-btn"><img src={backSvg} alt="goback-img" className="goback-img" /></button>
        </Link>
        <img
          src={`https://github.com/${memberData.github}.png`}
          alt="profile-image"
          className="profileImage"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/450/141414/FFFFFF?text=${memberData.name.split(' ').map(n => n[0]).join('')}`
          }}
        />
      </div>

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
              <a href={`https://github.com/${memberData.github}`} target="_blank" rel="noopener noreferrer">My Github Profile Link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
