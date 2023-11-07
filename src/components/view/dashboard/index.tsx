import React from 'react'
import { CategoryComponent, CardComponent } from 'components'

export const DashboardComponent: React.FC = () => {
  return (
    <div className="pt-[35px] pb-[35px] pl-[20px] pr-[20px]">
      <div className="mb-[4.875rem]">
        <div className="text-[12px] text-bookmarkTextCol font-normal leading-4">
          Projects &gt; My Tasks
        </div>
        <div className="text-black text-[36px] font-bold leading-[3rem] tracking-[-0.792px]">
          My Tasks
        </div>
      </div>
      <div>
        <div>
          <CategoryComponent type="Backlog" count={20} color="#BDBDBD" />
          <div className="mt-[12px]">
            <CardComponent
              tType="Visual"
              title="Heading title"
              description="Lorem ipsum sit dolor amet ipsum"
              date="July 10, 2023"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
