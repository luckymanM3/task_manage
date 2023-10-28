import React from 'react'
import { Link } from 'react-router-dom'
import { AuthWrapComponent } from 'components'
import { IMGS, PATHS } from 'utils/consts'

export const VerifySuccessComponent: React.FC = () => {
  return (
    <>
      <AuthWrapComponent>
        <div className=" w-[28rem] m-auto">
          <div className=" mb-4">
            <img src={IMGS.LOGO} alt="" className="m-auto" />
          </div>
          <div className="relative rounded-[1.25rem] shadow-cxl pl-6 pr-6 pt-7 pb-4 z-20">
            <div className="flex mb-3 justify-between"></div>
            <p className=" text-customCol1 text-center leading-7 mb-2">
              Your Password has <br /> been reset Successfully
            </p>
            <button
              type="button"
              className=" w-full pt-4 pb-4 bg-customCol3 border-0 rounded-full text-white mb-2"
            >
              <Link to={PATHS.VERIFY}>Continue</Link>
            </button>
          </div>
        </div>
      </AuthWrapComponent>
    </>
  )
}
