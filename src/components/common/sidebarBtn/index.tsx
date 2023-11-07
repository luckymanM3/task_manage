import React from 'react'

interface Props {
  toUrl: string
  children: React.ReactNode
}

export const SideBarBtnComponent: React.FC<Props> = (props) => {
  const { children, toUrl } = props
  return (
    <>
      {toUrl === '/dashboard' ? (
        <button
          type="button"
          className="h-[3.125rem] w-[3.125rem] bg-sidebarBtnCol rounded-[10px] mb-1"
        >
          {children}
        </button>
      ) : (
        <button
          type="button"
          className="h-[3.125rem] w-[3.125rem] bg-white rounded-[10px] mb-1"
        >
          {children}
        </button>
      )}
    </>
  )
}
