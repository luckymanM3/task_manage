export interface IBoard {
  id: number
  title: string
}

export interface ICategory {
  id: number
  boardId: number
  title: string
  itemCount: number
}

export interface ICard {
  id: number
  categoryId: number
  type: string
  title: string
  description: string
  date: string
}

export interface IBoardTitle {
  boardTitle: string
}

export interface ICardForm {
  categoryId?: number
  type: string
  title: string
  description?: string
}

export interface IListTitle {
  listTitle: string
}
