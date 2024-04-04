import React,{ useState} from 'react'
import AppBar from '../Components/Appbar';
import Menu from '../Components/menu';
import { useNavigate } from 'react-router';
import axios from 'axios';

function Newprojects() {

  const navigate = useNavigate();
  const [projects, setProjects] = useState({
    projectID: "",
    projectName: "",
    projectBudget: "",
    Employees: "",
    Status: "",
    startDate: "",
    endDate: "",
    projectType: ""

  });
 const handleChange = (e) => {
    setProjects((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   console.log(projects);
   sendRequest().then(() => navigate("/Allprojects"));
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:5000/projects", {
        projectID:projects.projectID,
        projectName:projects.projectName,
        projectBudget:projects.projectBudget,
        Employees:projects.Employees,
        Status:projects.Status,
        startDate:projects.startDate,
        endDate:projects.endDate,
        projectType:projects.projectType
      })
      .then(res => res.data);
  }

  return (
    <div style= {{ marginLeft: '255px', paddingTop: '80px'}}>

      <AppBar />
      <Menu />
<h1>Add new projects</h1>
<form onSubmit={handleSubmit}>

  <label>projectID</label>
  <br/>
  <input type="text"  onChange={handleChange} value={projects.projectID} required></input>
  <br/>
  <br/>

  <label>projectName</label>
  <br/>
  <input type="text"  onChange={handleChange} value={projects.projectName} required></input>
  <br/>
  <br/>

  <label>projectBudget</label>
  <br/>
  <input type="text"  onChange={handleChange} value={projects.projectBudget} required></input>
  <br/>
  <br/>

  <label>Employees</label>
  <br/>
  <input type="text"  onChange={handleChange} value={projects.Employees} required></input>
  <br/>
  <br/>

  <label>Status</label>
  <br/>
  <input type="text"  onChange={handleChange} value={projects.Status} required></input>
  <br/>
  <br/>

  <label>startDate</label>
  <br/>
  <input type="text"  onChange={handleChange} value={projects.startDate} required></input>
  <br/>
  <br/>

  <label>endDate</label>
  <br/>
  <input type="text"  onChange={handleChange} value={projects.endDate} required></input>
  <br/>
  <br/>

  <label>projectType</label>
  <br/>
  <input type="text"  onChange={handleChange} value={projects.projectType} required></input>
  <br/>
  <br/>
  

 
  <button >Submit</button>
</form>

   
    </div>
  )
}

export default Newprojects
