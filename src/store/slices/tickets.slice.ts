import { createSlice } from '@reduxjs/toolkit'
import { type IBoard, type ICard } from 'types'

const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    boardTitle: '',
    boards: [] as IBoard[],
    cards: [] as ICard[],
  },
  reducers: {
    initState(state) {
      state.boardTitle = ''
      state.boards = []
      state.cards = []
    },

    setBoardTitle(state, action) {
      console.log('action: ', action)

      state.boardTitle = action.payload
    },

    addBoard(state, action) {
      const board = {
        id: state.boards.length + 1,
        title: action.payload,
        itemCount: 0,
      }
      state.boards = [...state.boards, board]
    },

    removeBoardItem(state, action) {
      state.boards = state.boards.filter((item) => item.id !== action.payload)
    },

    addCard(state, action) {},

    removeCard(state, action) {},

    moveCard(state, action) {},

    updateCard(state, action) {},
  },
})

export const {
  initState,
  setBoardTitle,
  addBoard,
  removeBoardItem,
  addCard,
  removeCard,
  moveCard,
  updateCard,
} = ticketSlice.actions

export default ticketSlice.reducer
