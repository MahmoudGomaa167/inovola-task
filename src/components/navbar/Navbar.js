import React from 'react'
import zidLogo from '../../images/zid-logo 1.svg'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className='nav-logo'>
                <img src={zidLogo} alt='Zid' />
            </div>
            <div className='nav-list'>
                <ul>
                    <li>
                        <a>الرئيسية</a>
                    </li>
                    <li>
                        <a>التصنيفات</a>
                    </li>
                    <li>
                        <a>التطبيقات</a>
                    </li>
                    <li>
                        <a>طور التطبيق</a>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar