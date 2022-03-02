import React from 'react'
import arrow from '../../images/DownArrow 3.svg'
import dotPattern from '../../images/Dot Pattern 2.svg'
import circle from '../../images/Ellipse 250.svg'
import product from '../../images/product03 1.svg'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className='header-intro'>
                <h1>طور متجرك ووسع آفاق تجارتك مع سوق تطبيقات زد</h1>
                <p>طور تجارتك من خلال تطبيقات وحلول سوق تطبيقات زد التي تساعدك في نمو أرباحك عبر إدارة عمليات متجرك بشكل فعال واحترافي</p>
                <div className='header-btn'>
                    <button>
                        <span>تصفح التطبيقات</span>
                        <span>
                            <img src={arrow} alt='arrow' />
                        </span>
                    </button>
                </div>
            </div >

            <div className='header-image'>
                <img className='dotPattern' src={dotPattern} alt='Dot Pattern' />
                <img className='circle' src={circle} alt="Circle" />
                <img className='product' src={product} alt="Product" />
            </div>
        </header>
    )
}

export default Header