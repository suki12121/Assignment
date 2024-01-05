import {FaInstagramSquare, FaLinkedin} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'

import './index.css'

function Projects({projectsList}) {
  return (
    <div className="added-projects">
      <h1 className="heading">Projects</h1>
      <ul>
        {projectsList.map(project => (
          <li className="list-style">
            <div className="first-bg">
              <div className="first-bg1">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button11" type="button">
                    View Project
                  </button>
                </a>
              </div>
              <div>
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/wiki-logo-img.png"
                  alt="suki"
                  className="first-bg2"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <FaInstagramSquare className="icon-bg" />
        <FaLinkedin className="icon-bg" />
        <GrMail className="icon-bg" />
      </div>
      <p>copyright c 2024.All rights reserved</p>
    </div>
  )
}

export default Projects
