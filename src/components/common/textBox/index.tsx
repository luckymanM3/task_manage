import React from 'react'

interface Props {
  color: string
  text: string
  textColor: string
}

export const TextBoxComponent: React.FC<Props> = (props) => {
  const { text, color, textColor } = props

  return (
    <span
      className={
        'text-[12px] pl-[11px] pr-[11px] pt-[3px] pb-[3px] ' +
        color +
        ' ' +
        textColor +
        ' rounded-[4px] font-medium leading-normal'
      }
    >
      {text}
    </span>
  )
}
