import React from 'react'
import { CategoryComponent, CardComponent } from 'components'
import { type RootState } from 'store'
import { useSelector } from 'react-redux'

export const DashboardComponent: React.FC = () => {
  const { currentBoardId, boards, categories, cards } = useSelector(
    (root: RootState) => root.tickets
  )

  const currentBoard = boards.find((item) => item.id === currentBoardId)

  return (
    <div className="pt-[35px] pb-[35px] pl-[20px] pr-[20px]">
      <div className="mb-[4.875rem]">
        <div className="text-[12px] text-bookmarkTextCol font-normal leading-4">
          Projects &gt; {currentBoard?.title}
        </div>
        <div className="text-black text-[36px] font-bold leading-[3rem] tracking-[-0.792px]">
          {currentBoard?.title}
        </div>
      </div>
      <div className="overflow-auto">
        <div className="flex gap-4">
          {categories
            .filter((item) => item.boardId === currentBoardId)
            .map((category) => {
              return (
                <div key={category.id} className="h-full flex-grow-0 w-min">
                  <CategoryComponent
                    key={category.id}
                    id={category.id}
                    type={category.title}
                    count={category.itemCount}
                    color="#BDBDBD"
                  />
                  {cards
                    .filter((itm) => itm.categoryId === category.id)
                    .map((card) => {
                      return (
                        <div key={card.id} className="mt-[12px]">
                          <CardComponent
                            tType={card.type}
                            title={card.title}
                            description={card.description}
                            date={card.date}
                          />
                        </div>
                      )
                    })}
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
