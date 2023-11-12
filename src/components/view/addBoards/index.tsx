import React from 'react'
import { useSelector } from 'react-redux'
import { type RootState } from 'store'
import { AddBoardsCardComponent, ListCardComponent } from 'components'
import { type IBoard } from 'types'

export const AddBoardsComponent: React.FC = () => {
  const { boardTitle, boards } = useSelector((root: RootState) => root.tickets)

  return (
    <div className="pt-[35px] pb-[35px] pl-[20px] pr-[20px]">
      <div className="mb-[2rem]">
        <div className="text-[12px] text-bookmarkTextCol font-normal leading-4">
          &nbsp;
        </div>
        <div className="text-black text-[36px] font-bold leading-[3rem] tracking-[-0.792px]">
          {boardTitle}
        </div>
      </div>
      <div className="overflow-auto">
        <div className="flex gap-4">
          {boards.length > 0 &&
            boards.map((board: IBoard) => (
              <div className="h-full flex-grow-0 w-min" key={board.id}>
                <ListCardComponent title={board.title} id={board.id} />
              </div>
            ))}
          <div className="h-full flex-grow-0 w-min">
            <AddBoardsCardComponent />
          </div>
        </div>
      </div>
    </div>
  )
}
