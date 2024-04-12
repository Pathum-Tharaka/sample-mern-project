import React from "react";
import "./Addprojects.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Addprojects(props) {
  // Example data for suppliers
  const {
    _id,
    projctName,
    projectBudget,
    Employees,
    Status,
    startDate,
    endDate,
    projectType,
  } = props.Project;

  const navigate = useNavigate();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US");
  };

  const handleUpdateClick = () => {
    navigate(`/Allprojects/${_id}`);
  };

  return (
    <div>
      <div style={{ marginLeft: "10px", paddingTop: "50px" }}>
        <table>
          <tr>
            <th>Project Name</th>
            <th>Project Budget</th>
            <th>Employees</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Project Type</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>{projectName}</td>
            <td>{projectBudget}</td>
            <td>{Employees}</td>
            <td>{Status}</td>
            <td>{formatDate(startDate)}</td>
            <td>{formatDate(endDate)}</td>
            <td>{projectType}</td>
            <td class="action-buttons">
              <button onClick={handleUpdateClick} className="update-button">
                Update
              </button>
              <button class="delete-button">Delete</button>
              <button class="report-button">Report</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default Addprojects;
