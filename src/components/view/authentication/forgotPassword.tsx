import React from 'react'
import { Link } from 'react-router-dom'
import {
  AuthWrapComponent,
  InputComponent,
  UserIconComponent,
} from 'components'
import { IMGS, PATHS } from 'utils/consts'

export const ForgotPasswordComponent: React.FC = () => {
  return (
    <>
      <AuthWrapComponent>
        <div className=" w-[28rem] m-auto">
          <div className=" mb-4">
            <img src={IMGS.LOGO} alt="" className="m-auto" />
          </div>
          <div className="relative rounded-[1.25rem] shadow-cxl pl-6 pr-6 pt-7 pb-4 z-20">
            <p className=" text-center text-customCol1 font-poppins font-extrabold text-2xl leading-7 tracking-wide mb-1">
              Forgot Password
            </p>
            <p className=" text-center text-customCol1 font-poppins font-normal text-sm leading-7 tracking-wide mb-5">
              Enter your email. We will send you 4 digit Code
            </p>
            <div className=" mb-4">
              <InputComponent
                type="text"
                name="email"
                id="email"
                placeholder="Enter your Email address"
                value="avtanwar01@gmail.com"
              >
                <UserIconComponent className=" w-6 h-6" />
              </InputComponent>
            </div>
            <button
              type="button"
              className=" w-full pt-4 pb-4 bg-customCol3 border-0 rounded-full text-white mb-6"
            >
              <Link to={PATHS.VERIFY}>Continue</Link>
            </button>
          </div>
        </div>
      </AuthWrapComponent>
    </>
  )
}
