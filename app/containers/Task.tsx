import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Button, Box, Slider, TextField, Input } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import routes from '../constants/routes.json';
import { push } from 'connected-react-router';

export default function TaskPage() {
  const dispatch = useDispatch();

  const goToDashboard = () => {
    dispatch(push(routes.DASHBOARD));
  };

  return (
    <>
      <Button
          endIcon={<ChevronRightIcon />}
          color="primary"
          onClick={goToDashboard}
          variant="contained"
        >
          GOTO DASHBOARD
        </Button>
    </>
  );
}
