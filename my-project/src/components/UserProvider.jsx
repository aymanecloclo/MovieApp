
import { useState, createContext, useContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const handleLogout = () => {
    setUser(null); // Réinitialise l'utilisateur
    navigate('/login'); // Redirige vers la page de connexion
  };
  return (
    <UserContext.Provider value={{ user, setUser,handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
