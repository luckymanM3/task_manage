import React from 'react'

export const CancelIconComponent: React.FC<
  React.SVGProps<SVGSVGElement>
> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <rect
        x="10.8284"
        y="3.75732"
        width="2"
        height="10"
        transform="rotate(45 10.8284 3.75732)"
        fill="#6772FE"
      />
      <rect
        x="3.75732"
        y="5.17163"
        width="2"
        height="10"
        transform="rotate(-45 3.75732 5.17163)"
        fill="#6772FE"
      />
    </svg>
  )
}
