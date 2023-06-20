/* eslint-disable no-unused-vars */
import { useState } from "react"
import React from 'react'

const ApplyNow = () => {
    const [apply, setApply] = useState(
        
    )
  return (
    <div>
      <h1 style={{textAlign: "center", color: "red"}}>Apply Now</h1>
      <form>
        <label>First Name</label>
        <br />
        <input type="text" name="first name"/>
        <br />
        <label>Last Name</label>
        <br />
        <input type="text" name="last name" />
        <br />
        <label>Email</label>
        <br />
        <input type="text" name="email" />
        <br />
        <label>Country</label>
        <br />
        <input type="text" name="country" />
        <br />
        <button>submit</button>
      </form>
    </div>
  )
}

export default ApplyNow
