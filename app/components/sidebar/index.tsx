import React from 'react';
import { Link } from "react-router-dom";
import { MenuList } from '../index';
import { getActiveLink, getActivePath } from "../../config/pluginsInit";

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sideBarItems: [],
      currentLocation: "/dashboard",
      curTime: '00:00:00'
    }
  }

  componentDidMount() {
    this.setState({
      sideBarItems: this.props.items,
    });

    setInterval(() => {
      var date = new Date();
      var curTime = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours())   + ":"
                  + (date.getMinutes()<10 ? '0' + date.getMinutes() : date.getMinutes()) + ":"
                  + (date.getSeconds()<10 ? '0' + date.getSeconds() : date.getSeconds());
      this.setState({
        curTime: curTime
      })
    }, 1000)
  }



  render() {
    const { sideBarItems, currentLocation, curTime } = this.state;
    const { logo, homeUrl } = this.props;
    return (
      <div className="iq-sidebar">
        <div className="iq-sidebar-logo">
          <img src={logo} className="img-fluid" alt="" />
          <div className="logo-meta">
            <span className="logo-name">Viper</span>
            <span className="logo-clock">{curTime}</span>
          </div>
        </div>
        <div id="sidebar-scrollbar">
          <nav className="iq-sidebar-menu">
            <ul className="iq-menu">
              {sideBarItems.map((item, index) => (
                <li key={index + "menu"} className={((item.is_heading) ? "iq-menu-title" : "") + (item.is_active === true ? " active " : "")}  >
                  { (item.is_heading) ?
                    item.title : (
                      <>
                        { (item.link !== undefined) ? (
                          <Link onClick={() => this.setState({ currentLocation: item.link })} to={item.link} className={"iq-waves-effect" + (currentLocation == item.link ? " active" : "")}>
                            { item.icon && (<i className={item.icon} />)}
                            <span>{item.title}</span>

                            { (item.children !== undefined && item.children.length > 0) && (<i className="ri-arrow-right-s-line iq-arrow-right" />)}
                            { (item.coming_soon !== undefined && item.coming_soon === true) && (
                              <small className="badge badge-pill badge-primary float-right font-weight-normal ml-auto">Soon</small>
                            )}
                          </Link>
                        ) : (
                          <a href={"!#"} className="iq-waves-effect">
                            { item.icon && (<i className={item.icon} />)}
                            <span>{item.title}</span>

                            { (item.children !== undefined && item.children.length > 0) && (<i className="ri-arrow-right-s-line iq-arrow-right" />)}
                          </a>
                        )}


                        {/* Code for the Sub menu */}
                        { (item.children !== undefined && item.children.length > 0) && (
                          <MenuList items={item.children} display={getActiveLink(item)} />
                        )}
                      </>
                    )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Index;
