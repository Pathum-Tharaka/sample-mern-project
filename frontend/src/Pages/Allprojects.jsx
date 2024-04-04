import React,{ useState,useEffect} from 'react'
import AppBar from '../Components/Appbar';
import Menu from '../Components/menu';
import axios from 'axios'
import Addprojects from '../Pages/Addprojects'

const URL = "http://localhost:5000/projects"

const fetchHandler = async () => {
    return await axios
        .get(URL)
        .then((res) => res.data)
       
        }

function Allprojects() {

  const [projects, setProjects] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setProjects(data.projects));
  }, [])
  return (
    <div style={{ marginLeft: '255px', paddingTop: '80px' }}>

      <AppBar />
      <Menu />
      <h1>List of projects</h1>
      <div>
        {projects && projects.map((project, i) => (
          <div key={i}>
            <Addprojects project={project} />
          </div>
        ))}
        
      </div>
      
    </div>
  )
}

export default Allprojects;



