import React from 'react'
import Card from './card/Card'
import arrow from '../../images/DownArrow 3.svg'
import './Apps.css'

const Apps = () => {
    return (
        <section className='apps-section'>
            <h2>التطبيقات المميزة</h2>
            <p>تطبيقات تقدم حلول وخدمات مميزة نوصي بتجربتها</p>
            <div className='apps-testimonials'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <button>
                <span>جميع التطبيقات</span>
                <img src={arrow} alt='Arrow' />
            </button>
        </section>
    )
}

export default Apps