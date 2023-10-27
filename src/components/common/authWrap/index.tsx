import React from 'react'
import { IMGS } from 'utils/consts'

interface Props {
  children: React.ReactNode
}

export const AuthWrapComponent: React.FC<Props> = (props) => {
  return (
    <>
      <div className="bg-[url('assets/img/left-img.png')] bg-no-repeat bg-contain h-full w-full absolute top-0 left-0 z-10"></div>

      <div className="container max-w-[1440] mx-auto relative h-full">
        {/* {props.children} */}
        <div className="bg-[url('assets/img/bg-blur.png')] bg-cover bg-no-repeat h-full w-full absolute top-0 left-0"></div>
        <div className="h-full">
          <img
            src={IMGS.BGCENTER}
            alt=""
            className="xl:ml-60 xl:mt-32 xl:mb-24 lg:ml-30 lg:mt-16 lg:mb-12"
          />
        </div>
      </div>
    </>
  )
}
