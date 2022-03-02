import React from 'react'
import arrow from '../../images/DownArrow 3.svg'
import dotPattern from '../../images/Dot Pattern 2.svg'
import circle from '../../images/Ellipse 250.svg'
import app from '../../images/zidapp_1-min 1.svg'
import moneySvg from '../../images/money-svgrepo-com 1.svg'
import cmsSvg from '../../images/Group 8435.svg'
import supportSvg from '../../images/Vector.svg'
import './About.css'
const About = () => {
    return (
        <section className='about-section'>
            <div className='about-info'>
                <h2>كل ماتحتاجه لنمو متجرك في مكان واحد</h2>
                <p>مميزات سوق تطبيقات زد تساعدك في سهولة وسرعة الاستفادة من خدمات وحلول سوق التطبيقات لنمو متجرك ومضاعفة أرباحك</p>
                <ul className='info-list'>
                    <li>
                        <span className='image'>
                            <img src={cmsSvg} alt='Managing the system' />
                        </span>
                        <span>سهولة ادارة وتفعيل تطبيقاتك من نفس لوحة تحكم متجرك</span>
                    </li>
                    <li>
                        <span className='image'>
                            <img src={supportSvg} alt="Support" />
                        </span>
                        <span>دعم فني وتقني متكامل متوفر على مدار الساعة</span>
                    </li>
                    <li>
                        <span className='image'>
                            <img src={moneySvg} alt="money" />
                        </span>
                        <span>أسعار تنافسية مع تجربة مجانية وباقات اشتراك متنوعة</span>
                    </li>
                </ul>
                <button>
                    <span>تصفح التطبيقات</span>
                    <span>
                        <img src={arrow} alt='arrow' />
                    </span>
                </button>
            </div>

            <div className='about-image'>
                <img className='dotPattern' src={dotPattern} alt='Dot Pattern' />
                <img className='circle' src={circle} alt="Circle" />
                <img className='application' src={app} alt="Application" />
            </div>
        </section>
    )
}

export default About