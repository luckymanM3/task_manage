import React from 'react'
import { CreateBoardComponent, AddBoardsComponent } from 'components'
import { useSelector } from 'react-redux'
import { type RootState } from 'store'

export const BoardsContainer: React.FC = () => {
  const { boardTitle } = useSelector((root: RootState) => root.tickets)

  return (
    <>{boardTitle === '' ? <CreateBoardComponent /> : <AddBoardsComponent />}</>
  )
}
