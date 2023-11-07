import React from 'react'
import { DotIconComponent, PlusIconComponent } from '../icons'

interface Props {
  type: string
  count: number
  color: string
}

export const CategoryComponent: React.FC<Props> = (props) => {
  const { type, count, color } = props

  const textColor = 'text-[' + color + ']'
  return (
    <div className="w-[15rem] pl-[10px] pr-[15px] pt-[15px] pb-[15px] bg-white rounded-[10px] flex justify-between">
      <div className="flex items-center">
        <DotIconComponent iconColor={color} />
        <p className={textColor + ' text-[12px] font-medium	'}>
          &nbsp;{type} ({count})
        </p>
      </div>
      <PlusIconComponent />
    </div>
  )
}
