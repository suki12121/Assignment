import {useState} from 'react'
import {Link} from 'react-router-dom'
import Projects from '../Projects'
import './index.css'

function Home() {
  const [projectName, setProjectName] = useState('')
  const [projectLink, setProjectLink] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [projectsList, setProjectsList] = useState([]) // State to store projects

  const handleProjectAdd = () => {
    // Create a new project object using the input values
    const newProject = {
      name: projectName,
      link: projectLink,
      description: projectDescription,
    }

    // Add the new project to the projectsList
    setProjectsList([...projectsList, newProject])

    // Clear input fields after adding the project
    setProjectName('')
    setProjectLink('')
    setProjectDescription('')
  }

  return (
    <>
      <div>
        <div className="nav-bg">
          <div>
            <span className="nav-heading">Madelyn Toff</span>
          </div>
          <div className="nav-bg2">
            <Link to="/about">
              <span className="nav-heading1">About</span>
            </Link>
            <span className="nav-heading1">Projects</span>
            <Link to="/contact">
              <span className="nav-heading1">Contact</span>
            </Link>
          </div>
        </div>
        <hr />
        <div className="second-bg">
          <div className="heading-bg">
            <p className="passage">UI/UX DESIGNER</p>
            <h1 className="heading">Hello,My name is Madelyn Toff</h1>
            <p className="passage1">
              Short text with details about you,what you do or your professional
              carrer.You can add more information on the about page
            </p>
            <div>
              <a href="#projects">
                <button className="button1" type="button">
                  Projects
                </button>
              </a>
              <button className="button2" type="button">
                Linkedin
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/stealthman22/image/upload/v1586308024/new-portfolio/hero/time-lapse-photography-of-waterfalls-during-sunset-210186.jpg"
              alt="text_image"
              className="image-bg"
            />
          </div>
        </div>
        <div className="adding-project-bg">
          <h1>Add Projects</h1>
          <div className="input-label">
            <label htmlFor="myCheckbox">Project Name</label>
            <input
              type="text"
              id="myCheckbox"
              className="label"
              value={projectName}
              onChange={e => setProjectName(e.target.value)}
            />
          </div>
          <div className="input-label">
            <label htmlFor="myCheckbox1">Project Link</label>
            <input
              type="text"
              id="myCheckbox1"
              className="label"
              value={projectLink}
              onChange={e => setProjectLink(e.target.value)}
            />
          </div>
          <div className="input-label">
            <label htmlFor="myCheckbox2">Description</label>
            <textarea
              type="text"
              id="myCheckbox2"
              className="label1"
              value={projectDescription}
              onChange={e => setProjectDescription(e.target.value)}
            >
              .
            </textarea>
          </div>
          <button className="button1" type="button" onClick={handleProjectAdd}>
            ADD
          </button>
        </div>
        <div id="projects">
          <Projects projectsList={projectsList} />
        </div>
      </div>
    </>
  )
}

export default Home
