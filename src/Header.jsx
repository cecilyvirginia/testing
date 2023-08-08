import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import "./App.css"
import { BsFillCartCheckFill } from 'react-icons/bs';

export const Header = ({cart}) => {
  return (
    <div className='mainheader'>
        <h2 className='optical'>Optical Eyewear</h2>
<Link to="/" className='home'>Home</Link>
<Link to="/product" className='product'>Product</Link>
<Link to="/cart" className='cart'><BsFillCartCheckFill/><span className='zero'>{cart.length}</span></Link>
<Outlet/>

    </div>
  )
}
