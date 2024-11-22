import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.svg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <img src="" alt="" />
        <div className="sidebar-item">

        </div>
        </Link>
    </div>
  )
}

export default Sidebar
