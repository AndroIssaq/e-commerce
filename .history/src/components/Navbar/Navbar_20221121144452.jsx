import React from 'react'
import logo from '../../assets/logo.svg'
import { BsCart} from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';
import { Link , useLocation} from "react-router-dom";
const Navbar = ({cartItemNumper}) => {
    const location=useLocation()
    console.log(cartItemNumper);
    return (
        <nav className='w-full px-[40px] flex items-center justify-between shadow-md mb-[100px] p-[20px]'>
            <Link to='/'> <img src={logo} alt="" className=' w-[200px] ' /></Link>
            {location.pathname='/' ?  }
          
        </nav>
    )
}

export default Navbar