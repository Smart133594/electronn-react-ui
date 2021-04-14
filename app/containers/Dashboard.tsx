import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Button, Box, Slider, TextField, Input } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import routes from '../constants/routes.json';
import { push } from 'connected-react-router';
import {Row} from "reactstrap";
import { Avartar } from '../components';

export default function DashboardPage() {
  const dispatch = useDispatch();

  return (
    <>
      <Row className="row-eq-height">
        <div className="top-var d-flex">
          <div className="welcome-letter">
            <span className="good-moring">Good Morning, Mike!</span>
            <span className="last-login">Last logged in 01.08.21</span>
          </div>
          <Avartar></Avartar>
        </div>
      </Row>
    </>
  );
}




