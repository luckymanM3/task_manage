import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from 'pages/authentication/RegisterPage'
import LoginPage from 'pages/authentication/LoginPage'
import { PATHS } from 'utils/consts'
import './App.css'
import ForgotPasswordPage from 'pages/authentication/ForgotPasswordPage'
import VerifyPage from 'pages/authentication/VerifyPage'
import VerifySuccessPage from 'pages/authentication/VerifySuccessPage'
import DashboardPage from 'pages/dashboard'
import CreateBoardPage from 'pages/boards'
import CreateCategoryPage from 'pages/categories'
import { useDispatch } from 'react-redux'
import { initState } from 'store/slices/tickets.slice'

const App: React.FC = () => {
  // const location = useLocation();
  const dispatch = useDispatch()
  dispatch(initState())

  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        <Routes>
          <Route path={PATHS.REGISTER} element={<RegisterPage />} />
          <Route path={PATHS.LOGIN} element={<LoginPage />} />
          <Route path={PATHS.FORGOT} element={<ForgotPasswordPage />} />
          <Route path={PATHS.VERIFY} element={<VerifyPage />} />
          <Route path={PATHS.VERIFIED} element={<VerifySuccessPage />} />
          <Route path={PATHS.DASHBOARD} element={<DashboardPage />} />
          <Route path={PATHS.CREATEBOARD} element={<CreateBoardPage />} />
          <Route path={PATHS.CREATECATEGORY} element={<CreateCategoryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
