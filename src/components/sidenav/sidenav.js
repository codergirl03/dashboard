import React, {useState} from 'react'
import Navbar from '../navbar/navbar'
import SideBar from '../sidebar/sidebar'
import st from './sidenav.module.scss'
export default function SideNav() {
    return (
        <div className={st.body}>
            <SideBar />
            <Navbar />
        </div>
    )
}
