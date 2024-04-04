import React from "react";



function Addprojects(props) {
  // Example data for suppliers
  const {
    
    projectID,
    projectName,
    projectBudget,
    Employees,
    Status,
    startDate,
    endDate,
    projectType,
  } = props.project;

  return (
    <div>
      
    

      <div style={{ marginLeft: '255px', paddingTop: '80px' }} >
        <h1>Projects Display</h1>
        <br></br>
        
<h1>projectID: {projectID}</h1>
<h1>projectName: {projectName}</h1>
<h1>projectBudget: {projectBudget}</h1>
<h1>Employees: {Employees}</h1>
<h1>Status: {Status}</h1>
<h1>startDate: {startDate}</h1>
<h1>endDate: {endDate}</h1>
<h1>projectType: {projectType}</h1>

<button>Update</button>
<button>Delete</button>

      </div>
    </div>
  );
}
export default Addprojects;
