import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Box, Slider, TextField, Input } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import routes from '../constants/routes.json';
import { push } from 'connected-react-router';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import jQuery from "jquery";
import { Card, CardBody, CardHeader, CardTitle, Col, Row, UncontrolledCollapse, Button} from "reactstrap";
import {Image} from 'react-bootstrap';
import { Avartar } from '../components';
import ApexCharts from 'apexcharts'
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

import logoImage from '../assets/images/page-img/12.jpg'

export default function DashboardPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (jQuery('#apex-line-area').length) {
      let options = {
        chart: {
          height: 350,
          type: 'area',
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          },

        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [0, 2, 5],
          curve: 'smooth'
        },
        colors: ['#0084ff'],
        series: [{
          name: 'series1',
          data: [20, 14, 18, 12, 10, 22, 28, 10, 15, 10, 15, 10]
        }],

        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          labels: {
            style: {
              colors: ['#777D74', '#777D74', '#777D74', '#777D74', '#777D74', '#777D74', '#777D74', '#777D74', '#777D74', '#777D74', '#777D74', '#777D74']
            }
          },
        },

        yaxis: {
          tickAmount: 10,
          min: 0,
          max: 40,
          labels: {
            style: {
              colors: ['#777D74', '#777D74', '#777D74', '#777D74', '#777D74', '#777D74', '#777D74', '#777D74', '#777D74', '#777D74', '#777D74', '#777D74']
            }
          },
        },
      };

      let chart = new ApexCharts(
        document.querySelector("#apex-line-area"),
        options
      );
      chart.render();
    }
  });

  const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      backgroundColor: 'transparent',
      border: '1px solid #777D74',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      color: '#777D74',
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        backgroundColor: 'transparent',
      },
    },
  }))(InputBase);

  const getList = () => {
    var indents = [];
    for (var i = 0; i < 30; i++) {
      indents.push(
      <Card style={{ margin: 20, backgroundColor:'#1e2128', padding:10}}>
        <CardBody style={{padding:0, display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}} >
          <Image style={{width:60, height:60}} src={logoImage} rounded />
          <div style={{textAlign:'right', flexDirection:'column', display:'flex'}}>
            <span style={{color:'white'}}>Air Jordan 1 University Blue</span>
            <span style={{color:'white'}}>Footlocker CA</span>
            <span>Puchased for 200$ on 11.02.21</span>
          </div>
        </CardBody>
      </Card>);
    }
    return indents;
  }

  return (
    <>
      <div className="top-var d-flex" style={{ padding: 20 }}>
        <div className="welcome-letter">
          <span className="good-moring">Good Morning, Mike!</span>
          <span className="last-login">Last logged in 01.08.21</span>
        </div>
        <Avartar></Avartar>
      </div>
      <Row>
        <Col sm="12" md="12" lg="12" xl="8" >
          <div className="chat-meta">
            <NativeSelect input={<BootstrapInput />}>
              <option value={10}>Checkouts</option>
            </NativeSelect>
            <NativeSelect input={<BootstrapInput />} style={{ marginLeft: 30 }}>
              <option value={10}>365d</option>
            </NativeSelect>
          </div>
          <div id="apex-line-area" />
          <Row style={{ padding: 20 }}>
            <Col sm="4" style={{ display: 'flex', flexDirection: 'column' }}>
              <span>Checkouts</span>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <span style={{ fontSize: 30, color: '#fff' }}>600</span>
                <span style={{ fontSize: 16, color: '#6ed19e', marginLeft: 10 }}>+2300%</span>
              </div>
              <span>Compared to 400</span>
            </Col>
            <Col sm="4" style={{ display: 'flex', flexDirection: 'column' }}>
              <span>Money Spent</span>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <span style={{ fontSize: 30, color: '#fff' }}>12k</span>
                <span style={{ fontSize: 16, color: '#e38188', marginLeft: 10 }}>-12%</span>
              </div>
              <span>Compared to $12.2k</span>
            </Col>
            <Col sm="4" style={{ display: 'flex', flexDirection: 'column' }}>
              <span>Declines</span>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <span style={{ fontSize: 30, color: '#fff' }}>105</span>
                <span style={{ fontSize: 16, color: '#6ed19e', marginLeft: 10 }}>+598%</span>
              </div>
              <span>Compared to 78</span>
            </Col>
          </Row>
          <div className="log-part" style={{ padding: 20 }}>
            <div className="log-name" style={{ alignItems: 'center' }}>
              <span style={{ fontSize: 30 }}>Update Log</span>
              <Button color="primary" style={{ marginLeft: 30 }}>Refresh</Button>
            </div>
            <Card style={{ marginTop: 30, backgroundColor: '#1e2128', borderRadius: 10 }}>
              <CardBody >
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <p style={{ fontSize: 16, color: '#6ed19e', marginLeft: 10 }}>v.0.2.1</p>
                  <p style={{ fontSize: 16, marginLeft: 10 }}>01/8/21</p>
                  <p style={{ fontSize: 16, marginLeft: 10 }}>●Add Queque-It Bypass, fixed UI bugs, improved error handling, Supreme captcha fixes.</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <p style={{ fontSize: 16, color: '#584435', marginLeft: 10 }}>v.0.2.1</p>
                  <p style={{ fontSize: 16, marginLeft: 10 }}>01/8/21</p>
                  <p style={{ fontSize: 16, marginLeft: 10 }}>●Add Queque-It Bypass, fixed UI bugs, improved error handling, Supreme captcha fixes.</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <p style={{ fontSize: 16, color: '#584435', marginLeft: 10 }}>v.0.2.1</p>
                  <p style={{ fontSize: 16, marginLeft: 10 }}>01/8/21</p>
                  <p style={{ fontSize: 16, marginLeft: 10 }}>●Add Queque-It Bypass, fixed UI bugs, improved error handling</p>
                </div>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col sm="12" md="12" lg="12" xl="4">
          <span style={{ fontSize: 25 }}>Checkout Feed</span>
          <div style={{overflow:'auto', maxHeight:'calc(100vh - 200px)'}}>
            {getList()}
          </div>
        </Col>
      </Row>
    </>
  );
}




