import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import { useReactToPrint } from 'react-to-print';
import Menu from '../Components/menu';
import AppBar from '../Components/Appbar';
import SearchIcon from '@mui/icons-material/Search';
import PrintIcon from '@mui/icons-material/Print';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { Box, Paper, InputBase, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, TablePagination } from '@mui/material';

const URL = "http://localhost:5000/projects";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
}

function AllProjects() {
    const [projects, setProjects] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [noResults, setNoResults] = useState(false);
    const navigate = useNavigate();
    const ComponentsRef = useRef();
    const ComponentsRefsingle = useRef();

    useEffect(() => {
        fetchHandler().then((data) => setProjects(data.project));
    }, []);

   /* const handlePrint = useReactToPrint({
        content: () => ComponentsRef.current,
        documentTitle: 'All Projects Report',
        onAfterPrint: () => alert("All Projects Report successfully Downloaded!"),
    });

    const handlePrintSingle = useReactToPrint({
        content: () => ComponentsRefsingle.current,
        documentTitle: 'Project Report',
        onAfterPrint: () => alert("Project Report successfully Downloaded!"),
    });
    */

    const handleSearch = () => {
        fetchHandler().then((data) => {
            const filteredProjects = data.project.filter((project) =>
                Object.values(project).some((field) =>
                    field.toString().toLowerCase().includes(searchQuery.toLowerCase())
                ));
            setProjects(filteredProjects);
            setNoResults(filteredProjects.length === 0);
        });
    };

    const handleAddClick = () => {
        navigate(`/Newprojects`);
    };

    const deleteHandler = async (_id) => {
        try {
            await axios.delete(`http://localhost:5000/projects/${_id}`);
            setProjects(prevProjects => prevProjects.filter(project => project._id !== _id));
        } catch (error) {
            console.error("Error deleting project:", error);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US');
    };

    return (
        <div style={{ marginLeft: '250px', paddingTop: '80px' }}>
            <AppBar />
            <Menu />
            <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '40px' }}>
                <InputBase
                    sx={{ flex: 1, marginLeft: '10px' }}
                    placeholder="Search project Details"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    startAdornment={<SearchIcon />}
                />
                <IconButton color="primary" aria-label="search" onClick={handleSearch}>
                    <SearchIcon />
                </IconButton>
                <IconButton color="primary" aria-label="add project" onClick={handleAddClick}>
                    <AddIcon />
                </IconButton>
                
                
            </Box>

            {noResults ? (
                <div>
                    <p>No results found</p>
                </div>
            ) : (
                <div>
                    <TableContainer component={Paper}>
                        <Table>
                            <div ref={ComponentsRef}>
                            <h1>Details of Projects</h1>
                            <TableHead>
                                <TableRow
                                 sx={{
                                   backgroundColor: '#b1c5d4',
                                   fontWeight: 'bold',
                                   border: 'none',
                                   padding: '5px 10px',
                                   '&:hover': {
                                     backgroundColor: '#b1c5d4',
                                     
                                   },
                                 }}>
                                    <TableCell>Project Name</TableCell>
                                    <TableCell>Project Budget</TableCell>
                                    <TableCell>Employees</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Start Date</TableCell>
                                    <TableCell>End Date</TableCell>
                                    <TableCell>Project Type</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {projects.map((project) => (
                                    <TableRow ref={ComponentsRefsingle} key={project._id}>
                                        <TableCell>{project.projectName}</TableCell>
                                        <TableCell>{project.projectBudget}</TableCell>
                                        <TableCell>{project.Employees}</TableCell>
                                        <TableCell>{project.Status}</TableCell>
                                        <TableCell>{formatDate(project.startDate)}</TableCell>
                                        <TableCell>{formatDate(project.endDate)}</TableCell>
                                        <TableCell>{project.projectType}</TableCell>
                                        <TableCell>
                                            <IconButton onClick={() => navigate(`/Updateprojects/${project._id}`)} className="update-button">Update</IconButton>
                                            <IconButton onClick={() => deleteHandler(project._id)} className="delete-button">Delete</IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            </div>
                        </Table>
                    </TableContainer>
                </div>
            )}
            <br /><br />
        </div>
    )
}

export default AllProjects;
