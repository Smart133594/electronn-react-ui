import React, { ReactNode, useEffect } from 'react';
import { SideBar } from '../components';
import sideBarItems from '../constants/structure.json';
import logoImage from '../assets/images/logo.png'
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import routes from '../constants/routes.json';

type Props = {
  children: ReactNode;
};

export default function App(props: Props) {
  const dispatch = useDispatch();
  useEffect(() => {
  }, []);

  const { children } = props;
  return <>
    <div className="wrapper">
      <SideBar
        items={sideBarItems}
        logo={logoImage}
        homeUrl={routes.DASHBOARD}
      />
      <div id="content-page" className={"content-page"}>
        <div className="container-fluid">
          {children}
        </div>
      </div>
    </div>
  </>;
}
