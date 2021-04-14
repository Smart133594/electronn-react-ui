import React from 'react';
import {Link} from "react-router-dom";
import {MenuList} from '../index';
import {getActiveLink} from "../../config/pluginsInit";

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          sideBarItems: []
        }
    }

    componentDidMount() {
        this.setState({
          sideBarItems : this.props.items
        });


    }

    render() {
        const { sideBarItems } = this.state;
        const { logo, homeUrl } = this.props;
        return (
            <div className="iq-sidebar">
                <div className="iq-sidebar-logo d-flex justify-content-between">
                    <Link to={ homeUrl }>
                        <img src={ logo } className="img-fluid" alt="" />
                        <span>Viper</span>
                    </Link>
                </div>
                <div id="sidebar-scrollbar">
                    <nav className="iq-sidebar-menu">
                        <ul className="iq-menu">
                            { sideBarItems.map((item, index) => (
                                <li key={index + "menu"} className={ ((item.is_heading) ? "iq-menu-title" : "") + (item.is_active === true ? " active " : "" ) + (getActiveLink(item) ? " menu-open" : ""  )}  >
                                    { (item.is_heading) ?
                                        item.title : (
                                            <>
                                                { (item.link !== undefined) ? (
                                                    <Link to={ item.link } className="iq-waves-effect">
                                                        { item.icon && (<i className={ item.icon } />) }
                                                        <span>{ item.title }</span>

                                                        { (item.children !== undefined && item.children.length > 0) && (<i className="ri-arrow-right-s-line iq-arrow-right" />) }
                                                        { (item.coming_soon !== undefined && item.coming_soon === true) && (
                                                            <small className="badge badge-pill badge-primary float-right font-weight-normal ml-auto">Soon</small>
                                                        ) }
                                                    </Link>
                                                ) : (
                                                    <a href={"!#"} className="iq-waves-effect">
                                                        { item.icon && (<i className={ item.icon } />) }
                                                        <span>{ item.title }</span>

                                                        { (item.children !== undefined && item.children.length > 0) && (<i className="ri-arrow-right-s-line iq-arrow-right" />) }
                                                    </a>
                                                ) }


                                                {/* Code for the Sub menu */}
                                                { (item.children !== undefined && item.children.length > 0) && (
                                                    <MenuList items={item.children} display={getActiveLink(item)} />
                                                ) }
                                            </>
                                        ) }
                                </li>
                            )) }
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Index;
