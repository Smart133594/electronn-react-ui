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

export default function TaskPage() {
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

  return (
    <>
      <div className="top-var d-flex" style={{ padding: 10 }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <span style={{ fontSize: 20, color: 'white' }}>Tasks</span>
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
          <span style={{ color: 'white', marginLeft: 10 }}>Tasks</span>

          <span style={{ backgroundColor: '#192231', padding: '10px 15px', borderRadius: 5, marginLeft: 20 }}>0</span>
          <span style={{ color: 'white', marginLeft: 10 }}>Tasks Selected</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div className="iq-email-search d-flex">
            <form className="mr-3 position-relative">
              <div className="form-group mb-0">
                <input type="email" className="form-control" id="exampleInputEmail1"
                  aria-describedby="emailHelp" placeholder="Search" style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid #777D74', width:200 }} />
                <a className="search-link" style={{ color: '#777D74' }}>
                  <i className="ri-search-line" />
                </a>
              </div>
            </form>
          </div>
          <Button style={{ backgroundColor: '#375dad', border: 'none', height: 40}} size="lg" block className={"font-size-16"}>
            <i className={"fa fa-plus mr-2"} />
            New Tasks
          </Button>
        </div>
      </div>
      <div style={{padding: 10, paddingBottom:0}} >
        <div style={{backgroundColor:'#1e1f24', borderRadius:5, marginTop:5, marginBottom:20,
                    padding:'10px 10px', width:'100%', color:'white', display:'flex', flexDirection:'row'}}>
          <span style={{width:'17%'}}>Store</span>
          <span style={{width:'20%'}}>Product</span>
          <span style={{width:'12%'}}>Profile</span>
          <span style={{width:'15%'}}>Proxies</span>
          <span style={{width:'25%'}}>Status</span>
          <span style={{width:'11%'}}>Action</span>
        </div>
        <div style={{overflow:'auto', maxHeight:'calc(100vh - 255px)'}}>
          <div style={{backgroundColor:'#1e2128', borderRadius:5, marginTop:5, marginBottom:5,
                      padding:'5px 10px', width:'100%', display:'flex', flexDirection:'row', alignItems:'center', fontSize:12}}>
            <div style={{display:'flex', flexDirection:'column', width:'17%'}}>
              <span style={{color:'white'}}>Footlocker CA</span>
              <span>Restock Mode</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'20%'}}>
              <span style={{color:'white'}}>Air Jordan 1 University</span>
              <span>Size 9.5</span>
            </div>
            <div style={{ width:'12%'}}>
              <span style={{color:'white'}}>ibra</span>
            </div>
            <div style={{width:'15%'}}>
              <span style={{color:'white'}}>proxies</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'25%'}}>
              <span style={{color:'#6ed19e'}}>Successful Checkout</span>
            </div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', width:'11%', fontSize:16}}>
              <i className="ion-play mr-3" style={{color:'#6ed19e'}} />
              <i className="fa fa-pencil mr-3" style={{color:'#61646b'}} />
              <i className="fa fa-trash mr-3" style={{color:'#ddd'}} />
            </div>
          </div>
          <div style={{backgroundColor:'#1e2128', borderRadius:5, marginTop:5, marginBottom:5,
                      padding:'5px 10px', width:'100%', display:'flex', flexDirection:'row', alignItems:'center', fontSize:12}}>
            <div style={{display:'flex', flexDirection:'column', width:'17%'}}>
              <span style={{color:'white'}}>Footlocker CA</span>
              <span>Restock Mode</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'20%'}}>
              <span style={{color:'white'}}>Air Jordan 1 University</span>
              <span>Size 9.5</span>
            </div>
            <div style={{ width:'12%'}}>
              <span style={{color:'white'}}>ibra</span>
            </div>
            <div style={{width:'15%'}}>
              <span style={{color:'white'}}>proxies</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'25%'}}>
              <span style={{color:'#b59172'}}>Solving Akamai...</span>
            </div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', width:'11%', fontSize:16}}>
              <i className="ion-pause mr-3" style={{color:'#b59172'}} />
              <i className="fa fa-pencil mr-3" style={{color:'#61646b'}} />
              <i className="fa fa-trash mr-3" style={{color:'#ddd'}} />
            </div>
          </div>
          <div style={{backgroundColor:'#1e2128', borderRadius:5, marginTop:5, marginBottom:5,
                      padding:'5px 10px', width:'100%', display:'flex', flexDirection:'row', alignItems:'center', fontSize:12}}>
            <div style={{display:'flex', flexDirection:'column', width:'17%'}}>
              <span style={{color:'white'}}>Footlocker CA</span>
              <span>Restock Mode</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'20%'}}>
              <span style={{color:'white'}}>Air Jordan 1 University</span>
              <span>Size 9.5</span>
            </div>
            <div style={{ width:'12%'}}>
              <span style={{color:'white'}}>ibra</span>
            </div>
            <div style={{width:'15%'}}>
              <span style={{color:'white'}}>proxies</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'25%'}}>
              <span style={{color:'#6ed19e'}}>Successful Checkout</span>
            </div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', width:'11%', fontSize:16}}>
              <i className="ion-play mr-3" style={{color:'#6ed19e'}} />
              <i className="fa fa-pencil mr-3" style={{color:'#61646b'}} />
              <i className="fa fa-trash mr-3" style={{color:'#ddd'}} />
            </div>
          </div>
          <div style={{backgroundColor:'#1e2128', borderRadius:5, marginTop:5, marginBottom:5,
                      padding:'5px 10px', width:'100%', display:'flex', flexDirection:'row', alignItems:'center', fontSize:12}}>
            <div style={{display:'flex', flexDirection:'column', width:'17%'}}>
              <span style={{color:'white'}}>Footlocker CA</span>
              <span>Restock Mode</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'20%'}}>
              <span style={{color:'white'}}>Air Jordan 1 University</span>
              <span>Size 9.5</span>
            </div>
            <div style={{ width:'12%'}}>
              <span style={{color:'white'}}>ibra</span>
            </div>
            <div style={{width:'15%'}}>
              <span style={{color:'white'}}>proxies</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'25%'}}>
              <span style={{color:'#b59172'}}>Solving Akamai...</span>
            </div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', width:'11%', fontSize:16}}>
              <i className="ion-pause mr-3" style={{color:'#b59172'}} />
              <i className="fa fa-pencil mr-3" style={{color:'#61646b'}} />
              <i className="fa fa-trash mr-3" style={{color:'#ddd'}} />
            </div>
          </div>
          <div style={{backgroundColor:'#1e2128', borderRadius:5, marginTop:5, marginBottom:5,
                      padding:'5px 10px', width:'100%', display:'flex', flexDirection:'row', alignItems:'center', fontSize:12}}>
            <div style={{display:'flex', flexDirection:'column', width:'17%'}}>
              <span style={{color:'white'}}>Footlocker CA</span>
              <span>Restock Mode</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'20%'}}>
              <span style={{color:'white'}}>Air Jordan 1 University</span>
              <span>Size 9.5</span>
            </div>
            <div style={{ width:'12%'}}>
              <span style={{color:'white'}}>ibra</span>
            </div>
            <div style={{width:'15%'}}>
              <span style={{color:'white'}}>proxies</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'25%'}}>
              <span style={{color:'#6ed19e'}}>Successful Checkout</span>
            </div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', width:'11%', fontSize:16}}>
              <i className="ion-play mr-3" style={{color:'#6ed19e'}} />
              <i className="fa fa-pencil mr-3" style={{color:'#61646b'}} />
              <i className="fa fa-trash mr-3" style={{color:'#ddd'}} />
            </div>
          </div>
          <div style={{backgroundColor:'#1e2128', borderRadius:5, marginTop:5, marginBottom:5,
                      padding:'5px 10px', width:'100%', display:'flex', flexDirection:'row', alignItems:'center', fontSize:12}}>
            <div style={{display:'flex', flexDirection:'column', width:'17%'}}>
              <span style={{color:'white'}}>Footlocker CA</span>
              <span>Restock Mode</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'20%'}}>
              <span style={{color:'white'}}>Air Jordan 1 University</span>
              <span>Size 9.5</span>
            </div>
            <div style={{ width:'12%'}}>
              <span style={{color:'white'}}>ibra</span>
            </div>
            <div style={{width:'15%'}}>
              <span style={{color:'white'}}>proxies</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'25%'}}>
              <span style={{color:'#6ed19e'}}>Successful Checkout</span>
            </div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', width:'11%', fontSize:16}}>
              <i className="ion-play mr-3" style={{color:'#6ed19e'}} />
              <i className="fa fa-pencil mr-3" style={{color:'#61646b'}} />
              <i className="fa fa-trash mr-3" style={{color:'#ddd'}} />
            </div>
          </div>
          <div style={{backgroundColor:'#1e2128', borderRadius:5, marginTop:5, marginBottom:5,
                      padding:'5px 10px', width:'100%', display:'flex', flexDirection:'row', alignItems:'center', fontSize:12}}>
            <div style={{display:'flex', flexDirection:'column', width:'17%'}}>
              <span style={{color:'white'}}>Footlocker CA</span>
              <span>Restock Mode</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'20%'}}>
              <span style={{color:'white'}}>Air Jordan 1 University</span>
              <span>Size 9.5</span>
            </div>
            <div style={{ width:'12%'}}>
              <span style={{color:'white'}}>ibra</span>
            </div>
            <div style={{width:'15%'}}>
              <span style={{color:'white'}}>proxies</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'25%'}}>
              <span style={{color:'#b59172'}}>Solving Akamai...</span>
            </div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', width:'11%', fontSize:16}}>
              <i className="ion-pause mr-3" style={{color:'#b59172'}} />
              <i className="fa fa-pencil mr-3" style={{color:'#61646b'}} />
              <i className="fa fa-trash mr-3" style={{color:'#ddd'}} />
            </div>
          </div>
          <div style={{backgroundColor:'#1e2128', borderRadius:5, marginTop:5, marginBottom:5,
                      padding:'5px 10px', width:'100%', display:'flex', flexDirection:'row', alignItems:'center', fontSize:12}}>
            <div style={{display:'flex', flexDirection:'column', width:'17%'}}>
              <span style={{color:'white'}}>Footlocker CA</span>
              <span>Restock Mode</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'20%'}}>
              <span style={{color:'white'}}>Air Jordan 1 University</span>
              <span>Size 9.5</span>
            </div>
            <div style={{ width:'12%'}}>
              <span style={{color:'white'}}>ibra</span>
            </div>
            <div style={{width:'15%'}}>
              <span style={{color:'white'}}>proxies</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'25%'}}>
              <span style={{color:'#6ed19e'}}>Successful Checkout</span>
            </div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', width:'11%', fontSize:16}}>
              <i className="ion-play mr-3" style={{color:'#6ed19e'}} />
              <i className="fa fa-pencil mr-3" style={{color:'#61646b'}} />
              <i className="fa fa-trash mr-3" style={{color:'#ddd'}} />
            </div>
          </div>
          <div style={{backgroundColor:'#1e2128', borderRadius:5, marginTop:5, marginBottom:5,
                      padding:'5px 10px', width:'100%', display:'flex', flexDirection:'row', alignItems:'center', fontSize:12}}>
            <div style={{display:'flex', flexDirection:'column', width:'17%'}}>
              <span style={{color:'white'}}>Footlocker CA</span>
              <span>Restock Mode</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'20%'}}>
              <span style={{color:'white'}}>Air Jordan 1 University</span>
              <span>Size 9.5</span>
            </div>
            <div style={{ width:'12%'}}>
              <span style={{color:'white'}}>ibra</span>
            </div>
            <div style={{width:'15%'}}>
              <span style={{color:'white'}}>proxies</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'25%'}}>
              <span style={{color:'#6ed19e'}}>Successful Checkout</span>
            </div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', width:'11%', fontSize:16}}>
              <i className="ion-play mr-3" style={{color:'#6ed19e'}} />
              <i className="fa fa-pencil mr-3" style={{color:'#61646b'}} />
              <i className="fa fa-trash mr-3" style={{color:'#ddd'}} />
            </div>
          </div>
          <div style={{backgroundColor:'#1e2128', borderRadius:5, marginTop:5, marginBottom:5,
                      padding:'5px 10px', width:'100%', display:'flex', flexDirection:'row', alignItems:'center', fontSize:12}}>
            <div style={{display:'flex', flexDirection:'column', width:'17%'}}>
              <span style={{color:'white'}}>Footlocker CA</span>
              <span>Restock Mode</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'20%'}}>
              <span style={{color:'white'}}>Air Jordan 1 University</span>
              <span>Size 9.5</span>
            </div>
            <div style={{ width:'12%'}}>
              <span style={{color:'white'}}>ibra</span>
            </div>
            <div style={{width:'15%'}}>
              <span style={{color:'white'}}>proxies</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'25%'}}>
              <span style={{color:'#b59172'}}>Solving Akamai...</span>
            </div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', width:'11%', fontSize:16}}>
              <i className="ion-pause mr-3" style={{color:'#b59172'}} />
              <i className="fa fa-pencil mr-3" style={{color:'#61646b'}} />
              <i className="fa fa-trash mr-3" style={{color:'#ddd'}} />
            </div>
          </div>
          <div style={{backgroundColor:'#1e2128', borderRadius:5, marginTop:5, marginBottom:5,
                      padding:'5px 10px', width:'100%', display:'flex', flexDirection:'row', alignItems:'center', fontSize:12}}>
            <div style={{display:'flex', flexDirection:'column', width:'17%'}}>
              <span style={{color:'white'}}>Footlocker CA</span>
              <span>Restock Mode</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'20%'}}>
              <span style={{color:'white'}}>Air Jordan 1 University</span>
              <span>Size 9.5</span>
            </div>
            <div style={{ width:'12%'}}>
              <span style={{color:'white'}}>ibra</span>
            </div>
            <div style={{width:'15%'}}>
              <span style={{color:'white'}}>proxies</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'25%'}}>
              <span style={{color:'#6ed19e'}}>Successful Checkout</span>
            </div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', width:'11%', fontSize:16}}>
              <i className="ion-play mr-3" style={{color:'#6ed19e'}} />
              <i className="fa fa-pencil mr-3" style={{color:'#61646b'}} />
              <i className="fa fa-trash mr-3" style={{color:'#ddd'}} />
            </div>
          </div>
          <div style={{backgroundColor:'#1e2128', borderRadius:5, marginTop:5, marginBottom:5,
                      padding:'5px 10px', width:'100%', display:'flex', flexDirection:'row', alignItems:'center', fontSize:12}}>
            <div style={{display:'flex', flexDirection:'column', width:'17%'}}>
              <span style={{color:'white'}}>Footlocker CA</span>
              <span>Restock Mode</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'20%'}}>
              <span style={{color:'white'}}>Air Jordan 1 University</span>
              <span>Size 9.5</span>
            </div>
            <div style={{ width:'12%'}}>
              <span style={{color:'white'}}>ibra</span>
            </div>
            <div style={{width:'15%'}}>
              <span style={{color:'white'}}>proxies</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'25%'}}>
              <span style={{color:'#6ed19e'}}>Successful Checkout</span>
            </div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', width:'11%', fontSize:16}}>
              <i className="ion-play mr-3" style={{color:'#6ed19e'}} />
              <i className="fa fa-pencil mr-3" style={{color:'#61646b'}} />
              <i className="fa fa-trash mr-3" style={{color:'#ddd'}} />
            </div>
          </div>
          <div style={{backgroundColor:'#1e2128', borderRadius:5, marginTop:5, marginBottom:5,
                      padding:'5px 10px', width:'100%', display:'flex', flexDirection:'row', alignItems:'center', fontSize:12}}>
            <div style={{display:'flex', flexDirection:'column', width:'17%'}}>
              <span style={{color:'white'}}>Footlocker CA</span>
              <span>Restock Mode</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'20%'}}>
              <span style={{color:'white'}}>Air Jordan 1 University</span>
              <span>Size 9.5</span>
            </div>
            <div style={{ width:'12%'}}>
              <span style={{color:'white'}}>ibra</span>
            </div>
            <div style={{width:'15%'}}>
              <span style={{color:'white'}}>proxies</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'25%'}}>
              <span style={{color:'#b59172'}}>Solving Akamai...</span>
            </div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', width:'11%', fontSize:16}}>
              <i className="ion-pause mr-3" style={{color:'#b59172'}} />
              <i className="fa fa-pencil mr-3" style={{color:'#61646b'}} />
              <i className="fa fa-trash mr-3" style={{color:'#ddd'}} />
            </div>
          </div>
          <div style={{backgroundColor:'#1e2128', borderRadius:5, marginTop:5, marginBottom:5,
                      padding:'5px 10px', width:'100%', display:'flex', flexDirection:'row', alignItems:'center', fontSize:12}}>
            <div style={{display:'flex', flexDirection:'column', width:'17%'}}>
              <span style={{color:'white'}}>Footlocker CA</span>
              <span>Restock Mode</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'20%'}}>
              <span style={{color:'white'}}>Air Jordan 1 University</span>
              <span>Size 9.5</span>
            </div>
            <div style={{ width:'12%'}}>
              <span style={{color:'white'}}>ibra</span>
            </div>
            <div style={{width:'15%'}}>
              <span style={{color:'white'}}>proxies</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'25%'}}>
              <span style={{color:'#6ed19e'}}>Successful Checkout</span>
            </div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', width:'11%', fontSize:16}}>
              <i className="ion-play mr-3" style={{color:'#6ed19e'}} />
              <i className="fa fa-pencil mr-3" style={{color:'#61646b'}} />
              <i className="fa fa-trash mr-3" style={{color:'#ddd'}} />
            </div>
          </div>
          <div style={{backgroundColor:'#1e2128', borderRadius:5, marginTop:5, marginBottom:5,
                      padding:'5px 10px', width:'100%', display:'flex', flexDirection:'row', alignItems:'center', fontSize:12}}>
            <div style={{display:'flex', flexDirection:'column', width:'17%'}}>
              <span style={{color:'white'}}>Footlocker CA</span>
              <span>Restock Mode</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'20%'}}>
              <span style={{color:'white'}}>Air Jordan 1 University</span>
              <span>Size 9.5</span>
            </div>
            <div style={{ width:'12%'}}>
              <span style={{color:'white'}}>ibra</span>
            </div>
            <div style={{width:'15%'}}>
              <span style={{color:'white'}}>proxies</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'25%'}}>
              <span style={{color:'#6ed19e'}}>Successful Checkout</span>
            </div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', width:'11%', fontSize:16}}>
              <i className="ion-play mr-3" style={{color:'#6ed19e'}} />
              <i className="fa fa-pencil mr-3" style={{color:'#61646b'}} />
              <i className="fa fa-trash mr-3" style={{color:'#ddd'}} />
            </div>
          </div>
          <div style={{backgroundColor:'#1e2128', borderRadius:5, marginTop:5, marginBottom:5,
                      padding:'5px 10px', width:'100%', display:'flex', flexDirection:'row', alignItems:'center', fontSize:12}}>
            <div style={{display:'flex', flexDirection:'column', width:'17%'}}>
              <span style={{color:'white'}}>Footlocker CA</span>
              <span>Restock Mode</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'20%'}}>
              <span style={{color:'white'}}>Air Jordan 1 University</span>
              <span>Size 9.5</span>
            </div>
            <div style={{ width:'12%'}}>
              <span style={{color:'white'}}>ibra</span>
            </div>
            <div style={{width:'15%'}}>
              <span style={{color:'white'}}>proxies</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'25%'}}>
              <span style={{color:'#b59172'}}>Solving Akamai...</span>
            </div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', width:'11%', fontSize:16}}>
              <i className="ion-pause mr-3" style={{color:'#b59172'}} />
              <i className="fa fa-pencil mr-3" style={{color:'#61646b'}} />
              <i className="fa fa-trash mr-3" style={{color:'#ddd'}} />
            </div>
          </div>
          <div style={{backgroundColor:'#1e2128', borderRadius:5, marginTop:5, marginBottom:5,
                      padding:'5px 10px', width:'100%', display:'flex', flexDirection:'row', alignItems:'center', fontSize:12}}>
            <div style={{display:'flex', flexDirection:'column', width:'17%'}}>
              <span style={{color:'white'}}>Footlocker CA</span>
              <span>Restock Mode</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'20%'}}>
              <span style={{color:'white'}}>Air Jordan 1 University</span>
              <span>Size 9.5</span>
            </div>
            <div style={{ width:'12%'}}>
              <span style={{color:'white'}}>ibra</span>
            </div>
            <div style={{width:'15%'}}>
              <span style={{color:'white'}}>proxies</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'25%'}}>
              <span style={{color:'#6ed19e'}}>Successful Checkout</span>
            </div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', width:'11%', fontSize:16}}>
              <i className="ion-play mr-3" style={{color:'#6ed19e'}} />
              <i className="fa fa-pencil mr-3" style={{color:'#61646b'}} />
              <i className="fa fa-trash mr-3" style={{color:'#ddd'}} />
            </div>
          </div>
          <div style={{backgroundColor:'#1e2128', borderRadius:5, marginTop:5, marginBottom:5,
                      padding:'5px 10px', width:'100%', display:'flex', flexDirection:'row', alignItems:'center', fontSize:12}}>
            <div style={{display:'flex', flexDirection:'column', width:'17%'}}>
              <span style={{color:'white'}}>Footlocker CA</span>
              <span>Restock Mode</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'20%'}}>
              <span style={{color:'white'}}>Air Jordan 1 University</span>
              <span>Size 9.5</span>
            </div>
            <div style={{ width:'12%'}}>
              <span style={{color:'white'}}>ibra</span>
            </div>
            <div style={{width:'15%'}}>
              <span style={{color:'white'}}>proxies</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'25%'}}>
              <span style={{color:'#b59172'}}>Solving Akamai...</span>
            </div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', width:'11%', fontSize:16}}>
              <i className="ion-pause mr-3" style={{color:'#b59172'}} />
              <i className="fa fa-pencil mr-3" style={{color:'#61646b'}} />
              <i className="fa fa-trash mr-3" style={{color:'#ddd'}} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',
        position:'fixed', bottom:10, left:0, right:0, margin:'auto', zIndex:999, fontSize:20, color:'white',
        borderRadius:20,  width:300, backgroundColor:'#33394880', padding:'0px 20px'}}>
          <i className="ion-play"/>
          <i className="ion-pause"/>
          <i className="fa fa-pencil"/>
          <i className="fa fa-trash"/>
          <i className="fa fa-copy"/>
      </div>
    </>
  );
}
