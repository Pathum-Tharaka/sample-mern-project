import React from 'react';
import Menu from '../Components/menu';
import AppBar from '../Components/Appbar';
function Nopage() {
  return (
    <div style={{ marginLeft: '255px', paddingTop: '80px' }}>

     <AppBar />

     <Menu />
     

     <h2>  Page not found bocca! </h2><h3> set the correct pathname in the path related in menu</h3> 

    </div>
  );
}

export default Nopage;