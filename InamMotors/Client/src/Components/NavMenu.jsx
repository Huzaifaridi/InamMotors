import React, { useContext } from 'react';
import { Link } from '@reach/router';
import { Context } from '../Context/MenuContext';
  
  const NavMenu = () => {
    // Get selectedMenu data from Menu Context
  const [isAdminLogin] = useContext(Context);
    return (
      <>
        <nav className="main-navigation">
          <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
          <ul className="menu">
              <li className="menu-item"><Link to="/login" >Login</Link></li>
              <li className="menu-item current-menu-item"><Link to="/" >Home</Link></li>
			  <li className="menu-item"><Link to="/aboutus">About Us </Link></li>
			  <li className="menu-item"><Link to="/services" >Services </Link></li>
        <li className={`menu-item dropdown ${ isAdminLogin ? '' : 'display-none'}`}>
          <div className="dropdown">Invoice</div>
            <div className="dropdown-content">
            <Link to="/generatebill">Generate Bill</Link>
            <Link to="/addparties">Add Party</Link>
            <Link to="/showreports">Show Report</Link>
          </div>
        </li>
        <li className={`menu-item dropdown ${ isAdminLogin ? '' : 'display-none'}`}>
            <div className="dropdown">Admin</div>
              <div className="dropdown-content">
              <Link to="/adduser">Add User</Link>
            </div>
         </li>
		   </ul>
        </nav>
      </>
    );
  };
  
  export default NavMenu;
  