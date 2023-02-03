import React, { useState } from 'react'
// import {AiOutlinemnMenu, AiOutlineClose} from "react-icons/ai"
// import "../App.css";
import {AiOutlineBars, AiOutlineClose} from "react-icons/ai"
const Header = () => {

const [toggle, setToggle] = useState(false);

const handelToggle = () => setToggle(!toggle)

  return (
    // <header className='flex justify-between px-50 bg-fuchsia-400'>
    <header className='head_main'>
        <a href='/' className='logo'>
        Parul Verma
        </a>
        <nav   className={!toggle ? "mainnav_before" : "main_after" }>
        {/* <nav> */}
<ul className='head_ul'>

    <li className='head_li'><a href='/#about'> About </a> </li>
    <li className='head_li'><a href='/#project'>Project </a> </li>
    <li className='head_li'><a href='/#blog'> Blog </a> </li>
    <li className='head_li'><a href='/#contact'>Contact </a> </li>
    <li className='head_li'><a href='/#resume'>Resume </a> </li>
</ul>
</nav>
        
        {/* // toggle button */}
    <button onClick={handelToggle}  className="tog">

      {!toggle ? <AiOutlineBars size={30}/> : <AiOutlineClose size={30} />}
    </button>

    </header>


  )
}

export default Header