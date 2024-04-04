import React from "react";
import AppBar from "../Components/Appbar";
import Menu from "../Components/menu";


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
      
      <AppBar />
      <Menu />

      <div >
        <h1>Projects Display</h1>
        <br></br>
        <style>

</style>

<table>
  <tr>
    <th>ID</th>
    <td>{projectID}</td>
    <th>Name</th>
    <td>{projectName}</td>
    <th>Budget</th>
    <td>{projectBudget}</td>
    <th>Employees</th>
    <td>{Employees}</td>
    <th>Status</th>
    <td>{Status}</td>
    <th>Start Date</th>
    <td>{startDate}</td>
    <th>End Date</th>
    <td>{endDate}</td>
    <th>Project Type</th>
    <td>{projectType}</td>
  </tr>
</table>
<button>Update</button>
<button>Delete</button>

      </div>
    </div>
  );
}
export default Addprojects;
