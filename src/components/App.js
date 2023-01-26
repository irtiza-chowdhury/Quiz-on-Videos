import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import '../styles/App.css';
import Layout from './Layout';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Signup from './pages/Signup';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<PublicRoute />}>
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<LogIn />} />
            </Route>

            <Route path="/*" element={<PrivateRoute />}>
              <Route path="quiz/:id" element={<Quiz />} />
              <Route path="result/:id" element={<Result />} />
            </Route>

            {/* way 2 */}
            {/* <Route
              path="/quiz"
              element={
                <PrivateRoute>
                  <Quiz />
                </PrivateRoute>
              }
            />
            <Route
              path="/result"
              element={
                <PrivateRoute>
                  <Result />
                </PrivateRoute>
              }
            /> */}
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
