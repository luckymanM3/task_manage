import React from 'react'
import { IMGS } from 'utils/consts'
import { TextBoxComponent } from '../textBox'

interface Props {
  tType: string
  title: string
  description: string
  date: string
}

export const CardComponent: React.FC<Props> = (props) => {
  const { tType, title, description, date } = props

  return (
    <div className="w-[15rem] pl-[14px] pr-[14px] pt-[16px] pb-[21px] bg-white rounded-[10px]">
      <div>
        <TextBoxComponent
          text={tType}
          color="bg-[#A635EB]"
          textColor="text-[#FFFFFF]"
        />
      </div>
      <div>
        <img
          src={IMGS.TBANNER1}
          alt=""
          className="h-[110px] w-[215px] rounded-xl mt-3 mb-3"
        />
      </div>
      <div className="text-cardTitleCol text-[13px] font-medium leading-normal mb-[7px]">
        {title}
      </div>
      <div className="text-cardDescCol text-[12px] font-medium leading-normal mb-[12px]">
        {description}
      </div>
      <div>
        <TextBoxComponent
          text={date}
          color="bg-[#E8E7E7]"
          textColor="text-[#333]"
        />
      </div>
    </div>
  )
}
