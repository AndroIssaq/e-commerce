import React from 'react'
import logo from '../../assets/logo.svg'
import { BsCart} from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';
import { Link } from "react-router-dom";
const Navbar = ({cartItemNumper}) => {
    console.log(cartItemNumper);
    return (
        <nav className='w-full px-[40px] flex items-center justify-between shadow-md mb-[100px] p-[20px]'>
            <Link <img src={logo} alt="" className=' w-[200px] ' />
            <Link to='/Cart'>
            <button className='flex flex-col-reverse items-center'> <BsCart /> <span className='w-[20px] h-[20px] rounded-full bg-red-500 flex items-center justify-center text-slate-100 text-[13px]'><Badge>{cartItemNumper}</Badge></span></button>
            </Link>
        </nav>
    )
}

export default Navbar