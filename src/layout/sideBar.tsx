import React from 'react'
import { IMGS, PATHS } from 'utils/consts'
import {
  SideBarBtnComponent,
  DashboardIconComponent,
  SendIconComponent,
  HelpIconComponent,
  SettingIconComponent,
} from 'components'

const SideBar: React.FC = () => {
  return (
    <div className="w-[5.375rem] h-full bg-white pl-[1.125rem] pr-[1.125rem]">
      <div className="pt-[0.75rem]">
        <img src={IMGS.SLOGO} alt="" />
      </div>
      <div className="pt-[3.625rem]">
        <SideBarBtnComponent toUrl={PATHS.DASHBOARD}>
          <DashboardIconComponent toUrl={PATHS.DASHBOARD} />
        </SideBarBtnComponent>
        <SideBarBtnComponent toUrl={PATHS.SEND}>
          <SendIconComponent />
        </SideBarBtnComponent>
        <SideBarBtnComponent toUrl={PATHS.SETTING}>
          <SettingIconComponent />
        </SideBarBtnComponent>
        <SideBarBtnComponent toUrl={PATHS.HELP}>
          <HelpIconComponent />
        </SideBarBtnComponent>
      </div>
    </div>
  )
}

export default SideBar
