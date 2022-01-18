import React from 'react';
import './Header.css';
import brand from '../assets/logo.png';
import {IoIosSearch} from 'react-icons/io'


const Header = () => {
    return (
        <div className='header'>
            <img className="fit-picture"
     src={brand}
     alt="website logo" width="150px"></img>
     <div className='header_center'>
         <input type="texte"></input>
         <IoIosSearch></IoIosSearch>
    
     </div>

     <div className='header_right'>
         <p>Trouver votre hôtel</p>

     </div>
        </div>
    )
}

export default Header
