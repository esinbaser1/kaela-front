// import { useEffect } from "react";
import { NavLink} from "react-router-dom";

const AdminNavigation = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const role = localStorage.getItem("role");
  //   if (role !== "admin") {
  //     navigate("/");
  //   } 
  // }, [navigate]);

  return (
    <div className="admin-container">
      <aside className="admin-container__navigation">
        <NavLink
          to="/product"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Product
        </NavLink>
        <NavLink
          to="/adminInformation"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Information about me
        </NavLink>
        <NavLink
          to="/adminCategory"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Category
        </NavLink>
        <NavLink
          to="/adminSocialNetwork"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Social network
        </NavLink>
      </aside>
    </div>
  );
};

export default AdminNavigation;
