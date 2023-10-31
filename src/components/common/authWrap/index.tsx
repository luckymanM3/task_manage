import React from 'react'
import { IMGS } from 'utils/consts'

interface Props {
  children: React.ReactNode
}

export const AuthWrapComponent: React.FC<Props> = (props) => {
  return (
    <>
      <div className="bg-[url('assets/img/left-img.png')] bg-no-repeat bg-contain h-full w-full absolute top-0 left-0 z-10">
        <img src={IMGS.BGBLUR} alt="" className="w-full" />
      </div>

      <div className="container max-w-[1440px] mx-auto relative h-full z-5">
        <div className="h-full w-full absolute flex 2xl:pl-64 xl:pl-48 lg:pl-36">
          <div className="w-full relative">
            <img
              src={IMGS.BGCENTER}
              alt=""
              className=" absolute top-[52%] -translate-y-1/2"
            />
          </div>
          <div className="w-full flex">{props.children}</div>
        </div>
      </div>
    </>
  )
}
