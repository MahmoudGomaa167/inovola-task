import React from 'react'
import starIcon from '../../../images/star icon.svg'
import cardImage from '../../../images/card image.svg'
import './Card.css'

const Card = () => {
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={cardImage} alt='card image' />
            </div>
            <div className='card-info'>
                <div className='card-title'>
                    <span>قمرة</span>
                    <span>
                        <img src={starIcon} alt='star' />
                        <span>5</span>
                    </span>
                </div>
                <h5>تطوير: <span>عمر برهوم</span></h5>
                <p>نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك</p>
                <p>نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك</p>
            </div>
        </div>
    )
}

export default Card