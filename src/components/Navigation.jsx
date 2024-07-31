import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const role = useSelector((state) => state.user.role); //permet d'accéder à l'état actuel du store Redux et retourne la valeur de la propriété role de l'utilisateur
  const isLoggedIn = !!role; // !!converti n'importe quelle valeur en un booléen, il vérifie si role est défini et non nul

  return (
    <div className="navigation">
      <NavLink to="/" className="logo_kaela">KAELA</NavLink>

      <div className="navigation_links">
        <NavLink to="/">Home</NavLink>

        <div className="dropdown">
          <NavLink to="/collection">Collection</NavLink>
          <div className="dropdown-content">
            <NavLink to="/eveningDresses">Evening dresses</NavLink>
            <NavLink to="/latestCollection">Latest collection</NavLink>
          </div>
        </div>

        <NavLink to="/aboutMe">About me</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        {!isLoggedIn && (
          <>
            <NavLink to="/signup">Signup</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
        {isLoggedIn && <NavLink to="/logout">Logout</NavLink>}
        {role === 'admin' && <NavLink to="/admin">Admin</NavLink>}
      </div>
    </div>
  );
};

export default Navigation;
