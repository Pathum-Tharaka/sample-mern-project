import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NoPages from "./Pages/NoPages";
import Projects from "./Pages/projects";
import Allprojects from "./Pages/Allprojects";
import Newprojects from "./Pages/Newprojects";
import Updateprojects from "./Pages/updateprojects";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="*" element={<NoPages />} />
          
          <Route path="/projects" element={<Projects/>}/>
          <Route path = '/allprojects' element = {<Allprojects/>}/>
          <Route path = '/Newprojects' element = {<Newprojects/>}/>
          <Route path = '/updateprojects/:id' element = {<Updateprojects/>}/>
          


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;