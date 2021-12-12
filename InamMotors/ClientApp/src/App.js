import React, { useEffect } from 'react';
import { Router } from '@reach/router';
// import { useParams } from "react-router-dom";
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Services from './Components/Services'
import GenerateBill from './Components/GenerateBill'
import Login from './Components/Login'
import AddUser from './Components/AddUser'
import { MenuContext } from './Context/MenuContext';
import { InvoiceContext } from './Context/InvoiceContext';

const App = () => {

  useEffect(() => {
  }, []);
  return (
    <>
    <MenuContext>
      <InvoiceContext>
        <div className=''>
          <div className='site-content'>
            <Header />
            <div className='main-content'>
              <Router>
                <Home path="/" />
                <Login path="login" />
                <AboutUs path="aboutus" />
                <Services path="services" />
                <GenerateBill path="generatebill" />
                <AddUser path="adduser" />
              </Router>
            </div>
            <Footer />
          </div>
        </div>
        </InvoiceContext>  
      </MenuContext>
    </>
  );
};
export default App;
