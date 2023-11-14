import React from 'react'
import Header from './header'
import SideBar from './sideBar'
import { AddTicketModalComponent } from 'components'
import { useSelector } from 'react-redux'
import { type RootState } from 'store'

interface Props {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  const { isShowCreateTicketModal1, ticketCategoryId } = useSelector(
    (root: RootState) => root.tickets
  )

  return (
    <div className="flex h-full">
      <SideBar />
      <div
        className=" h-full bg-contentCol"
        style={{ width: 'calc(100% - 86px)' }}
      >
        <Header />
        <div>{children}</div>
        {isShowCreateTicketModal1 && (
          <AddTicketModalComponent categoryId={ticketCategoryId} />
        )}
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
