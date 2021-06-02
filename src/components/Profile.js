/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/style-prop-object */
import React from 'react';
import {personal, languages, skills} from '../utils/profile';
import image from '../About Me Illustrated Avatar with Mask Social Media Post.png'


  const Profile = () => {
   
    return (
        <div>
            <div className="w3-text-grey w3-card-4">
                <div className="w3-display-container">
                    <img src={image} style={{width:'100%'}} alt="Avatar" />
                    <div className="w3-display-bottomleft w3-container name">
                    <h2>{personal.name}</h2>
                    </div>
                </div>
                <div className="w3-container" style={{marginTop: '20px'}}>
                    <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal "></i>{personal.job}</p>
                    <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>{personal.location}</p>
                    <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>{personal.email}</p>
                    
                    <hr />

                    <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Compétences</b></p>
                    {languages.map((skill)=> {
                        return (
                          
                            <p>{skill.title}</p>
                            
                         
                        )
                    })}
                    <br />

                    <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
                    {skills.map(skill => {
                        return (
                          
                            <p>{skill.title}</p>
                            
                         
                        )
                    })}
                    <br />
                </div>
                </div><br/>

        </div>
    )
}

export default Profile