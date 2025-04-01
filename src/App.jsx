import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './pages/Home'
import SignupPage from './pages/SignUp';
import LoginPage from './pages/Login';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from './pages/Dashboard';
import InterceptorSetup from './api/InterceptorSetup';
import Settings from './pages/Settings';

function App() {
  const [count, setCount] = useState(0)
  
  const isAuthenticated = true; // Replace with actual auth logic

  return (
    <Router>
      <InterceptorSetup />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        /> */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
