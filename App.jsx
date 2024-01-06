import { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import SiteRoutes from "./SiteRoutes";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setuser] = useState(null);
  const navigate = useNavigate();
  useEffect(()=>{
    setuser(JSON.parse(localStorage.getItem('user'))??null)

  },[])
  const handleLogin = () => {
    const user = {
      id: 1,
      name: "mustafa",
      sifre:"1234"
    };
    setuser(user);
    localStorage.setItem("user", JSON.stringify(user));

    navigate("/");
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    setuser(null);
  };
  return (
    <>
      <Navbar handleLogout={handleLogout} user={user} />
      <div className="">
        <div className="col-sm-12">
          <SiteRoutes handleLogin={handleLogin} user={user} />
        </div>
      </div>
    </>
  );
}

export default App;
