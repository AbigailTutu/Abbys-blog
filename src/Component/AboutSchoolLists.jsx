/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const AboutSchoolLists = (props) => {
    const aboutSchool = props.aboutSchool;
    const title = props.title
  return (
    <div className="aboutschoollists">
       <h1>{title}</h1>
      {
        aboutSchool.map((about) => (
          <div className="aboutSchool-preview" key={about.id}>
            <h2>{about.title}</h2>
            <p>{about.author}</p>
          </div>
        ))
      }
      </div>
  )
}

export default AboutSchoolLists

