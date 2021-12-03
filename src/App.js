import Topbar from "./components/TopBar/Topbar";
import "./app.css"
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserList from "./pages/UserList/UserList";

function App() {
  return (
    <BrowserRouter>
      <Topbar />

      <div className="container">
        <SideBar />
        <Routes>
          <Route   path="/" element={<Home />} />
          <Route path="/users" element={<UserList />}/>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
