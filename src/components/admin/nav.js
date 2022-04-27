import {NavLink} from "react-router-dom"
import logo1 from "../../img/logo122.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faMessage,faUser,faRetweet ,faRepeat,faServer} from '@fortawesome/free-solid-svg-icons'

function Nav() {
  return (
    <div className="yoyoy">
         <div className="navigation">
               <a className="logo">
                 <img src={logo1} className="logo-img"></img>
               </a>
               <ul className="nav-limks">
                 <li><NavLink to="/admin"><FontAwesomeIcon icon={faHome} className="Awesome"/><p>Dashboard</p></NavLink></li>
                 <li><NavLink to="/admin/product"><FontAwesomeIcon icon={faMessage} className="Awesome" /><p>Product</p></NavLink></li>
                 <li><NavLink to="/signin"><FontAwesomeIcon icon={faUser} className="Awesome" /><p>Users</p></NavLink></li>
                 <li><a><FontAwesomeIcon icon={faRetweet} className="Awesome" /><p>Rewards</p></a></li>
                 <li><a><FontAwesomeIcon icon={faRepeat} className="Awesome" /><p>Reports</p></a></li>
                 <li><a><FontAwesomeIcon icon={faServer} className="Awesome" /><p>Settings</p></a></li>
                 <div className="tikituu"></div>
               </ul>
         </div>
    </div>
  );
}

export default Nav;
