import React from 'react'
import "./App.css"
import { Link } from 'react-router-dom'
export default function First({ titles, person,mode,togglemode }) {
  return (
      <>
        <nav className="navbar navbar-expand-lg" style={mode}>
          <div className="container-fluid">
            <Link className="navbar-brand" to='/' style={mode}>{titles}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <Link className="nav-link" aria-current="page" to = '/' style={mode} >{person.name1}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About" style={mode}>{person.name2}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"  to="/Form" style={mode}>{person.name3}</Link>
                </li>
              </ul>
              <div className="form-check form-switch" style={mode}>
                <input className="form-check-input" onClick={togglemode} style={mode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
              </div>
            </div>
          </div>
        </nav>
      </>
    )
  }