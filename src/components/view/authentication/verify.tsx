import React from 'react'
import { Link } from 'react-router-dom'
import { AuthWrapComponent } from 'components'
import { IMGS, PATHS } from 'utils/consts'

export const VerifyComponent: React.FC = () => {
  return (
    <>
      <AuthWrapComponent>
        <div className=" w-[28rem] m-auto">
          <div className=" mb-4">
            <img src={IMGS.LOGO} alt="" className="m-auto" />
          </div>
          <div className="relative rounded-[1.25rem] shadow-cxl pl-6 pr-6 pt-7 pb-4 z-20">
            <p className=" text-center text-customCol1 font-poppins font-extrabold text-2xl leading-7 tracking-wide mb-1">
              Verification
            </p>
            <p className=" text-center text-customCol1 font-poppins font-normal text-sm leading-7 tracking-wide mb-5">
              Please Enter 4 digits code that you have received
            </p>
            <div className="flex mb-3 justify-between">
              <input
                className="pt-4 pb-4 pl-4 pr-4 border border-customCol2 rounded-2xl w-[4.875rem] h-[4.875rem] text-center text-[2.5rem]"
                type="text"
                name="email"
                id="email"
                placeholder="Enter your Email address"
                value="2"
              />
              <input
                className="pt-4 pb-4 pl-4 pr-4 border border-customCol2 rounded-2xl w-[4.875rem] h-[4.875rem] text-center text-[2.5rem]"
                type="text"
                name="email"
                id="email"
                placeholder="Enter your Email address"
                value="2"
              />
              <input
                className="pt-4 pb-4 pl-4 pr-4 border border-customCol2 rounded-2xl w-[4.875rem] h-[4.875rem] text-center text-[2.5rem]"
                type="text"
                name="email"
                id="email"
                placeholder="Enter your Email address"
                value="1"
              />
              <input
                className="pt-4 pb-4 pl-4 pr-4 border border-customCol2 rounded-2xl w-[4.875rem] h-[4.875rem] text-center text-[2.5rem]"
                type="text"
                name="email"
                id="email"
                placeholder="Enter your Email address"
                value="0"
              />
            </div>
            <p className=" text-red text-center leading-7 mb-2">00.30</p>
            <button
              type="button"
              className=" w-full pt-4 pb-4 bg-customCol3 border-0 rounded-full text-white mb-2"
            >
              <Link to={PATHS.VERIFIED}>Continue</Link>
            </button>
            <p className="text-center text-textCol1 text-base leading-9  ">
              <span>If you didn’t receive the code!&nbsp; </span>
              <span>
                <Link to={PATHS.REGISTER} className="font-semibold text-red">
                  Resend
                </Link>
              </span>
            </p>
          </div>
        </div>
      </AuthWrapComponent>
    </>
  )
}
