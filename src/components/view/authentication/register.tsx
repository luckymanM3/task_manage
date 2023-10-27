import React from 'react'
import { AuthWrapComponent } from 'components'

export const RegisterComponent: React.FC = () => {
  return (
    <>
      <AuthWrapComponent>
        <div className="text-color-blue bg-slate-600 border-s-orange-100">
          hello!
        </div>
      </AuthWrapComponent>
    </>
  )
}
