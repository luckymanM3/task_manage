import React from 'react'
import { DotIconComponent, CancelIconComponent } from '../icons'
import { removeBoardItem } from 'store/slices/tickets.slice'
import { useDispatch } from 'react-redux'

interface Props {
  title: string
  id: number
}

export const ListCardComponent: React.FC<Props> = (props) => {
  const { title, id } = props

  const dispatch = useDispatch()

  const deleteCategory = (): void => {
    dispatch(removeBoardItem(id))
  }

  return (
    <div className="w-[15rem] pl-[10px] pr-[15px] pt-[15px] pb-[15px] bg-white rounded-[10px] flex justify-between">
      <div className="flex items-center">
        <DotIconComponent iconColor="#FF6F07" />
        <p className="text-customCol1 text-[12px] font-medium	">
          &nbsp; {title}
        </p>
      </div>
      <button onClick={deleteCategory}>
        <CancelIconComponent />
      </button>
    </div>
  )
}
