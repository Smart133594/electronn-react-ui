import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Box, Slider, TextField } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import routes from '../constants/routes.json';
import { push } from 'connected-react-router';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import jQuery from "jquery";
import { Card, CardBody, CardHeader, Label, Col, Row, FormGroup, Button, Input, ModalHeader, Modal, ModalBody, ModalFooter } from "reactstrap";
import { Image } from 'react-bootstrap';
import { Avartar } from '../components';
import ApexCharts from 'apexcharts'
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { Prev } from 'react-bootstrap/esm/PageItem';


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

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    store_name: '',
    store_meta: '',
    product_name: '',
    product_meta: '',
    profile: '',
    proxies: '',
    state: 'Successful Checkout'
  });
  const [showModal, setShowModal] = useState(false);

  const addTask = () => {
    setTasks(prev => [...prev, newTask]);
    setShowModal(false);
  }

  const removeTask = (index) => {
    var temp = tasks
    temp.splice(index, 1);
    setTasks(prev => [...temp]);
  }

  const renderTasks = () => {
    var render = tasks.map((item, index) => {
      return (<div key={index + "index"} style={{
        backgroundColor: '#1e2128', borderRadius: 5, marginTop: 5, marginBottom: 5,
        padding: '5px 10px', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: 12
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '17%' }}>
          <span style={{ color: 'white' }}>{item.store_name}</span>
          <span>{item.store_meta}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '20%' }}>
          <span style={{ color: 'white' }}>{item.product_name}</span>
          <span>{item.product_meta}</span>
        </div>
        <div style={{ width: '12%' }}>
          <span style={{ color: 'white' }}>{item.profile}</span>
        </div>
        <div style={{ width: '15%' }}>
          <span style={{ color: 'white' }}>{item.proxies}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
          <span style={{ color: '#6ed19e' }}>{item.state}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '11%', fontSize: 16 }}>
          <i className="ion-play mr-3" style={{ color: '#6ed19e' }} />
          <i className="fa fa-pencil mr-3" style={{ color: '#61646b' }} />
          <i className="fa fa-trash mr-3" style={{ color: '#ddd' }} onClick={() => removeTask(index)} />
        </div>
      </div>)
    })

    return render;
  }

  const isToggle = () => {
    var task = {
      store_name: '',
      store_meta: '',
      product_name: '',
      product_meta: '',
      profile: '',
      proxies: '',
      state: 'Successful Checkout',
    }
    setNewTask(task);
    setShowModal(!showModal);
  }

  const setValue = (key, event) => {
    var temp = newTask;
    temp[key] =  event.target.value;
    setNewTask({...newTask, temp});
  }

  const getValue = (key) => {
    if(newTask[key] == 'undefined' || newTask[key] == undefined){
      return "";
    }
    return newTask[key];
  }

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
                  aria-describedby="emailHelp" placeholder="Search" style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid #777D74', width: 200 }} />
                <a className="search-link" style={{ color: '#777D74' }}>
                  <i className="ri-search-line" />
                </a>
              </div>
            </form>
          </div>
          <Button style={{ backgroundColor: '#375dad', border: 'none', height: 40 }} size="lg" block className={"font-size-16"}
            onClick={isToggle}>
            <i className={"fa fa-plus mr-2"} />
            New Tasks
          </Button>

          <Modal isOpen={showModal} className="modal-dialog-centered">
            <ModalHeader >New Task</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label>Store</Label>
                <Input className={"form-control"} value={getValue('store_name')} onChange={(event) => setValue("store_name", event)} />
              </FormGroup>
              <FormGroup>
                <Label>Store Meta</Label>
                <Input className={"form-control"} value={getValue('store_meta')} onChange={(event) => setValue("store_meta", event)} />
              </FormGroup>
              <FormGroup>
                <Label>Product</Label>
                <Input className={"form-control"} value={getValue('product_name')} onChange={(event) => setValue("product_name", event)} />
              </FormGroup>
              <FormGroup>
                <Label>Product Meta</Label>
                <Input className={"form-control"} value={getValue('product_meta')} onChange={(event) => setValue("product_meta", event)} />
              </FormGroup>
              <FormGroup>
                <Label>Profile</Label>
                <Input className={"form-control"} value={getValue('profile')} onChange={(event) => setValue("profile", event)} />
              </FormGroup>
              <FormGroup>
                <Label>Proxies</Label>
                <Input className={"form-control"} value={getValue('proxies')} onChange={(event) => setValue("proxies", event)} />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={addTask}>Save</Button>{' '}
              <Button color="secondary" onClick={isToggle}>Cancel</Button>
            </ModalFooter>
          </Modal>

        </div>
      </div>
      <div style={{ padding: 10, paddingBottom: 0 }} >
        <div style={{
          backgroundColor: '#1e1f24', borderRadius: 5, marginTop: 5, marginBottom: 20,
          padding: '10px 10px', width: '100%', color: 'white', display: 'flex', flexDirection: 'row'
        }}>
          <span style={{ width: '17%' }}>Store</span>
          <span style={{ width: '20%' }}>Product</span>
          <span style={{ width: '12%' }}>Profile</span>
          <span style={{ width: '15%' }}>Proxies</span>
          <span style={{ width: '25%' }}>Status</span>
          <span style={{ width: '11%' }}>Action</span>
        </div>
        <div style={{ overflow: 'auto', maxHeight: 'calc(100vh - 255px)' }}>
          {renderTasks()}
        </div>
      </div>
      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        position: 'fixed', bottom: 10, left: 0, right: 0, margin: 'auto', zIndex: 999, fontSize: 20, color: 'white',
        borderRadius: 20, width: 300, backgroundColor: '#33394880', padding: '0px 20px'
      }}>
        <i className="ion-play" />
        <i className="ion-pause" />
        <i className="fa fa-pencil" />
        <i className="fa fa-trash" />
        <i className="fa fa-copy" />
      </div>
    </>
  );
}
