import { CreateBoardCardComponent } from 'components'
import React from 'react'

export const CreateBoardComponent: React.FC = () => {
  return (
    <div className="pt-[35px] pb-[35px] pl-[20px] pr-[20px]">
      <div className="mb-[2rem]">
        <div className="text-[12px] text-bookmarkTextCol font-normal leading-4">
          &nbsp;
        </div>
        <div className="text-black text-[36px] font-bold leading-[3rem] tracking-[-0.792px]">
          Create a Board
        </div>
      </div>
      <CreateBoardCardComponent />
    </div>
  )
}
