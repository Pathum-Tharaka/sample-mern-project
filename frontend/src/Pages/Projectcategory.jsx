import React from 'react';
import AppBar from '../Components/Appbar';

import Menu from '../Components/menu';


function ProjectCategory() {
    // Example data for suppliers
    const projectsCats = [
        { id: 1, name: 'projectCat 1' },
        { id: 2, name: 'projectCat 2' },
        { id: 3, name: 'projectCat 3' },
        { id: 4, name: 'projectCat 4' },
        { id: 5, name: 'projectCat 5' },
    ];

    return (
        <div>

            <AppBar />
            <Menu />

            <div style={{ marginLeft: '255px', paddingTop: '80px' }}>
                <h1>List of projects sample page</h1>
                <ul>
                    {projectsCats.map((projectCat) => (
                        <li key={projectCat.id}>{projectCat.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default ProjectCategory;