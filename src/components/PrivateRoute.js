import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function PrivateRoute() {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}

// // way 2
// export default function PrivateRoute({ children }) {
//   const { currentUser } = useAuth();
//   return currentUser ? children : <Navigate to="/login" />;
// }
