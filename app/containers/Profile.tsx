import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Box, Slider, TextField } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import routes from '../constants/routes.json';
import { push } from 'connected-react-router';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import jQuery from "jquery";
import { Card, CardBody, CardHeader, CardTitle, Col, Row, UncontrolledCollapse, Button, Input } from "reactstrap";
import { Image } from 'react-bootstrap';
import { Avartar } from '../components';
import ApexCharts from 'apexcharts'
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

export default function ProfilePage() {
  const dispatch = useDispatch();

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
        <Card style={{ marginLeft: 0, margin: 20, backgroundColor: '#1e2128', padding: 10 }} key={i + "index"}>
          <CardBody style={{ padding: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
            <div style={{ flexDirection: 'column', display: 'flex' }}>
              <span style={{ color: 'white' }}>Main</span>
              <span>Ends in 0419</span>
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', fontSize: 18 }}>
              <i className="fa fa-copy mr-4" style={{ color: '#375dad' }} />
              <i className="fa fa-pencil mr-4" style={{ color: '#61646b' }} />
              <i className="fa fa-trash" style={{ color: '#ddd' }} />
            </div>
          </CardBody>
        </Card>);
    }
    return indents;
  }


  return (
    <>
      <div className="top-var d-flex" style={{ padding: 10 }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <span style={{ fontSize: 20, color: 'white' }}>Profiles</span>
          <NativeSelect input={<BootstrapInput />} style={{ marginLeft: 30 }}>
            <option value={10}>Group1</option>
            <option value={20}>Group2</option>
          </NativeSelect>
          <Button style={{ marginLeft: 30, backgroundColor: '#375dad', fontSize: 25, border: 'none' }} className="fa fa-plus"></Button>
        </div>
        <Avartar></Avartar>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <span style={{ backgroundColor: '#192231', padding: '10px 15px', borderRadius: 5 }}>400</span>
          <span style={{ color: 'white', marginLeft: 10 }}>Profiles</span>

          <span style={{ backgroundColor: '#192231', padding: '10px 15px', borderRadius: 5, marginLeft: 20 }}>0</span>
          <span style={{ color: 'white', marginLeft: 10 }}>Profiles Selected</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div className="iq-email-search d-flex">
            <form className="mr-3 position-relative">
              <div className="form-group mb-0">
                <input type="email" className="form-control" id="exampleInputEmail1"
                  aria-describedby="emailHelp" placeholder="Search" style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid #777D74', width: 200 }} />
                <a className="search-link" style={{ color: '#777D74' }}>
                  <i className="ri-search-line" />
                </a>
              </div>
            </form>
          </div>
          <Button style={{ backgroundColor: '#375dad', border: 'none', height: 40 }} size="lg" block className={"font-size-16"}>
            <i className={"fa fa-plus mr-2"} />
            New Profile
          </Button>
        </div>
      </div>

      <Row style={{ marginTop: 20 }}>
        <Col sm="12" md="12" lg="12" xl="8" >
          <Row>
            <Col sm="6" md="6" lg="6" xl="6" >
              <Card style={{ backgroundColor: '#4773ca', borderRadius: 5 }}>
                <CardBody>
                  <div style={{ flexDirection: 'column', display: 'flex' }}>
                    <span style={{ color: 'white', fontSize: 14 }}>Main</span>
                    <span style={{ color: 'white', fontSize: 12 }}>John Doe</span>
                  </div>
                  <div style={{ flexDirection: 'column', display: 'flex', marginTop: 20 }}>
                    <span style={{ color: 'white', fontSize: 14 }}>Ending in 0419</span>
                    <span style={{ color: 'white', fontSize: 12 }}>1000 Viper Street</span>
                  </div>
                  <div style={{ flexDirection: 'row', display: 'flex', marginTop: 20, alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ color: 'white', fontSize: 20 }}>VISA</span>
                    <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', fontSize: 18, color: 'white' }}>
                      <i className="fa fa-copy mr-4" />
                      <i className="fa fa-pencil mr-4" />
                      <i className="fa fa-trash" />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col sm="6" md="6" lg="6" xl="6" >
              <div><span style={{ color: 'white', fontSize: 20 }}>Card Information</span></div>
              <div style={{ width: '100%', marginTop: 10 }}>
                <input placeholder={"Card Number"} style={{ borderRadius: 5, width: '100%', height: 40, backgroundColor: '#1e2128', border: '1px solid #777D74', fontSize: 16, padding: '10px 26px 10px 12px', color: 'white' }} />
              </div>
              <div style={{ width: '100%', marginTop: 10 }}>
                <input placeholder={"Card Month"} style={{ borderRadius: 5, width: '45%', height: 40, backgroundColor: '#1e2128', border: '1px solid #777D74', fontSize: 16, padding: '10px 26px 10px 12px', color: 'white', marginRight: '5%' }} />
                <input placeholder={"Card Year"} style={{ borderRadius: 5, width: '45%', height: 40, backgroundColor: '#1e2128', border: '1px solid #777D74', fontSize: 16, padding: '10px 26px 10px 12px', color: 'white', marginLeft: '5%' }} />
              </div>
              <div style={{ width: '100%', marginTop: 10 }}>
                <input placeholder={"CVV"} style={{ borderRadius: 5, width: '100%', height: 40, backgroundColor: '#1e2128', border: '1px solid #777D74', fontSize: 16, padding: '10px 26px 10px 12px', color: 'white' }} />
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Col sm="6" md="6" lg="6" xl="6" >
              <div><span style={{ color: 'white', fontSize: 20 }}>Shipping Information</span></div>
              <div style={{ width: '100%', marginTop: 10 }}>
                <input placeholder={"Profile Name"} style={{ borderRadius: 5, width: '100%', height: 40, backgroundColor: '#1e2128', border: '1px solid #777D74', fontSize: 16, padding: '10px 26px 10px 12px', color: 'white' }} />
              </div>
              <div style={{ width: '100%', marginTop: 10 }}>
                <input placeholder={"First Name"} style={{ borderRadius: 5, width: '45%', height: 40, backgroundColor: '#1e2128', border: '1px solid #777D74', fontSize: 16, padding: '10px 26px 10px 12px', color: 'white', marginRight: '5%' }} />
                <input placeholder={"Last Name"} style={{ borderRadius: 5, width: '45%', height: 40, backgroundColor: '#1e2128', border: '1px solid #777D74', fontSize: 16, padding: '10px 26px 10px 12px', color: 'white', marginLeft: '5%' }} />
              </div>
              <div style={{ width: '100%', marginTop: 10 }}>
                <input placeholder={"Email"} style={{ borderRadius: 5, width: '100%', height: 40, backgroundColor: '#1e2128', border: '1px solid #777D74', fontSize: 16, padding: '10px 26px 10px 12px', color: 'white' }} />
              </div>
              <div style={{ width: '100%', marginTop: 10 }}>
                <input placeholder={"Phone Number"} style={{ borderRadius: 5, width: '100%', height: 40, backgroundColor: '#1e2128', border: '1px solid #777D74', fontSize: 16, padding: '10px 26px 10px 12px', color: 'white' }} />
              </div>
              <div style={{ width: '100%', marginTop: 10 }}>
                <input placeholder={"Address1"} style={{ borderRadius: 5, width: '100%', height: 40, backgroundColor: '#1e2128', border: '1px solid #777D74', fontSize: 16, padding: '10px 26px 10px 12px', color: 'white' }} />
              </div>
              <div style={{ width: '100%', marginTop: 10 }}>
                <input placeholder={"Address2"} style={{ borderRadius: 5, width: '100%', height: 40, backgroundColor: '#1e2128', border: '1px solid #777D74', fontSize: 16, padding: '10px 26px 10px 12px', color: 'white' }} />
              </div>
              <div style={{ width: '100%', marginTop: 10 }}>
                <input placeholder={"City"} style={{ borderRadius: 5, width: '45%', height: 40, backgroundColor: '#1e2128', border: '1px solid #777D74', fontSize: 16, padding: '10px 26px 10px 12px', color: 'white', marginRight: '5%' }} />
                <input placeholder={"Zip Code"} style={{ borderRadius: 5, width: '45%', height: 40, backgroundColor: '#1e2128', border: '1px solid #777D74', fontSize: 16, padding: '10px 26px 10px 12px', color: 'white', marginLeft: '5%' }} />
              </div>
              <div style={{ width: '100%', marginTop: 10 }}>
                <input placeholder={"Sate"} style={{ borderRadius: 5, width: '45%', height: 40, backgroundColor: '#1e2128', border: '1px solid #777D74', fontSize: 16, padding: '10px 26px 10px 12px', color: 'white', marginRight: '5%' }} />
                <input placeholder={"Country"} style={{ borderRadius: 5, width: '45%', height: 40, backgroundColor: '#1e2128', border: '1px solid #777D74', fontSize: 16, padding: '10px 26px 10px 12px', color: 'white', marginLeft: '5%' }} />
              </div>
            </Col>
            <Col sm="6" md="6" lg="6" xl="6" >
              <div><span style={{ color: 'white', fontSize: 20 }}>Billing Information</span></div>
              <div style={{ width: '100%', marginTop: 10, display:'flex', flexDirection:'row', alignItems:'center'}}>
                <input type="checkbox" className="custom-checkbox" />
                <span style={{fontSize:16, marginLeft:20}}>Billing same as Shipping</span>
              </div>
              <div style={{ width: '100%', marginTop: 10 }}>
                <input placeholder={"First Name"} style={{ borderRadius: 5, width: '45%', height: 40, backgroundColor: '#1e2128', border: '1px solid #777D74', fontSize: 16, padding: '10px 26px 10px 12px', color: 'white', marginRight: '5%' }} />
                <input placeholder={"Last Name"} style={{ borderRadius: 5, width: '45%', height: 40, backgroundColor: '#1e2128', border: '1px solid #777D74', fontSize: 16, padding: '10px 26px 10px 12px', color: 'white', marginLeft: '5%' }} />
              </div>
              <div style={{ width: '100%', marginTop: 10 }}>
                <input placeholder={"Email"} style={{ borderRadius: 5, width: '100%', height: 40, backgroundColor: '#1e2128', border: '1px solid #777D74', fontSize: 16, padding: '10px 26px 10px 12px', color: 'white' }} />
              </div>
              <div style={{ width: '100%', marginTop: 10 }}>
                <input placeholder={"Phone Number"} style={{ borderRadius: 5, width: '100%', height: 40, backgroundColor: '#1e2128', border: '1px solid #777D74', fontSize: 16, padding: '10px 26px 10px 12px', color: 'white' }} />
              </div>
              <div style={{ width: '100%', marginTop: 10 }}>
                <input placeholder={"Address1"} style={{ borderRadius: 5, width: '100%', height: 40, backgroundColor: '#1e2128', border: '1px solid #777D74', fontSize: 16, padding: '10px 26px 10px 12px', color: 'white' }} />
              </div>
              <div style={{ width: '100%', marginTop: 10 }}>
                <input placeholder={"Address2"} style={{ borderRadius: 5, width: '100%', height: 40, backgroundColor: '#1e2128', border: '1px solid #777D74', fontSize: 16, padding: '10px 26px 10px 12px', color: 'white' }} />
              </div>
               <div style={{ width: '100%', marginTop: 10 }}>
                <input placeholder={"City"} style={{ borderRadius: 5, width: '45%', height: 40, backgroundColor: '#1e2128', border: '1px solid #777D74', fontSize: 16, padding: '10px 26px 10px 12px', color: 'white', marginRight: '5%' }} />
                <input placeholder={"Zip Code"} style={{ borderRadius: 5, width: '45%', height: 40, backgroundColor: '#1e2128', border: '1px solid #777D74', fontSize: 16, padding: '10px 26px 10px 12px', color: 'white', marginLeft: '5%' }} />
              </div>
              <div style={{ width: '100%', marginTop: 10 }}>
                <input placeholder={"Sate"} style={{ borderRadius: 5, width: '45%', height: 40, backgroundColor: '#1e2128', border: '1px solid #777D74', fontSize: 16, padding: '10px 26px 10px 12px', color: 'white', marginRight: '5%' }} />
                <input placeholder={"Country"} style={{ borderRadius: 5, width: '45%', height: 40, backgroundColor: '#1e2128', border: '1px solid #777D74', fontSize: 16, padding: '10px 26px 10px 12px', color: 'white', marginLeft: '5%' }} />
              </div>
            </Col>
          </Row>
        </Col>
        <Col sm="12" md="12" lg="12" xl="4" >
          <span style={{ fontSize: 25 }}>Profiles</span>
          <div style={{ overflow: 'auto', maxHeight: 'calc(100vh - 240px)' }}>
            {getList()}
          </div>
        </Col>
      </Row>

      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        position: 'fixed', bottom: 10, left: 0, right: 0, margin: 'auto', zIndex: 999, fontSize: 20, color: 'white',
        borderRadius: 20, width: 300, backgroundColor: '#33394880', padding: '8px 20px'
      }}>
        <i className="fa fa-check" />
        <i className="fa fa-upload" />
        <i className="fa fa-download" />
        <i className="fa fa-trash" />
      </div>
    </>
  );
}
