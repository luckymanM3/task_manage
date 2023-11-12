export interface IBoard {
  id: number
  title: string
  itemCount: number
}

export interface ICard {
  id: number
  boardId: number
  type: string
  title: string
  description: string
  date: string
}

export interface IBoardTitle {
  boardTitle: string
}

export interface IListTitle {
  listTitle: string
}
