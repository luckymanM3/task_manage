import { createSlice } from '@reduxjs/toolkit'
import { type IBoard, type ICategory, type ICard } from 'types'

const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    boards: [] as IBoard[],
    categories: [] as ICategory[],
    cards: [] as ICard[],
    currentBoardId: -1,
    isShowCreateTicketModal1: false,
    isShowCreateTicketModal2: false,
    isShowEditTicketModal: false,
    ticketCategoryId: -1,
  },
  reducers: {
    initState(state) {
      state.boards = [
        {
          id: 1,
          title: 'My Task',
        },
        {
          id: 2,
          title: 'UI Change',
        },
        {
          id: 3,
          title: 'API Integration',
        },
      ]
      state.categories = [
        {
          id: 1,
          boardId: 1,
          title: 'Backlog',
          itemCount: 2,
        },
        {
          id: 2,
          boardId: 1,
          title: 'On Progress',
          itemCount: 4,
        },
        {
          id: 3,
          boardId: 1,
          title: 'Completed',
          itemCount: 3,
        },
        {
          id: 4,
          boardId: 1,
          title: 'Review',
          itemCount: 2,
        },
        {
          id: 5,
          boardId: 2,
          title: 'Backlog',
          itemCount: 2,
        },
        {
          id: 6,
          boardId: 2,
          title: 'On Progress',
          itemCount: 4,
        },
        {
          id: 7,
          boardId: 3,
          title: 'Completed',
          itemCount: 3,
        },
        {
          id: 8,
          boardId: 3,
          title: 'Review',
          itemCount: 2,
        },
      ]
      state.cards = [
        {
          id: 1,
          categoryId: 1,
          type: 'Visual',
          title: 'Heading Title',
          description: 'Lorem ipsum sit dolor amet ipsum',
          date: 'July 10, 2023',
        },
        {
          id: 2,
          categoryId: 1,
          type: 'Visual',
          title: 'Heading Title',
          description: 'Lorem ipsum sit dolor amet ipsum',
          date: 'July 10, 2023',
        },
        {
          id: 3,
          categoryId: 2,
          type: 'Visual',
          title: 'Heading Title',
          description: 'Lorem ipsum sit dolor amet ipsum',
          date: 'July 10, 2023',
        },
        {
          id: 4,
          categoryId: 5,
          type: 'Visual',
          title: 'Heading Title',
          description: 'Lorem ipsum sit dolor amet ipsum',
          date: 'July 10, 2023',
        },
        {
          id: 5,
          categoryId: 7,
          type: 'Visual',
          title: 'Heading Title',
          description: 'Lorem ipsum sit dolor amet ipsum',
          date: 'July 10, 2023',
        },
        {
          id: 6,
          categoryId: 4,
          type: 'Visual',
          title: 'Heading Title',
          description: 'Lorem ipsum sit dolor amet ipsum',
          date: 'July 10, 2023',
        },
        {
          id: 7,
          categoryId: 4,
          type: 'Visual',
          title: 'Heading Title',
          description: 'Lorem ipsum sit dolor amet ipsum',
          date: 'July 10, 2023',
        },
        {
          id: 8,
          categoryId: 7,
          type: 'Visual',
          title: 'Heading Title',
          description: 'Lorem ipsum sit dolor amet ipsum',
          date: 'July 10, 2023',
        },
      ]
      state.currentBoardId = 1
      state.isShowCreateTicketModal1 = false
      state.isShowCreateTicketModal2 = false
      state.isShowEditTicketModal = false
      state.ticketCategoryId = -1
    },

    setCurrentBoardId(state, action) {
      state.currentBoardId = action.payload
    },

    setCreateOpenCloseModal1(state, action) {
      state.isShowCreateTicketModal1 = !state.isShowCreateTicketModal1
      state.ticketCategoryId = action.payload
    },

    setCreateOpenCloseModal2(state) {
      state.isShowCreateTicketModal2 = !state.isShowCreateTicketModal2
    },

    setEditOpenCloseModal(state, action) {
      state.isShowEditTicketModal = !state.isShowEditTicketModal
      state.ticketCategoryId = action.payload
    },

    addBoard(state, action) {
      const board = {
        id: state.boards.length + 1,
        title: action.payload,
      }
      state.currentBoardId = board.id
      state.boards = [...state.boards, board]
    },

    addCategory(state, action) {
      let id = 1
      if (state.categories.length > 0)
        id = state.categories[state.categories.length - 1].id + 1

      const category = {
        id,
        boardId: state.currentBoardId,
        title: action.payload,
        itemCount: 0,
      }

      state.categories = [...state.categories, category]
    },

    removeCategoryItem(state, action) {
      state.categories = state.categories.filter(
        (item) => item.id !== action.payload
      )
    },

    addCard(state, action) {
      const id = state.cards[state.cards.length - 1].id + 1
      const card = action.payload
      card.id = id
      console.log(card)
      state.cards = [...state.cards, card]
    },

    removeCard(state, action) {},

    moveCard(state, action) {},

    updateCard(state, action) {},
  },
})

export const {
  initState,
  addBoard,
  addCategory,
  removeCategoryItem,
  setCurrentBoardId,
  setCreateOpenCloseModal1,
  setCreateOpenCloseModal2,
  setEditOpenCloseModal,
  addCard,
  removeCard,
  moveCard,
  updateCard,
} = ticketSlice.actions

export default ticketSlice.reducer
