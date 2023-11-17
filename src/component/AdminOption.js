import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Customer from './Customer';
import Products from './Products';
import Service from './Service';
import Support from './Support';
import AddCompPro from './crud/AddCompPro';
import EditCompPro from './crud/EditCompPro';
import AddCompCus from './crud/AddCompCus';
import EditCompCus from './crud/EditCompCus';
import Dashboard from './DashBoard';

export class AdminOption extends Component {
  render() {
    const cardStyle = {
      background: '#ffeec8',
      color: 'green',
    };

    const headerStyle = {
      background: '#ffeec8',
      color: 'green',
      
    };

    const bodyStyle = {
      background: '#ffeec8',
      color: 'green',
      
    };

    const footerStyle = {
      background: '#ffeec8',
      color: 'green',
     
    };

    return (
      <div style={{color: 'green',backgroundColor:'#ffeec8'}}>
        <div style={cardStyle}>
        <h1 style={headerStyle}>welcome to green cart</h1>
        <div className='App'>
          <div className='container'>
            <div className='card' style={{border:'none'}}>
              <div style={headerStyle}>{<Nav />}</div>
              <div style={bodyStyle}>
                <Routes>
                <Route path='dash' element={<Dashboard />} />
                  <Route path='pro' element={<Products />} />
                  <Route path='addpro' element={<AddCompPro />} />
                  <Route path='ser' element={<Service />} />
                  <Route path='sup' element={<Support />} />
                  <Route path='editpro/:id' element={<EditCompPro />} />
                  <Route path='addcus' element={<AddCompCus />} />
                  <Route path='cus' element={<Customer />} />
                  <Route path='editcus/:id' element={<EditCompCus />} />
                </Routes>
              </div>
              <div style={footerStyle}>whrfgthwrt</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default AdminOption;
