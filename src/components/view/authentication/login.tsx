import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  AuthWrapComponent,
  InputComponent,
  PasswordIconComponent,
  UserIconComponent,
  GoogleIconComponent,
  AppleIconComponent,
} from 'components'
import { IMGS, PATHS } from 'utils/consts'

export const LoginComponent: React.FC = () => {
  const navigate = useNavigate()

  const loginHandler = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault()
    navigate(PATHS.DASHBOARD)
  }

  return (
    <>
      <AuthWrapComponent>
        <div className=" w-[28rem] m-auto">
          <div className=" mb-4">
            <img src={IMGS.LOGO} alt="" className="m-auto" />
          </div>
          <div className="relative rounded-[1.25rem] shadow-cxl pl-6 pr-6 pt-7 pb-4 z-20 h-[37.25rem]">
            <form action="">
              <p className=" text-center text-customCol1 font-poppins font-extrabold text-2xl leading-7 tracking-wide mb-1">
                Login into account
              </p>
              <p className=" text-center text-customCol1 font-poppins font-normal text-sm leading-7 tracking-wide mb-5">
                Use your credentials to access your account.
              </p>
              <div className=" mb-4">
                <InputComponent
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your Email address"
                >
                  <UserIconComponent className=" w-6 h-6" />
                </InputComponent>
                <InputComponent
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                >
                  <PasswordIconComponent className=" w-6 h-6" />
                </InputComponent>
              </div>
              <div className="flex justify-between text-textCol2 text-[0.875rem] leading-7 font-medium align-middle mb-3">
                <div className="">
                  <input
                    type="checkbox"
                    name="remember_me"
                    id="remember_me"
                    className="mr-2"
                  />
                  <label htmlFor="remember_me">Remember Me</label>
                </div>
                <div className="">
                  <Link to={PATHS.FORGOT}> Forgot password? </Link>
                </div>
              </div>
              <button
                type="button"
                className=" w-full pt-4 pb-4 bg-customCol3 border-0 rounded-full text-white mb-6"
                onClick={loginHandler}
              >
                Sign In
              </button>
              <div className="relative text-center">
                <span className="bg-white z-30 relative text-customCol4 text-sm leading-9">
                  {' '}
                  &nbsp; or Login with &nbsp;{' '}
                </span>
                <div className="absolute top-1/2 h-[0] w-full border-b border-borderCol z-20"></div>
              </div>
              <div className=" mt-4 mb-3 flex justify-center">
                <button className="border pl-8 pr-8 pt-4 pb-4 rounded-2xl mr-[0.375rem] border-borderCol">
                  <GoogleIconComponent className=" w-8" />
                </button>
                <button className="border pl-8 pr-8 pt-4 pb-4 rounded-2xl ml-[0.375rem] border-borderCol">
                  <AppleIconComponent className=" w-8" />
                </button>
              </div>
              <p className="text-center text-textCol1 text-base leading-9  ">
                <span>Don’t have an account?&nbsp; </span>
                <span>
                  <Link
                    to={PATHS.REGISTER}
                    className="text-customCol1 font-semibold"
                  >
                    Sign Up
                  </Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </AuthWrapComponent>
    </>
  )
}
