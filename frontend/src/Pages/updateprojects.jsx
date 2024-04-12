
import React, {useEffect, useState  } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import "./Newprojects.css";

function Updateprojects() {
    const[projects,setProjects]=useState({
    });
    const history=useNavigate();
    const id=useParams().id;

    useEffect(()=>{
      const  fetchHandler  = async () => {
          await axios
          .get( `http://localhost:5000/projects/${id}` )
          .then ((res)=>res.data)
          .then((res) => setProjects(res.data))
          
      }
      fetchHandler();
    },[id]);

    const sendRequest = async () => {
       await axios
       .put(`http://localhost:5000/projects/${id}`, {
          
           projectName: String(projects.projectName),
           projectBudget: Number(projects.projectBudget),
           Employees: String(projects.Employees),
           Status: String(projects.Status),
           startDate: Date(projects.startDate),
           endDate: Date(projects.endDate),
           projectType: String(projects.projectType),
       })
       .then((res) => res.data)
    };

    const handleChange = (e) => {
        setProjects((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(projects);
        sendRequest().then(() => history("/Allprojects"));
          
      };
       
    
  return (
    <div style={{ marginLeft: '255px', paddingTop: '80px' }}>
    <h1>update projects</h1>
      <form onSubmit={handleSubmit}>
        <label>Project Name</label>

        <input
          type="text"
          name="projectName"
          onChange={handleChange}
          value={projects.projectName}
          required
        ></input>
        <br />

        <label>Project Budget</label>

        <input
          type="number"
          name="projectBudget"
          onChange={handleChange}
          value={projects.projectBudget}
          required
        ></input>
        <br />

        <label>Employees</label>

        <input
          type="text"
          name="Employees"
          onChange={handleChange}
          value={projects.Employees}
          required
        ></input>
        <br />

        <label>Status</label>

        <input
          type="text"
          name="Status"
          onChange={handleChange}
          value={projects.Status}
          required
        ></input>
        <br />

        <label>Start Date</label>

        <input
          type="date"
          name="startDate"
          onChange={handleChange}
          value={projects.startDate}
          required
        ></input>
        <br />

        <label>End Date</label>

        <input
          type="date"
          name="endDate"
          onChange={handleChange}
          value={projects.endDate}
          required
        ></input>
        <br />
       

        <label>Project Type</label>
        
        <input
          type="text"
          name="projectType"
          onChange={handleChange}
          value={projects.projectType}
          required
        ></input>
        <br />
        <br />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Updateprojects
