import React from 'react'
import { DotIconComponent, PlusIconComponent } from '../icons'
import { useDispatch } from 'react-redux'
import { setCreateOpenCloseModal1 } from 'store/slices/tickets.slice'
// import {
//   AddTicketModalComponent
// } from 'components'

interface Props {
  id: number
  type: string
  count: number
  color: string
}

export const CategoryComponent: React.FC<Props> = (props) => {
  const { id, type, count, color } = props
  const dispatch = useDispatch()
  const textColor = 'text-[' + color + ']'

  const showModal = (): void => {
    dispatch(setCreateOpenCloseModal1(id))
  }

  return (
    <div className="w-[15rem] pl-[10px] pr-[15px] pt-[15px] pb-[15px] bg-white rounded-[10px] flex justify-between">
      <div className="flex items-center">
        <DotIconComponent iconColor={color} />
        <p className={textColor + ' text-[12px] font-medium	'}>
          &nbsp;{type} ({count})
        </p>
      </div>
      <button onClick={showModal}>
        <PlusIconComponent />
      </button>
    </div>
  )
}
