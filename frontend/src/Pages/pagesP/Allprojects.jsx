import React from 'react';



const Allproject = () => {
    // Example data for suppliers
    const projects = [
        { id: 1, name: 'project 1' },
        { id: 2, name: 'project 2' },
        { id: 3, name: 'project 3' },
        { id: 4, name: 'project 4' },
        { id: 5, name: 'project 5' },

    
    ];

    return (
        <div>
           
        

            <div style={{ marginLeft: '255px', paddingTop: '80px' }}>
                <h1>List of projects sample page</h1>
                <ul>
                    {projects.map((project) => (
                        <li key={project.id}>{project.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Allproject;