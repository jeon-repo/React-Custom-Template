import { rememberTitle } from 'app/store/rememberSlice';
import { createContext, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const AuthContext = createContext();

function AuthProvier({ children }) {
  const title = useSelector(rememberTitle);
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);
  const [waitAuthCheck, setWaitAuthCheck] = useState(true);

  useEffect(() => {
    setIsAuthenticated(true);
    setWaitAuthCheck(false);
  }, []);

  return waitAuthCheck ? (
    <div>block page</div>
  ) : (
    <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

export { AuthProvier, useAuth };
