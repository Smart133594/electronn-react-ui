import { createLogger } from 'redux-logger';

const getActiveLink = (item) => {
    let active = false;

    if (item.children !== undefined) {
        item.children.filter(function (person) {
            if (person.link === window.location.pathname) {
              active = true;
            }
        });
    }

    return active;
};


export {getActiveLink}

