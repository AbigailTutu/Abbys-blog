/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import Contact from './Component/Contact'
import ApplyNow from './Component/ApplyNow'

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/contact' element = {<Contact/>}/>
      <Route path='/apply' element = {<ApplyNow/>}/>
    </Routes>
  )
}

export default Routing
