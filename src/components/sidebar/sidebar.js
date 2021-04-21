import React from 'react'
import * as FaIcons from 'react-icons/fa' 
import * as GiIcons from 'react-icons/gi' 
import * as AiIcons from 'react-icons/ai' 
import './sidebar.css'
import  '../navbar/navbar.css'
import {Link} from 'react-router-dom';

export const SidebarData = [
    {
        title:'Приборная панель',
        path:'/dashboard',
        icon: <GiIcons.GiSailboat />,
        cName: 'nav-text'
    },
    {
        title:'Пользователи',
        path:'/users',
        icon: <FaIcons.FaUserAlt />,
        cName: 'nav-text'
    },
    {
        title:'Pегионы',
        path:'/viloyat',
        icon: <AiIcons.AiFillBuild
         />,
        cName: 'nav-text'
    },
]

export default function SideBar (){

     return (
     <div className= "bodyy">
{/* <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}> */}
          <nav className =  'nav-menu'>
{/* <ul className = 'nav-menu-items'  onClick = {showSideBar}>  */}
               <ul className = 'nav-menu-items'>
                   <li className = 'navbar-brand'>
                        <Link to = "#" className ='logo'>
                        <span>Logo</span>
                        </Link>
                   </li>
                   <li className="nav-avatar">
                <div className=  "cover-avatar d-flex justify-content-space-around">
                   <a>
                        <i className= "fas fa-user"></i>
                   </a>
                <div className= "d-block ml">
                    <h6 className = "name"> Alexander</h6>
                    <p><i class="fas fa-circle blink"></i> В сети </p>
                </div>
                </div>
                   </li>
                <li className="main-nav">
                <strong>Главная навигация</strong>
                </li>
                {SidebarData.map((item , index) => {
                    return(
                        <li key= {index} className={item.cName}> 
                            <Link to={item.path}>
                                     {item.icon}                               
                                <span>{item.title}</span>
                            </Link>
                </li>
               )
          })} 
    </ul>
</nav>
</div>

     )
}

