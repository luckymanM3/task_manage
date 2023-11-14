import React, { useState } from 'react'
import {
  ArrowDownIconComponent,
  BoardIconComponent,
  ListIconComponent,
  CalendarIconComponent,
  NotificationIconComponent,
  EditBoardIconComponent,
  SearchIconComponent,
} from 'components'
import { IMGS, PATHS } from 'utils/consts'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentBoardId } from 'store/slices/tickets.slice'
import { type RootState } from 'store'

const Header: React.FC = () => {
  const [isShowSubMenu, setIsShowSubMenu] = useState<boolean>(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { boards, categories } = useSelector((root: RootState) => root.tickets)

  const toDashboard = (id: number): void => {
    dispatch(setCurrentBoardId(id))
    setIsShowSubMenu(false)
    navigate(PATHS.DASHBOARD)
  }

  const toCreateBoard = (): void => {
    // current
    navigate(PATHS.CREATEBOARD)
  }

  return (
    <div className="h-[4.5rem] bg-white pt-2 pb-[1px] pl-3 pr-3 flex justify-between">
      <div className="flex">
        {boards.length > 0 && categories.length > 0 && (
          <>
            <button
              onClick={() => {
                setIsShowSubMenu((prev) => !prev)
              }}
              className="header-board pl-2 pr-2 flex gap-2 items-center tracking-[-0.084px] font-normal text-sm relative"
            >
              <BoardIconComponent />
              <span>Board</span>
              <ArrowDownIconComponent />
            </button>
            <button className="header-board pl-2 pr-2 flex gap-2 items-center tracking-[-0.084px] font-normal text-sm relative">
              <ListIconComponent />
              <span>List</span>
            </button>
            <button className="header-board pl-2 pr-2 flex gap-2 items-center tracking-[-0.084px] font-normal text-sm relative">
              <CalendarIconComponent />
              <span>Calendar</span>
            </button>
          </>
        )}
        {isShowSubMenu && (
          <div className="sub-board-menu absolute w-[172px] border-[1px] border-solid bg-white border-createBorderCol rounded-[10px] top-[52px] left-[90px] z-10">
            {boards.map((board) => {
              return (
                <div
                  onClick={() => {
                    toDashboard(board.id)
                  }}
                  key={board.id}
                  className="add-my-task flex justify-between items-center w-full h-[36px] pl-[25px] pr-[15px]"
                >
                  <button>{board.title}</button>
                  <EditBoardIconComponent />
                </div>
              )
            })}
            <div className="create-board w-full h-[36px] pl-[25px] pr-[15px] text-left">
              <button onClick={toCreateBoard}>Create a Board</button>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center mr-10">
        {boards.length > 0 && categories.length > 0 && (
          <div className="search relative mr-24">
            <input
              type="text"
              placeholder="Search here..."
              className="rounded-full border border-gray-300 bg-white text-base h-[43px] pl-[14px]"
            />
            <div className="absolute top-2/4 translate-y-[-50%] right-[25px]">
              <SearchIconComponent />
            </div>
          </div>
        )}
        <div className="flex gap-10 items-stretch">
          {boards.length > 0 && categories.length > 0 && (
            <button className="h-[43px] pl-[14px] pr-[14px] text-white bg-customCol3 rounded-[10px] text-[14px] font-medium">
              + Create New Task
            </button>
          )}
          <div className="relative">
            <div className="flex items-center text-center w-[1.25rem] h-[1.25rem] rounded-full bg-nitifyCol text-[11px] font-medium text-white relative z-10 translate-x-1/2">
              <span className="w-full block">12</span>
            </div>
            <NotificationIconComponent />
          </div>
          <div className="flex">
            <img src={IMGS.EAVATAR} alt="" className="w-10 h-10 rounded-full" />
            <div className="pl-[14px]">
              <p className="text-customCol1 font-roboto text-base font-medium">
                avtanwar
              </p>
              <p className="text-customCol1 font-roboto text-sm font-normal">
                UI/UX Designer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
