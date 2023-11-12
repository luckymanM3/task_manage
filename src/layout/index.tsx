import React from 'react'
import Header from './header'
import SideBar from './sideBar'

interface Props {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-full">
      <SideBar />
      <div
        className=" h-full bg-contentCol"
        style={{ width: 'calc(100% - 86px)' }}
      >
        <Header />
        <div>{children}</div>
      </div>
    </div>
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
