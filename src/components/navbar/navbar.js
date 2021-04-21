import React , {useContext} from 'react'
import {Link , Redirect } from 'react-router-dom';
import { SidebarData} from '../sidebar/sidebar';
import RoleContext from '../context/user.context';
import  "./navbar.css"
import {IconContext} from 'react-icons';

function Navbar() {
 
    // const [role, setRole] = useContext(RoleContext)
    // function logOut(){
    //     localStorage.clear();
    //     setRole(null);
    //     <Redirect to="/login"/>
    // }

    
    return (
        <>
        <IconContext.Provider value = {{color: '#fff'}}>     
        <div className = 'navbar  d-flex justify-content-end'>
        {/* <div className={`${sidebar ? 'navbar active' : 'navbar'}  d-flex justify-content-between`} > */}
        {/* <Link to = "#" className= "menu-bars" onClick = {showSideBar}>
             <div className= "bar" type= "button" ></div>
        </Link> */}
        <div className='d-flex align-items-center'>
                     <ul className="list-unstyled m-0 d-flex">                    
                         <li className="d-inline p-2 ml-5">
                             <a id="navbarDropdown" className="nav-icon" role="button" data-bs-toggle="dropdown" >
                                 <i class="fas fa-ellipsis-v"></i>
                             </a>
                             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                 <li className = "d-flex justify-content-space-around"> 
                                 <Link to= "/dashboard">
                                       <i class="fas fa-umbrella"></i>
                                       Настройки
                                 </Link>
                                 </li>
                                 <li className = "d-flex justify-content-space-around"> 
                                 <Link to= "/products">
                                 <i className="fas fa-cogs"></i>
                                 Профиль
                                 </Link>
                                </li>
                                 <li className = "d-flex justify-content-space-around"> 
                                 <Link to= "/same">
                                 <i class="fas fa-lock"></i>
                                 Измени пароль
                                 </Link>
                                </li>
                                {/* <li><Link onClick={logOut} to='/login' className="dropdown-item">LogOut</Link></li> */}
                             </ul>
                         </li>
                     </ul>
                 </div>
                       
        </div>
      
        </IconContext.Provider>
        </>
    )
}

export default Navbar
