import React from 'react'
import Header from './header'
import SideBar from './sideBar'

interface Props {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <SideBar />
      <div>
        <Header />
        {children}
      </div>
    </>
  )
}

// eslint-disable-next-line react/display-name
export const WithLayout = (Component: React.FC) => () => {
  return (
    <Layout>
      <Component />
    </Layout>
  )
}

export default WithLayout
