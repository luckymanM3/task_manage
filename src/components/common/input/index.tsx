import React from 'react'

interface Props {
  type: string
  id: string
  name: string
  placeholder: string
  children: React.ReactNode
  value?: string
}

export const InputComponent: React.FC<Props> = (props) => {
  const { children, ...rest } = props

  return (
    <div className="relative mb-3">
      <div className="absolute top-1/2 -translate-y-1/2 left-4">{children}</div>
      <input
        {...rest}
        className="pt-4 pb-4 pl-12 pr-4 border border-customCol2 rounded-2xl w-full"
      />
    </div>
  )
}
