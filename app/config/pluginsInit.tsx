import { createLogger } from 'redux-logger';

const getActiveLink = (item) => {
    let active = false;
    if(item.is_heading == false){
      var location = window.location.hash;
      if(item.link == location.replace('#','')){
        active = true;
      }
    }
    return active;
};

const getActivePath = () => {
  var location = window.location.hash;
  return location.replace('#','');
};

export {getActiveLink, getActivePath}

