import * as React from 'react';
import { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Menu from '../Components/menu';
import AppBar from '../Components/Appbar'; 
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from "axios";
import Allprojects from './Allprojects';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
//import { useReactToPrint } from 'react-to-print';



const URL = "http://localhost:5000/Projects";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
}

// Styled components

function Projects() {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();
    const [totalProjects, setTotalProjects] = useState(0);

    const ComponentsRef = useRef();
   /* const handlePrint = useReactToPrint({
        content: () => ComponentsRef.current,
        documentTitle: 'Vehicles Report',//document name(PDF save name)
        onAfterPrint: () => alert("Vehicles Report successfully Download !"),//after download display alert message
        
    })
    */
    
    

    useEffect(() => {
        fetchHandler().then((data) => {
          setProjects(data?.project || []); // Set an empty array if data.project is undefined
         
          setTotalProjects(data?.project?.length || 0);
          
        });
      }, []);
      const handleAddClick = () => {
        navigate(`/Newprojects`);
    };  

    return (
        <div >
            <AppBar/>
            <Menu/>
            
            <Grid  container spacing={3}>
                <Grid style={{ marginLeft: '270px', paddingTop: '110px' }} item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Total Projects
                            </Typography>
                            <Typography variant="body2" component="p">
                                {totalProjects}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                
               
               
                {/* Add more cards for additional statistics if needed */}
            </Grid>
            <br/>
            
            <Paper elevation={4}>
                {/* Display Table of Vehicles here */}
            </Paper>
            <br/><br/>
        
        
            <Allprojects></Allprojects>
        </div>
    );
}

export default Projects;;
