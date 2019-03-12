import React from 'react';
import {Link,withRouter} from 'react-router-dom';

const Navbar = (props) => {
//    console.log(props);
//    setTimeout(()=>{
//                props.history.push('/About');
//                },2000)
    return(
        <nav className='nav-wrapper grey darken-9'>
            <Link to='/' className='brand-logo left'>Person Information</Link>
            <ul className='right'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Person'>Person Info</Link></li>
            </ul>
        </nav>
    )
}
export default withRouter (Navbar);
