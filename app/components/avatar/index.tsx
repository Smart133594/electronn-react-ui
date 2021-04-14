import React from 'react';
import { Link } from "react-router-dom";
import avatarImage from '../../assets/images/user/user-3.jpg'
import {Image} from 'react-bootstrap';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentDidMount() {

  }


  render() {
    const { } = this.state;
    return (
      <>
        <div className="avatar">
          <div className="user-meta">
            <span className="user-name">Mike Cooks</span>
            <span className="user-number">#0001</span>
          </div>
          <Image className="avatar-image" src={avatarImage} alt="Responsive image" roundedCircle={true} />
        </div>
      </>
    );
  }
}

export default Index;
