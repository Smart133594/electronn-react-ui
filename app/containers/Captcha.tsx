import React, { useEffect, useState } from 'react';
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
import logoImage from '../assets/images/page-img/12.jpg'

export default function CaptchaPage() {
  const dispatch = useDispatch();

  const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      backgroundColor: '#242632',
      border: '1px solid #777D74',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      color: 'white',
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        backgroundColor: 'transparent',
      },
    },
  }))(InputBase);

  const [solvers, setSolvers] = useState([]);

  const addCaptcha = () =>{
    var solver = {

    }
    var arr = [solvers, solver];
    setSolvers(prev => [...prev, arr]);
  }

  const removeSolver = (index) =>{
    var temp = solvers
    temp.splice(index, 1);
    setSolvers(prev => [...temp]);
  }

  const renderSolvers = () => {
    var render = solvers.map((item, index) => {
      return (<Col sm="6" md="6" lg="6" xl="3" >
      <Card style={{backgroundColor: '#1e2128', margin:10}} key={index + "index"}>
        <CardBody style={{padding:15}}>
          <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <span style={{color:'white', fontSize:15}}>Ibra Main Solver</span>
            <i style={{color:'white', fontSize:20}} className="fa fa-times" onClick={()=>removeSolver(index)}/>
          </div>
          <div>
            <span style={{color:'#375dad'}}>Active</span>
          </div>
          <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:15}}>
            <NativeSelect input={<BootstrapInput />} style={{width:200}}>
              <option value={10}>Checkouts</option>
              <option value={20}>Checkouts2</option>
              <option value={30}>Checkouts3</option>
              <option value={40}>Checkouts4</option>
            </NativeSelect>
            <i className="fa fa-external-link" style={{color:'white', fontSize:20, backgroundColor:'#375dad', padding:'10px 20px', borderRadius:5}} />
          </div>
          <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:15}}>
            <input value={"122.121.144.113:21283..."} style={{borderRadius:5, width:200, height:40, backgroundColor:'#242632', border: '1px solid #777D74', fontSize: 16, padding: '10px 26px 10px 12px', color: 'white',}}>
            </input>
            <i className="fa fa-youtube-play" style={{color:'white', fontSize:20, backgroundColor:'#f04f53', padding:'10px 20px', borderRadius:5}} />
          </div>
        </CardBody>
      </Card>
    </Col>)
    })

    return render;
  }

  return (
    <>
      <div className="top-var d-flex" style={{ padding: 10 }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <span style={{ fontSize: 20, color: 'white' }}>Captcha</span>
        </div>
        <Avartar></Avartar>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <span style={{ backgroundColor: '#192231', padding: '10px 15px', borderRadius: 5 }}>400</span>
          <span style={{ color: 'white', marginLeft: 10 }}>Solvers</span>

          <span style={{ backgroundColor: '#192231', padding: '10px 15px', borderRadius: 5, marginLeft: 20 }}>0</span>
          <span style={{ color: 'white', marginLeft: 10 }}>Solvers Selected</span>
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
          <Button style={{ backgroundColor: '#375dad', border: 'none', height: 40 }} size="lg" block className={"font-size-16"} onClick={addCaptcha}>
            <i className={"fa fa-plus mr-2"} />
            New Solver
          </Button>
        </div>
      </div>
      <Row style={{marginTop:10}}>
        {renderSolvers()}
      </Row>
      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        position: 'fixed', bottom: 10, left: 0, right: 0, margin: 'auto', zIndex: 999, fontSize: 20, color: 'white',
        borderRadius: 20, width: 300, backgroundColor: '#33394880', padding: '8px 20px'
      }}>
        <i className="fa fa-external-link" />
        <i className="fa fa-trash" />
        <i className="fa fa-upload" />
        <i className="fa fa-download" />
      </div>
    </>
  );
}
