import React from 'react';
import './Navbar.css'

import AngularLogo from '../../assets/images/angular-logo.png'

const Navbar = ({navigateTo, active}) => <nav>
    <div className="container">
       <div className="tabs-wrap">
           <h5 className="logo">
               <img src={AngularLogo} alt=""/>
               Creative GMP</h5>
           <hr/>
           <div className="tabs">
               <ul>
                   <li
                       className={active === 'home' ? `active`: ``}
                       onClick={() => navigateTo('home')}
                   >Oraganisation Profile</li>
                   <li
                       className={active === 'analytics' ? `active`: ``}
                       onClick={() => navigateTo('analytics')}
                   >Analytics</li>
               </ul>
           </div>
       </div>
    </div>
</nav>;


export default Navbar;
