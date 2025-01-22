import React from 'react'
import Link from 'next/link'
import style from "./header.module.css"


const Header = () => {
  return (
    
    <div className={style.header} >
    
      <h1 className={style.h1}> Here, There are three pages About Project and Contact you can click on theme to visit further..Thank you </h1>
      
      <ul>
        <li>
          <Link href={"About"}> About</Link>
        </li>
        <li>
          <Link href={"Service/projects"}>Projects</Link>
        </li>
        <li>
          <Link href={"Contact/my-contact "}> Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
