import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {MenuList} from "../index";

const index = (props) => {
    const { items, display } = props;
    return (
        <ul className={"iq-submenu"} style={ display !== undefined && display === true ? style : {} }>
            { items.map((subItem, subIndex) => (
                <li key={subIndex + "submenu"}>
                    <NavLink to={ subItem.link } className="iq-waves-effect">
                        { subItem.icon && (<i className={ subItem.icon } />) }
                        <span>{ subItem.title }</span>
                    </NavLink>
                    { (subItem.children !== undefined && subItem.children.length > 0) && (
                        <MenuList items={subItem.children} />
                    ) }
                </li>
            )) }
        </ul>
    );
};
const style = {
    display: "block"
};

export default index;
