import React, { ReactNode } from 'react';
import { SideBar } from '../components';
import sideBarItems from '../constants/structure.json';

import logoImage from '../assets/images/icon.png'

type Props = {
  children: ReactNode;
};

export default function App(props: Props) {
  const { children } = props;
  return <>
    <div className="wrapper">
      <SideBar
        items={sideBarItems}
        logo={logoImage}
        homeUrl={"/"}
      />
    </div>
    {children}
  </>;
}
