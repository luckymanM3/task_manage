import React from 'react'
import WithLayout from 'layout'
import { BoardsContainer } from 'containers'

const CreateBoardPage: React.FC = () => {
  return <BoardsContainer />
}

export default WithLayout(CreateBoardPage)
