import React from 'react'
import {navbarData} from '../data/navbarData'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="nav_container container">
            <ul>
                {navbarData.map((item,index) => (
                    <li key={index}>
                        <Link href={item.url}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
