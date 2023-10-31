import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  AuthWrapComponent,
  InputComponent,
  PasswordIconComponent,
  EmailIconComponent,
  UserIconComponent,
  GoogleIconComponent,
  AppleIconComponent,
} from 'components'
import { IMGS, PATHS } from 'utils/consts'

export const RegisterComponent: React.FC = () => {
  const navigate = useNavigate()
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const submitHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    navigate(PATHS.LOGIN)
  }

  return (
    <>
      <AuthWrapComponent>
        <div className=" w-[28rem] m-auto">
          <div className=" mb-4">
            <img src={IMGS.LOGO} alt="" className="m-auto" />
          </div>
          <div className="relative rounded-[1.25rem] shadow-cxl pl-6 pr-6 pt-7 pb-4 z-20">
            <form>
              <p className=" text-center text-customCol1 font-poppins font-extrabold text-2xl leading-7 tracking-wide mb-1">
                Create an account
              </p>
              <p className=" text-center text-customCol1 font-poppins font-normal text-sm leading-7 tracking-wide mb-5">
                Setup a new account in a minute.
              </p>
              <div className=" mb-6">
                <InputComponent
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                >
                  <UserIconComponent className=" w-6 h-6" />
                </InputComponent>
                <InputComponent
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                >
                  <EmailIconComponent className="w-5 h-5 fill-B8B8B8" />
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
              <button
                type="submit"
                className=" w-full pt-4 pb-4 bg-customCol3 border-0 rounded-full text-white mb-6"
                onClick={submitHandler}
              >
                Sign Up
              </button>
              <div className="relative text-center">
                <span className="bg-white z-30 relative text-customCol4 text-sm leading-9">
                  {' '}
                  &nbsp; or Sign up with &nbsp;{' '}
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
                <span>Already have an account?&nbsp; </span>
                <span>
                  <Link
                    to={PATHS.LOGIN}
                    className="text-customCol1 font-semibold"
                  >
                    Sign In
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
