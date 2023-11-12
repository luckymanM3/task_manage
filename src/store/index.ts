import { combineReducers, configureStore } from '@reduxjs/toolkit'

import ticketReducer from './slices/tickets.slice'

const reducer = combineReducers({
  tickets: ticketReducer,
})

export const store = configureStore({
  reducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
