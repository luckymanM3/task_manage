import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from 'pages/authentication/RegisterPage'
import LoginPage from 'pages/authentication/LoginPage'
import { PATHS } from 'utils/consts'
import './App.css'
import ForgotPasswordPage from 'pages/authentication/ForgotPasswordPage'
import VerifyPage from 'pages/authentication/VerifyPage'
import VerifySuccessPage from 'pages/authentication/VerifySuccessPage'

const App: React.FC = () => {
  // const location = useLocation();

  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        <Routes>
          <Route path={PATHS.REGISTER} element={<RegisterPage />} />
          <Route path={PATHS.LOGIN} element={<LoginPage />} />
          <Route path={PATHS.FORGOT} element={<ForgotPasswordPage />} />
          <Route path={PATHS.VERIFY} element={<VerifyPage />} />
          <Route path={PATHS.VERIFIED} element={<VerifySuccessPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
