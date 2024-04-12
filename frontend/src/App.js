import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import UserManage from "./Pages/UserManage";
import AllUsers from "./Pages/AllUsers";
import AddUsers from "./Pages/AddUsers";
import NoPages from "./Pages/NoPages";
import Supplier from "./Pages/Supplier";
import Allprojects from "./Pages/Allprojects";
import Addprojects from "./Pages/Addprojects";
import Newprojects from "./Pages/Newprojects";
import Updateprojects from "./Pages/updateprojects";
import ProjectCategory from "./Pages/Projectcategory";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/user" element={<UserManage />} />
          <Route path="/user/addusers" element={<AddUsers />} />
          <Route path="/user/allusers" element={<AllUsers />} />
          <Route path="/supplier" element={<Supplier />} />
          <Route path="/Allprojects" element={<Allprojects />} />
          <Route path="/Addprojects" element={<Addprojects />} />
          <Route path="/Newprojects" element={<Newprojects />} />
          <Route path="/Allprojects/:id" element={<Updateprojects/>} />
          <Route path="/Projectcategory" element={<ProjectCategory />} />
  
          <Route path="*" element={<NoPages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
