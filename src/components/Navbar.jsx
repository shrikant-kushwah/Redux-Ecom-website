import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../images/logo3.png';

const Navbar = () => {

  const cart = useSelector(state => state.cart)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-2 fixed-top">
      <div className="container">
        <Link className="navbar-brand " to="/">
        <img className='w-50' src={Logo} alt="logo" />
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Contact</a>
            </li>
          </ul>
          <div className="buttons">
            <Link to="/cart" className="btn btn-dark">Cart ({cart.length})</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
