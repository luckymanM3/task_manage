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
          className="sidebar-btn active-sidebar h-[3.125rem] bg-white w-[3.125rem] rounded-[10px] mb-1"
        >
          {children}
        </button>
      ) : (
        <button
          type="button"
          className="sidebar-btn h-[3.125rem] w-[3.125rem] bg-white rounded-[10px] mb-1"
        >
          {children}
        </button>
      )}
    </>
  )
}
