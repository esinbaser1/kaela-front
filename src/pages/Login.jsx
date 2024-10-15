import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from 'react-query';
import { toast, ToastContainer } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css'; 
import Footer from "../components/Footer";
import { loginUser } from "../api/userApi";
import { AuthContext } from "../context/AuthContext"; // Import du AuthContext

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { auth, login } = useContext(AuthContext); // Récupérer la fonction login du contexte

  // Redirection si l'utilisateur est déjà connecté
  useEffect(() => {
    if (auth.token) {
      navigate("/"); // Rediriger si déjà connecté
    }
  }, [auth.token, navigate]);

  const mutation = useMutation(loginUser, {
    onSuccess: (data) => {
      if (data.success) {
        // Appeler la fonction login du contexte pour stocker les informations dans le localStorage et le contexte
        login({ token: data.token, userId: data.user_id, role: data.role });

        // Redirection selon le rôle de l'utilisateur
        if (data.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      } else {
        toast.error(data.message);
      }
    },
    onError: (error) => {
      toast.error("Erreur de serveur : " + error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ email, password });
  };

  return (
    <>
      <section className="user-form">
        <h2>Login</h2>
        <div className="line"></div>
        <form onSubmit={handleSubmit} className="user-form__content">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            value={email}
            placeholder="example@domain.com"
            aria-required="true"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            value={password}
            placeholder="Enter your password"
            aria-required="true"
          />
          <button type="submit" disabled={mutation.isLoading}>
            {mutation.isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <ToastContainer />
      </section>
      <Footer />
    </>
  );
};

export default Login;
